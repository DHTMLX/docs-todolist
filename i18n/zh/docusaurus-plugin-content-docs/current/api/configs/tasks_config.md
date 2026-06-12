---
sidebar_label: tasks
title: tasks 配置项
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 tasks 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# tasks

### 描述 {#description}

@short: 可选。指定一个任务对象数组，用于设置到列表中

### 用法 {#usage}

~~~js
tasks?: [
    {
        id?: string | number,
        parent?: string | number,
        project?: string | number,
        text?: string,
        checked?: boolean,
        collapsed?: boolean,
        assigned?: (string | number)[],
        due_date?: Date | string,
        creation_date?: Date | string,
        completion_date?: Date | string,
        edited_date?: Date | string,
        priority?: number | null,
        [key: string]?: any
    },
    {...} // 更多任务对象
];
~~~

### 参数 {#parameters}

`tasks` 属性表示一个任务对象数组。每个对象包含以下参数：

- `id` - （可选）任务的 id
- `parent` - （可选）父任务的 id。根任务的该参数值为 `null | undefined`
- `project` - （可选）任务所属项目的 id。若要初始化项目，请使用 [projects](api/configs/projects_config.md) 属性。

:::info
如果已初始化项目，请为根任务指定对应项目的 ID，以使其显示在该项目中。

如果未为根任务指定项目 ID，或将其设为 *null* 或 *undefined*，该任务将归属于 *无项目* 分组。
:::

- `text` - （可选）任务的文本内容
- `checked` - （可选）将任务标记为已完成
- `collapsed` - （可选）定义任务初始时是否折叠（适用于有子任务的任务）
- `assigned` - （可选）包含已分配人员 ID 的数组。若要初始化被分配人员列表，请使用 [users](api/configs/users_config.md) 属性。
- `due_date` - （可选）任务必须完成的日期
- `creation_date` - （可选）任务创建日期（自动生成）
- `completion_date` - （可选）任务完成日期（将任务标记为完成时自动生成；标记为未完成时自动移除）
- `edited_date` - （可选）任务编辑日期（更改任务文本时自动生成）
- `priority` - （可选）任务的优先级。若要设置优先级，请使用 [priorities](api/configs/priorities_config.md) 属性
- `[key: string]` - （可选）自定义属性集合

### 示例 {#example}

~~~js {3-30,42}
const { ToDo, Toolbar } = todo;

const tasks = [
    {
        id: "1",
        project: "books",
        // parent: null,
        text: "Read books",
        collapsed: false,
        due_date: new Date(),
        priority: 1
    },
    {
        id: "2",
        project: "books",
        parent: "1",
        text: "Don Quixote",
        assigned: [ "user_1" ],
        priority: 2
    },
    {
        id: "3",
        project: "books",
        parent: "1",
        text: "The Great Gatsby",
        assigned: [ "user_2" ],
        checked: true,
        priority: null
    },
];

const users = [
    { id: "user_1", label: "John" },
    { id: "user_2", label: "Kate" },
];

const projects = [
    { id: "books", label: "Books" },
];

const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**变更日志：** `priority` 参数在 v1.2 中新增

**相关文章：**
- [加载和存储数据](guides/loading_data.md)
- [管理任务](guides/task_index.md)
