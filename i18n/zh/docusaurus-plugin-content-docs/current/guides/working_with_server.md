---
sidebar_label: 与服务器协作
title: 与服务器协作
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解与服务器协作的相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---
# 与服务器协作

DHTMLX To Do List 同时支持客户端和服务器端数据。该 widget 对后端无特殊要求，可连接到任何支持 REST API 的平台。

:::info
该 widget 内置了 [**Go**](https://github.com/web-widgets/todo-go) 和 [**Node**](https://github.com/web-widgets/todo-node) 后端。您也可以使用自定义服务器脚本。
:::

## RestDataProvider

To Do List 提供了 `RestDataProvider` 服务，用于与 REST 后端通信并处理以下数据操作：

- `"add-task"` — 添加任务
- `"update-task"` — 更新任务
- `"delete-task"` — 删除任务
- `"add-project"` — 添加项目
- `"update-project"` — 更新项目
- `"delete-project"` — 删除项目
- `"set-project"` — 设置活跃项目
- `"move-task"` — 移动任务
- `"clone-task"` — 克隆任务

## REST 方法 {#rest-methods}

`RestDataProvider` 服务提供以下 REST 方法，用于动态加载数据：

- [`getProjects()`](api/rest_api/methods/getprojects_method.md) — 获取包含**项目数据**的 Promise
- [`getProjectTasks()`](api/rest_api/methods/getprojecttasks_method.md) — 获取指定 `project` 的**任务数据**的 Promise
- [`getTags()`](api/rest_api/methods/gettags_method.md) — 获取包含**默认标签**列表的 Promise
- [`getTasks()`](api/rest_api/methods/gettasks_method.md) — 获取包含**任务数据**的 Promise
- [`getUsers()`](api/rest_api/methods/getusers_method.md) — 获取包含**用户数据**的 Promise
- [`setAPI()`](api/rest_api/methods/setapi_method.md) — 将 To Do List 组件的 API 设置到 RestDataProvider 中
- [`send()`](api/rest_api/methods/send_method.md) — 向服务器发送请求，并根据请求类型返回包含或不包含数据的 Promise

## 与后端交互 {#interact-with-the-backend}

要与服务器交互，需将 `RestDataProvider` 连接到服务器脚本。内置后端可在以下两个仓库中获取：

- [**Go**](https://github.com/web-widgets/todo-go) — Go 后端
- [**Node**](https://github.com/web-widgets/todo-node) — Node.js 后端

您也可以创建自定义后端。

:::tip
如果使用自定义后端，请参阅 [**REST API 路由**](api/rest_api/routes/rest_routes_overview.md) 主题以获取更多信息。
:::

要将 `RestDataProvider` 连接到后端，调用 `new RestDataProvider()` 构造函数并传入相应的 **URL** 作为参数。以下示例使用从服务器加载的数据初始化 To Do List：

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
通过 [`api.setNext()`](api/internal/setnext_method.md) 方法将 `RestDataProvider` 加入 **Event Bus** 链，以便执行数据操作（添加、删除等）并向服务器发送相应请求。
:::

### 示例 {#example}

以下代码片段将 `RestDataProvider` 连接到后端并动态加载服务器数据：

<iframe src="https://snippet.dhtmlx.com/hnk06gm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 多用户后端 {#multiuser-backend}

多用户功能允许多名用户实时管理同一批任务，无需刷新页面。各用户可立即看到彼此的变更。

在初始化 To Do List 之前，需先在服务器上完成授权。以下示例定义了一个 `login()` 函数：

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

`login()` 函数返回后续所有服务器交互所需的 token。在每个请求中，将 token 作为 `Remote-Token` 请求头的值传入。以下代码片段设置了 token 请求头：

~~~js
login(url).then(token => {
    const restProvider = new todo.RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
~~~

初始化后，添加 WebSocket 以监听来自服务器的事件。以下示例配置了 WebSocket 及其处理程序：

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

### 示例 {#example-multiuser}

以下代码片段配置了多用户后端，以实时追踪其他用户的变更：

<iframe src="https://snippet.dhtmlx.com/82ayq2lk?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 自定义服务器事件 {#customize-server-events}

定义处理服务器事件的自定义逻辑。将 `handlers` 对象传入 `RemoteEvents.on(handlers)` 方法。`handlers` 对象的结构如下：

~~~js
{
    "tasks": tasksHandler: function(obj: any),
    "projects": projectsHandler: function(obj: any)
}
~~~

当服务器发生变更时，服务器返回被修改元素的名称。具体名称因服务器逻辑而异。

更新后的数据通过处理程序的 `obj` 参数传入，其 `type` 字段指定了操作类型：

- 对于 `tasks`：`"add-task"`、`"update-task"`、`"delete-task"`、`"move-task"`、`"clone-task"`
- 对于 `projects`：`"add-project"`、`"update-project"`、`"delete-project"`、`"set-sort"`

以下代码片段展示了实现细节：

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

`RestDataProvider.getIDResolver()` 方法返回一个函数，用于同步客户端 id 与服务器 id。当客户端创建新对象（任务或项目）时，接收到的对象具有临时 id，`RestDataProvider` 中存有对应的服务器 id。`idResolver()` 函数负责将客户端 id 与服务器 id 进行同步。该函数的格式为：`idResolver(id: TID, type: number)`。

`type` 参数表示模型类型，取以下值：

- `TaskID` — `1`
- `ProjID` — `2`

要阻止向服务器发送请求，在 `todoInstance.api.exec()` 方法中传入 `skipProvider: true` 标志。
