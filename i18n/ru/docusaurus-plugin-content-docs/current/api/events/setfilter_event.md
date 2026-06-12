---
sidebar_label: set-filter
title: Событие set-filter
description: Вы можете узнать о событии set-filter в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# set-filter

### Описание {#description}

@short: Срабатывает при фильтрации данных по заданным критериям

### Использование {#usage}

~~~js
"set-filter": ({
    match?: string | null,
    by?: string,
    highlight?: boolean,
    strict?: boolean
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `set-filter` может принимать объект со следующими параметрами:

- `match` - (необязательный) шаблон для поиска совпадений
- `by` - (необязательный) параметр объекта `task`, по которому выполняется поиск
- `highlight` - (необязательный) определяет, подсвечиваются ли найденные совпадения
- `strict` - (необязательный) `true`, если включён *строгий* режим фильтрации; иначе `false`

:::info
Для обработки внутренних событий используйте [**методы Event Bus**](category/event-bus-methods.md)
:::

### Пример {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// подписка на событие "set-filter"
list.api.on("set-filter", (obj) => {
    console.log(obj);
});
~~~

**Связанная статья:** [Сортировка и фильтрация задач](guides/sorting_filtering_tasks.md)
