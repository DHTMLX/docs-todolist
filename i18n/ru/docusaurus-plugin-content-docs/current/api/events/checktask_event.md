---
sidebar_label: check-task
title: check-task Event
description: You can learn about the check-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# check-task

### Описание {#description}

@short: Срабатывает при отметке задачи как выполненной

### Использование {#usage}

~~~js
"check-task": ({
    id: string | number,
    manual?: boolean
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `check-task` может принимать объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи
- `manual` - (необязательный) `true`, если задача отмечена как выполненная в режиме "manual"

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

// подписка на событие "check-task"
list.api.on("check-task", ({id}) => {
    console.log("The", id, "task is marked as completed"); 
});
~~~

**Связанная статья:** [Операции с задачами](guides/task_operations.md#marking-a-task-completeincomplete)
