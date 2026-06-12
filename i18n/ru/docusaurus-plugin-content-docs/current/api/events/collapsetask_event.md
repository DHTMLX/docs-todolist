---
sidebar_label: collapse-task
title: collapse-task Event
description: You can learn about the collapse-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# collapse-task

### Описание {#description}

@short: Срабатывает при сворачивании задачи

### Использование {#usage}

~~~js
"collapse-task": ({
    id: string | number
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `collapse-task` может принимать объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи

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

// подписка на событие "collapse-task"
list.api.on("collapse-task", ({id}) => {
    console.log("The", id, "task is collapsed"); 
});
~~~ 

**Связанная статья**: [Операции с задачами](guides/task_operations.md#expandingcollapsing-a-task)
