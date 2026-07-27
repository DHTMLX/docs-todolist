---
sidebar_label: unindent-task
title: unindent-task Event
description: You can learn about the unindent-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# unindent-task

### Описание {#description}

@short: Срабатывает, когда уровень вложенности задачи повышается на один уровень

### Использование {#usage}

~~~js
"unindent-task": ({
    id: string | number
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `unindent-task` принимает объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи

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

// подписка на событие "unindent-task"
list.api.on("unindent-task", ({id}) => {
    console.log("The nesting level of the", id, "task is promoted by one"); 
});
~~~ 

**Полезная статья:** [Операции с задачами](guides/task_operations.md#changing-the-indent-level-of-a-task)
