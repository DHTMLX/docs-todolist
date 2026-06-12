---
sidebar_label: unselectTask()
title: Метод unselectTask
description: Вы можете узнать о методе unselectTask в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# unselectTask()

### Описание {#description}

@short: Снимает выделение с задачи (задач)

### Использование {#usage}

~~~js
unselectTask({
    id: string | number | null
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи, с которой нужно снять выделение

:::info
Передача `id: null` методу снимает выделение со всех выбранных задач и вызывает событие [`unselect-task`](api/events/unselecttask_event.md) для каждой из них
:::


### Пример {#example}

~~~js {17,20}
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

// выбрать задачу
list.selectTask({ id: "1.1"});

// снять выделение с выбранной задачи
list.unselectTask({ id: "1.1" });
~~~

**История изменений**: Возможность передавать `id: null` методу добавлена в v1.1

**Связанная статья**: [Множественный выбор и групповые операции](guides/multiselection.md)
