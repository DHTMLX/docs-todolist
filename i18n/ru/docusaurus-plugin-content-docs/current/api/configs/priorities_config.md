---
sidebar_label: priorities
title: priorities Config
description: You can learn about the priorities config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# priorities

### Описание {#description}

@short: Необязательный. Задаёт массив объектов с данными приоритетов

### Использование {#usage}

~~~js
priorities?: [
    {
        id: number,
        label: string,
        hotkey?: string,
        color?: string,
    },
    { ... } // другие элементы приоритетов
];
~~~

### Параметры {#parameters}

Свойство `priorities` представляет собой массив объектов приоритетов. Каждый объект содержит следующий набор параметров:

- `id` - (обязательный) идентификатор приоритета
- `label` - (обязательный) метка приоритета
- `hotkey` - (необязательный) название пользовательской горячей клавиши для применения приоритета. Для задания комбинации клавиш необходимо обработать пользовательское событие, как показано в примере ниже
- `color` - (необязательный) цвет приоритета

:::info
Если параметр `color` не указан, виджет применит один из цветов по умолчанию:

`"#ff5252" "#ffc975" "#0ab169" "#607D8B" "#00C7B5"`

`"#03A9F4" "#9575CD" "#F06292" "#FF9800"`
:::

### Конфигурация по умолчанию {#default-config}

~~~jsx {}
const priorities: [
    {
        id: 1,
        label: "High",
        color: "#ff5252",
        hotkey: "Alt+1"
    },
    {
        id: 2,
        label: "Medium",
        color: "#ffc975",
        hotkey: "Alt+2"
    },
    {
        id: 3,
        label: "Low",
        color: "#0ab169",
        hotkey: "Alt+3"
    },
];
~~~

### Пример {#example}

~~~js {7-28,34,37-47}
const { ToDo } = todo;

const tasks = [ ... ];
const users = [ ... ];
const projects = [ ... ];

const priorities = [
    {
        id: 1,
        label: "Critical",
        color: "#f33",
    },
    {
        id: 2,
        label: "Major",
        color: "rgba(255, 225, 0, 1)",
    },
    {
        id: 3,
        label: "Normal",
        color: "hsla(170, 100%, 40%, 1)",
    },
    {
        id: 4,
        label: "Minor",
        hotkey: "Alt+M", // обработка события "keydown" для определения комбинации "Alt+M"
    },
];

const list = new ToDo ("#root", {
    tasks,
    users,
    projects,
    priorities
});

// пользовательский обработчик для горячей клавиши: "Alt+M"
document.addEventListener("keydown", event => {
    if (event.altKey && event.key.toLocaleLowerCase() === "m") {
        list.eachSelected(id => {
            list.updateTask({
                id,
                task: { priority: 4 }
            });
        });
    }
});
~~~

**Связанные статьи**:
- [Загрузка и хранение данных](guides/loading_data.md)

**Связанный пример**: [To do list. Пользовательские горячие клавиши для установки приоритетов](https://snippet.dhtmlx.com/5cymicwt?tag=todolist)
