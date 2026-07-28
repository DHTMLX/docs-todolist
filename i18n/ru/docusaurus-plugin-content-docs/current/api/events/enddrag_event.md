---
sidebar_label: end-drag
title: Событие end-drag
description: Вы можете узнать о событии end-drag в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# end-drag

### Описание {#description}

@short: Срабатывает, когда перетаскивание задачи (задач) завершено

### Использование {#usage}

~~~js
"end-drag":({
    target: string | number | null,
    dropPosition: "top" | "bottom" | "in" | null,
    mode: "move" | "copy"
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `end-drag` может принимать объект со следующими параметрами:

- `target` - (обязательный) идентификатор задачи, на которой завершилось перетаскивание
- `dropPosition` - (обязательный) позиция, в которую была сброшена перетаскиваемая задача:
    - `top` - над целевой задачей
    - `bottom` - под целевой задачей
    - `in` - на целевую задачу
- `mode` - (обязательный) режим перетаскивания:
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
    api: list.api
});

// подписка на событие "drag"
list.api.on("drag", ({ target, dropPosition, mode }) => {
    console.log(target, dropPosition, mode);
});
~~~

**Журнал изменений:** Добавлено в v1.1

**Полезная статья:** [Drag-n-drop](guides/configuration.md#drag-n-drop)
