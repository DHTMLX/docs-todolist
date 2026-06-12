---
sidebar_label: Операции с проектами
title: Операции с проектами
description: В документации библиотеки DHTMLX JavaScript To Do List вы можете узнать об операциях с проектами. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Операции с проектами

## Смена активного проекта {#changing-the-active-project}

Чтобы сменить текущий активный проект, используйте метод [`setProject()`](api/methods/setproject_method.md). Метод принимает идентификатор проекта в качестве параметра. Пример ниже переключает активный проект после инициализации:

~~~js {9,16}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", {
    projects,
    activeProject: "second"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.setProject({ id: "first" });
~~~

## Добавление нового проекта {#adding-a-new-project}

Чтобы создать новый проект, используйте метод [`addProject()`](api/methods/addproject_method.md). Фрагмент ниже добавляет четвёртый проект:

~~~js {13-18}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.addProject({
    id: "fourth",
    project: {
        label: "Fourth project"
    }
});
~~~

## Обновление проекта {#updating-a-project}

Чтобы динамически обновить параметры проекта, используйте метод [`updateProject()`](api/methods/updateproject_method.md). Пример ниже переименовывает метку проекта:

~~~js {13-18}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.updateProject({
    id: "second",
    project: {
        label: "Project 2"
    }
});
~~~

## Удаление проекта {#deleting-a-project}

Чтобы удалить проект, используйте метод [`deleteProject()`](api/methods/deleteproject_method.md). Фрагмент ниже удаляет проект:

~~~js {17}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const tasks = [
    { id: "1", text: "Task 1", project: "first" },
];

const list = new ToDo("#root", { projects, tasks });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.deleteProject({ id: "first" });
~~~

:::note
Задачи, связанные с проектом, не удаляются. Они перемещаются в раздел *"No project"*.

~~~js
console.log(list.getTask({id: "1"})); // -> {id: '1', text: 'Task 1', project: null}
~~~
:::
