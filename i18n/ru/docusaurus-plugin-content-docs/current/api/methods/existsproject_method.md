---
sidebar_label: existsProject()
title: Метод existsProject
description: Вы можете узнать о методе existsProject в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# existsProject()

### Описание {#description}

@short: Проверяет, существует ли указанный проект в DataStore


### Использование {#usage}

~~~js
existsProject({ id: string | number }): boolean;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор проекта

### Возвращаемое значение {#returns}

Метод возвращает `true`, если проект существует; иначе — `false`

### Пример {#example}

~~~js {16-17}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// проверить, существуют ли проекты
list.existsProject({ id: 1 }); // -> false
list.existsProject({ id: "first" }); // -> true
~~~

**Полезная статья:** [Объект проекта](guides/project_object_operations.md)
