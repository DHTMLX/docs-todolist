---
sidebar_label: Объект проекта
title: Объект проекта
description: В документации библиотеки DHTMLX JavaScript To Do List вы можете узнать об объекте проекта. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Объект проекта

## Получение объекта проекта {#get-a-project-object}

Чтобы получить объект проекта, используйте метод [`getProject()`](api/methods/getproject_method.md). Пример ниже извлекает проект по идентификатору:

~~~js {13}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.getProject({ id: "first" }); // -> {id: 'first', label: 'First project'}
~~~

## Проверка существования проекта {#check-if-a-project-exists}

Чтобы проверить, существует ли проект, используйте метод [`existsProject()`](api/methods/existsproject_method.md). Фрагмент ниже проверяет два идентификатора:

~~~js {13-14}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.existsProject({ id: 1 }); // -> false
list.existsProject({ id: "first" }); // -> true
~~~
