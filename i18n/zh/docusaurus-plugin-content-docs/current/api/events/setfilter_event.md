---
sidebar_label: set-filter
title: set-filter 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 set-filter 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# set-filter

### 描述 {#description}

@short: 当按指定条件过滤数据时触发

### 用法 {#usage}

~~~js
"set-filter": ({
    match?: string | null,
    by?: string,
    highlight?: boolean,
    strict?: boolean
}) => void;
~~~

### 参数 {#parameters}

`set-filter` 事件的回调函数可接受一个包含以下参数的对象：

- `match` - （可选）匹配模式
- `by` - （可选）用于搜索的 `task` 对象属性
- `highlight` - （可选）定义是否高亮显示匹配结果
- `strict` - （可选）若启用*严格*过滤模式则为 `true`；否则为 `false`

:::info
如需处理内部事件，可使用 [**Event Bus 方法**](category/event-bus-methods.md)
:::

### 示例 {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 订阅 "set-filter" 事件
list.api.on("set-filter", (obj) => {
    console.log(obj);
});
~~~

**相关文章：** [任务排序与过滤](guides/sorting_filtering_tasks.md)
