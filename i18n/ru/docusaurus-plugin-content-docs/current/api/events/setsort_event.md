---
sidebar_label: set-sort
title: Событие set-sort
description: Вы можете узнать о событии set-sort в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# set-sort

### Описание {#description}

@short: Срабатывает при сортировке задач

### Использование {#usage}

~~~js
"set-sort": ({
    by?: string | ((task: object) => string),
    dir?: "asc" | "desc",
    tree?: boolean,
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `set-sort` может принимать объект со следующими параметрами:

- `by` - (необязательный) критерий сортировки (ключ [атрибута задачи](api/configs/tasks_config.md#parameters) или функция поиска, возвращающая строку)
- `dir` - (необязательный) направление сортировки: "asc" или "desc"
- `tree` - (необязательный) определяет, включена ли сортировка для дочерних задач

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

// подписка на событие "set-sort"
list.api.on("set-sort", ({ by, dir, tree }) => {
    console.log(by, dir, tree);
});
~~~

**Связанная статья:** [Сортировка и фильтрация задач](guides/sorting_filtering_tasks.md)
