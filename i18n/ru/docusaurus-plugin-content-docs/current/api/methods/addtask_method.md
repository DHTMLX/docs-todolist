---
sidebar_label: addTask()
title: Метод addTask()
description: Вы можете узнать о методе addTask в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# addTask()

### Описание {#description}

@short: Добавляет новую задачу в список

### Использование {#usage}

~~~js
addTask({
    id?: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    task: object
}): void;
~~~

### Параметры {#parameters}

- `id` - (необязательный) ID новой задачи
- `parent` - (необязательный) ID родительской задачи
- `project` - (необязательный) ID проекта. По умолчанию — ID [текущего активного проекта](api/configs/activeproject_config.md)<br>
:::info
Если активный проект задан, но нужно добавить задачу в раздел *Без проекта*, укажите для этого параметра значение `null`
:::
- `targetId` - (необязательный) ID целевой задачи, перед или после которой будет добавлена новая задача
- `reverse` - (необязательный) определяет позицию добавления новой задачи: **до** или **после** целевой задачи
- `task` - (обязательный) объект данных новой задачи. Полный список параметров задачи можно найти [здесь](api/configs/tasks_config.md)

:::info
Если параметры `id`, `parent`, `project` указаны в методе, их не нужно дублировать в объекте задачи
:::

### Пример {#example}

~~~js {22-31}
const { ToDo, Toolbar } = todo;

// создать список задач
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "first" },
        { id: "1.1", text: "Task 1.1", parent: "1", project: "first" },
        { id: "1.1.2", text: "Task 1.1.2", parent: "1.1", project: "first" },
        { id: "1.2", text: "Task 1.2", parent: "1", project: "first" },
    ],
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// добавить новую задачу
list.addTask({
    id: "1.1.1",
    project: "first",
    parent: "1.1",
    targetId: "1.1.2",
    reverse: true,
    task: {
        text: "Task 1.1.1",
    }
});
~~~

**Связанная статья:** [Операции с задачами](guides/task_operations.md)
