---
sidebar_label: add-project
title: add-project 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 add-project 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版本。
---

# add-project

### 描述 {#description}

@short: 添加新项目时触发

### 用法 {#usage}

~~~js
"add-project": ({
    id: string | number,
    project?: object
}) => void;
~~~

### 参数 {#parameters}

`add-project` 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必填）所创建项目的 ID
- `project` - （可选）包含项目参数的对象：
  - `label` - （可选）项目名称

:::info
要处理内部事件，可以使用 [**Event Bus 方法**](category/event-bus-methods.md)
:::

### 示例 {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 订阅 "add-project" 事件
list.api.on("add-project", ({id, project}) => {
    console.log("A new ", project.label, " project with ID:", id, "is added");
});
~~~

**相关文章：** [项目操作](guides/project_operations.md#adding-a-new-project)
