---
sidebar_label: Интеграция с React
title: Интеграция с React
description: Вы можете узнать об интеграции с React в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Интеграция с React {#integration-with-react}

:::tip
Прежде чем читать эту документацию, ознакомьтесь с базовыми концепциями и шаблонами [**React**](https://react.dev). Для обновления знаний обратитесь к [**документации React**](https://react.dev/learn).
:::

DHTMLX To Do List совместим с **React**. Приведённые ниже примеры показывают, как использовать их вместе. Полный проект доступен в [**примере на GitHub**](https://github.com/DHTMLX/react-todolist-demo).

## Создание проекта {#create-a-project}

Создайте новый проект React и установите зависимости.

:::info
Перед созданием нового проекта установите [**Vite**](https://vite.dev/) (необязательно) и [**Node.js**](https://nodejs.org/en/).
:::

Создайте базовый проект **React** или используйте **React с Vite**. В примере ниже проект называется *my-react-todo-app*:

~~~bash
npx create-react-app my-react-todo-app
~~~

### Установка зависимостей {#install-dependencies}

Перейдите в директорию созданного приложения:

~~~bash
cd my-react-todo-app
~~~

Установите зависимости и запустите сервер разработки с помощью менеджера пакетов.

Выполните следующие команды с [**yarn**](https://yarnpkg.com/):

~~~bash
yarn
yarn start
~~~

Выполните следующие команды с [**npm**](https://www.npmjs.com/):

~~~bash
npm install
npm start
~~~

Приложение запускается по адресу localhost (например, `http://localhost:3000`).

## Создание To Do List {#create-the-to-do-list}

Остановите приложение и установите пакет To Do List.

### Шаг 1. Установка пакета {#step-1-install-the-package}

Загрузите [**пробный пакет To Do List**](how_to_start.md#installing-to-do-list-via-npm-or-yarn) и следуйте инструкциям в файле README. Пробная версия доступна только 30 дней.

### Шаг 2. Создание компонента {#step-2-create-the-component}

Создайте React-компонент для добавления To Do List с Toolbar в приложение. В директории *src/* создайте новый файл *ToDo.jsx*.

#### Импорт исходных файлов {#import-source-files}

Откройте *ToDo.jsx* и импортируйте исходные файлы To Do List. Выберите один из двух путей импорта:

- PRO-версия, установленная из локальной папки — импорт из `dhx-todolist-package`
- пробная версия — импорт из `@dhx/trial-todolist`

Пример ниже импортирует из PRO-пакета:

~~~jsx title="ToDo.jsx"
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
~~~

В зависимости от пакета исходные файлы могут быть минифицированы. В таком случае импортируйте CSS-файл как *todo.min.css*.

Следующий фрагмент импортирует из пробного пакета:

~~~jsx title="ToDo.jsx"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import "@dhx/trial-todolist/dist/todo.css";
~~~

В этом руководстве используется **пробная** версия.

#### Настройка контейнеров и добавление To Do List с Toolbar {#set-containers-and-add-the-to-do-list-with-toolbar}

Чтобы отобразить To Do List с Toolbar на странице, создайте контейнеры для обоих компонентов и инициализируйте их с помощью конструкторов. Пример ниже рендерит оба контейнера и инициализирует компоненты внутри `useEffect`:

~~~jsx {2,6-7,10-11,13-17} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css"; // подключение стилей To Do List

export default function ToDoComponent(props) {
    let toolbar_container = useRef(); // инициализация контейнера для Toolbar
    let todo_container = useRef(); // инициализация контейнера для To Do List 

    useEffect(() => {
        // инициализация компонента To Do List
        const todo = new ToDo(todo_container.current, {});

        // инициализация компонента Toolbar
        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api, // передача внутреннего API To Do List
            // другие свойства конфигурации
        });

        return () => {
            todo.destructor(); // уничтожение To Do List
            toolbar.destructor(); // уничтожение Toolbar
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={todo_container} className="widget"></div>
            </div>
}
~~~

#### Добавление стилей {#add-styles}

Настройте стили, чтобы To Do List отображался корректно. Используйте файл *index.css* для задания стилей To Do List и его контейнеров. Пример ниже определяет размеры макета страницы:

~~~css title="index.css"
/* стили для начальной страницы */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
}

/* стили для контейнера To Do List и Toolbar */
.component_container {
    height: 100%; 
    max-width: 800px; 
    margin: 0 auto;
}

/* стили для контейнера To Do List */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Загрузка данных {#load-data}

Создайте файл *data.js* в директории *src/* и добавьте в него данные. Следующий пример экспортирует функцию `getData()`, которая возвращает задачи, пользователей и проекты:

~~~jsx {2,19,28,38} title="data.js"
export function getData() {
    const tasks = [
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: 1
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: ["user_4", "user_1", "user_2", "user_3"],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: 2
        },
        // ...
    ];
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar:
                "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_61.jpg"
        },
        // ...
    ];
    const projects = [
        {
            id: "introduction",
            label: "Introduction to DHTMLX To Do List"
        },
        {
            id: "widgets",
            label: "Our widgets"
        }
    ];
    return { tasks, users, projects };
}
~~~

Откройте *App.js* и импортируйте данные. Передайте данные в компонент `<ToDo/>` как **props**, как показано ниже:

~~~jsx {2,5-6} title="App.js"
import ToDo from "./ToDo";
import { getData } from "./data";

function App() {
    const { tasks, users, projects } = getData(); 
    return <ToDo tasks={tasks} users={users} projects={projects} />;
}

export default App;
~~~

Перейдите в *ToDo.jsx* и примените переданные **props** к объекту конфигурации To Do List. Фрагмент ниже передаёт данные пользователей, задач и проектов через конфигурацию:

~~~jsx {5,11-13} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default function ToDoComponent(props) {
    let todo_container = useRef();
    let toolbar_container = useRef();

    useEffect(() => {
        const todo = new ToDo(todo_container.current, {
            users: props.users,
            tasks: props.tasks,
            projects: props.projects,
            // другие свойства конфигурации
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api,
            // другие свойства конфигурации
        });

        return () => {
            todo.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={todo_container} className="widget"></div>
            </div>
}
~~~

Вы также можете использовать метод [`parse()`](api/methods/parse_method.md) внутри `useEffect()` для загрузки данных в To Do List. Пример ниже загружает данные с помощью `parse()` после инициализации:

~~~jsx {9-11,21} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default function ToDoComponent(props) {
    let todo_container = useRef();
    let toolbar_container = useRef();

    let tasks = props.tasks;
    let users = props.users;
    let projects = props.projects;

    useEffect(() => {
        const todo = new ToDo(todo_container.current, {});

        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api,
            // другие свойства конфигурации
        });
    
        todo.parse({ tasks, users, projects });

        return () => {
            todo.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={todo_container} className="widget"></div>
            </div>
}
~~~

Каждый вызов `parse(data)` заменяет текущий набор данных.

Теперь компонент отображает заполненный To Do List. Другие доступные свойства описаны в [обзоре конфигурации](api/overview/configs_overview.md).

#### Обработка событий {#handle-events}

Подпишитесь на события, чтобы реагировать на действия пользователя. Смотрите [полный список событий](api/overview/events_overview.md).

Откройте *ToDo.jsx* и дополните метод `useEffect()`. Фрагмент ниже прикрепляет обработчик к событию `add-task`:

~~~jsx {5-7} title="ToDo.jsx"
// ...
useEffect(() => {
    const todo = new ToDo(todo_container.current, {});

    todo.api.on("add-task", (obj) => {
        console.log("A new task is added", obj);
    });
    
    return () => {
        todo.destructor();
    };
}, []);
// ...
~~~

### Шаг 3. Добавление To Do List в приложение {#step-3-add-the-to-do-list-into-the-app}

Чтобы добавить компонент в приложение, откройте *App.js* и замените код по умолчанию следующим фрагментом:

~~~jsx title="App.js"
import ToDo from "./ToDo";
import { getData } from "./data";

function App() {
    const { tasks, users, projects } = getData();
    return <ToDo tasks={tasks} users={users} projects={projects} />;
}

export default App;
~~~

Запустите приложение — To Do List отобразится с тестовыми данными:

![DHTMLX To Do List, отрендеренный в приложении React с демонстрационными данными](/img/trial_todolist.png)

Полный проект доступен на [**GitHub**](https://github.com/DHTMLX/react-todolist-demo).
