---
sidebar_label: start-drag
title: start-drag Event
description: You can learn about the start-drag event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# start-drag

### Описание {#description}

@short: Срабатывает, когда пользователь начинает перетаскивать задачи

### Использование {#usage}

~~~js
"start-drag":({
    start: string | number,
    mode: "move" | "copy"
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `start-drag` принимает объект со следующими параметрами:

- `start` - (обязательный) идентификатор задачи, с которой началось перетаскивание
- `mode` - (обязательный) режим drag-n-drop:
    - `move` - режим перемещения
    - `copy` - режим копирования

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

// подписка на событие "start-drag"
list.api.on("start-drag", ({ start, mode }) => {
    console.log(start, mode);
});
~~~

**История изменений:** Добавлено в v1.1

**Связанная статья:** [Drag-n-drop](guides/configuration.md#drag-n-drop)
