---
sidebar_label: copy-task
title: copy-task Event
description: You can learn about the copy-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# copy-task

### Описание {#description}

@short: Срабатывает при копировании задачи в буфер обмена

### Использование {#usage}

~~~js
"copy-task": ({
    id: string | number,
    join?: boolean,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `copy-task` принимает объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи
- `join` - (необязательный) определяет режим, в котором была скопирована задача:
    - `true` - режим множественного копирования
    - `false` - режим одиночного копирования

Если скопированная задача также вставляется из буфера обмена в другое место, объект может содержать *ещё четыре* параметра:

- `parent` - (необязательный) ID родительской задачи
- `project` - (необязательный) ID проекта
- `targetId` - (необязательный) ID целевой задачи, на место которой вставляется скопированная задача
- `reverse` - (необязательный) `true`, если скопированная задача вставляется перед целевой; иначе `false`

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

// подписка на событие "copy-task"
list.api.on("copy-task", ({id}) => {
    console.log("The", id, "task is copied"); 
});
~~~ 

**Журнал изменений:** Параметр `join` добавлен в v1.1

**Полезная статья:** [Операции с задачами](guides/task_operations.md#copyingpasting-a-task)
