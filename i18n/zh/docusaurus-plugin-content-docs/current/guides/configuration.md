---
sidebar_label: 配置
title: 配置
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 To Do List 的配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 配置

调整 DHTMLX To Do List 的设置以满足您的需求。可用的配置选项包括：

- [配置显示任务完成进度的徽章外观](#counter-of-completed-subtasks)
- [配置日期格式](#date-format)
- [配置或禁用任务的拖放功能](#drag-n-drop)
- [禁用任务截止日期验证](#due-date-validation)
- [更改标记任务完成的模式](#mode-of-marking-tasks-complete)
- [配置工具栏外观](#toolbar)
- [管理更改历史](#history-of-changes)
- [配置已完成任务的隐藏方式](#hiding-mode-for-completed-tasks)
- [以只读模式初始化 To Do List](#read-only-mode)

:::tip
若要在初始化后动态更改配置参数，请使用 [`setConfig()`](api/methods/setconfig_method.md) 方法。该方法会销毁当前组件并使用合并后的设置重新创建。之后调用对应的 [Toolbar `setConfig()`](api/toolbar_api/methods/setconfig_method.md) 以将工具栏重新绑定到新的 API。
:::

## 任务 {#tasks}

### 已完成子任务计数器 {#counter-of-completed-subtasks}

更改显示已完成子任务数量的计数器类型。

![DHTMLX To Do List 中已完成子任务的计数器](/img/counter.png)

默认情况下，每个父任务以已完成子任务数与子任务总数之比的形式显示计数器。

若要将计数器值显示为百分比，请将 `taskShape.counter.type` 设置为 `"percentage"`。详情请参阅 [`taskShape`](api/configs/taskshape_config.md) 参考。以下示例将计数器切换为百分比模式：

~~~js {5-9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        counter: {
            type: "percentage" // 默认为 "number"
        }
    }
});
~~~

**相关示例：** [To do list. 子任务计数器与日期格式](https://snippet.dhtmlx.com/magidhw8)

### 日期格式 {#date-format}

默认情况下，To Do List 以 `"%d %M %Y"` 格式（例如，*09 Mar 2033*）显示日期。若要指定其他格式，请使用 [`taskShape`](api/configs/taskshape_config.md) 属性的 `date` 参数。以下代码片段设置斜线分隔的日期格式：

~~~js {5-10}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        date: {
            format: "%d/%m/%Y", // 默认为 "%d %M %Y"
            validate: true
        }
    }
});
~~~

**相关示例：** [To do list. 子任务计数器与日期格式](https://snippet.dhtmlx.com/magidhw8)

查看[可用字符列表](api/configs/taskshape_config.md#list-of-characters)。

### 拖放 {#drag-n-drop}

拖放功能默认启用。[选择一个或多个任务](/#selecting-tasks)，然后一次性拖动整个选区。在拖放过程中按住 *Alt* 键可创建所选任务的副本。

使用 [`drag`](api/configs/drag_config.md) 属性可以：

- 防止折叠的任务在拖放悬停时展开
- 完全禁用拖放功能

以下示例使折叠的任务在用户将项目拖过它们时保持关闭状态：

~~~js {7}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: {
        expand: false // 默认为 true
    }
});
~~~

以下代码片段完全禁用拖放功能：

~~~js {6}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: false // 默认为 true
});
~~~

订阅拖放事件以追踪拖放生命周期：

- [`start-drag`](api/events/startdrag_event.md) — 当用户开始拖动任务时触发；提供源任务 id 和模式（`"move"` 或 `"copy"`）
- [`drag`](api/events/drag_event.md) — 当用户拖动任务时持续触发
- [`end-drag`](api/events/enddrag_event.md) — 拖放完成时触发；提供目标 id、放置位置（`"top"`、`"bottom"`、`"in"` 或 `null`）以及模式

以下代码片段记录拖放操作的开始和结束：

~~~js
list.api.on("start-drag", ({ start, mode }) => {
    console.log("drag started from", start, "in", mode, "mode");
});

list.api.on("end-drag", ({ target, dropPosition, mode }) => {
    console.log("dropped on", target, "at", dropPosition, "in", mode, "mode");
});
~~~

*Change log:* `start-drag` 和 `end-drag` 事件在 v1.1 中新增。

### 截止日期验证 {#due-date-validation}

如果为任务指定了[截止日期](api/configs/tasks_config.md)，截止日期验证会追踪任务完成情况。任务未逾期时截止日期显示为绿色。

![DHTMLX To Do List 中截止日期以绿色显示的任务](/img/due_date.png)

逾期任务的日期显示为红色。

![DHTMLX To Do List 中截止日期以红色显示的逾期任务](/img/overdue_task.png)

验证默认启用。若要禁用，请将 `taskShape.date.validate` 设置为 `false`。详情请参阅 [`taskShape`](api/configs/taskshape_config.md) 参考。以下代码片段关闭截止日期验证：

~~~js {5-10}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        date: {
            format: "%d %M %Y",
            validate: false // 默认为 true
        }
    }
});
~~~

在此配置下，截止日期显示为灰色。

### 标记任务完成的模式 {#mode-of-marking-tasks-complete}

默认情况下，To Do List 以 `"auto"` 模式勾选和取消勾选任务：

- 将任务的所有子任务标记为已完成 → 父任务自动变为已完成
- 将父任务标记为已完成 → 所有子任务自动变为已完成
- 将已完成任务的至少一个子任务标记为未完成 → 父任务自动变为未完成
- 将父任务标记为未完成 → 所有子任务自动变为未完成

若要禁用此行为并激活 `"manual"` 模式，请将 `taskShape.completed.behavior` 设置为 `"manual"`。详情请参阅 [`taskShape`](api/configs/taskshape_config.md) 参考。以下示例激活手动模式：

~~~js {5-9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        completed: {
            behavior: "manual" // 默认为 "auto"
        }
    }
});
~~~

