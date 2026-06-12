---
sidebar_label: setSort()
title: setSort 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 setSort 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# setSort()

### 描述 {#description}

@short: 按指定参数对当前项目的任务进行排序

### 用法 {#usage}

~~~js
setSort({
    by?: string | ((task: object) => string),
    dir?: "asc" | "desc",
    tree?: boolean
}): void;
~~~

### 参数 {#parameters}

- `by` - （可选）搜索条件（[任务属性](api/configs/tasks_config.md#parameters)的键名，或返回字符串的搜索函数）
- `dir` - （可选）排序方向：`"asc"` 或 `"desc"`
- `tree` - （可选）启用/禁用子任务排序；默认为 `false`

### 示例 {#example}

~~~js {21-25}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "a", text: "A" },
        { id: "ac", text: "C", parent: "a" },
        { id: "ad", text: "D", parent: "a" },
        { id: "aa", text: "A", parent: "a" },
        { id: "ab", text: "B", parent: "a" },
        { id: "c", text: "C" },
        { id: "d", text: "D" },
        { id: "b", text: "B" },
    ],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 按 "text" 参数升序排列任务
list.setSort({
    by: task => task.id, // 或 by: "text"
    dir: "asc",
    // tree: true // 启用树形排序，默认为 false
});
~~~

**变更日志：** 在 v1.1 中新增

**相关文章：** [任务的排序与过滤](guides/sorting_filtering_tasks.md)
