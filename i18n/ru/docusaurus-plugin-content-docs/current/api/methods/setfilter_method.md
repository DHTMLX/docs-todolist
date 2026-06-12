---
sidebar_label: setFilter()
title: Метод setFilter
description: Вы можете узнать о методе setFilter в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# setFilter()

### Описание {#description}

@short: Фильтрует задачи по заданным критериям в рамках активного проекта

### Использование {#usage}

~~~js
setFilter({
    match: string | null,
    by?: string,
    highlight?: boolean,
    strict?: boolean
}): void;
~~~

### Параметры {#parameters}

- `match` - (обязательный) шаблон для поиска совпадений
- `by` - (необязательный) параметр объекта `task`, по которому ведётся поиск; по умолчанию *text*
- `highlight` - (необязательный) определяет, следует ли выделять найденные совпадения
- `strict` - (необязательный) включает *строгий* режим фильтрации — поиск выполняется по точному совпадению

:::info
Чтобы сбросить фильтрацию, передайте методу `match: null`
:::

### Пример {#example}

~~~js {13-16,19}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});

// filter data by the specified rules
list.setFilter({
    match: "ran",
    highlight: true
});

// reset filtering
list.setFilter({ match: null });
~~~

**Связанная статья:** [Сортировка и фильтрация задач](guides/sorting_filtering_tasks.md)
