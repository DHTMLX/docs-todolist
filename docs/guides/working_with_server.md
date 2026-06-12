---
sidebar_label: Working with server
title: Working with server
description: You can learn about working with server in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---
# Working with server

DHTMLX To Do List works with both client and server data. The widget has no special backend requirements and connects to any platform that supports a REST API.

:::info
The widget ships with the built-in [**Go**](https://github.com/web-widgets/todo-go) and [**Node**](https://github.com/web-widgets/todo-node) backend. You can also use custom server scripts.
:::

## RestDataProvider

The To Do List provides the `RestDataProvider` service that talks to a REST backend and handles the following data operations:

- `"add-task"` — add a task
- `"update-task"` — update a task
- `"delete-task"` — delete a task
- `"add-project"` — add a project
- `"update-project"` — update a project
- `"delete-project"` — delete a project
- `"set-project"` — set the active project
- `"move-task"` — move a task
- `"clone-task"` — clone a task

## REST methods

The `RestDataProvider` service includes the following REST methods for dynamic data loading:

- [`getProjects()`](api/rest_api/methods/getprojects_method.md) — get a promise with the **projects data**
- [`getProjectTasks()`](api/rest_api/methods/getprojecttasks_method.md) — get a promise with the **tasks data** of the specified `project`
- [`getTags()`](api/rest_api/methods/gettags_method.md) — get a promise with the list of **default tags**
- [`getTasks()`](api/rest_api/methods/gettasks_method.md) — get a promise with the **tasks data**
- [`getUsers()`](api/rest_api/methods/getusers_method.md) — get a promise with the **users data**
- [`setAPI()`](api/rest_api/methods/setapi_method.md) — set the API of the To Do List component into the RestDataProvider
- [`send()`](api/rest_api/methods/send_method.md) — send a request to the server and get a promise with or without data, depending on the request

## Interact with the backend

To interact with the server, connect `RestDataProvider` to the server scripts. The built-in backend is available in two repositories:

- [**Go**](https://github.com/web-widgets/todo-go) — Go backend
- [**Node**](https://github.com/web-widgets/todo-node) — Node.js backend

You can also create a custom backend.

:::tip
If you use a custom backend, refer to the [**REST API routes**](api/rest_api/routes/rest_routes_overview.md) topic for more information.
:::

To connect `RestDataProvider` to the backend, call the `new RestDataProvider()` constructor and pass the corresponding **URL** as a parameter. The example below initializes the To Do List with data loaded from the server:

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
Include `RestDataProvider` in the **Event Bus** order through the [`api.setNext()`](api/internal/setnext_method.md) method to perform data operations (adding, deleting, and other actions) and send the corresponding requests to the server.
:::

### Example

The snippet below connects `RestDataProvider` to the backend and loads server data dynamically:

<iframe src="https://snippet.dhtmlx.com/hnk06gm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Multiuser backend

The multiuser feature lets multiple users manage the same tasks in real time without page reloads. Users see each other's changes immediately.

Before initializing the To Do List, authorize on the server. The example below defines a `login()` function:

~~~js
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

The `login()` function returns the server token required for all subsequent interactions with the server. Include the token in each request as the value of the `Remote-Token` header. The snippet below sets the token header:

~~~js
login(url).then(token => {
    const restProvider = new todo.RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
~~~

After initialization, add a WebSocket to listen for events from the server. The example below sets up the WebSocket and handlers:

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

### Example

The snippet below configures the multiuser backend to track changes from other users in real time:

<iframe src="https://snippet.dhtmlx.com/82ayq2lk?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Customize server events

Define your own logic for handling server events. Pass the `handlers` object to the `RemoteEvents.on(handlers)` method. The `handlers` object has the following structure:

~~~js
{
    "tasks": tasksHandler: function(obj: any),
    "projects": projectsHandler: function(obj: any)
}
~~~

When a change occurs on the server, the server returns the name of the modified element. The names can vary depending on the server logic.

The updated data arrives in the handler's `obj` argument. Its `type` field specifies the operation:

- for `tasks`: `"add-task"`, `"update-task"`, `"delete-task"`, `"move-task"`, `"clone-task"`
- for `projects`: `"add-project"`, `"update-project"`, `"delete-project"`, `"set-sort"`

The following code snippet shows the implementation details:

~~~js
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
                task: { ...obj.data.task },
                skipProvider: true // prevent the client from sending the request to the server
            })
            break;
        // other operations
    }
};

const handlers = {
    tasks: tasksHandler
};

const remoteEvents = new todo.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

The `RestDataProvider.getIDResolver()` method returns a function that synchronizes client ids with server ids. When the client creates a new object (task or project), the received object has a temporary id and a corresponding server id in `RestDataProvider`. The `idResolver()` function synchronizes the client id with the server id. The function has the following format: `idResolver(id: TID, type: number)`.

The `type` argument is the type of model and takes the following values:

- `TaskID` — `1`
- `ProjID` — `2`

To prevent the request from being sent to the server, pass the `skipProvider: true` flag to the `todoInstance.api.exec()` method.
