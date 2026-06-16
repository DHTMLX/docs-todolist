---
sidebar_label: Начало работы
title: Начало работы
description: You can learn about how to start working with DHTMLX To Do List in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Начало работы {#how-to-start}

Этот учебник поможет вам создать полнофункциональный To Do List и добавить его в ваше веб-приложение.

![Полнофункциональный DHTMLX To Do List на веб-странице](/img/todolist.png)

После выполнения всех шагов ниже вы получите готовый к использованию To Do List, который легко настроить под свои нужды и эффективно применять на практике.

## Шаг 1. Подключение исходных файлов {#step-1-include-source-files}

:::info
Скачайте пакет To Do List [**здесь**](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml) и распакуйте его в папку вашего будущего проекта.
:::

Сначала создайте HTML-файл и назовите его *index.html*. Затем подключите исходные файлы DHTMLX To Do List в этот файл.

Вам необходимо подключить два файла:

- JS-файл To Do List
- CSS-файл To Do List

~~~html title="index.html" {5-6}
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">
    </head>
    <body>
        <script>
        // ваш код будет здесь
        </script>
    </body>
</html>
~~~

### Установка To Do List через npm или yarn {#installing-to-do-list-via-npm-or-yarn}

Вы можете импортировать JavaScript To Do List в свой проект с помощью менеджера пакетов `yarn` или `npm`.

#### Установка пробной версии To Do List через npm или yarn {#installing-trial-to-do-list-via-npm-or-yarn}

:::info
Если вы хотите использовать пробную версию To Do List, скачайте [**пакет пробной версии To Do List**](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml) и следуйте шагам, описанным в файле *README*. Обратите внимание, что пробная версия To Do List доступна только в течение 30 дней.
:::

#### Установка PRO-версии To Do List через npm или yarn {#installing-pro-to-do-list-via-npm-or-yarn}

:::info
Вы можете получить доступ к приватному **npm** DHTMLX непосредственно в [Личном кабинете](https://dhtmlx.com/clients/), сгенерировав логин и пароль для **npm**. Подробная инструкция по установке также доступна там. Обратите внимание, что доступ к приватному **npm** возможен только при наличии активной лицензии на PRO-версию To Do List.
:::

## Шаг 2. Создание To Do List {#step-2-create-to-do-list}

Теперь вы можете добавить To Do List на страницу. Для этого нужно создать два DIV-контейнера: для самого To Do List и его Toolbar. Ваши шаги:

- укажите два DIV-контейнера в файле *index.html*
- инициализируйте To Do List и его Toolbar с помощью конструкторов `new ToDo()` и `new Toolbar()` соответственно

~~~js title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const { ToDo, Toolbar } = todo; // деструктуризация объекта
            
            const list = new ToDo("#root", {
                // свойства конфигурации 
            });
            const toolbar = new Toolbar("#toolbar", {
                api: list.api,
                // дополнительные свойства конфигурации  
            });
        </script>
    </body>
</html>
~~~

:::note
Необходимо применить деструктуризацию объекта, чтобы «распаковать» глобальный объект `todo` в две переменные: ToDo и Toolbar.

Этот шаг не нужен, если вы используете конструкторы `new todo.ToDo()` и `new todo.Toolbar()`.
:::

:::info
Toolbar является необязательной частью интерфейса To Do List. Чтобы создать To Do List без Toolbar, достаточно указать один DIV-контейнер и инициализировать List с помощью конструктора `new ToDo()`
:::

Дополнительную информацию об инициализации To Do List читайте в статье [Инициализация](guides/initialization.md).

## Шаг 3. Загрузка данных в To Do List {#step-3-load-data-into-to-do-list}

Как видите, мы инициализировали To Do List, но он пока пуст. На этом шаге вы узнаете, как наполнить компонент данными.

:::info
Этот шаг можно пропустить, если вы хотите отобразить пустой компонент на странице
:::

Сначала подготовьте данные для загрузки в компонент. Данные могут включать следующие наборы: [`tasks`](api/configs/tasks_config.md), [`projects`](api/configs/projects_config.md), [`users`](api/configs/users_config.md), [`tags`](api/configs/tags_config.md) и [`activeProject`](api/configs/activeproject_config.md)

Удобнее всего подготовить данные в отдельном файле, например:

~~~js title="data.js"
function getData() {
    // данные для задач
    const tasks = [
        // данные задач проекта "widgets"
        { "id": "widgets", "project": "widgets", "text": "\u{1F389} DHTMLX widgets" },
        { "id": "gantt", "project": "widgets", "parent": "widgets", "text": "Gantt" },
        { "id": "scheduler", "project": "widgets", "parent": "widgets", "text": "Scheduler" },
        { "id": "diagram", "project": "widgets", "parent": "widgets", "text": "Diagram" },
        
        // данные задач проекта "introduction"    
        {
            "id": "temp://1652991560212",
            "project": "introduction",
            "text": "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List."
        },
        {
            "id": "1652374122964",
            "project": "introduction",
            "text": "You can assign task performers and due dates using the menu.",
            "assigned": [ "user_2", "user_1", "user_3" ],
            "due_date": "2033-03-08T21:00:00.000Z"
        },
        {
            "id": "1652097809881",
            "project": "introduction",
            "text": "You can create tasks with an infinite number of subtasks.",
            "assigned": [ "user_2" ],
            "collapsed": false
        },
        {
            "id": "1652097809882",
            "project": "introduction",
            "parent": "1652097809881",
            "text": "Use the Tab and Shift + Tab keys for this.",
            "checked": false
        },
        {
            "id": "1652097809887",
            "project": "introduction",
            "parent": "1652097809881",
            "text": "Select and press Ctrl (Cmd) + Arrow up / Arrow down to change the task order.",
            "checked": false
        },
        // другие объекты задач
    ];

    // данные для пользователей
    const users = [
        { "id": "user_1", "label": "Don Smith", "avatar": "../avatar_02.jpg" },
        { "id": "user_2", "label": "Nadia Chasey", "avatar": "../avatar_05.jpg" },
        { "id": "user_3", "label": "Mike Young", "avatar": "../avatar_21.jpg" },
        // другие объекты пользователей
    ];

    // данные для проектов
    const projects = [
        { "id": "introduction", "label": "Introduction to DHTMLX To Do List" },
        { "id": "widgets", "label": "Our widgets" },
        // другие объекты проектов
    ];

    return { projects, users, tasks };
}
~~~

Теперь можно заполнить To Do List данными. Для этого укажите соответствующие свойства в объекте конфигурации компонента:

~~~js {8,16,18-22} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">

        <script src="../data.js"></script>
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const { ToDo, Toolbar } = todo;
            const { tasks, users, projects } = getData();

            const list = new ToDo("#root", {
                tasks,
                users,
                projects
            });
            const toolbar = new Toolbar("#toolbar", {
                api: list.api,
            });
        </script>
    </body>
</html>
~~~

Дополнительную информацию о загрузке данных в To Do List читайте в статье [Загрузка данных](guides/loading_data.md).

## Шаг 4. Настройка To Do List {#step-4-configure-to-do-list}

Теперь вы можете задать нужную конфигурацию To Do List.

Как вы уже знаете, To Do List состоит из двух отдельных интерфейсов: List и Toolbar. Каждый из них имеет свой список параметров конфигурации:

- ознакомьтесь со списком [свойств To Do List](api/overview/configs_overview.md)
- ознакомьтесь со списком [свойств Toolbar](category/toolbar-properties.md)

Для примера включим режим *readonly* для To Do List, укажем активный проект и отобразим в toolbar только строку поиска:

~~~js {5-6,11}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    activeProject: "introduction",
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: ["search"]
});
~~~

## Что дальше {#whats-next}

Теперь у вас есть готовый To Do List. Вы можете загрузить собственный набор данных и настроить компонент под свои нужды.

Если вы хотите глубже изучить To Do List, рекомендуем ознакомиться со следующими материалами:

- [Обзор To Do List](/)
- [Руководства](category/guides.md)
- [API](category/api.md)
