---
sidebar_label: getUsers()
title: Метод getUsers
description: Вы можете узнать о методе getUsers объекта RestDataProvider в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# getUsers()

### Описание {#description}

@short: Возвращает промис с массивом объектов пользователей

:::info
Метод `getUsers()` является частью сервиса `RestDataProvider`, предназначенного для работы с сервером
:::

### Использование {#usage}

~~~js
getUsers(): Promise<obj[]>;
~~~

### Ответ {#response}

Метод `getUsers()` отправляет запрос на сервер методом `GET` и возвращает **промис** с данными о пользователях.


### Пример {#example}

~~~js {5,9}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
]).then(([tasks, users, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        users,
        projects,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});
~~~

---

**Полезные статьи:** [Работа с сервером](guides/working_with_server.md)
