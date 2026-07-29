---
sidebar_label: edit-item
title: edit-item Event
description: You can learn about the edit-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# edit-item

### Описание {#description}

@short: Срабатывает при редактировании значения задачи/проекта через встроенный редактор

### Использование {#usage}

~~~js
"edit-item": ({
    id: string | number,
    currentValue: string
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `edit-item` может принимать объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи/проекта
- `currentValue` - (обязательный) текущее (ещё не сохранённое) значение задачи/проекта

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

// подписка на событие "edit-item"
list.api.on("edit-item", ({id, currentValue}) => {
    console.log("The current value of the", id, "item is", currentValue); 
});
~~~

**Полезная статья:** [Встроенное редактирование](guides/inline_editing.md)
