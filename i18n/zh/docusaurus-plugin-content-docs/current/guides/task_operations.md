---
sidebar_label: 任务操作
title: 任务操作
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解任务操作相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 任务操作

## 添加新任务 {#adding-a-new-task}

使用 [`addTask()`](api/methods/addtask_method.md) 方法向列表中添加新任务。以下示例在指定父任务下添加一个任务：

~~~js
list.addTask({
    id: "1.1.1",
    project: "first",
    parent: "1.1",
    targetId: "1.1.2",
    reverse: true,
    task: {
        text: "Task 1.1.1",
    }
});
~~~

## 复制与粘贴任务 {#copyingpasting-a-task}

### 复制并粘贴 {#copy-and-paste}

复制和粘贴任务最快捷的方式是使用 [`copyTask()`](api/methods/copytask_method.md) 方法。传入以下参数：

- `id` — 要复制和粘贴的任务 id
- `project` — 目标项目的 id（如果存在）
- `targetId` — 粘贴位置的目标任务 id
- 其他参数为可选项

以下代码片段将一个任务复制到新项目中：

~~~js
list.copyTask({ 
    id: "1.1", // ID of the task to copy
    join: false, // resets copies of other tasks and copies only this task
    project: "p_2", // ID of the future project (if exists)
    parent: "2.1", // ID of the future parent
    targetId: "2.1.2", // ID of the target task
    reverse: true // paste the task before the target one
});
~~~

### 复制到剪贴板 {#copy-to-the-clipboard}

若只复制任务而不粘贴，将任务 id 传入 [`copyTask()`](api/methods/copytask_method.md) 方法：

~~~js
list.copyTask({ 
    id: "1.1"
});
~~~

### 保留其他副本的 id {#save-ids-of-other-copies}

:::info
要在复制任务的同时保留之前已复制的任务，请向 [`copyTask()`](api/methods/copytask_method.md) 方法传入 `join: true`。否则，该方法仅复制指定任务并重置所有之前的副本。
:::

### 从剪贴板粘贴 {#paste-from-the-clipboard}

通过 [`pasteTask()`](api/methods/pastetask_method.md) 方法将剪贴板中的已复制任务粘贴到指定位置。以下代码片段将复制的任务粘贴到目标任务旁边：

~~~js
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

:::info
当剪贴板内容到达目标位置后，[`clone-task`](api/events/clonetask_event.md) 事件在 [`paste-task`](api/events/pastetask_event.md) 之后触发。回调函数接收父任务 id、项目 id、目标 id 以及包含克隆任务对象的 `batch` 数组。
:::

## 更新任务 {#updating-a-task}

使用 [`updateTask()`](api/methods/updatetask_method.md) 方法动态更新任务参数。以下示例修改任务的文本：

~~~js
list.updateTask({ 
    id: "1.1.1",
    task: {
        text: "Completed task"
    }
});
~~~

## 移动任务 {#moving-a-task}

使用 [`moveTask()`](api/methods/movetask_method.md) 方法将任务移动到其他位置。以下代码片段将任务移动到另一个项目中：

~~~js
list.moveTask({ 
    id: "1.1", // ID of the task to move
    project:"p_2", // ID of the future project (if exists)
    parent: "2", // ID of the future parent
    targetId: "2.1", // ID of the target task
    reverse: true // place the task before the target one
});
~~~

:::note
父任务移动时会连同其子任务一起移动。
:::

## 删除任务 {#deleting-a-task}

使用 [`deleteTask()`](api/methods/deletetask_method.md) 方法删除任务：

~~~js
list.deleteTask({ id: "1.2" });
~~~

:::note
该方法会连同任务的所有子任务一并删除。
:::

## 展开与折叠任务 {#expandingcollapsing-a-task}

使用 [`collapseTask()`](api/methods/collapsetask_method.md) 方法折叠任务。该方法接受任务 id 作为参数：

~~~js
list.collapseTask({ id: "1.1" });

~~~

使用 [`expandTask()`](api/methods/expandtask_method.md) 方法通过 id 展开已折叠的任务：

~~~js
list.expandTask({ id: "1.1" });
~~~

## 上下文菜单 {#context-menu}

每个任务和用户都有上下文菜单。通过以下两个事件追踪其活动状态：

- [`open-menu`](api/events/openmenu_event.md) — 菜单打开时触发；提供条目 id、菜单类型，以及可选的用于批量操作的任务 id 数组（`source`）
- [`close-menu`](api/events/closemenu_event.md) — 菜单关闭时触发；提供条目 id 和菜单类型

以下示例记录菜单生命周期事件：

~~~js
list.api.on("open-menu", ({ id, type, source }) => {
    console.log("menu opened for", id, "type", type, "source", source);
});

list.api.on("close-menu", ({ id, type }) => {
    console.log("menu closed for", id, "type", type);
});
~~~

*变更日志：* `open-menu` 和 `close-menu` 事件已在 v1.1 中添加。

## 标记任务为完成或未完成 {#marking-a-task-completeincomplete}

通过 [`checkTask()`](api/methods/checktask_method.md) 和 [`uncheckTask()`](api/methods/unchecktask_method.md) 方法将任务标记为完成或未完成。以下示例展示了两种调用方式：

~~~js
list.checkTask({ 
    id: "1.1.1",
    manual: false
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: false
});
~~~

当 `manual: false` 时，结果取决于 `taskShape.completed.behavior`（详见 [`taskShape`](api/configs/taskshape_config.md) 参考）。

如果 `taskShape.completed.behavior` 为 `"auto"`，但需要单次手动标记，可将 `manual: true`：

~~~js
list.checkTask({ 
    id: "1.1.1",
    manual: true
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: true
});
~~~

## 更改任务的缩进级别 {#changing-the-indent-level-of-a-task}

通过以下方法动态更改任务的嵌套层级：

- [`indentTask()`](api/methods/indenttask_method.md) — 将任务的嵌套层级降低一级
- [`unindentTask()`](api/methods/unindenttask_method.md) — 将任务的嵌套层级提升一级

以下代码片段将任务降低一个层级：

~~~js
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

list.indentTask({ id: "1.2" });

console.log(list.getParentIds({ id: "1.2" })); //  ['1.1', '1']
~~~

以下示例将任务提升一个层级：

~~~js
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

list.unindentTask({ id: "1.2" });

console.log(list.getParentIds({ id: "1.2" })); //  []
~~~

:::info
如果任务已处于顶层，`unindentTask()` 不会执行任何操作。
:::

## 筛选任务 {#filter-tasks}

使用 [`setFilter()`](api/methods/setfilter_method.md) 方法查找符合指定条件的任务。该方法支持用于精确匹配的*严格*模式。以下代码片段按话题标签筛选任务：

~~~js
// filter data by the specified rules
list.setFilter({
    match: "#tag1",
    highlight: true,
    strict: true
});
~~~

要重置筛选，传入 `match: null`：

~~~js
// reset filtering
list.setFilter({ match: null });
~~~

## 撤销与重做 {#undo-and-redo}

To Do List 默认追踪变更历史。调用 [`undo()`](api/methods/undo_method.md) 方法可撤销最后一次操作；调用 [`redo()`](api/methods/redo_method.md) 方法可恢复被 `undo()` 撤销的操作：

~~~js
list.addTask({ task: { text: "New task" } });

list.undo(); // revert the addition
list.redo(); // restore it
~~~

历史记录的范围和深度取决于 [`history`](api/configs/history_config.md) 配置属性。详见[配置 → 变更历史](guides/configuration.md#history-of-changes)。

*变更日志：* `undo()` 和 `redo()` 方法已在 v1.3 中添加。
