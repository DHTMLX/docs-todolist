---
sidebar_label: existsTask()
title: Метод existsTask
description: Вы можете узнать о методе existsTask в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# existsTask()

### Описание {#description}

@short: Проверяет, существует ли указанная задача в DataStore


### Использование {#usage}

~~~js
existsTask({ id: string | number }): boolean;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи

### Возвращает {#returns}

Метод возвращает `true`, если задача существует; иначе — `false`

### Пример {#example}

~~~js {19-20}
const { ToDo, Toolbar } = todo;
const { users, projects } = getData();

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

// проверить, существуют ли задачи
list.existsTask({ id: "2" }); // -> false
list.existsTask({ id: "1.2" }); // -> true
~~~

**Связанная статья**: [Объект задачи / Id](guides/task_object.md)
