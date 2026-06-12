---
sidebar_label: unselect-task
title: unselect-task 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 unselect-task 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# unselect-task

### 描述 {#description}

@short: 当取消选中任务时触发

### 用法 {#usage}

```js
"unselect-task": ({
    id: string | number
}) => void;
```
### 参数 {#parameters}

`unselect-task` 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必填）任务的 ID

:::info
要处理内部事件，可以使用 [**Event Bus 方法**](category/event-bus-methods.md)
:::

### 示例 {#example}

~~~js {15-17}
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

// 订阅 "unselect-task" 事件
list.api.on("unselect-task", ({id}) => {
    console.log("The", id, "task is unselected");
});
~~~

**相关文章：**
- [任务操作](guides/task_operations.md)
- [多选与批量操作](guides/multiselection.md)
