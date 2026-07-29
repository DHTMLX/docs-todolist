---
sidebar_label: getParentIds()
title: Метод getParentIds
description: Вы можете узнать о методе getParentIds в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# getParentIds()

### Описание {#description}

@short: Возвращает идентификаторы родительских задач указанной дочерней задачи


### Использование {#usage}

~~~js
getParentIds({
    id: string | number
}): (string|number)[];
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи

### Возвращаемое значение {#returns}

Метод возвращает массив идентификаторов родительских задач

### Пример {#example}

~~~js {20}
const { ToDo, Toolbar } = todo;
const { users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// получить родительские задачи
console.log(list.getParentIds({ id: "1.1.1" })); //  ['1.1', '1']
~~~

**Полезная статья:** [Объект задачи/Id](guides/task_object.md)
