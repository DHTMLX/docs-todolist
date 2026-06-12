---
sidebar_label: projects
title: projects Config
description: You can learn about the projects config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# projects

### Описание {#description}

@short: Необязательный. Задаёт массив объектов проектов для загрузки в список

### Использование {#usage}

~~~js
projects?: [
    {
        id: string | number,
        label: string
    },
    {...} // more projects
];
~~~

### Параметры {#parameters}

Свойство `projects` представляет собой массив объектов проектов. Каждый объект включает следующий набор параметров:

- `id` - (обязательный) идентификатор проекта
- `label` - (обязательный) название проекта. Отображается в списке доступных проектов

### Пример {#example}

~~~js {4-7,11}
const { ToDo, Toolbar } = todo;

// projects data
const projects = [
    { "id": "books", "label": "Books" },
    { "id": "films", "label": "Films" },
];

// create To do list
const list = new ToDo("#root", {
    projects,
    activeProject: "films"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

:::tip
По умолчанию первый проект из списка объектов проектов загружается как активный. Чтобы задать другой проект активным, используйте свойство [`activeProject`](api/configs/activeproject_config.md)
:::

**Связанные статьи**: 
- [Загрузка и хранение данных](guides/loading_data.md)
- [Управление проектами](guides/project_index.md)
