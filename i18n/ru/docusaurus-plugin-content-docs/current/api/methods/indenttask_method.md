---
sidebar_label: indentTask()
title: Метод indentTask
description: Вы можете узнать о методе indentTask в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# indentTask()

### Описание {#description}

@short: Понижает уровень вложенности задачи на один уровень в зависимости от соседней задачи

### Использование {#usage}

~~~js
indentTask({
    id: string | number
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи

### Пример {#example}

~~~js {17-19} title="Пример 1. Понижение уровня вложенности одной задачи"
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

// понизить уровень вложенности задачи
list.indentTask({ 
    id: "1.2",
});

console.log(list.getParentIds({ id: "1.2" })); //  ['1.1', '1']
~~~

~~~js title="Пример 2. Понижение уровня вложенности нескольких задач"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1"},
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2" },
    ],
    selected: ["1.1", "2.2"],
});

// понизить уровень вложенности выбранных задач
list.eachSelected(id => {
    list.indentTask({ id });
}, true);
~~~

**Связанные статьи**:
- [Операции с задачами](guides/task_operations.md)
- [Множественный выбор и групповые операции](guides/multiselection.md)
