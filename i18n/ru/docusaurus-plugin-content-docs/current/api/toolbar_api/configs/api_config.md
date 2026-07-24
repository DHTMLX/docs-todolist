---
sidebar_label: api
title: api Config
description: В документации библиотеки DHTMLX JavaScript To Do List вы можете узнать о конфигурации api компонента Toolbar. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# api

### Описание {#description}

@short: Обязательный. Объект с внутренним API компонента To Do List

:::info
Использование внутреннего API компонента To Do List необходимо для корректной работы строки поиска и элементов управления, расположенных в Toolbar
:::

### Использование {#usage}

~~~js
api: object;
~~~

### Пример {#example}

~~~js {11}
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
});
~~~

**Полезная статья:**
- [Инициализация](guides/initialization.md)
