---
sidebar_label: 多选与批量操作
title: 多选与批量操作
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解多任务选择的相关内容。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 多选与批量操作 {#multiple-select-and-bulk-operations}

To Do List 库支持同时选择多个任务并对其进行统一管理。

![DHTMLX To Do List 小部件中的多个选定任务](/img/multiselection.png)

:::info
了解如何通过 UI [选择](/#selecting-tasks)和[管理多个任务](/#managing-multiple-tasks)。
:::

## 初始选中的任务 {#initially-selected-tasks}

要创建带有初始选中任务的 To Do List，请使用 [`selected`](api/configs/selected_config.md) 配置属性。以下示例在初始化时预选三个任务：

~~~js {12}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "1.2", "2.2"],
});

console.log(list.getSelection()); // ["1.1", "1.2", "2.2"]
~~~

## 选择任务 {#select-tasks}

使用 [`selectTask()`](api/methods/selecttask_method.md) 方法在初始化之后选择任务。该方法接受两个参数：

- `id` — 要选中的任务 id
- `join` — 是否将该任务追加到现有选择中

### 选择单个任务 {#select-one-task}

默认情况下，`join` 参数为 `false`。该方法仅选中指定的任务，并取消之前已选中的任务。

以下代码片段用单个任务替换当前选择：

~~~js {19}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "1.2", "2.2"],
});

console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]

list.selectTask({ 
    id: "2.1", 
    join: false // reset selection of previously selected tasks
});

console.log(list.getSelection()) // ["2.1"]
~~~

### 选择多个任务 {#select-multiple-tasks}

要选择多个任务，将 `join` 参数设置为 `true`。`selectTask()` 方法将把指定任务追加到当前选择中。

以下示例在循环中选择多个任务：

~~~js {14-18}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ]
});

const selected = ["1.1", "1.2", "2.2"];

for (id of selected) {
    list.selectTask({ id, join: true });
}

console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]
~~~

以下代码片段向现有选择中追加一个任务：

~~~js {3}
console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]

list.selectTask({ id: "2.1", join: true });

console.log(list.getSelection()) // ["1.1", "1.2", "2.2", "2.1"]
~~~

## 获取所有已选任务 {#get-all-selected-tasks}

要获取当前所有已选任务的 id，请使用 [`getSelection()`](api/methods/getselection_method.md) 方法。以下示例展示了未排序与排序输出的区别：

~~~js
// sorted - disable
list.getSelection({ sorted: false }); // ["1.2", "1.1", "2.2", "2.1"]

// sorted - enable
list.getSelection({ sorted: true }); // ["1.1", "1.2", "2.1", "2.2"]
~~~

启用 `sorted` 参数可按屏幕显示顺序返回已选任务的 id。

## 管理已选任务 {#manage-selected-tasks}

选择多个任务后，可一次性对所有任务执行操作。

该库提供了 [`eachSelected()`](api/methods/eachselected_method.md) 方法用于遍历所有已选任务。该方法还接受 `sorted` 和 `reversed` 额外参数，用于控制排序方式和遍历方向。

以下示例删除所有已选任务：

~~~js
list.eachSelected(id => {
    list.deleteTask({ id });
}, true);
~~~

### 可用操作列表 {#list-of-available-operations}

您可以通过以下 API 方法对多个已选任务执行批量操作：

- [`copyTask()`](api/methods/copytask_method.md) — 复制任务
- [`pasteTask()`](api/methods/pastetask_method.md) — 粘贴任务
- [`moveTask()`](api/methods/movetask_method.md) — 移动任务
- [`deleteTask()`](api/methods/deletetask_method.md) — 删除任务
- [`checkTask()`](api/methods/checktask_method.md)、[`uncheckTask()`](api/methods/unchecktask_method.md) — 将任务标记为已完成或未完成
- [`indentTask()`](api/methods/indenttask_method.md)、[`unindentTask()`](api/methods/unindenttask_method.md) — 降低或提升任务的嵌套层级

## 重置选择 {#reset-selection}

### 取消选择单个任务 {#unselect-one-task}

要取消对某一任务的选择，将任务 id 作为参数传入 [`unselectTask()`](api/methods/unselecttask_method.md) 方法。以下代码片段取消选择单个任务：

~~~js
list.unselectTask({ id: "1.1" });
~~~

### 取消选择所有任务 {#unselect-all-tasks}

要取消选择当前所有已选任务，向 [`unselectTask()`](api/methods/unselecttask_method.md) 方法传入 `id: null`：

~~~js
list.unselectTask({ id: null });
~~~

## 键盘快捷键 {#keyboard-shortcuts}

:::info
请参阅[**键盘导航**](guides/keyboard_navigation.md)指南了解更多信息。
:::
