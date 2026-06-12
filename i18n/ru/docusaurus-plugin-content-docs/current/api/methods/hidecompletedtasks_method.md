---
sidebar_label: hideCompletedTasks()
title: Метод hideCompletedTasks
description: Вы можете узнать о методе hideCompletedTasks в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# hideCompletedTasks()

### Описание {#description}

@short: Переключает To Do List в режим, при котором выполненные задачи скрыты со страницы

### Использование {#usage}

~~~js
hideCompletedTasks(): void;
~~~


### Пример {#example}

~~~js {13}
const { ToDo, Toolbar } = todo;
const { task, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.hideCompletedTasks(); 
~~~

**История изменений**: Добавлено в v1.1

**Связанная статья**: [Показать/скрыть выполненные задачи](guides/hide_completed_tasks.md)
