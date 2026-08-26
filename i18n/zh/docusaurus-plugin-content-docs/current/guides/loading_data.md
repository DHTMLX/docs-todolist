---
sidebar_label: 加载与存储数据
title: 加载与存储数据
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解加载与存储数据的相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费试用版。
---

# 加载与存储数据 {#loading-and-storing-data}

## 准备待加载的数据 {#prepare-data-to-load}

DHTMLX To Do List 通过以下配置属性接受各类数据：

- [`tasks`](api/configs/tasks_config.md) - 任务列表
- [`projects`](api/configs/projects_config.md) - 项目列表
- [`users`](api/configs/users_config.md) - 用户列表
- [`priorities`](api/configs/priorities_config.md) - 优先级列表
- [`tags`](api/configs/tags_config.md) - 标签列表
- [`activeProject`](api/configs/activeproject_config.md) - 当前活动项目的 id

将数据准备在单独的文件中。以下示例返回包含任务、项目、用户和优先级的数据集：

~~~js title="data.js"
function getData() {

    // 任务数据
    const tasks = [
        // "widgets" 项目的任务数据
        {
            id: "widgets",
            project: "widgets",
            text: "\u{1F389} DHTMLX widgets",
            priority: 1
        },
        {
            id: "gantt",
            project: "widgets",
            parent: "widgets",
            text: "Gantt",
            priority: 1
        },
        {
            id: "scheduler",
            project: "widgets",
            parent: "widgets",
            text: "Scheduler",
            priority: 2
        },
        {
            id: "diagram",
            project: "widgets",
            parent: "widgets",
            text: "Diagram",
            priority: 3
        },
        // "introduction" 项目的任务数据
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: null
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: [
                "user_2",
                "user_1",
                "user_3",
            ],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: null
        },
        {
            id: "1652097809881",
            project: "introduction",
            text: "You can create tasks with an infinite number of subtasks.",
            assigned: [
                "user_2"
            ],
            collapsed: false,
            priority: null
        },
        {
            id: "1652097809882",
            project: "introduction",
            parent: "1652097809881",
            text: "Use the Tab and Shift + Tab keys for this.",
            checked: false,
            priority: 3
        },
        {
            id: "1652097809887",
            project: "introduction",
            parent: "1652097809881",
            text: "Select and press Ctrl (Cmd) + Arrow up / Arrow down to change the task order.",
            checked: false,
            priority: null
        },
        // 更多任务对象
    ];

    // 项目数据
    const projects = [
        {
            id: "introduction",
            label: "Introduction to DHTMLX To Do List"
        },
        {
            id: "widgets",
            label: "Our widgets"
        },
        // 更多项目对象
    ];

    // 用户数据
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar: "../avatar_02.jpg"
        },
        {
            id: "user_2",
            label: "Nadia Chasey",
            avatar: "../avatar_05.jpg"
        },
        {
            id: "user_3",
            label: "Mike Young",
            avatar: "../avatar_21.jpg"
        },
        // 更多用户对象
    ];

    // 优先级数据
    const priorities = [
        {
            id: 1,
            label: "Critical",
            color: "#f33",
        },
        {
            id: 2,
            label: "Major",
            color: "rgba(255, 225, 0, 1)",
        },
        {
            id: 3,
            label: "Normal",
            color: "hsla(170, 100%, 40%, 1)",
        },
        {
            id: 4,
            label: "Minor",
            hotkey: "Alt+M",
        },
        // 更多优先级对象
    ];

    return { tasks, projects, users, priorities };
}
~~~

在页面中引入该文件，以便项目可以使用这些数据：

~~~html title="index.html"
<script src="../data.js"></script>
~~~

对返回的对象进行解构，以访问各个数据集：

~~~js title="index.js"
const { tasks, users, projects, priorities } = getData();
~~~

## 从本地源加载 {#load-from-a-local-source}

### 在初始化时加载数据 {#load-data-on-initialization}

在初始化时将[预定义数据](guides/loading_data.md#prepare-data-to-load)加载到 To Do List 中。以下示例通过配置属性传入数据：

~~~js {2,5-8} title="index.js"
const { ToDo } = todo;
const { tasks, users, projects, priorities } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    priorities,
});
~~~

### 在初始化后加载数据 {#load-data-after-initialization}

要将数据加载到已初始化的 To Do List 中，请使用 [`parse()`](api/methods/parse_method.md) 方法。以下代码片段将数据解析到一个已初始化的列表中：

~~~js {3,5,12-17} title="index.js"
const { ToDo, Toolbar } = todo;

const { users, projects, tasks, priorities } = getData();

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 将数据解析到组件中
list.parse({
    tasks,
    users,
    projects,
    priorities
});
~~~

## 保存与恢复状态 {#save-and-restore-state}

要保存当前状态，请使用 [`serialize()`](api/methods/serialize_method.md) 方法。该方法将当前数据转换为 JSON 对象。以下代码片段存储序列化后的状态：

~~~js
const state = list.serialize();
// {
//    tasks: [{...}, {...}, ...],
//    users: [{...}, {...}, ...],
//    projects: [{...}, {...}, ...],
//    priorities: [{...}, {...}, ...],
//    tags: [],
//    activeProject: string,
// }
~~~

将保存的状态通过 `parse()` 方法传入另一个 To Do List 实例。以下示例将状态恢复到新实例中：

~~~js
// 创建新的 To Do 实例
const list2 =  new ToDo("#root2", {});

// 将一个 To Do List 的状态解析到另一个实例中
list2.parse(state);
~~~
