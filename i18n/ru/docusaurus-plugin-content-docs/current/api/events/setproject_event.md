---
sidebar_label: set-project
title: Событие set-project
description: Вы можете узнать о событии set-project в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# set-project

### Описание {#description}

@short: Срабатывает при смене активного проекта

:::info
Событие срабатывает при использовании метода [setProject] для смены текущего активного проекта
:::

### Использование {#usage}

~~~js
"set-project": ({
    id: string | number
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `set-project` может принимать объект со следующими параметрами:

- `id` - (обязательный) ID нового активного проекта

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

// подписка на событие "set-project"
list.api.on("set-project", ({id}) => {
    console.log("The active project is changed to", id);
});
~~~

**Связанная статья:** [Операции с проектами](guides/project_operations.md#changing-the-active-project)
