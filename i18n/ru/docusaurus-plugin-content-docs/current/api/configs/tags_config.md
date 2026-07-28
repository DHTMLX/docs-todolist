---
sidebar_label: tags
title: tags Config
description: You can learn about the tags config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# tags

### Описание {#description}

@short: Необязательный. Массив хэштегов, отображаемых по умолчанию

:::tip
Чтобы просмотреть список хэштегов, введите `#` в строке поиска или в текстовом редакторе
:::

### Использование {#usage}

~~~js
tags?: string[];
~~~

:::info
Хэштег может начинаться с любого символа — символ `#` добавляется автоматически
:::

### Пример {#example}

~~~js {8}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags: ["urgent", "normal"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Полезные статьи:** 
- [Загрузка и хранение данных](guides/loading_data.md)
- [Встроенное редактирование](guides/inline_editing.md)
