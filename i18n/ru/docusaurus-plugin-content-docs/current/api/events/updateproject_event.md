---
sidebar_label: update-project
title: update-project Event
description: You can learn about the update-project event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# update-project

### Описание {#description}

@short: Срабатывает при обновлении проекта

### Использование {#usage}

~~~js
"update-project": ({
    id: string | number,
    project: object
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `update-project` принимает объект со следующими параметрами:

- `id` - (обязательный) идентификатор обновлённого проекта
- `project` - (обязательный) объект обновлённого проекта
    - `label` - (необязательный) название проекта

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

// подписка на событие "update-project"
list.api.on("update-project", ({id, project}) => {
    console.log("The label of the project with ID:", id, "is changed to", project.label);
});
~~~

**Связанная статья**: [Операции с проектами](guides/project_operations.md#updating-a-project)
