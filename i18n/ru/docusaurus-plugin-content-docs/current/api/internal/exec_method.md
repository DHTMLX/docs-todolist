---
sidebar_label: api.exec()
title: Метод api.exec
description: Вы можете узнать о методе exec в документации библиотеки DHTMLX JavaScript To Do List. Ознакомьтесь с руководствами разработчика и справочником API, изучите примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# api.exec()

### Описание {#description}

@short: Позволяет запускать внутренние события

### Использование {#usage}

~~~js
api.exec(
    event: string,
    config: object
): void;
~~~

### Параметры {#parameters}

- `event` - (обязательный) событие, которое нужно вызвать
- `config` - (обязательный) объект с параметрами конфигурации (см. вызываемое событие)

### События {#events}

:::info
Полный список внутренних событий To Do List можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример {#example}

~~~js {12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// add a new project
list.api.exec("add-project", { project: { label: "New project" } });
~~~
