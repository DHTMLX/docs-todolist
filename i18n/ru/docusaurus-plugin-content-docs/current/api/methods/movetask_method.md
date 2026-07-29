---
sidebar_label: moveTask()
title: Метод moveTask
description: Вы можете узнать о методе moveTask в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# moveTask()

### Описание {#description}

@short: Перемещает задачу в указанную позицию

Родительская задача перемещается вместе с дочерними.

### Использование {#usage}

~~~js
moveTask({
    id?: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### Параметры {#parameters}

- `id` - (необязательный) идентификатор перемещаемой задачи
- `project` - (необязательный) идентификатор проекта<br>
:::info
Чтобы переместить задачу в раздел *Без проекта*, укажите для параметра значение `null`
:::
- `parent` - (необязательный) идентификатор родительской задачи
- `targetId` - (необязательный) идентификатор целевой задачи, перед или после которой будет вставлена перемещаемая задача
- `reverse` - (необязательный) определяет позицию вставки перемещаемой задачи: **перед** целевой задачей (*true*) или **после** неё (*false* по умолчанию)

### Пример {#example}

~~~js {22-28} title="Пример 1. Перемещение одной задачи"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "p_1"},
        { id: "1.1", text: "Task 1.1", parent: "1", project: "p_1" },
        { id: "2", text: "Task 2", project: "p_2" },
        { id: "2.1", text: "Task 2.1", parent: "2", project: "p_2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1", project: "p_2" },
    ],
    projects: [
        { "id": "p_1", "label": "Project 1" },
        { "id": "p_2", "label": "Project 2" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// переместить "Task 1.1" в "Project 2" и разместить её перед "Task 2.1.1" как дочернюю задачу "Task 2.1"
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2.1",
    targetId: "2.1.1",
    reverse: true
});
~~~

В примере ниже показано, куда будет перемещена задача, если указать только параметры `parent` и, при необходимости, `reverse`:

~~~js {5,12-13}
// переместить "Task 1.1" в "Project 2" и разместить после "Task 2.1" как дочернюю задачу "Task 2"
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2",
});

// переместить "Task 1.1" в "Project 2" и разместить перед "Task 2.1" как дочернюю задачу "Task 2"
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2",
    reverse: true
});
~~~

В примере ниже показано, куда будет перемещена задача, если указать только параметры `targetId` и, при необходимости, `reverse`:

~~~js {5,12-13}
// переместить "Task 1.1" в "Project 2" и разместить после "Task 2" как корневую задачу
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    targetId: "2",
});

// переместить "Task 1.1" в "Project 2" и разместить перед "Task 2" как корневую задачу
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    targetId: "2",
    reverse: true
});
~~~

~~~js title="Пример 2. Перемещение нескольких задач"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2" },
    ],
    selected: ["1.1", "2.2"],
});

// переместить выбранные задачи
list.eachSelected(id => {
    list.moveTask({ 
        id,
        parent: "2.1.1"
    });
}, true);
~~~

**Полезные статьи:**
- [Операции с задачами](guides/task_operations.md)
- [Множественный выбор и групповые операции](guides/multiselection.md)
