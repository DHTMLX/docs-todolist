---
sidebar_label: addProject()
title: Метод addProject
description: Вы можете узнать о методе addProject в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# addProject()

### Описание {#description}

@short: Добавляет новый проект

### Использование {#usage}

~~~js
addProject({
    id?: string | number,
    project?: object
}): void;
~~~

### Параметры {#parameters}

- `id` - (необязательный) ID нового проекта
- `project` - (необязательный) объект с параметрами проекта:
  - `label` - (необязательный) строка с названием проекта

### Пример {#example}

~~~js {16-21}
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

// добавить новый проект
list.addProject({
    id: "fourth",
    project: {
        label: "Fourth project"
    }
});
~~~

**Полезная статья:** [Операции с проектами](guides/project_operations.md)
