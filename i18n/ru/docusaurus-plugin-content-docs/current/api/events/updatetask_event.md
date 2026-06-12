---
sidebar_label: update-task
title: update-task Event
description: You can learn about the update-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# update-task

### Описание {#description}

@short: Срабатывает при обновлении задачи

### Использование {#usage}

~~~js
"update-task": ({
    id: string | number,
    task: object,
    skipProvider?: boolean,
    batch?: object[]
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `update-task` принимает объект со следующими параметрами:

- `id` - (обязательный) идентификатор обновлённой задачи
- `task` - (обязательный) объект обновлённой задачи
- Дополнительные параметры для работы с [RestDataProvider](guides/working_with_server.md):
  - `skipProvider` - (необязательный) позволяет пропускать события, отправляемые в RestDataProvider; если `false (по умолчанию)`, RestDataProvider обрабатывает событие, `true` — RestDataProvider пропускает событие
  - `batch` - (необязательный) массив объектов обновлённых задач

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

// подписка на событие "update-task"
list.api.on("update-task", ({id, task}) => {
    console.log("The", id, "task is updated. New task object is", task);
});
~~~


**Связанная статья:** [Операции с задачами](guides/task_operations.md#updating-a-task)
