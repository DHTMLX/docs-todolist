---
sidebar_label: unselect-task
title: unselect-task Event
description: You can learn about the unselect-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# unselect-task

### Описание {#description}

@short: Срабатывает при снятии выделения с задачи

### Использование {#usage}

```js
"unselect-task": ({
    id: string | number
}) => void;
```
### Параметры {#parameters}

Коллбэк события `unselect-task` принимает объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи

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

// подписка на событие "unselect-task"
list.api.on("unselect-task", ({id}) => {
    console.log("The", id, "task is unselected");
});
~~~

**Связанные статьи**:
- [Операции с задачами](guides/task_operations.md)
- [Множественный выбор и групповые операции](guides/multiselection.md)
