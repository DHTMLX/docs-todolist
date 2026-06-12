---
sidebar_label: close-menu
title: close-menu 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 close-menu 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# close-menu

### 描述 {#description}

@short: 关闭菜单时触发

### 用法 {#usage}

~~~js
"close-menu": ({
    id: string | number;
    type: "task" | "user" | "toolbar";
});
~~~

### 参数 {#parameters}

`close-menu` 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必填）关闭菜单的条目 ID
- `type` - （必填）菜单的类型

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

// 订阅 "close-menu" 事件
list.api.on("close-menu", ({id, type}) => {
    console.log("The menu is closed", id, type); 
});
~~~

**变更日志：** 在 v1.1 中新增
