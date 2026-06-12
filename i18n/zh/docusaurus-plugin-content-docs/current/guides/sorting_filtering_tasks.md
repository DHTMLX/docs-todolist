---
sidebar_label: 排序与筛选任务
title: 排序与筛选任务
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解任务的排序与筛选功能。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 排序与筛选任务

## 排序任务 {#sorting-tasks}

初始化完成后，可通过以下两种方式对任务进行排序：

- 通过[工具栏菜单](/#toolbar)的**排序方式**选项——按*文本*、*截止日期*、*完成日期*、*创建日期*或*编辑日期*排序
- 通过 [`setSort()`](api/methods/setsort_method.md) 方法——指定自定义排序函数，或按[任务属性](api/configs/tasks_config.md#parameters)排序

以下示例按 id 升序对任务进行排序：

~~~js
list.setSort({
    by: task => task.id, // or by: "text"
    dir: "asc",
    // tree: true // enable tree sort, false by default
});
~~~

## 筛选任务 {#filter-tasks}

可通过以下两种方式筛选任务：

- 通过工具栏的[搜索栏](/#toolbar)
- 通过 [`setFilter()`](api/methods/setfilter_method.md) 方法——支持用于精确匹配的*严格*模式

以下代码片段在严格模式下按指定话题标签筛选任务：

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
