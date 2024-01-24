---
sidebar_label: Working with server
title: Working with server
description: You can learn about working with server in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---
# Working with server

DHTMLX To Do List allows working both with the client and server data. The widget doesn't have any special requirements for the backend. It can be easily connected with any backend platform which supports the REST API (RESTful API).

:::info
By default, the widget comes with the built-in [**Go**](https://github.com/web-widgets/todo-go) and [**Node**](https://github.com/web-widgets/todo-node) backend. But you can use your custom server scripts as well.
:::
## RestDataProvider

The To Do List has the **RestDataProvider** service that completely supports REST API for dealing with the backend. It allows interacting with the server and perform the following data operations:

- **"add-task"**
- **"update-task"**
- **"delete-task"**
- **"add-project"**
- **"update-project"**
- **"delete-project"**
- **"set-project"**
- **"move-task"**
- **"clone-task"**
## REST methods

The **RestDataProvider** service includes the special REST methods for dynamic data loading:

- [`getProjects()`](api/rest_api/methods/getprojects_method.md) - gets a promise with the **projects data**
- [`getProjectTasks()`](api/rest_api/methods/getprojecttasks_method.md) - gets a promise with the **tasks data** of the specified **project**
- [`getTags()`](api/rest_api/methods/gettags_method.md) - gets a promise with a list of **default tags**
- [`getTasks()`](api/rest_api/methods/gettasks_method.md) - gets a promise with the **tasks data**
- [`getUsers()`](api/rest_api/methods/getusers_method.md) - gets a promise with the **users data**
- [`setAPI()`](api/rest_api/methods/setapi_method.md) - sets API of the To Do List component into RestDataProvider
- [`send()`](api/rest_api/methods/send_method.md) - sends a necessary request to the server and gets a promise with or without data depending on the request

## Interacting with backend

To interact with the server, you need to connect **RestDataProvider** to the corresponding server scripts. If you want to use the built-in backend, you can find the needed scripts in the following repositories:

- [**Go**](https://github.com/web-widgets/todo-go) backend
- [**Node**](https://github.com/web-widgets/todo-node) backend

or you can create a custom one.

:::tip
If you use custom backend, refer to the [**REST API routes**](../../api/rest_api/routes/rest_routes_overview/) topic for more information!
:::

To connect **RestDataProvider** to the backend, you need to call the **new RestDataProvider()** constructor by passing the corresponding **URL** as a parameter.

~~~js {4-5,23-24}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "https://some_backend_url";
const restProvider = new RestDataProvider(url);
Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, users, projects, tags]) => {
    const list = new ToDo("#root", {
        tasks,
        users,
        projects,
        tags,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});
~~~

:::info
You need to include **RestDataProvider** into the **Event Bus** order via the [`api.setNext()`](api/internal/setnext_method.md) method to perform operations with data (*adding, deleting,* etc) and send the corresponding requests to the server
:::

### Example

The snippet below shows you how to connect **RestDataProvider** to the backend and load server data dynamically:

<iframe src="https://snippet.dhtmlx.com/hnk06gm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Multiuser backend

Task management tools, such as our To Do List, are highly sought after by businesses of all sizes. Considering this, it is crucial to provide a seamless user experience for all users, regardless of the number. Our new feature allows multiple users to efficiently manage the same tasks on the list in real-time, without the need for page reloads. As a result, users can collaborate and stay up-to-date with one another's actions, enhancing productivity and overall user satisfaction.

To implement a multiuser backend, you need to get authorization on the server before the To Do List initialization. For this, you can create the `login()` function:

~~~js {}
const login = (url) => {
    const token = sessionStorage.getItem("login-token");
    if (token) {
        return Promise.resolve(token);
    }
    return fetch(url + "/login?id=1")
        .then(raw => raw.text())
        .then(token => {
            sessionStorage.setItem("login-token", token);
            return token;
        });
}
~~~

The `login()` function returns the server token that is crucial for all subsequent interactions with the server. The token is included in each request as the value of the **Remote-Token** header in the following way:

~~~js {}
login(url).then(token => {
    const restProvider = new todo.RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
~~~

After the initialization, you need to add WebSocket aimed to listen for events from the server. It can be done in the following way:

~~~js {14-16,18-24}
Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, users, projects, tags]) => {
    const list = new todo.ToDo("#root", {
        tasks, users, projects, tags, activeProject,
    });
    const toolbar = new todo.Toolbar("#toolbar", {
        api: list.api,
    });

    // save data from client to server
    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);

    // get updates from server to client
    const events = new todo.RemoteEvents(url + "/api/v1", token);
    const handlers = todo.todoUpdates(
        list.api,
        restProvider.getIDResolver()
    );
    events.on(handlers);
});
~~~

After integrating the multiuser backend into your app, you can simplify collaboration between users and enable them to keep track of any changes via the UI in a real time.

### Example

The snippet below shows how to configure the multiuser backend to track changes of other users in a real time:

<iframe src="https://snippet.dhtmlx.com/82ayq2lk?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Customization of server events

You can define your own logic for handling server events. For this purpose, you need to pass the **handlers** object to the `RemoteEvents.on(handlers)` method. The **handlers** object should have the following structure:

~~~js {}
{
    "tasks": tasksHandler: function(obj: any),
    "projects": projectsHandler: function(obj: any)
}
~~~

When any change occurs on the server, it returns the name of the modified element. These names can vary depending on the server logic.

The data updated on the client side will be placed in the **obj** argument of the `function(obj: any)` function. To specify an operation, there is a `type: string` field. It can take the following values:

- For **tasks**: `"add-task"`, `"update-task"`, `"delete-task"`, `"move-task"`, `"clone-task"`
- For **projects**: `"add-project"`, `"update-project"`, `"delete-project"`, `"move-project"`, `"clone-project"`

In the following code snippet you can see the implementation details:

~~~js {}
const todoInstance = new todo.ToDo("#root", config);
const restProvider = new todo.RestDataProvider(url);
const idResolver = restProvider.getIDResolver();
const TaskID = 1;
const ProjID = 2;

const resolveTask = (data: any) => {
    for (const key in obj) {
        if (typeof obj[key] == "object") {
            resolveTask(obj[key]);
            continue;
        }
        if (key == "id" || key == "targetId" || key == "parent") {
            obj[key] = idResolver(obj[key], TaskID) || null;
        }
        if (key == "project") {
            obj[key] = idResolver(obj[key], ProjID) || null;
        }
    }
    return obj;
};

const tasksHandler = (obj: any) => {
    resolveTask(obj); // synchronize client ids with the server ids
    switch (obj.type) {
        case "add-task":
            todoInstance.api.exec("add-task", {
                id: obj.data.id,
                project: obj.data.project,
                parent: obj.data.parent,
                targetId: obj.data.targetId,
                reverse: obj.data.reverse,
                task: { ...obj.data },
                skipProvider: true, // prevent the client from sending request to the server
            })
            break;
        // other operations
    }
};

const handlers = {
    tasks: tasksHandler,
};

const remoteEvents = new todo.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

The `RestDataProvider.getIDResolver()` method returns a function that is necessary to synchronize client IDs with server IDs. When a new object (*task/project*) is created on the client side, the received object will have a temporary ID and its corresponding server ID in `RestDataProvider`. The `idResolver()` function allows synchronizing the client ID with the server ID. This function has the following format: `idResolver(id: TID, type: number)`

The `type` argument is the type of model that takes the following values:

- `TaskID` - 1
- `ProjID` - 2

To prevent the request from being sent to the server, you need to use the `skipProvider: true` flag when calling the `todoInstance.api.exec()` method.
