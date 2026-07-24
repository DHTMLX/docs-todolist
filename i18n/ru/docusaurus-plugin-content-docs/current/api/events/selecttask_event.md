---
sidebar_label: select-task
title: Событие select-task
description: Вы можете узнать о событии select-task в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# select-task

### Описание {#description}

@short: Срабатывает при выборе задачи

### Использование {#usage}

~~~js
"select-task": ({
    id: string | number,
    join?: boolean
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `select-task` может принимать объект со следующими параметрами:

- `id` - (обязательный) ID задачи
- `join` - (необязательный) определяет режим, в котором выбрана задача:
    - `true` - режим множественного выбора
    - `false` - режим одиночного выбора

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

// подписка на событие "select-task"
list.api.on("select-task", ({id, join}) => {
    console.log("The", id, "task is selected");
    console.log(join);
});
~~~

**Журнал изменений:** Параметр `join` добавлен в v1.1

**Полезные статьи:**
- [Операции с задачами](guides/task_operations.md)
- [Множественный выбор и групповые операции](guides/multiselection.md)
