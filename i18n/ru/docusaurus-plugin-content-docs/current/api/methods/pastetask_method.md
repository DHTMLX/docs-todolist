---
sidebar_label: pasteTask()
title: Метод pasteTask
description: Вы можете узнать о методе pasteTask в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# pasteTask()

### Описание {#description}

@short: Вставляет скопированную задачу из буфера обмена в указанную позицию

### Использование {#usage}

~~~js
pasteTask({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### Параметры {#parameters}

- `parent` - (необязательный) идентификатор будущей родительской задачи
- `project` - (необязательный) идентификатор проекта, в который следует вставить задачу
- `targetId` - (необязательный) идентификатор целевой задачи, перед или после которой будет вставлена скопированная задача
- `reverse` - (необязательный) определяет позицию вставки скопированной задачи: **перед** целевой задачей (*true*) или **после** неё (*false* по умолчанию)

### Пример {#example}

~~~js {17-19,22-25}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// скопировать "Task 1.1" в буфер обмена
list.copyTask({ 
    id: "1.1",
});

// вставить скопированную задачу после "Task 1.2"
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

**Связанный API:** [copyTask()](api/methods/copytask_method.md)

**Связанная статья:** [Операции с задачами](guides/task_operations.md)
