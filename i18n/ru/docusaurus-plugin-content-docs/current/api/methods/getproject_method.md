---
sidebar_label: getProject()
title: Метод getProject
description: Вы можете узнать о методе getProject в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# getProject()

### Описание {#description}

@short: Возвращает объект проекта по его идентификатору

### Использование {#usage}

~~~js
getProject({ id: string | number }): object;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор проекта

### Возвращает {#returns}

Метод возвращает объект с данными проекта

### Пример {#example}

~~~js {19}
const { ToDo, Toolbar } = todo;
const { tasks, users } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// получить объект с данными проекта
list.getProject({ id: "first" }); // -> {id: 'first', label: 'First project'}
~~~

**Связанная статья**: [Объект проекта](guides/project_object_operations.md)
