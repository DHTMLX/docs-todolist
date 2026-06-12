---
sidebar_label: close-inline-editor
title: close-inline-editor Event
description: You can learn about the close-inline-editor event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# close-inline-editor

### Описание {#description}

@short: Срабатывает при закрытии встроенного редактора задачи/проекта

### Использование {#usage}

~~~js
"close-inline-editor": ({
    id: string | number,
    save: boolean
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `close-inline-editor` может принимать объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи/проекта
- `save` - (обязательный) `true`, если внесённые изменения были сохранены после закрытия редактора; иначе `false`

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

// подписка на событие "close-inline-editor"
list.api.on("close-inline-editor", ({id, save}) => {
    console.log("The inline editor is closed for the", id, "item"); 
});
~~~

**Связанная статья:** [Встроенное редактирование](guides/inline_editing.md#working-with-editor)
