---
sidebar_label: selected
title: selected Config
description: You can learn about the selected config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# selected

### Описание {#description}

@short: Необязательный. Массив с идентификаторами задач, которые должны быть выделены при инициализации To Do List

### Использование {#usage}

~~~js
selected?: (string | number)[];
~~~

### Пример {#example}

~~~js {11}
const { ToDo, Toolbar } = todo;

// создание To Do List
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
~~~

**Журнал изменений:** Добавлено в v1.1

**Полезная статья:** [Множественный выбор и групповые операции](guides/multiselection.md)
