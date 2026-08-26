---
sidebar_label: Интеграция с Svelte
title: Интеграция с Svelte
description: Вы можете узнать об интеграции с Svelte в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Интеграция с Svelte {#integration-with-svelte}

:::tip
Прежде чем читать эту документацию, ознакомьтесь с базовыми концепциями и шаблонами **Svelte**. Для обновления знаний обратитесь к [**документации Svelte**](https://svelte.dev/docs/svelte/overview).
:::

DHTMLX To Do List совместим с **Svelte**. Приведённые ниже примеры показывают, как использовать их вместе. Полный проект доступен в [**примере на GitHub**](https://github.com/DHTMLX/svelte-todolist-demo).

## Создание проекта {#create-a-project}

Создайте новый проект Svelte и установите зависимости.

:::info
Перед созданием нового проекта установите [**Vite**](https://vite.dev/) (необязательно) и [**Node.js**](https://nodejs.org/en/).
:::

Создайте проект **Svelte** одним из двух способов:

- используйте [**SvelteKit**](https://kit.svelte.dev/)
- используйте **Svelte с Vite** без SvelteKit

Пример ниже создаёт проект Svelte + Vite:

~~~bash
npm create vite@latest
~~~

Подробности смотрите в [соответствующей статье](https://svelte.dev/docs/svelte/overview).

### Установка зависимостей {#install-dependencies}

Назовите проект *my-svelte-todo-app* и перейдите в директорию приложения:

~~~bash
cd my-svelte-todo-app
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
npm run dev
~~~

Приложение запускается по адресу localhost (например, `http://localhost:3000`).

## Создание To Do List {#create-the-to-do-list}

Остановите приложение и установите пакет To Do List.

### Шаг 1. Установка пакета {#step-1-install-the-package}

Загрузите [**пробный пакет To Do List**](how_to_start.md#installing-to-do-list-via-npm-or-yarn) и следуйте инструкциям в файле README. Пробная версия доступна только 30 дней.

### Шаг 2. Создание компонента {#step-2-create-the-component}

Создайте Svelte-компонент для добавления To Do List с Toolbar в приложение. В директории *src/* создайте новый файл *ToDo.svelte*.

#### Импорт исходных файлов {#import-source-files}

Откройте *ToDo.svelte* и импортируйте исходные файлы To Do List. Выберите один из двух путей импорта:

- PRO-версия, установленная из локальной папки - импорт из `dhx-todolist-package`
- пробная версия - импорт из `@dhx/trial-todolist`

Пример ниже импортирует из PRO-пакета:

~~~html title="ToDo.svelte"
<script>
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
</script>
~~~

В зависимости от пакета исходные файлы могут быть минифицированы. В таком случае импортируйте CSS-файл как *todo.min.css*.

Следующий фрагмент импортирует из пробного пакета:

~~~html title="ToDo.svelte"
<script>
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import '@dhx/trial-todolist/dist/todo.css';
</script>
~~~

В этом руководстве используется **пробная** версия.

#### Настройка контейнеров и добавление To Do List с Toolbar {#set-containers-and-add-the-to-do-list-with-toolbar}

Чтобы отобразить To Do List с Toolbar на странице, создайте контейнеры для обоих компонентов и инициализируйте их с помощью конструкторов. Пример ниже привязывает контейнеры и инициализирует компоненты внутри `onMount`:

~~~html {3,6,10-11,13-17,27-28} title="ToDo.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

let toolbar_container, todo_container; // инициализация контейнеров для To Do List и Toolbar
let todo, toolbar;

onMount(() => {
    // инициализация компонента To Do List
    todo = new ToDo(todo_container, {})

    // инициализация компонента Toolbar
    toolbar = new Toolbar(toolbar_container, {
        api: todo.api, // передача внутреннего API To Do List
        // другие свойства конфигурации
    })
});

onDestroy(() => {
    todo.destructor(); // уничтожение To Do List
    toolbar.destructor(); // уничтожение Toolbar
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={todo_container} style="height: calc(100% - 56px);"></div>
</div>
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

Откройте *App.svelte*, импортируйте данные и передайте их в компонент `<ToDo/>` как **props**:

~~~html {3,5,8} title="App.svelte"
<script>
import ToDo from "./ToDo.svelte";
import { getData } from "./data.js";

const { users, tasks, projects } = getData();
</script>

<ToDo {users} {tasks} {projects} />
~~~

Перейдите в *ToDo.svelte* и примените переданные **props** к объекту конфигурации To Do List. Фрагмент ниже передаёт данные пользователей, задач и проектов через конфигурацию:

~~~html {6-8,15-17} title="ToDo.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export let users;
export let tasks;
export let projects;

let toolbar_container, todo_container;
let todo, toolbar;

onMount(() => {
    todo = new ToDo(todo_container, {
        users,
        tasks,
        projects,
        // другие свойства конфигурации
    })

    toolbar = new Toolbar(toolbar_container, {
        api: todo.api, 
        // другие свойства конфигурации
    })
});

onDestroy(() => {
    todo.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={todo_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

Вы также можете использовать метод [`parse()`](api/methods/parse_method.md) внутри `onMount()` для загрузки данных в To Do List. Пример ниже загружает данные с помощью `parse()` после инициализации:

~~~html {6-8,21} title="ToDo.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export let users;
export let tasks;
export let projects;

let toolbar_container, todo_container;
let todo, toolbar;

onMount(() => {
    todo = new ToDo(todo_container, {})

    toolbar = new Toolbar(toolbar_container, {
        api: todo.api,
        // другие свойства конфигурации
    })

    todo.parse({ tasks, users, projects });
});

onDestroy(() => {
    todo.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={todo_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

Каждый вызов `parse(data)` заменяет текущий набор данных.

Теперь компонент отображает заполненный To Do List. Другие доступные свойства описаны в [обзоре конфигурации](api/overview/configs_overview.md).

#### Обработка событий {#handle-events}

Подпишитесь на события, чтобы реагировать на действия пользователя. Смотрите [полный список событий](api/overview/events_overview.md).

Откройте *ToDo.svelte* и дополните метод `onMount()`. Фрагмент ниже прикрепляет обработчик к событию `add-task`:

~~~html {8-10} title="ToDo.svelte"
<script>
// ...
let todo;

onMount(() => {
    todo = new ToDo(todo_container, {});

    todo.api.on("add-task", (obj) => {
        console.log("A new task is added", obj);
    });
});

onDestroy(() => {
    todo.destructor();
});
</script>

// ...
~~~

### Шаг 3. Добавление To Do List в приложение {#step-3-add-the-to-do-list-into-the-app}

Чтобы добавить компонент в приложение, откройте *App.svelte* и замените код по умолчанию следующим фрагментом:

~~~html title="App.svelte"
<script>
import ToDo from "./ToDo.svelte";
import { getData } from "./data.js";

const { users, tasks, projects } = getData();
</script>

<ToDo {users} {tasks} {projects} />
~~~

Запустите приложение. To Do List отобразится с тестовыми данными:

![DHTMLX To Do List, отрендеренный в приложении Svelte с демонстрационными данными](/img/trial_todolist.png)

Полный проект доступен на [**GitHub**](https://github.com/DHTMLX/svelte-todolist-demo).
