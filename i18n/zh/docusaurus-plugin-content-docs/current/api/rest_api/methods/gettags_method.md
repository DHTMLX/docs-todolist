---
sidebar_label: getTags()
title: getTags 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 RestDataProvider 的 getTags 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# getTags()

### 描述 {#description}

@short: 获取一个包含默认标签数组的 promise

:::info
`getTags()` 方法是 `RestDataProvider` 服务的一部分，用于与服务器进行交互
:::

### 用法 {#usage}

~~~js
getTags(): Promise<string[]>;
~~~

### 响应 {#response}

`getTags()` 方法通过 `GET` 方式向服务器发送请求，并返回包含默认标签列表的 **promise**。


### 示例 {#example}

~~~js {5,10}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, projects, tags]) => {
    const list = new ToDo("#root", {
        tasks,
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
---

**相关文章**：[与服务器协作](guides/working_with_server.md)
