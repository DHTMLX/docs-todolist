---
sidebar_label: open-menu
title: open-menu 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 open-menu 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# open-menu

### 描述 {#description}

@short: 当菜单打开时触发

### 用法 {#usage}

~~~js
"open-menu": ({
    id: string | number,
    type: "task" | "user" | "toolbar",
    source?: (string | number)[]
});
~~~

### 参数 {#parameters}

`open-menu` 事件的回调函数可接受一个包含以下参数的对象：

- `id` - （必填）打开菜单的条目 ID
- `type` - （必填）菜单的类型
- `source` - （可选）包含将执行操作的任务 ID 的数组

### 示例 {#example}

~~~js
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

// 订阅 "open-menu" 事件
list.api.on("open-menu", ({id, type, source}) => {
    console.log("The menu is opened", id, type, source); 
});
~~~

**更新日志：** 在 v1.1 中新增
