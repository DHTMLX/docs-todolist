---
sidebar_label: copyTask()
title: Метод copyTask
description: Вы можете узнать о методе copyTask в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# copyTask()

### Описание {#description}

@short: Копирует задачу в буфер обмена и вставляет её в указанную позицию

:::info
Метод позволяет скопировать и вставить задачу или только скопировать её в буфер обмена
 
Метод копирует задачу вместе со всеми её дочерними задачами
:::

### Использование {#usage}

~~~js
copyTask({
    id: string | number,
    join?: boolean, // false по умолчанию
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи
- `join` - (необязательный) если `true`, добавляет указанную задачу в список задач для копирования; дочерние задачи добавляются автоматически. Если `false`, сбрасывает все предыдущие копии (то есть будет скопирована только последняя указанная задача)

:::info
Если нужно скопировать (и вставить!) задачу, передайте в метод следующие параметры, чтобы задать новую позицию задачи:
:::

- `parent` - (необязательный) идентификатор будущей родительской задачи
- `project` - (необязательный) идентификатор проекта, в который нужно вставить задачу
- `targetId` - (необязательный) идентификатор целевой задачи, перед которой или после которой будет вставлена скопированная задача
- `reverse` - (необязательный) определяет позицию вставки скопированной задачи: **перед** целевой задачей (*true*) или **после** неё (*false* по умолчанию)

:::tip
Задачу можно скопировать только один раз в рамках одной операции
:::

### Пример {#example}

~~~js {23-29} title="Пример 1. Копирование одной задачи"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "p_1"},
        { id: "1.1", text: "Task 1.1", parent: "1", project: "p_1" },
        { id: "2", text: "Task 2", project: "p_2" },
        { id: "2.1", text: "Task 2.1", parent: "2", project: "p_2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1", project: "p_2" },
        { id: "2.1.2", text: "Task 2.1.2", parent: "2.1", project: "p_2" },
    ],
    projects: [
        { "id": "p_1", "label": "Project 1" },
        { "id": "p_2", "label": "Project 2" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// копировать "Task 1.1" в "Project 2" и вставить перед "Task 2.1.2"
list.copyTask({ 
    id: "1.1",
    project: "p_2",
    parent: "2.1",
    targetId: "2.1.2",
    reverse: true
});
~~~

~~~js title="Пример 2. Копирование нескольких задач"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1"},
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "2", text: "Task 2"},
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.1.2", text: "Task 2.1.2", parent: "2.1" },
        { id: "3", text: "Task 3" },
    ],
    selected: ["2", "3"]
});

// копировать выбранные задачи
list.eachSelected(id => {
    list.copyTask({
        id,
        join: true,
    });
}, true);

// вставить скопированные задачи
list.pasteTask({
    targetId: "2", 
});

// снять выделение с задач
list.unselectTask({ id: null });
~~~

**История изменений:** Параметр `join` добавлен в v1.1

**Связанная статья:** [Операции с задачами](guides/task_operations.md)
