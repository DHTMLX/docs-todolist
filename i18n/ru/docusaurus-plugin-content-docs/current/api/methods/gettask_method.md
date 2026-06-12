---
sidebar_label: getTask()
title: Метод getTask
description: Вы можете узнать о методе getTask в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# getTask()

### Описание {#description}

@short: Возвращает объект задачи по её идентификатору

### Использование {#usage}

~~~js
getTask({ id: string | number }): object;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи

### Возвращает {#returns}

Метод возвращает объект с данными задачи

### Пример {#example}

~~~js {19}
const { ToDo, Toolbar } = todo;
const { projects, users } = getData();

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// получить объект с данными задачи
list.getTask({ id: "1.2" }); // -> {id: '1.2', text: 'Task 1.2', parent: '1'}
~~~

**Связанная статья:** [Объект задачи/Id](guides/task_object.md)
