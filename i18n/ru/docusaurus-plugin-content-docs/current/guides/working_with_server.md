---
sidebar_label: Работа с сервером
title: Работа с сервером
description: Вы можете узнать о работе с сервером в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---
# Работа с сервером

DHTMLX To Do List работает как с клиентскими, так и с серверными данными. Виджет не предъявляет особых требований к бэкенду и подключается к любой платформе, поддерживающей REST API.

:::info
Виджет поставляется со встроенным бэкендом на [**Go**](https://github.com/web-widgets/todo-go) и [**Node**](https://github.com/web-widgets/todo-node). Вы также можете использовать собственные серверные скрипты.
:::

## RestDataProvider

To Do List предоставляет сервис `RestDataProvider`, который взаимодействует с REST-бэкендом и обрабатывает следующие операции с данными:

- `"add-task"` — добавить задачу
- `"update-task"` — обновить задачу
- `"delete-task"` — удалить задачу
- `"add-project"` — добавить проект
- `"update-project"` — обновить проект
- `"delete-project"` — удалить проект
- `"set-project"` — установить активный проект
- `"move-task"` — переместить задачу
- `"clone-task"` — клонировать задачу

## REST-методы {#rest-methods}

Сервис `RestDataProvider` включает следующие REST-методы для динамической загрузки данных:

- [`getProjects()`](api/rest_api/methods/getprojects_method.md) — получить промис с **данными проектов**
- [`getProjectTasks()`](api/rest_api/methods/getprojecttasks_method.md) — получить промис с **данными задач** указанного `project`
- [`getTags()`](api/rest_api/methods/gettags_method.md) — получить промис со списком **тегов по умолчанию**
- [`getTasks()`](api/rest_api/methods/gettasks_method.md) — получить промис с **данными задач**
- [`getUsers()`](api/rest_api/methods/getusers_method.md) — получить промис с **данными пользователей**
- [`setAPI()`](api/rest_api/methods/setapi_method.md) — установить API компонента To Do List в RestDataProvider
- [`send()`](api/rest_api/methods/send_method.md) — отправить запрос на сервер и получить промис с данными или без, в зависимости от запроса

## Взаимодействие с бэкендом {#interact-with-the-backend}

Для взаимодействия с сервером подключите `RestDataProvider` к серверным скриптам. Встроенный бэкенд доступен в двух репозиториях:

- [**Go**](https://github.com/web-widgets/todo-go) — бэкенд на Go
- [**Node**](https://github.com/web-widgets/todo-node) — бэкенд на Node.js

Вы также можете создать собственный бэкенд.

:::tip
Если вы используете собственный бэкенд, обратитесь к разделу [**маршруты REST API**](api/rest_api/routes/rest_routes_overview.md) для получения дополнительной информации.
:::

Чтобы подключить `RestDataProvider` к бэкенду, вызовите конструктор `new RestDataProvider()` и передайте соответствующий **URL** в качестве параметра. Пример ниже инициализирует To Do List с данными, загруженными с сервера:

~~~js {4-5,23-24}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "https://some_backend_url";
const restProvider = new RestDataProvider(url);
Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, users, projects, tags]) => {
    const list = new ToDo("#root", {
        tasks,
        users,
        projects,
        tags,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});
~~~

:::info
Включите `RestDataProvider` в порядок **Event Bus** через метод [`api.setNext()`](api/internal/setnext_method.md), чтобы выполнять операции с данными (добавление, удаление и другие действия) и отправлять соответствующие запросы на сервер.
:::

### Пример {#example}

Фрагмент ниже подключает `RestDataProvider` к бэкенду и динамически загружает серверные данные:

<iframe src="https://snippet.dhtmlx.com/hnk06gm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Многопользовательский бэкенд {#multiuser-backend}

Многопользовательская функция позволяет нескольким пользователям управлять одними и теми же задачами в реальном времени без перезагрузки страницы. Пользователи мгновенно видят изменения друг друга.

Перед инициализацией To Do List выполните авторизацию на сервере. Пример ниже определяет функцию `login()`:

~~~js
const login = (url) => {
    const token = sessionStorage.getItem("login-token");
    if (token) {
        return Promise.resolve(token);
    }
    return fetch(url + "/login?id=1")
        .then(raw => raw.text())
        .then(token => {
            sessionStorage.setItem("login-token", token);
            return token;
        });
}
~~~

Функция `login()` возвращает серверный токен, необходимый для всех последующих взаимодействий с сервером. Включайте токен в каждый запрос в качестве значения заголовка `Remote-Token`. Фрагмент ниже устанавливает заголовок токена:

~~~js
login(url).then(token => {
    const restProvider = new todo.RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
~~~

После инициализации добавьте WebSocket для прослушивания событий с сервера. Пример ниже настраивает WebSocket и обработчики:

~~~js {14-16,18-24}
Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, users, projects, tags]) => {
    const list = new todo.ToDo("#root", {
        tasks, users, projects, tags, activeProject,
    });
    const toolbar = new todo.Toolbar("#toolbar", {
        api: list.api,
    });

    // сохранение данных с клиента на сервер
    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);

    // получение обновлений с сервера на клиент
    const events = new todo.RemoteEvents(url + "/api/v1", token);
    const handlers = todo.todoUpdates(
        list.api,
        restProvider.getIDResolver()
    );
    events.on(handlers);
});
~~~

