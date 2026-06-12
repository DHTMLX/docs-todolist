---
sidebar_label: showCompletedTasks()
title: Метод showCompletedTasks
description: Вы можете узнать о методе showCompletedTasks в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# showCompletedTasks()

### Описание {#description}

@short: Переключает To Do List в режим отображения выполненных задач на странице

### Использование {#usage}

~~~js
showCompletedTasks(): void;
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

list.showCompletedTasks(); 
~~~

**История изменений:** Добавлено в v1.1

**Связанная статья:** [Показать/скрыть выполненные задачи](guides/hide_completed_tasks.md)
