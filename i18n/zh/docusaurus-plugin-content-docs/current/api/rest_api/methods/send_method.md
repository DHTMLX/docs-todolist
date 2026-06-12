---
sidebar_label: send()
title: send 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 RestDataProvider 的 send 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# send()

### 描述 {#description}

@short: 向服务器发送所需的 HTTP 请求，并根据请求类型返回带或不带数据的 promise

所有对服务器的请求均通过 `send()` 方法发出，该方法是 [`RestDataProvider`](guides/working_with_server.md#restdataprovider) 服务的一部分。


### 用法 {#usage}

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): Promise<obj[]>
~~~

### 参数 {#parameters}


| 名称       | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `url`         |  string     | *必填*。发送请求的服务器路径。            |
| `method`            |string             | *必填*。HTTP 方法类型（Get、Post、Put、Delete）            |
| `data`  | object        | *可选*。发送到服务器的参数。默认情况下，发送触发事件的参数。您也可以通过自定义对象添加额外参数。请参阅下方[示例](#examples)。 |
| `headers`  |object       | *可选*。默认请求头为设置为 *application/json* 的 `Content-Type` 头。可通过 `customHeaders` 参数添加更多可选请求头。请参阅下方[示例](#examples)。 |

### 响应 {#response}

该方法根据请求类型返回带或不带数据的 promise 对象。

请求成功时返回 promise。若请求失败（response.status == 500），则抛出包含错误信息的异常。

您可以配置返回的内容。要处理失败请求的响应，请使用返回的 promise 的 `catch` 方法。

~~~js

restDataProvider.send(url, method, data)
.then(data => {
   ... // 成功：对数据执行操作
})
.catch(err => {
    ... // 错误处理
});

~~~

### 示例 {#examples}

以下示例展示了如何在默认参数之外发送附加参数的请求：

~~~js {20-25}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getProjects(),
]).then(([tasks, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.on("set-project", obj => {
    obj.custom = "custom event";
    restDataProvider.send(`tasks/projects/0`, "GET", obj).then(data => {
        list.api.parse({ tasks: data });
        return Promise.resolve();
    });
});

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});

~~~

以下示例演示如何向 `send` 方法添加更多请求头。

~~~js
const customHeaders = {
     "Authorization": "Bearer",
    "Custom header": "some value",
};

list.api.on("add-task", obj => {
    restDataProvider.send("tasks", "POST", obj, customHeaders);
});
~~~

或者，您可以通过重新定义 RestDataProvider 的方式添加请求头，从而更精细地控制发送到服务器的数据：

~~~js {6-11}
const { ToDo, Toolbar, RestDataProvider } = todo;
...
// ToDo 初始化
...

class MyDataProvider extends RestDataProvider {
  send(url, method, data, headers) {
      headers = { ...headers, "SomeToken": "abc" };
      return super.send(url, method, data, headers);
  }
}

const myProvider = new MyDataProvider(url);
list.api.setNext(myProvider);
myProvider.setAPI(list.api);
~~~ 
---

**相关文章**：[与服务器协作](guides/working_with_server.md)
