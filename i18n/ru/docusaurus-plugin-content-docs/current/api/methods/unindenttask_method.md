---
sidebar_label: unindentTask()
title: Метод unindentTask
description: Вы можете узнать о методе unindentTask в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# unindentTask()

### Описание {#description}

@short: Повышает уровень вложенности задачи на один уровень в зависимости от соседней задачи

### Использование {#usage}

~~~js
unindentTask({
    id: string | number
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи

### Пример {#example}

~~~js {17-19,21} title="Пример 1. Повышение уровня вложенности одной задачи"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// повысить уровень вложенности задачи
list.unindentTask({ 
    id: "1.2",
});

console.log(list.getParentIds({ id: "1.2" })); //  []
~~~

~~~js title="Пример 2. Повышение уровня вложенности нескольких задач"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "2.2"],
});

// повысить уровень вложенности выбранных задач
list.eachSelected(id => {
    list.unindentTask({ id });
}, true);
~~~

**Связанные статьи:**
- [Операции с задачами](guides/task_operations.md)
- [Множественный выбор и групповые операции](guides/multiselection.md)
