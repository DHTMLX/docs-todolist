---
sidebar_label: delete-project
title: delete-project Event
description: You can learn about the delete-project event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# delete-project

### Описание {#description}

@short: Срабатывает при удалении проекта

### Использование {#usage}

~~~js
"delete-project": ({
    id: string | number
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `delete-project` может принимать объект со следующими параметрами:

- `id` - (обязательный) ID проекта

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

// подписка на событие "delete-project"
list.api.on("delete-project", ({id}) => {
    console.log("The project with ID:", id, "is removed");
});
~~~

**Связанная статья:** [Операции с проектами](guides/project_operations.md#deleting-a-project)
