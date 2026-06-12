---
sidebar_label: assignUser()
title: Метод assignUser
description: Вы можете узнать о методе assignUser в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# assignUser()

### Описание {#description}

@short: Назначает пользователя на указанную задачу

### Использование {#usage}

~~~js
assignUser({
    id: string | number,
    userId: string | number
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID задачи
- `userId` - (обязательный) ID пользователя, которого нужно назначить на задачу

### Пример {#example}

~~~js {22-25}
const { ToDo, Toolbar } = todo;

// создать список задач
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1"},
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users: [
        { "id": "user_1", "label": "John" },
        { "id": "user_2", "label": "Kate" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// назначить пользователя на задачу
list.assignUser({
    id: "1.1",
    userId: "user_2"
});
~~~

**Связанная статья**: [Исполнители задач](guides/task_users.md)
