---
sidebar_label: getProjectTasks()
title: Метод getProjectTasks
description: Вы можете узнать о методе getProjectTasks объекта RestDataProvider в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# getProjectTasks()

### Описание {#description}

@short: Возвращает промис с массивом объектов задач для указанного проекта

:::info
Метод `getProjectTasks()` является частью сервиса `RestDataProvider`, предназначенного для работы с сервером
:::

### Использование {#usage}

~~~js
getProjectTasks(id: string | number | null): Promise<obj[]>;
~~~

### Параметры {#parameters}

| Имя        | Тип                       | Описание |
| ----------- | ------------------------- | -------- |
| `id`        | string, number, null      | *Обязательный*. Идентификатор проекта |

### Ответ {#response}

Метод `getProjectTasks()` отправляет запрос на сервер методом `GET` и возвращает **промис** с данными о задачах указанного проекта.


### Пример {#example}

~~~js {5,8}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getProjects(),
]).then(([tasks, projects]) => {
    const list = new ToDo("#root", {
        tasks,
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
