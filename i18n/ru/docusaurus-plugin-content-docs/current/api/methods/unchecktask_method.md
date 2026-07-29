---
sidebar_label: uncheckTask()
title: Метод uncheckTask
description: Вы можете узнать о методе uncheckTask в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# uncheckTask()

### Описание {#description}

@short: Отмечает задачу как незавершённую

### Использование {#usage}

~~~js
uncheckTask({
    id: string | number,
    manual?: boolean // по умолчанию false
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи
- `manual` - (необязательный) если `true`, отмечает задачу в «ручном» режиме. Если `false`, результат применения метода зависит от значения атрибута `behavior` параметра `completed` свойства [taskShape](api/configs/taskshape_config.md)

### Пример {#example}

~~~js {22-25} title="Пример 1. Снятие отметки с одной задачи"
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

// отметить задачу как выполненную
list.checkTask({ 
    id: "1.1.1", 
});

// отметить указанную задачу как незавершённую
list.uncheckTask({ 
    id: "1.1.1",
    manual: true // 'true' - игнорирует значение атрибута "behavior" параметра "completed" свойства "taskShape"
});
~~~

~~~js title="Пример 2. Снятие отметки с нескольких задач"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1", checked: true },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2", checked: true },
    ],
    selected: ["1.1", "2.2"],
});

// снять отметку с выбранных задач
list.eachSelected(id => {
    list.uncheckTask({ id });
}, true);
~~~

**Полезные статьи:**
- [Операции с задачами](guides/task_operations.md)
- [Множественный выбор и групповые операции](guides/multiselection.md)
