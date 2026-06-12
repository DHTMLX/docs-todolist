---
sidebar_label: deleteTask()
title: Метод deleteTask
description: Вы можете узнать о методе deleteTask в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# deleteTask()

### Описание {#description}

@short: Удаляет указанную задачу из DataStore

:::note
Метод удаляет задачу вместе со всеми её дочерними задачами
:::

### Использование {#usage}

~~~js
deleteTask({
    id: string | number
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи, которую нужно удалить

### Пример {#example}

~~~js {17-19} title="Пример 1. Удаление одной задачи"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// удалить задачу
list.deleteTask({ 
    id: "1.2",
});
~~~

~~~js title="Пример 2. Удаление нескольких задач"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "2.1"],
});

// удалить выбранные задачи
list.eachSelected(id => {
    list.deleteTask({ id });
}, true);
~~~

**Связанные статьи:**
- [Операции с задачами](guides/task_operations.md)
- [Множественный выбор и групповые операции](guides/multiselection.md)
