---
sidebar_label: uncheck-task
title: uncheck-task Event
description: You can learn about the uncheck-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# uncheck-task

### Описание {#description}

@short: Срабатывает, когда задача помечается как невыполненная

### Использование {#usage}

~~~js
"uncheck-task": ({
    id: string | number,
    manual?: boolean
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `uncheck-task` принимает объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи
- `manual` - (необязательный) `true`, если задача помечена как невыполненная в «ручном» режиме

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

// подписка на событие "uncheck-task"
list.api.on("uncheck-task", ({id}) => {
    console.log("The", id, "task is marked as uncompleted"); 
});
~~~

**Связанная статья**: [Операции с задачами](guides/task_operations.md#marking-a-task-completeincomplete)
