---
sidebar_label: add-project
title: add-project Event
description: You can learn about the add-project event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# add-project

### Описание {#description}

@short: Срабатывает при добавлении нового проекта

### Использование {#usage}

~~~js
"add-project": ({
    id: string | number,
    project?: object
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `add-project` может принимать объект со следующими параметрами:

- `id` - (обязательный) идентификатор созданного проекта
- `project` - (необязательный) объект с параметрами проекта:
  - `label` - (необязательный) название проекта

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

// подписка на событие "add-project"
list.api.on("add-project", ({id, project}) => {
    console.log("A new ", project.label, " project with ID:", id, "is added");
});
~~~

**Полезная статья:** [Операции с проектами](guides/project_operations.md#adding-a-new-project)
