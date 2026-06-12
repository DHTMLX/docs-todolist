---
sidebar_label: items
title: items Config
description: В документации библиотеки DHTMLX JavaScript To Do List вы можете узнать о конфигурации items компонента Toolbar. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# items

### Описание {#description}

@short: Необязательный. Задаёт элементы управления, которые будут отображаться в панели инструментов To Do List

### Использование {#usage}

~~~js
items?: [
    "combo",
    "search",
    "menu",
    "undo",
    "redo"
    custom_control // строка или функция
];
~~~

### Конфигурация по умолчанию {#default-config}

~~~js
items: ["combo", "search", "menu"]
~~~

### Параметры {#parameters}

Массив `items` может включать следующие параметры:

- `"combo"` - элемент управления combo для выбора проекта
- `"search"` - строка поиска
- `"menu"` - меню с набором опций, которые позволяют:
    - сортировать задачи в порядке возрастания/убывания по следующим критериям:
        - по тексту
        - по дате выполнения
        - по дате завершения
        - по дате создания
        - по дате редактирования
    - скрывать/показывать выполненные задачи
    - добавлять новый проект, переименовывать или удалять текущий активный проект
- `"undo"` - элемент управления, отменяющий последнее действие
- `"redo"` - элемент управления, повторяющий действие, отменённое с помощью undo
- `"custom_item"` - пользовательский элемент управления, заданный как строка или функция

:::tip
Вы можете задать собственную структуру панели инструментов, перечислив необходимые элементы в массиве `items` в нужном порядке
:::

### Пример {#example}

~~~js {12-19}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: [
        `<div style="font-weight:500;font-size:18px;padding:0 10px; width: 100%">Logo<div/>`,
        "search",
        "menu",
        "undo",
        "redo",
        `<div style="margin-left: auto; padding-left: 10px;"><button class="g-btn g-btn--sm">Custom button</button></div>`,
    ]
});
~~~

**История изменений**: Параметры `"undo"` и `"redo"` добавлены в v1.3

**Связанные статьи**:
- [Конфигурация](guides/configuration.md#toolbar)
- [Кастомизация](guides/customization.md#customize-the-toolbar)
