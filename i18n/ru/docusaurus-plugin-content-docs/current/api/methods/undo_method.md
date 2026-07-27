---
sidebar_label: undo()
title: Метод undo
description: Вы можете узнать о методе undo в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# undo()

### Описание {#description}

@short: Отменяет последнюю операцию в To Do List

:::info
Если параметр [`history.projects`](api/configs/history_config.md) установлен в `true`, история изменений управляется отдельно для каждого проекта; в противном случае управление историей изменений происходит для всего приложения.
:::

### Использование {#usage}

~~~js
undo(): void;
~~~

### Пример {#example}

~~~js {10,14}
const { ToDo } = todo;
const { tasks, users, projects, tags } = getData();

// создать To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
    history: { projects: false, limit: 10 }
});

list.addTask({ task: { text: "New task 1" } });
list.undo();
~~~

**Журнал изменений:** Метод `undo()` добавлен в v1.3

**Похожее API:**
    - [`history`](api/configs/history_config.md)
    - [`redo`](api/methods/redo_method.md)
