---
sidebar_label: hide-completed-tasks
title: Событие hide-completed-tasks
description: Вы можете узнать о событии hide-completed-tasks в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# hide-completed-tasks

### Описание {#description}

@short: Срабатывает, когда To Do List переключается в режим скрытия выполненных задач

### Использование {#usage}

~~~js
"hide-completed-tasks": () => void;
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

// подписка на событие "hide-completed-tasks"
list.api.on("hide-completed-tasks", () => {
    console.log("The mode of hiding of completed tasks is enabled"); 
});
~~~

**Журнал изменений:** Добавлено в v1.1

**Полезная статья:** [Показать/скрыть выполненные задачи](guides/hide_completed_tasks.md)
