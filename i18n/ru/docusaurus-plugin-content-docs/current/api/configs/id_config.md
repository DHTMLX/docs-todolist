---
sidebar_label: id
title: id Config
description: You can learn about the id config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# id

### Описание {#description}

@short: Необязательный. Идентификатор To Do List

:::info
Генерируется автоматически, обеспечивает корректную работу частей компонента, таких как Toolbar
:::

### Использование {#usage}

~~~js
id?: string | number;
~~~

### Пример {#example}

~~~js {9}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// создание To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    id: "root"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~
