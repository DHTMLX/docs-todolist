---
sidebar_label: deleteProject()
title: Метод deleteProject
description: Вы можете узнать о методе deleteProject в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# deleteProject()

### Описание {#description}

@short: Удаляет проект

:::note
Задачи, связанные с проектом, удалены не будут. Они будут перемещены в раздел *«Без проекта»*.
:::

### Использование {#usage}

~~~js
deleteProject({
    id: string | number
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор проекта

### Пример {#example}

~~~js {16}
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

// удалить проект
list.deleteProject({ id: "first" });
~~~

**Полезная статья:** [Операции с проектами](guides/project_operations.md)
