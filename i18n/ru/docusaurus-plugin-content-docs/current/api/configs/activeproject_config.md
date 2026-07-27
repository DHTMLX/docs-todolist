---
sidebar_label: activeProject
title: activeProject Config
description: You can learn about the activeProject config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# activeProject

### Описание {#description}

@short: Необязательный. Идентификатор активного проекта

:::info
Если указанный активный проект не существует или в To Do List вообще не загружены проекты, при инициализации компонента отобразится раздел *Без проекта*.

Задачи будут принадлежать разделу *Без проекта* в следующих случаях:
- если параметр `project` не указан в [объекте корневой задачи](api/configs/tasks_config.md)
- если в [объекте корневой задачи](api/configs/tasks_config.md) указано `project: null | undefined`
:::

### Использование {#usage}

~~~js
activeProject?: string | number | null;
~~~

:::info
Если `activeProject` не указан и нет задач, принадлежащих разделу *Без проекта*, первый проект из списка объектов проектов будет загружен как активный.
:::

### Пример {#example}

~~~js {4-7,11-12}
const { ToDo, Toolbar } = todo;

// данные проектов
const projects = [
    { "id": "books", "label": "Books" },
    { "id": "films", "label": "Films" },
];

// создание To Do List
const list = new ToDo("#root", {
    projects,
    activeProject: "films"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Полезная статья:** [Управление проектами](guides/project_index.md)
