---
sidebar_label: setAPI()
title: setAPI 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 RestDataProvider 的 setAPI 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# setAPI()

### 描述 {#description}

@short: 必填。将 To Do List 组件的 API 设置到 RestDataProvider 中

:::info
`setAPI()` 方法是 RestDataProvider 各方法正常运行的必要条件。
:::

### 用法 {#usage}

~~~js
setAPI(api: IApi): void;
~~~

### 参数 {#parameters}

| 名称       | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `api`       |  object   | *必填*。组件的 API 对象 |


### 示例 {#example}

~~~js {5,12,23}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
]).then(([tasks, users, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        users,
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

**相关文章**：[与服务器协作](guides/working_with_server.md)
