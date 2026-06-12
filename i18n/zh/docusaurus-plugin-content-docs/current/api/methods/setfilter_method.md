---
sidebar_label: setFilter()
title: setFilter 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 setFilter 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# setFilter()

### 描述 {#description}

@short: 在当前活动项目中按指定条件筛选任务

### 用法 {#usage}

~~~js
setFilter({
    match: string | null,
    by?: string,
    highlight?: boolean,
    strict?: boolean
}): void;
~~~

### 参数 {#parameters}

- `match` - （必填）匹配模式
- `by` - （可选）`task` 对象中用于搜索的参数；默认为 *text*
- `highlight` - （可选）定义是否高亮显示匹配结果
- `strict` - （可选）启用*严格*筛选模式，搜索将按精确匹配执行

:::info
若要重置筛选，请向该方法传入 `match: null`
:::

### 示例 {#example}

~~~js {13-16,19}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

// 创建 To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});

// 按指定规则筛选数据
list.setFilter({
    match: "ran",
    highlight: true
});

// 重置筛选
list.setFilter({ match: null });
~~~

**相关文章：** [任务排序与筛选](guides/sorting_filtering_tasks.md)
