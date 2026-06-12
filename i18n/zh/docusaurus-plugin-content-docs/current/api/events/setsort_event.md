---
sidebar_label: set-sort
title: set-sort 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 set-sort 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# set-sort

### 描述 {#description}

@short: 当对任务进行排序时触发

### 用法 {#usage}

~~~js
"set-sort": ({
    by?: string | ((task: object) => string),
    dir?: "asc" | "desc",
    tree?: boolean,
}) => void;
~~~

### 参数 {#parameters}

`set-sort` 事件的回调函数可接受一个包含以下参数的对象：

- `by` - （可选）搜索条件（可为 [任务属性](api/configs/tasks_config.md#parameters) 的键名，或返回字符串的搜索函数）
- `dir` - （可选）排序方向："asc" 或 "desc"
- `tree` - （可选）定义是否对子任务启用排序

:::info
如需处理内部事件，可使用 [**Event Bus 方法**](category/event-bus-methods.md)
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

// 订阅 "set-sort" 事件
list.api.on("set-sort", ({ by, dir, tree }) => {
    console.log(by, dir, tree);
});
~~~

**相关文章：** [任务排序与过滤](guides/sorting_filtering_tasks.md)
