---
sidebar_label: api.getStores()
title: api.getStores 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 getStores 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# api.getStores()

### 描述 {#description}

@short: 获取包含 To Do List 的 DataStore 对象的对象

### 用法 {#usage}

~~~js
api.getStores(): object;
~~~

### 返回值 {#returns}

该方法返回包含 `DataStore` 的对象：

~~~js
state: DataStore // ( object )
~~~

### 示例 {#example}

~~~js {11-12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const stores = list.api.getStores();
console.log(stores);
~~~
