---
sidebar_label: clone-task
title: clone-task Event
description: You can learn about the clone-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# clone-task

### Описание {#description}

@short: Срабатывает при вставке задачи из буфера обмена в указанную позицию

Событие срабатывает после события [paste-task](api/events/pastetask_event.md)

### Использование {#usage}

~~~js
"clone-task": ({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    batch: obj[]
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `clone-task` может принимать объект со следующими параметрами:

- `parent` - (необязательный) идентификатор родительской задачи
- `project` - (необязательный) идентификатор проекта
- `targetId` - (необязательный) идентификатор целевой задачи, в позицию которой была вставлена задача
- `reverse` - (необязательный) `true`, если задача была вставлена перед целевой задачей; иначе `false`
- `batch` - (обязательный) массив объектов, созданных при копировании и затем вставленных

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

// подписка на событие "clone-task"
list.api.on("clone-task", (obj) => {
    console.log(obj); 
});
~~~

**Связанная статья**: [Операции с задачами](guides/task_operations.md#copyingpasting-a-task)
