---
sidebar_label: getProjectTasks()
title: getProjectTasks 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 RestDataProvider 的 getProjectTasks 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# getProjectTasks()

### 描述 {#description}

@short: 获取一个包含指定项目任务对象数组的 promise

:::info
`getProjectTasks()` 方法是 `RestDataProvider` 服务的一部分，用于与服务器进行交互
:::

### 用法 {#usage}

~~~js
getProjectTasks(id: string | number | null): Promise<obj[]>;
~~~

### 参数 {#parameters}

| 名称       | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `id`       |  string、number、null    | *必填*。项目的 ID |

### 响应 {#response}

`getProjectTasks()` 方法通过 `GET` 方式向服务器发送请求，并返回包含指定项目任务数据的 **promise**。


### 示例 {#example}

~~~js {5,8}
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

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});
~~~
---

**相关文章：**[与服务器协作](guides/working_with_server.md)
