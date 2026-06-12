---
sidebar_label: open-menu
title: Событие open-menu
description: Вы можете узнать о событии open-menu в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# open-menu

### Описание {#description}

@short: Срабатывает при открытии меню

### Использование {#usage}

~~~js
"open-menu": ({
    id: string | number,
    type: "task" | "user" | "toolbar",
    source?: (string | number)[]
});
~~~

### Параметры {#parameters}

Колбэк события `open-menu` может принимать объект со следующими параметрами:

- `id` - (обязательный) ID элемента, для которого открывается меню
- `type` - (обязательный) тип меню
- `source` - (необязательный) массив с ID задачи (задач), для которых будут выполняться операции

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

// подписка на событие "open-menu"
list.api.on("open-menu", ({id, type, source}) => {
    console.log("The menu is opened", id, type, source); 
});
~~~

**История изменений:** Добавлено в v1.1
