---
sidebar_label: delete-task
title: delete-task Event
description: You can learn about the delete-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# delete-task

### Описание {#description}

@short: Срабатывает при удалении задачи

### Использование {#usage}

~~~js
"delete-task": ({
    id: string | number,
    batch?: (string | number)[]
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `delete-task` может принимать объект со следующими параметрами:

- `id` - (обязательный) ID удалённой задачи
- `batch` - (необязательный) массив ID задач, удалённых совместно в рамках пакетной операции

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

// подписка на событие "delete-task"
list.api.on("delete-task", ({id}) => {
    console.log("The", id, "task is removed"); 
});
~~~

**Связанная статья:** [Операции с задачами](guides/task_operations.md#deleting-a-task)
