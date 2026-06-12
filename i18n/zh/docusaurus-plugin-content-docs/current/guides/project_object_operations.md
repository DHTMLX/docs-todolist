---
sidebar_label: 项目对象
title: 项目对象
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解项目对象的相关内容。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 项目对象 {#project-object}

## 获取项目对象 {#get-a-project-object}

要获取项目对象，请使用 [`getProject()`](api/methods/getproject_method.md) 方法。以下示例通过 id 检索项目：

~~~js {13}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.getProject({ id: "first" }); // -> {id: 'first', label: 'First project'}
~~~

## 检查项目是否存在 {#check-if-a-project-exists}

要检查某个项目是否存在，请使用 [`existsProject()`](api/methods/existsproject_method.md) 方法。以下代码片段检查两个 id：

~~~js {13-14}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.existsProject({ id: 1 }); // -> false
list.existsProject({ id: "first" }); // -> true
~~~
