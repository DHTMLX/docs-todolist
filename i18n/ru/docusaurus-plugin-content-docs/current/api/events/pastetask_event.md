---
sidebar_label: paste-task
title: Событие paste-task
description: Вы можете узнать о событии paste-task в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# paste-task

### Описание {#description}

@short: Срабатывает при вставке задачи из буфера обмена в указанную позицию

### Использование {#usage}

~~~js
"paste-task": ({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `paste-task` может принимать объект со следующими параметрами:

- `parent` - (необязательный) ID будущей родительской задачи
- `project` - (необязательный) ID проекта
- `targetId` - (необязательный) ID целевой задачи, перед или после которой вставляется задача
- `reverse` - (необязательный) `true`, если задача вставляется перед целевой задачей; иначе `false`

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

// подписка на событие "paste-task"
list.api.on("paste-task", (obj) => {
    console.log("The task is pasted", obj); 
}); 
~~~

**Связанная статья**: [Операции с задачами](guides/task_operations.md#copyingpasting-a-task)
