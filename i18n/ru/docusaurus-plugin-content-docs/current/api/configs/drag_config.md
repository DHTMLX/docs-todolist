---
sidebar_label: drag
title: drag Config
description: You can learn about the drag config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# drag

### Описание {#description}

@short: Необязательный. Задаёт настройки перетаскивания (drag-n-drop)

:::note
На сенсорных устройствах при перетаскивании задач существует задержка 500 мс.
:::

### Использование {#usage}

~~~js
drag?: boolean;
//или 
drag?: {
    expand?: boolean
};
~~~

### Параметры {#parameters}

Для настройки drag-n-drop можно использовать **краткий** или **расширенный** вариант.

**Краткий** вариант:

- `drag` - (необязательный) включает/отключает перетаскивание задач

**Расширенный** вариант:

- `drag` - (необязательный) объект с настройками drag-n-drop. Объект может содержать следующий параметр:
    - `expand` - (необязательный) определяет, должны ли свёрнутые задачи раскрываться при наведении на них во время перетаскивания

### Конфигурация по умолчанию {#default-config}

~~~js
drag: true
// или
drag: {
    expand: true
}
~~~

### Пример {#example}

~~~js {9-11}
const { ToDo, Toolbar } = todo;

// создание To Do List
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: {
        expand: false
    }
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Журнал изменений:** Добавлено в v1.1

**Полезная статья:** [Настройка](guides/configuration.md#drag-n-drop)
