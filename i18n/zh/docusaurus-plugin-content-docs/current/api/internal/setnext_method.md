---
sidebar_label: api.setNext()
title: api.setNext 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 setNext 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# api.setNext()

### 描述 {#description}

@short: 允许将某个操作添加到 Event Bus 队列中

### 用法 {#usage}

~~~js
api.setNext(next: any): void;
~~~

### 参数 {#parameters}

- `next` - （必填）要加入 **Event Bus** 队列的操作

### 示例 {#example}

~~~js {20}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjects(),
    restProvider.getTasks(),
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

:::info
您需要将 `RestDataProvider` 加入 **Event Bus** 队列，才能执行数据操作（**添加、删除**等）并向服务器发送相应请求
:::
