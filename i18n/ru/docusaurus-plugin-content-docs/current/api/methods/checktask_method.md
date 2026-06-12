---
sidebar_label: checkTask()
title: Метод checkTask
description: Вы можете узнать о методе checkTask в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# checkTask()

### Описание {#description}

@short: Отмечает задачу как выполненную

### Использование {#usage}

~~~js
checkTask({
    id: string | number,
    manual?: boolean // false by default
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID задачи
- `manual` - (необязательный) если `true`, задача отмечается в «ручном» режиме. Если `false`, результат применения метода зависит от значения атрибута `behavior` параметра `completed` свойства [taskShape](api/configs/taskshape_config.md)

### Пример {#example}

~~~js {17-20} title="Пример 1. Отметка одной задачи"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// отметить указанную задачу как выполненную
list.checkTask({ 
    id: "1.1.1",
    manual: true  // 'true' - игнорирует значение атрибута "behavior" параметра "completed" свойства "taskShape"
});
~~~

~~~js title="Пример 2. Отметка нескольких задач"
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

// отметить выбранные задачи как выполненные
list.eachSelected(id => {
    list.checkTask({ id });
}, true);
~~~

**Связанные статьи**:
- [Операции с задачами](guides/task_operations.md)
- [Множественный выбор и групповые операции](guides/multiselection.md)
