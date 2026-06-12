---
sidebar_label: getTags()
title: Метод getTags
description: Вы можете узнать о методе getTags объекта RestDataProvider в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# getTags()

### Описание {#description}

@short: Возвращает промис с массивом тегов по умолчанию

:::info
Метод `getTags()` является частью сервиса `RestDataProvider`, предназначенного для работы с сервером
:::

### Использование {#usage}

~~~js
getTags(): Promise<string[]>;
~~~

### Ответ {#response}

Метод `getTags()` отправляет запрос на сервер методом `GET` и возвращает **промис** со списком тегов, установленных по умолчанию.


### Пример {#example}

~~~js {5,10}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, projects, tags]) => {
    const list = new ToDo("#root", {
        tasks,
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
---

**Связанные статьи**: [Работа с сервером](guides/working_with_server.md)
