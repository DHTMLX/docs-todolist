---
sidebar_label: show-completed-tasks
title: Событие show-completed-tasks
description: Вы можете узнать о событии show-completed-tasks в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# show-completed-tasks

### Описание {#description}

@short: Срабатывает при переключении To Do List в режим отображения завершённых задач

### Использование {#usage}

~~~js
"show-completed-tasks": () => void;
~~~

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

// подписка на событие "show-completed-tasks"
list.api.on("show-completed-tasks", () => {
    console.log("The mode of showing of completed tasks is enabled"); 
});
~~~

**История изменений**: Добавлено в v1.1

**Связанная статья**: [Показ/скрытие завершённых задач](guides/hide_completed_tasks.md)
