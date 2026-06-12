---
sidebar_label: expandTask()
title: Метод expandTask
description: Вы можете узнать о методе expandTask в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# expandTask()

### Описание {#description}

@short: Разворачивает свёрнутую задачу по её идентификатору

### Использование {#usage}

~~~js
expandTask({
    id: string | number
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи, которую нужно развернуть

### Пример {#example}

~~~js {17-19,22-24}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// свернуть задачу
list.collapseTask({ 
    id: "1.1",
});

// развернуть свёрнутую задачу
list.expandTask({ 
    id: "1.1",
});
~~~

**Связанная статья:** [Операции с задачами](guides/task_operations.md)
