---
sidebar_label: closeInlineEditor()
title: Метод closeInlineEditor
description: Вы можете узнать о методе closeInlineEditor в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# closeInlineEditor()

### Описание {#description}

@short: Закрывает встроенный редактор задачи/проекта

### Использование {#usage}

~~~js
closeInlineEditor({
    id: string | number,
    save?: boolean
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID задачи/проекта
- `save` - (необязательный) определяет, нужно ли сохранять изменения при закрытии редактора; по умолчанию `true`

### Пример {#example}

~~~js {17-20}
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

// закрыть встроенный редактор задачи без сохранения изменений
list.closeInlineEditor({ 
    id: "1.1.1",
    save: false
});
~~~

**Полезная статья:** [Встроенное редактирование](guides/inline_editing.md)
