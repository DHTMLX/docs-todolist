---
sidebar_label: taskShape
title: taskShape 配置项
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 taskShape 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# taskShape

### 描述 {#description}

@short: 可选。包含任务外观设置的对象

### 用法 {#usage}

~~~js
taskShape?: {
    counter?: {
        type: "percentage" | "number", 
    },
    date?: {
        format: string,
        validate: boolean
    },
    completed?: {
        behavior: "manual" | "auto",
        taskHide: boolean
    },
    priority?: {
        cover: boolean,
        label: boolean
    }
};
~~~

### 默认配置 {#default-config}

~~~js
taskShape: {
    counter: {
        type: "number", 
    },
    date: {
        format: "%d %M %Y",
        validate: true 
    },
    completed: {
        behavior: "auto",
        taskHide: false
    },
    priority: {
        cover: true,
        label: true
    }
}
~~~

### 参数 {#parameters}

要配置任务的外观，可以在 `taskShape` 对象中指定以下参数：

- `counter` - （可选）包含已完成第一级子任务计数器设置的对象：
    - `type` - （必填）计数器的显示类型，共有两种类型：
        - *"number"* - 计数器的值以比例形式显示：已完成子任务数与子任务总数之比
        - *"percentage"* - 计数器的值以百分比形式显示
- `date` - （可选）包含日期设置的对象：
    - `format` - （必填）定义日期的显示格式，默认为 "%d %M %Y"。可用字符的完整列表见[下方](#list-of-characters)
    - `validate` - （必填）定义是否对[任务对象](api/configs/tasks_config.md)的 `due_date` 属性进行验证
- `completed` - （可选）包含已完成任务标记与显示管理设置的对象，包含以下参数：
    - `behavior` - （必填）设置将父任务和子任务标记为已完成/未完成时的行为，共有两种选项：
        - *"auto"* - 启用 `"auto"` 模式：
            - 当所有子任务标记为已完成时，父任务自动标记为已完成
            - 当父任务标记为已完成时，所有子任务自动标记为已完成
            - 若将已完成任务的至少一个子任务标记为未完成，该任务自动标记为未完成
            - 若将父任务标记为未完成，所有子任务自动变为未完成
        - *"manual"* - 启用 `"manual"` 模式。需要手动逐一将每个任务（包括子任务和父任务）标记为已完成
    - `taskHide` - （必填）启用/禁用从列表中隐藏已完成任务的模式
- `priority` - （可选）包含优先级外观设置的对象，可指定以下参数：
    - `cover` - （必填）指定是否显示优先级封面
    - `label` - （必填）指定是否显示优先级标签

### 示例 {#example}

~~~js {10-26}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, priorities } = getData();

// 创建 To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    priorities,
    taskShape: {
        counter: {
            type: "percentage",
        },
        date: {
            format: "%d %m %Y",
            validate: false,
        },
        completed: {
            behavior: "manual",
            taskHide: true,
        },
        priority: {
            cover: true,
            label: false,
        }
    }
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

### 字符列表 {#list-of-characters}

DHTMLX To Do List 使用以下字符设置日期格式：

| 字符 | 含义 |
|-----------|---------------------------------------------------|
| `%d`    | 带前导零的日期数字，01..31         |
| `%j`    | 不带前导零的日期数字，1..31                            |
| `%D`    | 星期的缩写名称，Su Mo Tu...                |
| `%l`    | 星期的全称，Sunday Monday Tuesday...    |
| `%m`    | 带前导零的月份数字，01..12       |
| `%n`    | 不带前导零的月份数字，1..12                          |
| `%M`    | 月份的缩写名称，Jan Feb Mar...           |
| `%F`    | 月份的全称，January February March... |
| `%y`    | 两位数字表示的年份                        |
| `%Y`    | 四位数字表示的年份                        |

:::tip
查看[**本地化**](guides/localization.md)文章，了解如何以所需语言显示日期标签
:::

**更新日志：**

- `priority` 参数在 v1.2 中新增

**相关文章：**

- [配置](guides/configuration.md#tasks)
- [显示/隐藏已完成任务](guides/hide_completed_tasks.md)

**相关示例：**
- [To Do List. 子任务计数器与日期格式](https://snippet.dhtmlx.com/magidhw8?tag=todolist)
- [To Do List. 两种标记父任务完成的方式](https://snippet.dhtmlx.com/5892fcr2?tag=todolist)
- [To Do List. 设置优先级的自定义热键](https://snippet.dhtmlx.com/5cymicwt?tag=todolist)
