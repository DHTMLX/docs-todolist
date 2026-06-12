---
sidebar_label: indent-task
title: Событие indent-task
description: Вы можете узнать о событии indent-task в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# indent-task

### Описание {#description}

@short: Срабатывает, когда уровень вложенности задачи понижается на один

### Использование {#usage}

~~~js
"indent-task": ({
    id: string | number
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `indent-task` может принимать объект со следующими параметрами:

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

// подписка на событие "indent-task"
list.api.on("indent-task", ({id}) => {
    console.log("The nesting level of the", id, "task is demoted by one"); 
});
~~~ 

**Связанная статья:** [Операции с задачами](guides/task_operations.md#changing-the-indent-level-of-a-task)
