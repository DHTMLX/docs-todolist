---
sidebar_label: api.setNext()
title: Метод api.setNext
description: Вы можете узнать о методе setNext в документации библиотеки DHTMLX JavaScript To Do List. Ознакомьтесь с руководствами разработчика и справочником API, изучите примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# api.setNext()

### Описание {#description}

@short: Позволяет добавлять действие в очередь Event Bus

### Использование {#usage}

~~~js
api.setNext(next: any): void;
~~~

### Параметры {#parameters}

- `next` - (обязательный) действие, которое нужно включить в очередь **Event Bus**

### Пример {#example}

~~~js {20}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjects(),
    restProvider.getTasks(),
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

:::info
Необходимо включить `RestDataProvider` в очередь **Event Bus**, чтобы выполнять операции с данными (**добавление, удаление** и т. д.) и отправлять соответствующие запросы на сервер
:::
