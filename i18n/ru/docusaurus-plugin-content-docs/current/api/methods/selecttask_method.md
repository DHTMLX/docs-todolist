---
sidebar_label: selectTask()
title: Метод selectTask
description: Вы можете узнать о методе selectTask в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# selectTask()

### Описание {#description}

@short: Выделяет указанную задачу по её ID

### Использование {#usage}

~~~js
selectTask({
    id: string | number,
    join?: boolean // по умолчанию false
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID задачи
- `join` - (необязательный) если `true`, добавляет указанную задачу в коллекцию выделенных задач, сохраняя ID ранее выделенных задач

:::info
Вызов метода с `join: false` инициирует событие [`unselect-task`](api/events/unselecttask_event.md) для ранее выделенных задач
:::

### Пример {#example}

~~~js {10,17-20}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    selected: ["1.1"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

console.log(list.getSelection()); // -> ['1.1']

list.selectTask({ 
    id: "1.1.1",
    join: true
});

console.log(list.getSelection()); // -> ['1.1', '1.1.1']
~~~

**История изменений**: Параметр `join` добавлен в v1.1

**Связанная статья**: [Множественный выбор и массовые операции](guides/multiselection.md)
