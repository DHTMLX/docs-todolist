---
sidebar_label: open-inline-editor
title: Событие open-inline-editor
description: Вы можете узнать о событии open-inline-editor в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# open-inline-editor

### Описание {#description}

@short: Срабатывает при открытии встроенного редактора задачи/проекта

### Использование {#usage}

~~~js
"open-inline-editor": ({
    id: string | number,
    type: "task" | "project"
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `open-inline-editor` может принимать объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи/проекта
- `type` - (обязательный) тип элемента: "task" или "project"

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

// подписка на событие "open-inline-editor"
list.api.on("open-inline-editor", ({id, type}) => {
    console.log("The inline editor is opened for the", type, "with ID:", id); 
});
~~~

**Связанная статья:** [Встроенное редактирование](guides/inline_editing.md#working-with-editor)
