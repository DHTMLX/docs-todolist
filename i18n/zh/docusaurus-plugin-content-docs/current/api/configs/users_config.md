---
sidebar_label: users
title: users 配置项
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 users 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# users

### 描述 {#description}

@short: 可选。指定一个包含用户数据的对象数组

### 用法 {#usage}

~~~js
users?: [
    {
        id: string | number,
        label: string,
        avatar?: string,
        color?: string,
    },
    {...} // 更多用户对象
];
~~~

### 参数 {#parameters}

`users` 属性表示一个人员对象数组。每个对象包含以下参数：

- `id` - （必填）人员的 id
- `label` - （必填）人员的描述信息
- `avatar` - （可选）人员头像图片的路径
- `color` - （可选）未上传头像时图标的颜色

:::info
如果未指定 `color` 参数，将使用默认颜色集中的颜色。
:::

### 示例 {#example}

~~~js {29-40,48}
const { ToDo, Toolbar } = todo;

const tasks = [
    {
        id: "1",
        project: "books",
        // parent: null,
        text: "Read books",
        collapsed: false,
        due_date: new Date()
    },
    {
        id: "2",
        project: "books",
        parent: "1",
        text: "Don Quixote",
        assigned: [ "user_1" ],
    },
    {
        id: "3",
        project: "books",
        parent: "1",
        text: "The Great Gatsby",
        assigned: [ "user_2" ],
        checked: true,
    },
];

const users = [
    { 
        id: "user_1",
        label: "John",
        avatar: "../avatar_02.jpg" 
    },
    { 
        id: "user_2", 
        label: "Kate",
        avatar: "../avatar_03.jpg"  
    },
];

const projects = [
    { "id": "books", "label": "Books" },
];

const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**相关文章：**
- [加载和存储数据](guides/loading_data.md)
- [任务用户](guides/task_users.md)
