---
sidebar_label: Исполнители задач
title: Исполнители задач
description: Вы можете узнать об исполнителях задач в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Исполнители задач

Делегируйте задачи одному или нескольким людям.

## Настройка исполнителей задач {#configure-task-assignees}

Укажите список исполнителей через свойство конфигурации [`users`](api/configs/users_config.md). Пример ниже определяет четырёх пользователей:

~~~js
const users = [
    { id: "user_1", label: "Don Smith", avatar: "../avatar_61.jpg"},
    { id: "user_2", label: "Nadia Chasey", avatar: "../avatar_63.jpg" },
    { id: "user_3", label: "Mike Young", avatar: "../avatar_03.jpg" },
    { id: "user_4", label: "Elvira Webb", avatar: "../avatar_33.jpg" }
];

const list = new ToDo("#root", { users });
~~~

## Назначение исполнителей при инициализации {#set-assignees-on-initialization}

Чтобы назначить людей на задачу при инициализации, передайте идентификаторы исполнителей в параметр `assigned` соответствующего объекта [`task`](api/configs/tasks_config.md). Фрагмент ниже назначает четырёх пользователей на задачу:

~~~js {11}
const users = [
    { id: "user_1", label: "Don Smith", avatar: "../avatar_61.jpg"},
    ...
];

const tasks = [
    {
        id: "2",
        project: "introduction",
        text: "You can assign task performers using the menu.",
        assigned: [ "user_1", "user_2", "user_3", "user_4" ],
    }
];

const list = new ToDo("#root", {
    tasks,
    users
});
~~~

Назначенные люди отображаются справа от задачи.

![Пользователи, назначенные на задачу в DHTMLX To Do List](/img/users.png)

Чтобы просмотреть список людей, назначенных на задачу, нажмите на аватары. Чтобы закрыть его, нажмите вне списка.

## Изменение исполнителей задачи {#change-task-assignees}

После инициализации переназначьте или удалите исполнителя задачи одним из двух способов:

- через опцию **Assign to** меню задачи
- через методы [`assignUser()`](api/methods/assignuser_method.md) и [`unassignUser()`](api/methods/unassignuser_method.md)

Пример ниже назначает пользователя на одну задачу и удаляет пользователя из другой:

~~~js
// назначение исполнителя на задачу
list.assignUser({
    id: "3",
    userId: "user_1"
});

// снятие исполнителя с задачи
list.unassignUser({
    id: "2",
    userId: "user_1"
});
~~~
