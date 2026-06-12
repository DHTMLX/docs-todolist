---
sidebar_label: users
title: users Config
description: You can learn about the users config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# users

### Описание {#description}

@short: Необязательный. Задаёт массив объектов с данными пользователей

### Использование {#usage}

~~~js
users?: [
    {
        id: string | number,
        label: string,
        avatar?: string,
        color?: string,
    },
    {...} // more user objects
];
~~~

### Параметры {#parameters}

Свойство `users` представляет собой массив объектов пользователей. Каждый объект включает следующий набор параметров:

- `id` - (обязательный) идентификатор пользователя
- `label` - (обязательный) описание пользователя
- `avatar` - (необязательный) путь к изображению пользователя
- `color` - (необязательный) цвет иконки, если изображение не загружено

:::info
Если параметр `color` не задан, будет применён цвет из набора цветов по умолчанию.
:::

### Пример {#example}

~~~js {29-40,48}
const { ToDo, Toolbar } = todo;

const tasks = [
    {
        id: "1",
        project: "books",
        // parent: null,
        text: "Read books",
        collapsed: false,
        due_date: new Date()
    },
    {
        id: "2",
        project: "books",
        parent: "1",
        text: "Don Quixote",
        assigned: [ "user_1" ],
    },
    {
        id: "3",
        project: "books",
        parent: "1",
        text: "The Great Gatsby",
        assigned: [ "user_2" ],
        checked: true,
    },
];

const users = [
    { 
        id: "user_1",
        label: "John",
        avatar: "../avatar_02.jpg" 
    },
    { 
        id: "user_2", 
        label: "Kate",
        avatar: "../avatar_03.jpg"  
    },
];

const projects = [
    { "id": "books", "label": "Books" },
];

const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Связанные статьи:**
- [Загрузка и хранение данных](guides/loading_data.md)
- [Пользователи задач](guides/task_users.md)
