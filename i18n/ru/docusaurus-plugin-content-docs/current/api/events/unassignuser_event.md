---
sidebar_label: unassign-user
title: unassign-user Event
description: You can learn about the unassign-user event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# unassign-user

### Описание {#description}

@short: Срабатывает, когда пользователь снимается с задачи

### Использование {#usage}

~~~js
"unassign-user": ({
    id: string | number,
    userId: string | number
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `unassign-user` принимает объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи
- `userId` - (обязательный) идентификатор пользователя, снятого с задачи

:::info
Для обработки внутренних событий используйте [**методы Event Bus**](category/event-bus-methods.md)
:::

### Пример {#example}

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

// подписка на событие "unassign-user"
list.api.on("unassign-user", ({id, userId}) => {
    console.log("The", userId, "user is unassigned from the", id, "task");
});
~~~

**Связанная статья:** [Пользователи задач](guides/task_users.md)
