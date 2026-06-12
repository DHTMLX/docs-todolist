---
sidebar_label: 任务对象/Id
title: 任务对象/ID
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解任务对象和任务 id。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 任务对象/Id

## 获取任务对象 {#get-a-task-object}

使用 [`getTask()`](api/methods/gettask_method.md) 方法获取任务对象。以下示例通过 id 获取任务：

~~~js
const tasks = [
    { id: "1", text: "Task 1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

list.getTask({ id: "1.2" }); // -> {id: '1.2', text: 'Task 1.2', parent: '1'}
~~~

## 检查任务是否存在 {#check-if-a-task-exists}

使用 [`existsTask()`](api/methods/existstask_method.md) 方法检查任务是否存在。以下代码片段检查两个 id：

~~~js
const tasks = [
    { id: "1", text: "Task 1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

list.existsTask({ id: "2" }); // -> false
list.existsTask({ id: "1.2" }); // -> true
~~~

## 获取子任务 id {#get-child-ids}

使用 [`getChildrenIds()`](api/methods/getchildrenids_method.md) 方法获取任务的子任务。以下示例返回某任务的所有后代：

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

console.log(list.getChildrenIds({ id: "1" })); // ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // ['1.1', '1.2']
~~~

筛选操作可能使某些任务在页面上不可见。`filtered` 参数决定隐藏任务是否出现在结果中。将其设为 `true` 可排除隐藏任务（默认值为 `false`）。以下代码片段展示了两种选项：

~~~js
// filter the tasks
list.setFilter({ match: "#tag1", highlight: true });

// get children of the task after filtering
console.log(list.getChildrenIds({ id: "1", filtered: false })); // -> ['1.1', '1.1.1', '1.2']

// enable the "filtered" parameter
console.log(list.getChildrenIds({ id: "1", filtered: true })); // -> ['1.1', '1.1.1']
~~~

将 `tree` 设为 `false` 以仅返回第一级子任务：

~~~js
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: false })); // -> ['1.1']
console.log(list.getChildrenIds({ id: "1", filtered: false, tree: false })); // -> ['1.1', '1.2']
~~~

将 `hideCompleted` 设为 `true` 以排除已完成的子任务。以下示例以不同方式组合 `filtered`、`tree` 和 `hideCompleted`：

~~~js {4,11,18,21}
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

// before filtering
console.log(list.getChildrenIds({ id: "1", tree: true, hideCompleted: false })); // -> ['1.1', '1.1.1', '1.2']

console.log(list.getChildrenIds({ id: "1", tree: true, hideCompleted: true })); // ['1.1', '1.2']

// filter the tasks
list.setFilter({ match: "#tag1", highlight: true });

// after filtering
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: true, hideCompleted: false})); // -> ['1.1', '1.1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: true, hideCompleted: true })); // -> ['1.1']

console.log(list.getChildrenIds({ id: "1", filtered: false, tree: true, hideCompleted: false})); // -> ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", filtered: false, tree: true, hideCompleted: true})); // -> ['1.1', '1.2']
~~~

## 检查任务是否有子任务 {#check-if-a-task-has-children}

使用 [`hasChildren()`](api/methods/haschildren_method.md) 方法检查任务是否有子任务。以下代码片段验证某任务存在子任务：

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1 #tag3" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

// check whether the task has children (before filtering)
console.log(list.hasChildren({ id: "1.1" })); // -> true
~~~

筛选操作可能使某些任务在页面上不可见。`filtered` 参数决定被筛选（隐藏）的任务是否出现在结果中（默认 `filtered: false`，即显示；`filtered: true` 则不显示）：

~~~js
// filter the tasks
list.setFilter({ match: "#tag3", highlight: true });

// check whether the task has children (after filtering)
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~

将 `hideCompleted` 设为 `true` 以从结果中排除已完成的任务：

~~~js {4,9}
const tasks = [
    { id: "1", text: "Task 1 #tag1 #tag3" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", hideCompleted: true })); // -> false
~~~

## 获取父任务 id {#get-parent-ids}

使用 [`getParentIds()`](api/methods/getparentids_method.md) 方法获取任务的父任务。以下示例返回某任务的完整父任务链：

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

console.log(list.getParentIds({ id: "1.1.1" })); //  ['1.1', '1']
~~~

## 获取已选任务的 id {#get-ids-of-selected-tasks}

使用 [`getSelection()`](api/methods/getselection_method.md) 方法获取当前所有已选任务的 id。以下代码片段初始化带有预选任务的 To Do List，并追加一个新的选中项：

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { 
    tasks,
    selected: ["1.1", "1.2"]
});

list.selectTask({
    id: "1.1.1",
    join: true
});

console.log(list.getSelection({ sorted: false })); // -> ["1.1", "1.2", "1.1.1"]
~~~