**相关示例：** [To do list. 标记父任务完成的两种方式](https://snippet.dhtmlx.com/5892fcr2)

## 更改历史 {#history-of-changes}

To Do List 默认追踪更改历史。用户可通过 [`undo()`](api/methods/undo_method.md) 和 [`redo()`](api/methods/redo_method.md) 方法撤销和重做操作。

使用 [`history`](api/configs/history_config.md) 属性配置此行为。该属性接受布尔值（简写形式）或包含扩展设置的对象：

- `projects` — 启用历史分支，使每个项目保留独立的历史记录；设置为 `false` 时，整个应用共享一个历史记录
- `limit` — 保留的最大历史操作数量

以下示例将历史记录限制为 20 次操作并禁用按项目分支：

~~~js {9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    history: { projects: false, limit: 20 }
});

list.addTask({ task: { text: "New task" } });
list.undo(); // 撤销最后一个操作
list.redo(); // 重做该操作
~~~

若要完全禁用历史管理，请将该属性设置为 `false`。此时 `undo()` 和 `redo()` 方法将不可用，工具栏上对应的控件也会消失。

*Change log:* `history` 配置项、`undo()` 和 `redo()` 方法在 v1.3 中新增。

## 工具栏 {#toolbar}

工具栏显示在组件顶部，需单独[初始化](guides/initialization.md#initialize-toolbar)和[配置](category/toolbar-properties.md)。

若要更改工具栏的默认结构，请使用 Toolbar 组件的 [`items`](api/toolbar_api/configs/items_config.md) 配置属性。以下代码片段仅保留搜索和组合框控件：

~~~js
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: ["search", "combo"]
});
~~~

`items` 属性定义工具栏渲染哪些控件，按您希望的顺序列出。

## 已完成任务的隐藏模式 {#hiding-mode-for-completed-tasks}

详情请参阅[隐藏已完成任务](guides/hide_completed_tasks.md)。

## 只读模式 {#read-only-mode}

[只读模式](guides/readonly_mode.md)章节说明了如何将 To Do List 设置为只读。
