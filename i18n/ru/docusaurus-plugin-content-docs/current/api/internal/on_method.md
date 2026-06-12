---
sidebar_label: api.on()
title: Метод api.on
description: Вы можете узнать о методе on в документации библиотеки DHTMLX JavaScript To Do List. Ознакомьтесь с руководствами разработчика и справочником API, изучите примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# api.on()

### Описание {#description}

@short: Позволяет прикреплять обработчик к внутренним событиям

### Использование {#usage}

~~~js
api.on(
    event: string,
    handler: function
): void;
~~~

### Параметры {#parameters}

- `event` - (обязательный) событие, которое нужно вызвать
- `handler` - (обязательный) прикрепляемый обработчик (аргументы зависят от вызываемого события)

### События {#events}

:::info
Полный список внутренних событий To Do List можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример {#example}

~~~js {12-16}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// output the project data to console when you remove it
list.api.on("delete-project", ({ id }) => {
    console.log( "The id of the project", { id });
});
~~~
