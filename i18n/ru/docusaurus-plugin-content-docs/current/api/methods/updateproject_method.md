---
sidebar_label: updateProject()
title: Метод updateProject
description: Вы можете узнать о методе updateProject в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# updateProject()

### Описание {#description}

@short: Обновляет параметры конфигурации проекта

### Использование {#usage}

~~~js
updateProject({
    id: string | number,
    project: object
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор обновляемого проекта
- `project` - (обязательный) объект с набором параметров проекта, которые необходимо обновить:
  - `label` - (необязательный) название проекта

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

// обновить конфигурацию проекта
list.updateProject({
    id: "second",
    project: {
        label: "Project 2"
    }
});
~~~

**Полезная статья:** [Операции с проектами](guides/project_operations.md)
