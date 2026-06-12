---
sidebar_label: history 
title: history Config
description: You can learn about the history config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# history

### Описание {#description}

@short: Необязательный. Включает/отключает управление историей изменений

:::info
С помощью свойства `history` можно включить или отключить управление историей изменений в To Do List. Если задать свойству `history` значение `false`, управление историей изменений через методы [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) и элементы управления на Toolbar будет недоступно.
:::

### Использование {#usage}

~~~js
history?: boolean; 
// or 
history?: { 
    projects?: boolean, 
    limit?: number 
};
~~~

### Параметры {#parameters}

Для настройки свойства `history` можно использовать **краткий** или **расширенный** подход:

**Краткий** подход:

- `history` - (необязательный) включает/отключает историю изменений в To Do List

**Расширенный** подход:
- `history` - (необязательный) объект с расширенными настройками истории изменений. Можно указать следующие параметры:
    - `projects` - (необязательный) включает/отключает ветвление истории

    :::info
    Если задать параметру `projects` значение `true`, история изменений будет вестись отдельно для каждого проекта; иначе — история изменений будет общей для всего приложения.
    :::

    - `limit` - (необязательный) ограничивает количество операций в истории

### Конфигурация по умолчанию {#default-config}

~~~jsx {}
history: true
~~~

### Пример {#example}

~~~js {9}
const { ToDo } = todo;
const { tasks, users, projects } = getData();

// создание To Do List
new ToDo("#root", {
    tasks,
    users,
    projects,
    history: { projects: false, limit: 20 }
});
~~~

**История изменений:** Конфиг `history` добавлен в v1.3

**Связанный API:**
    - [`redo`](api/methods/redo_method.md)
    - [`undo`](api/methods/undo_method.md)
