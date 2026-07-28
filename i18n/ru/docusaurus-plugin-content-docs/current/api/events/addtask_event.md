---
sidebar_label: add-task
title: add-task Event
description: You can learn about the add-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# add-task

### Описание {#description}

@short: Срабатывает при добавлении новой задачи

### Использование {#usage}

~~~js
"add-task": ({
    id: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    task: object
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `add-task` может принимать объект со следующими параметрами:

- `id` - (обязательный) идентификатор добавленной задачи
- `parent` - (необязательный) идентификатор родительской задачи
- `project` - (необязательный) идентификатор проекта
- `targetId` - (необязательный) идентификатор целевой задачи
- `reverse` - (необязательный) `true`, если задача добавляется перед целевой задачей; иначе `false`
- `task` - (обязательный) объект добавленной задачи

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

// подписка на событие "add-task"
list.api.on("add-task", (obj) => {
    console.log("A new task is added", obj);
});
~~~

**Полезная статья:** [Операции с задачами](guides/task_operations.md#adding-a-new-task)
