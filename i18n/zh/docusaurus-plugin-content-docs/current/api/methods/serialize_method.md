---
sidebar_label: serialize()
title: serialize 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 serialize 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# serialize()

### 描述 {#description}

@short: 将 To Do List 的数据序列化为 JSON 对象

### 用法 {#usage}

~~~js
serialize(): object;
~~~

### 返回值 {#returns}

该方法返回 To Do List 的序列化数据

~~~js
{
    tasks: [],
    users: [],
    projects: [],
    tags: [],
    priorities: [],
    activeProject: string,
}
~~~

### 示例 {#example}

~~~js {12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});

// 获取包含 To Do List 数据的对象
list.serialize();
~~~

**相关文章：** [加载与存储数据](guides/loading_data.md)
