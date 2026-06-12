---
sidebar_label: drag
title: drag Event
description: You can learn about the drag event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# drag

### Описание {#description}

@short: Срабатывает при перетаскивании задач пользователем

### Использование {#usage}

~~~js
"drag":({
    start: string | number,
    source: (string | number)[],
    target: string | number | null,
    dropPosition: "top" | "bottom" | "in" | null
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `drag` может принимать объект со следующими параметрами:

- `start` - (обязательный) ID задачи, с которой началось перетаскивание
- `source` - (обязательный) массив ID перетаскиваемых задач
- `target` - (обязательный) ID потенциальной целевой задачи
- `dropPosition` - (обязательный) позиция относительно целевой задачи, в которую будут помещены задачи:
    - `top` - выше целевой задачи
    - `bottom` - ниже целевой задачи
    - `in` - на целевую задачу

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

// подписка на событие "drag"
list.api.on("drag", ({start, source, target, dropPosition}) => {
    console.log(start, source, target, dropPosition);
});
~~~

**История изменений:** Добавлено в v1.1

**Связанная статья:** [Drag-n-drop](guides/configuration.md#drag-n-drop)
