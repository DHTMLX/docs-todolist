---
sidebar_label: close-menu
title: close-menu Event
description: You can learn about the close-menu event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# close-menu

### Описание {#description}

@short: Срабатывает при закрытии меню

### Использование {#usage}

~~~js
"close-menu": ({
    id: string | number;
    type: "task" | "user" | "toolbar";
});
~~~

### Параметры {#parameters}

Коллбэк события `close-menu` может принимать объект со следующими параметрами:

- `id` - (обязательный) ID элемента, для которого закрывается меню
- `type` - (обязательный) тип меню

### Пример {#example}

~~~js
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

// подписка на событие "close-menu"
list.api.on("close-menu", ({id, type}) => {
    console.log("The menu is closed", id, type); 
});
~~~

**История изменений**: Добавлено в v1.1
