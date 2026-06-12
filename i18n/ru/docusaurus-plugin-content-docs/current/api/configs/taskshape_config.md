---
sidebar_label: taskShape
title: taskShape Config
description: You can learn about the taskShape config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# taskShape

### Описание {#description}

@short: Необязательный. Объект с настройками внешнего вида задач

### Использование {#usage}

~~~js
taskShape?: {
    counter?: {
        type: "percentage" | "number", 
    },
    date?: {
        format: string,
        validate: boolean
    },
    completed?: {
        behavior: "manual" | "auto",
        taskHide: boolean
    },
    priority?: {
        cover: boolean,
        label: boolean
    }
};
~~~

### Конфигурация по умолчанию {#default-config}

~~~js
taskShape: {
    counter: {
        type: "number", 
    },
    date: {
        format: "%d %M %Y",
        validate: true 
    },
    completed: {
        behavior: "auto",
        taskHide: false
    },
    priority: {
        cover: true,
        label: true
    }
}
~~~

### Параметры {#parameters}

Для настройки внешнего вида задачи можно указать следующие параметры в объекте `taskShape`:

- `counter` - (необязательный) объект с настройками счётчика выполненных подзадач первого уровня:
    - `type` - (обязательный) тип отображения счётчика. Доступны два типа:
        - *"number"* — значение счётчика отображается в виде отношения двух чисел: количества выполненных подзадач к общему числу подзадач
        - *"percentage"* — значение счётчика отображается в процентах
- `date` - (необязательный) объект с настройками даты:
    - `format` - (обязательный) задаёт формат отображения дат. По умолчанию — `"%d %M %Y"`. Полный список доступных символов приведён [ниже](#list-of-characters)
    - `validate` - (обязательный) определяет, должно ли свойство `due_date` [объекта задачи](api/configs/tasks_config.md) проходить валидацию
- `completed` - (необязательный) объект с настройками управления отметкой и отображением выполненных задач. Принимает один параметр:
    - `behavior` - (обязательный) задаёт поведение родительских и дочерних задач при отметке их как выполненных/невыполненных. Доступны два варианта:
        - *"auto"* — включает режим `"auto"`:
            - При отметке всех дочерних задач как выполненных родительская задача автоматически отмечается как выполненная
            - При отметке родительской задачи как выполненной все её дочерние задачи автоматически отмечаются как выполненные
            - Если хотя бы одна дочерняя задача выполненной задачи отмечается как невыполненная, задача автоматически снимается с отметки
            - При отметке родительской задачи как невыполненной все её дочерние задачи автоматически становятся невыполненными
        - *"manual"* — включает режим `"manual"`. Каждую задачу (как дочернюю, так и родительскую) необходимо отмечать как выполненную вручную
    - `taskHide` - (обязательный) включает/отключает режим скрытия выполненных задач из списка
- `priority` - (необязательный) — объект с настройками отображения приоритета. Можно указать следующие параметры:
    - `cover` - (обязательный) — определяет, показывать ли обложку приоритета
    - `label` - (обязательный) — определяет, показывать ли метку приоритета

### Пример {#example}

~~~js {10-26}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, priorities } = getData();

// создание To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    priorities,
    taskShape: {
        counter: {
            type: "percentage",
        },
        date: {
            format: "%d %m %Y",
            validate: false,
        },
        completed: {
            behavior: "manual",
            taskHide: true,
        },
        priority: {
            cover: true,
            label: false,
        }
    }
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

### Список символов {#list-of-characters}

DHTMLX To Do List использует следующие символы для задания формата даты:

| Символ | Описание                                                    |
|--------|-------------------------------------------------------------|
| `%d`   | день в виде числа с ведущим нулём, 01..31                   |
| `%j`   | день в виде числа, 1..31                                    |
| `%D`   | краткое название дня недели, Su Mo Tu...                    |
| `%l`   | полное название дня недели, Sunday Monday Tuesday...        |
| `%m`   | месяц в виде числа с ведущим нулём, 01..12                  |
| `%n`   | месяц в виде числа, 1..12                                   |
| `%M`   | краткое название месяца, Jan Feb Mar...                     |
| `%F`   | полное название месяца, January February March...           |
| `%y`   | год в виде числа, 2 цифры                                   |
| `%Y`   | год в виде числа, 4 цифры                                   |

:::tip
Прочитайте статью [**Локализация**](guides/localization.md), чтобы узнать, как отображать метки дат на нужном языке
:::

**История изменений**:

- Параметр `priority` добавлен в v1.2

**Связанные статьи**:

- [Конфигурация](guides/configuration.md#tasks)
- [Показ/скрытие выполненных задач](guides/hide_completed_tasks.md)

**Связанные примеры**:
- [To do list. Счётчик подзадач и формат даты](https://snippet.dhtmlx.com/magidhw8?tag=todolist)
- [To do list. Два варианта отметки родительской задачи как выполненной](https://snippet.dhtmlx.com/5892fcr2?tag=todolist)
- [To do list. Пользовательские горячие клавиши для задания приоритетов](https://snippet.dhtmlx.com/5cymicwt?tag=todolist)
