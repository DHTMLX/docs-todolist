---
sidebar_label: 任务负责人
title: 任务负责人
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解任务负责人相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 任务负责人

将任务委派给一个或多个人员。

## 配置任务负责人 {#configure-task-assignees}

通过 [`users`](api/configs/users_config.md) 配置属性指定负责人列表。以下示例定义了四名用户：

~~~js
const users = [
    { id: "user_1", label: "Don Smith", avatar: "../avatar_61.jpg"},
    { id: "user_2", label: "Nadia Chasey", avatar: "../avatar_63.jpg" },
    { id: "user_3", label: "Mike Young", avatar: "../avatar_03.jpg" },
    { id: "user_4", label: "Elvira Webb", avatar: "../avatar_33.jpg" }
];

const list = new ToDo("#root", { users });
~~~

## 初始化时设置负责人 {#set-assignees-on-initialization}

要在初始化时为任务指定负责人，将负责人 id 传入相关 [`task`](api/configs/tasks_config.md) 对象的 `assigned` 参数。以下代码片段为一个任务分配了四名用户：

~~~js {11}
const users = [
    { id: "user_1", label: "Don Smith", avatar: "../avatar_61.jpg"},
    ...
];

const tasks = [
    {
        id: "2",
        project: "introduction",
        text: "You can assign task performers using the menu.",
        assigned: [ "user_1", "user_2", "user_3", "user_4" ],
    }
];

const list = new ToDo("#root", {
    tasks,
    users
});
~~~

已分配的人员显示在任务右侧。

![DHTMLX To Do List 中分配给任务的用户](/img/users.png)

单击头像可查看分配给任务的人员列表；在列表外部单击可关闭。

## 变更任务负责人 {#change-task-assignees}

初始化后，可通过以下两种方式重新分配或移除任务负责人：

- 通过任务菜单的**分配给**选项
- 通过 [`assignUser()`](api/methods/assignuser_method.md) 和 [`unassignUser()`](api/methods/unassignuser_method.md) 方法

以下示例为一个任务分配用户，并从另一个任务中移除用户：

~~~js
// assign a person to the task
list.assignUser({
    id: "3",
    userId: "user_1"
});

// unassign a person from the task
list.unassignUser({
    id: "2",
    userId: "user_1"
});
~~~