### Пример {#example-multiuser}

Фрагмент ниже настраивает многопользовательский бэкенд для отслеживания изменений от других пользователей в реальном времени:

<iframe src="https://snippet.dhtmlx.com/82ayq2lk?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Настройка серверных событий {#customize-server-events}

Определите собственную логику обработки серверных событий. Передайте объект `handlers` методу `RemoteEvents.on(handlers)`. Объект `handlers` имеет следующую структуру:

~~~js
{
    "tasks": tasksHandler: function(obj: any),
    "projects": projectsHandler: function(obj: any)
}
~~~

Когда на сервере происходит изменение, сервер возвращает имя изменённого элемента. Имена могут различаться в зависимости от логики сервера.

Обновлённые данные поступают в аргументе `obj` обработчика. Поле `type` указывает операцию:

- для `tasks`: `"add-task"`, `"update-task"`, `"delete-task"`, `"move-task"`, `"clone-task"`
- для `projects`: `"add-project"`, `"update-project"`, `"delete-project"`, `"set-sort"`

Следующий фрагмент кода показывает детали реализации:

~~~js
const todoInstance = new todo.ToDo("#root", config);
const restProvider = new todo.RestDataProvider(url);
const idResolver = restProvider.getIDResolver();
const TaskID = 1;
const ProjID = 2;

const resolveTask = (data: any) => {
    for (const key in obj) {
        if (typeof obj[key] == "object") {
            resolveTask(obj[key]);
            continue;
        }
        if (key == "id" || key == "targetId" || key == "parent") {
            obj[key] = idResolver(obj[key], TaskID) || null;
        }
        if (key == "project") {
            obj[key] = idResolver(obj[key], ProjID) || null;
        }
    }
    return obj;
};

const tasksHandler = (obj: any) => {
    resolveTask(obj); // синхронизация id клиента с id сервера
    switch (obj.type) {
        case "add-task":
            todoInstance.api.exec("add-task", {
                id: obj.data.id,
                project: obj.data.project,
                parent: obj.data.parent,
                targetId: obj.data.targetId,
                reverse: obj.data.reverse,
                task: { ...obj.data.task },
                skipProvider: true // запрет клиенту отправлять запрос на сервер
            })
            break;
        // другие операции
    }
};

const handlers = {
    tasks: tasksHandler
};

const remoteEvents = new todo.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

Метод `RestDataProvider.getIDResolver()` возвращает функцию, которая синхронизирует клиентские идентификаторы с серверными. Когда клиент создаёт новый объект (задачу или проект), созданный объект имеет временный идентификатор и соответствующий серверный идентификатор в `RestDataProvider`. Функция `idResolver()` синхронизирует клиентский идентификатор с серверным. Функция имеет следующий формат: `idResolver(id: TID, type: number)`.

Аргумент `type` — это тип модели, принимающий следующие значения:

- `TaskID` — `1`
- `ProjID` — `2`

Чтобы предотвратить отправку запроса на сервер, передайте флаг `skipProvider: true` методу `todoInstance.api.exec()`.
