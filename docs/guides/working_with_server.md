---
sidebar_label: Working with server
title: Working with server
description: You can learn about working with server in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---
# Working with server

To Do List works with both client-side and server-side data. The widget has no special backend requirements and connects to any platform that supports REST API.

:::info
By default, the widget includes a built-in [Go](https://github.com/web-widgets/todo-go) and [Node](https://github.com/web-widgets/todo-node) backend. You can also use custom server scripts.
:::

## RestDataProvider

To Do List includes the `RestDataProvider` service with full REST API support. The service handles the following data operations:

- `"add-task"`
- `"update-task"`
- `"delete-task"`
- `"add-project"`
- `"update-project"`
- `"delete-project"`
- `"set-project"`
- `"move-task"`
- `"clone-task"`

## REST methods

`RestDataProvider` provides the following methods for dynamic data loading:

- [`getProjects()`](api/rest_api/methods/getprojects_method.md) — returns a promise with projects data
- [`getProjectTasks()`](api/rest_api/methods/getprojecttasks_method.md) — returns a promise with task data for the specified project
- [`getTags()`](api/rest_api/methods/gettags_method.md) — returns a promise with the list of default tags
- [`getTasks()`](api/rest_api/methods/gettasks_method.md) — returns a promise with tasks data
- [`getUsers()`](api/rest_api/methods/getusers_method.md) — returns a promise with users data
- [`setAPI()`](api/rest_api/methods/setapi_method.md) — sets the To Do List API into `RestDataProvider`
- [`send()`](api/rest_api/methods/send_method.md) — sends a request to the server and returns a promise with or without data

## Interact with the backend

Connect `RestDataProvider` to the server scripts. Use one of the built-in backends or create a custom one:

- [Go](https://github.com/web-widgets/todo-go) backend
- [Node](https://github.com/web-widgets/todo-node) backend

:::tip
For custom backends, see the [REST API routes](../../api/rest_api/routes/rest_routes_overview/) reference.
:::

Call the `new RestDataProvider()` constructor and pass the server URL as a parameter:

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
Include `RestDataProvider` in the Event Bus order via the [`api.setNext()`](api/internal/setnext_method.md) method to perform data operations (adding, deleting, etc.) and send requests to the server.
:::

### Example

The example below connects `RestDataProvider` to the backend and loads server data dynamically:

<iframe src="https://snippet.dhtmlx.com/hnk06gm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Multiuser backend

To Do List supports real-time collaboration. Multiple users can manage the same tasks simultaneously without page reloads.

To implement a multiuser backend, obtain server authorization before initializing To Do List. Create a `login()` function:

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

The `login()` function returns a server token required for all subsequent server interactions. Pass the token in each request as the `Remote-Token` header value:

~~~js {}
login(url).then(token => {
    const restProvider = new todo.RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
~~~

After initialization, add a WebSocket to listen for server events:

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

With multiuser backend configured, users see each other's changes in the UI in real time.

### Example

The example below configures the multiuser backend to track changes in real time:

<iframe src="https://snippet.dhtmlx.com/82ayq2lk?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Customize server events

Define custom logic for handling server events by passing a `handlers` object to the `RemoteEvents.on(handlers)` method. The `handlers` object has the following structure:

~~~js {}
{
    "tasks": tasksHandler: function(obj: any),
    "projects": projectsHandler: function(obj: any)
}
~~~

When a change occurs on the server, the server returns the name of the modified element. Names vary depending on server logic.

The updated data appears in the `obj` argument of the `function(obj: any)` function. The `type: string` field specifies the operation and takes the following values:

- For **tasks**: `"add-task"`, `"update-task"`, `"delete-task"`, `"move-task"`, `"clone-task"`
- For **projects**: `"add-project"`, `"update-project"`, `"delete-project"`, `"move-project"`, `"clone-project"`

The following code snippet demonstrates the implementation:

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
                task: { ...obj.data.task },
                skipProvider: true // prevent the client from sending request to the server
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

The `RestDataProvider.getIDResolver()` method returns a function that synchronizes client IDs with server IDs. When a new object (task or project) is created on the client side, the object has a temporary client ID and a corresponding server ID in `RestDataProvider`. Use `idResolver()` to synchronize them. The function signature is: `idResolver(id: TID, type: number)`.

The `type` argument identifies the model type:

- `TaskID` — 1
- `ProjID` — 2

To prevent a request from being sent to the server, pass the `skipProvider: true` flag to the `todoInstance.api.exec()` method.
