---
sidebar_label: move-task
title: Событие move-task
description: Вы можете узнать о событии move-task в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# move-task

### Описание {#description}

@short: Срабатывает при перемещении задачи

### Использование {#usage}

~~~js
"move-task": ({
    id: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    operation?: "indent" | "unindent" | "project",
    batch?: (string| number)[]
}) => void;
~~~

### Параметры {#parameters}

Коллбэк события `move-task` может принимать объект со следующими параметрами:

- `id` - (обязательный) идентификатор перемещаемой задачи
- `parent` - (необязательный) идентификатор родительской задачи
- `project` - (необязательный) идентификатор проекта
- `targetId` - (необязательный) идентификатор целевой задачи
- `reverse` - (необязательный) `true`, если задача вставляется перед целевой задачей; иначе `false`
- Дополнительные параметры, применимые при работе с [RestDataProvider](guides/working_with_server.md):
    - `operation` - (необязательный) тип операции, выполняемой над задачей; значения:
        - `indent` - понижение уровня вложенности задачи на один
        - `unindent` - повышение уровня вложенности задачи на один
        - `project` - перемещение задачи в другой проект
        - если значение не задано, означает изменение позиции задачи внутри проекта, к которому она принадлежит
    - `batch` - (необязательный) массив идентификаторов задач, над которыми выполняется операция

:::info
Для обработки внутренних событий используйте [**методы Event Bus**](category/event-bus-methods.md)
:::

### Пример {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// подписка на событие "move-task"
list.api.on("move-task", ({id}) => {
    console.log("The", id, "task is moved"); 
});
~~~ 

**Связанная статья**: [Операции с задачами](guides/task_operations.md#moving-a-task)
