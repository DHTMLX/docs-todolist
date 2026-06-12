---
sidebar_label: expand-task
title: Событие expand-task
description: Вы можете узнать о событии expand-task в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# expand-task

### Описание {#description}

@short: Срабатывает при разворачивании задачи

### Использование {#usage}

~~~js
"expand-task": ({
    id: string | number
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `expand-task` может принимать объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи

:::info
Для обработки внутренних событий используйте [**методы Event Bus**](category/event-bus-methods.md)
:::

### Пример {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// подписка на событие "expand-task"
list.api.on("expand-task", ({id}) => {
    console.log("The", id, "task is expanded"); 
});
~~~ 

**Связанная статья:** [Операции с задачами](guides/task_operations.md#expandingcollapsing-a-task)
