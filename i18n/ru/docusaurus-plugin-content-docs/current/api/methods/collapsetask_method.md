---
sidebar_label: collapseTask()
title: Метод collapseTask
description: Вы можете узнать о методе collapseTask в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# collapseTask()

### Описание {#description}

@short: Сворачивает задачу по её ID

### Использование {#usage}

~~~js
collapseTask({
    id: string | number
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID задачи, которую нужно свернуть

### Пример {#example}

~~~js {17-19}
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

// свернуть задачу
list.collapseTask({ 
    id: "1",
});
~~~

**Связанная статья:** [Операции с задачами](guides/task_operations.md)
