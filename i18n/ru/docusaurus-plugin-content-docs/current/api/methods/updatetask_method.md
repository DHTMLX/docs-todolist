---
sidebar_label: updateTask()
title: Метод updateTask
description: Вы можете узнать о методе updateTask в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# updateTask()

### Описание {#description}

@short: Обновляет параметры конфигурации задачи

### Использование {#usage}

~~~js
updateTask({
    id: string | number,
    task: object
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор обновляемой задачи
- `task` - (обязательный) объект с набором свойств задачи, которые необходимо обновить. Полный список параметров задачи можно найти [здесь](api/configs/tasks_config.md)

### Пример {#example}

~~~js {17-24}
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

// обновить конфигурацию задачи
list.updateTask({ 
    id: "1.1",
    task: {
        text: "Completed task"
    }
});
~~~

**Связанная статья:** [Операции с задачами](guides/task_operations.md)
