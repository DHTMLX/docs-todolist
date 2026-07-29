---
sidebar_label: assign-user
title: assign-user Event
description: You can learn about the assign-user event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# assign-user

### Описание {#description}

@short: Срабатывает при назначении пользователя на задачу

### Использование {#usage}

~~~js
"assign-user": ({
    id: string | number,
    userId: string | number
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `assign-user` может принимать объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи
- `userId` - (обязательный) идентификатор пользователя, назначенного на задачу

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](category/event-bus-methods.md)
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

// подписка на событие "assign-user"
list.api.on("assign-user", ({id, userId}) => {
    console.log("The", userId, "user is assigned to the", id, "task"); 
});
~~~

**Полезная статья:** [Пользователи задачи](guides/task_users.md)
