---
sidebar_label: setSort()
title: Метод setSort
description: Вы можете узнать о методе setSort в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# setSort()

### Описание {#description}

@short: Сортирует задачи активного проекта по заданным параметрам

### Использование {#usage}

~~~js
setSort({
    by?: string | ((task: object) => string),
    dir?: "asc" | "desc",
    tree?: boolean
}): void;
~~~

### Параметры {#parameters}

- `by` - (необязательный) критерий сортировки (либо ключ [атрибута задачи](api/configs/tasks_config.md#parameters), либо функция поиска, возвращающая строку)
- `dir` - (необязательный) направление сортировки: "asc" или "desc"
- `tree` - (необязательный) включает/выключает сортировку дочерних задач; по умолчанию `false`

### Пример {#example}

~~~js {21-25}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "a", text: "A" },
        { id: "ac", text: "C", parent: "a" },
        { id: "ad", text: "D", parent: "a" },
        { id: "aa", text: "A", parent: "a" },
        { id: "ab", text: "B", parent: "a" },
        { id: "c", text: "C" },
        { id: "d", text: "D" },
        { id: "b", text: "B" },
    ],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// сортировать задачи по возрастанию по параметру "text"
list.setSort({
    by: task => task.id, // или by: "text"
    dir: "asc",
    // tree: true // включить древовидную сортировку, по умолчанию false
});
~~~

**История изменений**: Добавлено в v1.1

**Связанная статья**: [Сортировка и фильтрация задач](guides/sorting_filtering_tasks.md)
