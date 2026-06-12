---
sidebar_label: tasks
title: tasks Config
description: You can learn about the tasks config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# tasks

### Описание {#description}

@short: Необязательный. Задаёт массив объектов задач для загрузки в список

### Использование {#usage}

~~~js
tasks?: [
    {
        id?: string | number,
        parent?: string | number,
        project?: string | number,
        text?: string,
        checked?: boolean,
        collapsed?: boolean,
        assigned?: (string | number)[],
        due_date?: Date | string,
        creation_date?: Date | string,
        completion_date?: Date | string,
        edited_date?: Date | string,
        priority?: number | null,
        [key: string]?: any
    },
    {...} // другие объекты задач
];
~~~

### Параметры {#parameters}

Свойство `tasks` представляет собой массив объектов задач. Каждый объект включает следующий набор параметров:

- `id` - (необязательный) идентификатор задачи
- `parent` - (необязательный) идентификатор родительской задачи. Для корневых задач значение параметра равно `null | undefined`
- `project` - (необязательный) идентификатор проекта, в котором должна отображаться задача. Для инициализации проектов используйте свойство [projects](api/configs/projects_config.md).

:::info
Если проекты инициализированы, укажите идентификатор нужного проекта для корневой задачи, чтобы отобразить её в этом проекте.

Если не указать идентификатор проекта для корневой задачи или задать его как *null* или *undefined*, задача будет отнесена к разделу *Без проекта*.
:::

- `text` - (необязательный) текст задачи
- `checked` - (необязательный) помечает задачу как выполненную
- `collapsed` - (необязательный) определяет, свёрнута ли задача при начальной загрузке (если у задачи есть подзадачи)
- `assigned` - (необязательный) массив с идентификатором(ами) пользователей, назначенных на задачу. Для инициализации списка исполнителей используйте свойство [users](api/configs/users_config.md).
- `due_date` - (необязательный) дата, к которой задача должна быть выполнена
- `creation_date` - (необязательный) дата создания задачи (генерируется автоматически)
- `completion_date` - (необязательный) дата завершения задачи (генерируется автоматически при отметке задачи как выполненной; удаляется автоматически при снятии отметки)
- `edited_date` - (необязательный) дата редактирования задачи (генерируется автоматически при изменении текста задачи)
- `priority` - (необязательный) приоритет задачи. Для задания приоритетов используйте свойство [priorities](api/configs/priorities_config.md)
- `[key: string]` - (необязательный) набор пользовательских свойств

### Пример {#example}

~~~js {3-30,42}
const { ToDo, Toolbar } = todo;

const tasks = [
    {
        id: "1",
        project: "books",
        // parent: null,
        text: "Read books",
        collapsed: false,
        due_date: new Date(),
        priority: 1
    },
    {
        id: "2",
        project: "books",
        parent: "1",
        text: "Don Quixote",
        assigned: [ "user_1" ],
        priority: 2
    },
    {
        id: "3",
        project: "books",
        parent: "1",
        text: "The Great Gatsby",
        assigned: [ "user_2" ],
        checked: true,
        priority: null
    },
];

const users = [
    { id: "user_1", label: "John" },
    { id: "user_2", label: "Kate" },
];

const projects = [
    { id: "books", label: "Books" },
];

const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**История изменений**: Параметр `priority` добавлен в v1.2

**Связанные статьи**:
- [Загрузка и хранение данных](guides/loading_data.md)
- [Управление задачами](guides/task_index.md)
