---
sidebar_label: Загрузка и хранение данных
title: Загрузка и хранение данных
description: Вы можете узнать о загрузке и хранении данных в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Загрузка и хранение данных {#loading-and-storing-data}

## Подготовка данных для загрузки {#prepare-data-to-load}

DHTMLX To Do List принимает следующие типы данных через свойства конфигурации:

- [`tasks`](api/configs/tasks_config.md) — список задач
- [`projects`](api/configs/projects_config.md) — список проектов
- [`users`](api/configs/users_config.md) — список пользователей
- [`priorities`](api/configs/priorities_config.md) — список приоритетов
- [`tags`](api/configs/tags_config.md) — список тегов
- [`activeProject`](api/configs/activeproject_config.md) — идентификатор активного проекта

Подготовьте данные в отдельном файле. Пример ниже возвращает набор данных с задачами, проектами, пользователями и приоритетами:

~~~js title="data.js"
function getData() {

    // data for tasks
    const tasks = [
        // data for tasks of the "widgets" project
        {
            id: "widgets",
            project: "widgets",
            text: "\u{1F389} DHTMLX widgets",
            priority: 1
        },
        {
            id: "gantt",
            project: "widgets",
            parent: "widgets",
            text: "Gantt",
            priority: 1
        },
        {
            id: "scheduler",
            project: "widgets",
            parent: "widgets",
            text: "Scheduler",
            priority: 2
        },
        {
            id: "diagram",
            project: "widgets",
            parent: "widgets",
            text: "Diagram",
            priority: 3
        },
        // data for tasks of the "introduction" project    
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: null
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: [
                "user_2",
                "user_1",
                "user_3",
            ],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: null
        },
        {
            id: "1652097809881",
            project: "introduction",
            text: "You can create tasks with an infinite number of subtasks.",
            assigned: [
                "user_2"
            ],
            collapsed: false,
            priority: null
        },
        {
            id: "1652097809882",
            project: "introduction",
            parent: "1652097809881",
            text: "Use the Tab and Shift + Tab keys for this.",
            checked: false,
            priority: 3
        },
        {
            id: "1652097809887",
            project: "introduction",
            parent: "1652097809881",
            text: "Select and press Ctrl (Cmd) + Arrow up / Arrow down to change the task order.",
            checked: false,
            priority: null
        },
        // more task objects
    ];

    // data for projects
    const projects = [
        {
            id: "introduction",
            label: "Introduction to DHTMLX To Do List"
        },
        {
            id: "widgets",
            label: "Our widgets"
        },
        // more project objects
    ];

    // data for users
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar: "../avatar_02.jpg"
        },
        {
            id: "user_2",
            label: "Nadia Chasey",
            avatar: "../avatar_05.jpg"
        },
        {
            id: "user_3",
            label: "Mike Young",
            avatar: "../avatar_21.jpg"
        },
        // more user objects
    ];

    // data for priorities
    const priorities = [
        {
            id: 1,
            label: "Critical",
            color: "#f33",
        },
        {
            id: 2,
            label: "Major",
            color: "rgba(255, 225, 0, 1)",
        },
        {
            id: 3,
            label: "Normal",
            color: "hsla(170, 100%, 40%, 1)",
        },
        {
            id: 4,
            label: "Minor",
            hotkey: "Alt+M",
        },
        // more priority objects
    ];

    return { tasks, projects, users, priorities };
}
~~~

Подключите файл на странице, чтобы проект мог использовать данные:

~~~html title="index.html"
<script src="../data.js"></script>
~~~

Деструктурируйте возвращаемый объект для доступа к отдельным наборам данных:

~~~js title="index.js"
const { tasks, users, projects, priorities } = getData();
~~~

## Загрузка из локального источника {#load-from-a-local-source}

### Загрузка данных при инициализации {#load-data-on-initialization}

Загрузите [заранее подготовленные данные](guides/loading_data.md#prepare-data-to-load) в To Do List при инициализации. Пример ниже передаёт данные через свойства конфигурации:

~~~js {2,5-8} title="index.js"
const { ToDo } = todo;
const { tasks, users, projects, priorities } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    priorities,
});
~~~

### Загрузка данных после инициализации {#load-data-after-initialization}

Чтобы загрузить данные в уже инициализированный To Do List, используйте метод [`parse()`](api/methods/parse_method.md). Следующий фрагмент кода разбирает данные в уже инициализированный список:

~~~js {3,5,12-17} title="index.js"
const { ToDo, Toolbar } = todo;

const { users, projects, tasks, priorities } = getData();

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// parse data into the component
list.parse({
    tasks,
    users,
    projects,
    priorities
});
~~~

## Сохранение и восстановление состояния {#save-and-restore-state}

Для сохранения текущего состояния используйте метод [`serialize()`](api/methods/serialize_method.md). Он преобразует текущие данные в объект JSON. Фрагмент ниже сохраняет сериализованное состояние:

~~~js
const state = list.serialize();
// {
//    tasks: [{...}, {...}, ...],
//    users: [{...}, {...}, ...],
//    projects: [{...}, {...}, ...],
//    priorities: [{...}, {...}, ...],
//    tags: [],
//    activeProject: string,
// }
~~~

Передайте сохранённое состояние в другой To Do List с помощью метода `parse()`. Пример ниже восстанавливает состояние в новый экземпляр:

~~~js
// create a new To Do
const list2 =  new ToDo("#root2", {});

// parse the state of one To Do List into another
list2.parse(state);
~~~
