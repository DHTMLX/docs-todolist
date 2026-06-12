---
sidebar_label: api.intercept()
title: Метод api.intercept
description: Вы можете узнать о методе intercept в документации библиотеки DHTMLX JavaScript To Do List. Ознакомьтесь с руководствами разработчика и справочником API, изучите примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# api.intercept()

### Описание {#description}

@short: Позволяет перехватывать и блокировать внутренние события

### Использование {#usage}

~~~js
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Параметры {#parameters}

- `event` - (обязательный) событие, которое нужно вызвать
- `callback` - (обязательный) функция обратного вызова (аргументы зависят от вызываемого события)

### События {#events}

:::info
Полный список внутренних событий To Do List можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример {#example}

~~~js {12-16}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// создание To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// запрет удаления проекта с ID "first"
list.api.intercept("delete-project", ({ id }) => {
    if(id == "first"){
        return false;
    }
});
~~~
