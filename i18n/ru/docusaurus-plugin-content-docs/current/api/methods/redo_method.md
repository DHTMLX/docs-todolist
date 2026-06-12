---
sidebar_label: redo()
title: Метод redo
description: Вы можете узнать о методе redo в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# redo()

### Описание {#description}

@short: Повторяет действие, отменённое операцией undo

:::info
Если параметр [`history.projects`](api/configs/history_config.md) установлен в `true`, вы сможете управлять историей изменений для каждого проекта отдельно; иначе история изменений ведётся для всего приложения.
:::

### Использование {#usage}

~~~js
redo(): void;
~~~

### Пример {#example}

~~~js {10,15}
const { ToDo } = todo;
const { tasks, users, projects, tags } = getData();

// создание To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
    history: { projects: true, limit: 10 }
});

list.addTask({ task: { text: "New task 1" } });
list.undo();
list.redo();
~~~

**История изменений**: Метод `redo()` добавлен в v1.3

**Связанный API**:
    - [`history`](api/configs/history_config.md)
    - [`undo`](api/methods/undo_method.md)
