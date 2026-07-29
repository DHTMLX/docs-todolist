---
sidebar_label: getTasks()
title: Метод getTasks
description: Вы можете узнать о методе getTasks объекта RestDataProvider в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# getTasks()

### Описание {#description}

@short: Возвращает промис с массивом объектов всех задач

:::info
Метод `getTasks()` является частью сервиса `RestDataProvider`, предназначенного для работы с сервером
:::

### Использование {#usage}

~~~js
getTasks(): Promise<obj[]>;
~~~

### Ответ {#response}

Метод `getTasks()` отправляет запрос на сервер методом `GET` и возвращает **промис** с данными о задачах.


### Пример {#example}

~~~js {5,8}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getTasks(),
    restProvider.getProjects(),
]).then(([tasks, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
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
