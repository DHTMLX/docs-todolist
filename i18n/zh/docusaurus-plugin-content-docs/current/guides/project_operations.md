---
sidebar_label: 项目操作
title: 项目操作
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解项目操作的相关内容。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 项目操作 {#operations-with-projects}

## 切换活动项目 {#changing-the-active-project}

要切换当前活动项目，请使用 [`setProject()`](api/methods/setproject_method.md) 方法。该方法接受项目 id 作为参数。以下示例在初始化后切换活动项目：

~~~js {9,16}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", {
    projects,
    activeProject: "second"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.setProject({ id: "first" });
~~~

## 添加新项目 {#adding-a-new-project}

要创建新项目，请使用 [`addProject()`](api/methods/addproject_method.md) 方法。以下代码片段添加第四个项目：

~~~js {13-18}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.addProject({
    id: "fourth",
    project: {
        label: "Fourth project"
    }
});
~~~

## 更新项目 {#updating-a-project}

要动态更新项目的参数，请使用 [`updateProject()`](api/methods/updateproject_method.md) 方法。以下示例重命名项目标签：

~~~js {13-18}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.updateProject({
    id: "second",
    project: {
        label: "Project 2"
    }
});
~~~

## 删除项目 {#deleting-a-project}

要移除项目，请使用 [`deleteProject()`](api/methods/deleteproject_method.md) 方法。以下代码片段删除一个项目：

~~~js {17}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const tasks = [
    { id: "1", text: "Task 1", project: "first" },
];

const list = new ToDo("#root", { projects, tasks });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.deleteProject({ id: "first" });
~~~

:::note
与该项目关联的任务不会被删除。这些任务将移至 *"No project"* 分组。

~~~js
console.log(list.getTask({id: "1"})); // -> {id: '1', text: 'Task 1', project: null}
~~~
:::
