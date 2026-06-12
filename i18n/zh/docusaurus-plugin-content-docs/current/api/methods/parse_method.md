---
sidebar_label: parse()
title: parse 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 parse 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# parse()

### 描述 {#description}

@short: 将数据加载到 To Do List 中

### 用法 {#usage}

~~~js
parse({
    tasks?: [],
    users?: [],
    projects?: [],
    tags?: [],
    priorities?: [],
    activeProject?: string
}): void;
~~~

### 参数 {#parameters}

- [`tasks`](api/configs/tasks_config.md) - （可选）包含任务数据的对象数组
- [`users`](api/configs/users_config.md) - （可选）包含用户数据的对象数组
- [`projects`](api/configs/projects_config.md) - （可选）包含项目数据的对象数组
- [`tags`](api/configs/tags_config.md) - （可选）包含标签列表的数组
- [`priorities`](api/configs/priorities_config.md) - （可选）包含优先级数据的对象数组
- [`activeProject`](api/configs/activeproject_config.md) - （可选）当前活动项目的 ID

### 示例 {#example}

~~~js {3,10-14}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 将准备好的数据解析到组件中
list.parse({
    tasks,
    users,
    projects,
});
~~~

**相关文章：** [加载与存储数据](guides/loading_data.md)
