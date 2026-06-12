---
sidebar_label: setAPI()
title: Метод setAPI
description: Вы можете узнать о методе setAPI объекта RestDataProvider в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# setAPI()

### Описание {#description}

@short: Обязательный. Передаёт API компонента To Do List в RestDataProvider

:::info
Метод `setAPI()` обязателен для корректной работы методов RestDataProvider.
:::

### Использование {#usage}

~~~js
setAPI(api: IApi): void;
~~~

### Параметры {#parameters}

| Имя    | Тип    | Описание |
| ------- | ------ | -------- |
| `api`   | object | *Обязательный*. Объект API компонента |


### Пример {#example}

~~~js {5,12,23}
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

**Связанные статьи**: [Работа с сервером](guides/working_with_server.md)
