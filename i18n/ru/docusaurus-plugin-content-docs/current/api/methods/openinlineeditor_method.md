---
sidebar_label: openInlineEditor()
title: Метод openInlineEditor
description: Вы можете узнать о методе openInlineEditor в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# openInlineEditor()

### Описание {#description}

@short: Открывает встроенный редактор задачи/проекта

### Использование {#usage}

~~~js
openInlineEditor({
    id: string | number,
    type?: "task" | "project"
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи/проекта
- `type` - (необязательный) тип элемента: "task" (по умолчанию) или "project"

### Пример {#example}

~~~js {17-19}
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

// открыть встроенный редактор задачи
list.openInlineEditor({ 
    id: "1.1.1",
});
~~~

**Связанная статья:** [Встроенное редактирование](guides/inline_editing.md)
