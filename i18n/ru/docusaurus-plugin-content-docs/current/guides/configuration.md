---
sidebar_label: Конфигурация
title: Конфигурация
description: You can learn about the To Do List Configuration in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Конфигурация {#configuration}

Настройте параметры DHTMLX To Do List под свои нужды. Доступные параметры конфигурации позволяют:

- [настроить внешний вид счётчика, отображающего прогресс выполнения задач](#counter-of-completed-subtasks)
- [настроить формат дат](#date-format)
- [настроить или отключить перетаскивание задач](#drag-n-drop)
- [отключить валидацию срока выполнения задач](#due-date-validation)
- [изменить режим отметки задач как выполненных](#mode-of-marking-tasks-complete)
- [настроить внешний вид панели инструментов](#toolbar)
- [управлять историей изменений](#history-of-changes)
- [настроить скрытие выполненных задач](#hiding-mode-for-completed-tasks)
- [инициализировать To Do List в режиме только для чтения](#read-only-mode)

:::tip
Чтобы динамически изменить параметры конфигурации после инициализации, используйте метод [`setConfig()`](api/methods/setconfig_method.md). Метод уничтожает текущий компонент и пересоздаёт его с объединёнными настройками. После этого вызовите соответствующий [`setConfig()` Toolbar](api/toolbar_api/methods/setconfig_method.md), чтобы повторно привязать панель инструментов к новому API.
:::

## Задачи {#tasks}

### Счётчик выполненных подзадач {#counter-of-completed-subtasks}

Измените тип счётчика, показывающего, сколько дочерних задач выполнено.

![Счётчик выполненных подзадач в DHTMLX To Do List](/img/counter.png)

По умолчанию каждая родительская задача отображает счётчик в виде отношения выполненных дочерних задач к общему их числу.

Чтобы отображать значение счётчика в виде процента, установите `taskShape.counter.type` в `"percentage"`. Подробнее см. в описании [`taskShape`](api/configs/taskshape_config.md). Пример ниже переключает счётчик в процентный режим:

~~~js {5-9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        counter: {
            type: "percentage" // по умолчанию "number"
        }
    }
});
~~~

**Связанный пример:** [To do list. Счётчик подзадач и формат даты](https://snippet.dhtmlx.com/magidhw8)

### Формат даты {#date-format}

По умолчанию To Do List отображает даты в формате `"%d %M %Y"` (например, *09 Mar 2033*). Чтобы указать другой формат, используйте параметр `date` свойства [`taskShape`](api/configs/taskshape_config.md). Следующий фрагмент задаёт формат даты с разделителем-косой чертой:

~~~js {5-10}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        date: {
            format: "%d/%m/%Y", // по умолчанию "%d %M %Y"
            validate: true
        }
    }
});
~~~

**Связанный пример:** [To do list. Счётчик подзадач и формат даты](https://snippet.dhtmlx.com/magidhw8)

Проверьте [список доступных символов](api/configs/taskshape_config.md#list-of-characters).

### Перетаскивание {#drag-n-drop}

Перетаскивание включено по умолчанию. [Выберите одну или несколько задач](/#selecting-tasks) и перетащите всё выделение сразу. Чтобы создать копию выбранных задач, удерживайте клавишу *Alt* во время перетаскивания.

Используйте свойство [`drag`](api/configs/drag_config.md) для того, чтобы:

- запретить раскрытие свёрнутых задач при наведении во время перетаскивания
- полностью отключить перетаскивание

Пример ниже сохраняет свёрнутые задачи закрытыми, когда пользователь перетаскивает элементы над ними:

~~~js {7}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: {
        expand: false // по умолчанию true
    }
});
~~~

Следующий фрагмент полностью отключает перетаскивание:

~~~js {6}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: false // по умолчанию true
});
~~~

Подпишитесь на события перетаскивания, чтобы отслеживать его жизненный цикл:

- [`start-drag`](api/events/startdrag_event.md) - срабатывает, когда пользователь начинает перетаскивать задачи; передаёт id исходной задачи и режим (`"move"` или `"copy"`)
- [`drag`](api/events/drag_event.md) - срабатывает во время перетаскивания задач
- [`end-drag`](api/events/enddrag_event.md) - срабатывает по завершении перетаскивания; передаёт id целевой задачи, позицию сброса (`"top"`, `"bottom"`, `"in"` или `null`) и режим

Фрагмент ниже записывает в консоль начало и завершение операции перетаскивания:

~~~js
list.api.on("start-drag", ({ start, mode }) => {
    console.log("drag started from", start, "in", mode, "mode");
});

list.api.on("end-drag", ({ target, dropPosition, mode }) => {
    console.log("dropped on", target, "at", dropPosition, "in", mode, "mode");
});
~~~

*История изменений:* События `start-drag` и `end-drag` добавлены в v1.1.

### Валидация срока выполнения {#due-date-validation}

Если для задачи задан [срок выполнения](api/configs/tasks_config.md), валидация отслеживает выполнение задачи. Срок отображается зелёным цветом, пока задача не просрочена.

![Задача со сроком выполнения, выделенным зелёным, в DHTMLX To Do List](/img/due_date.png)

Даты просроченных задач отображаются красным.

![Просроченная задача со сроком выполнения, выделенным красным, в DHTMLX To Do List](/img/overdue_task.png)

Валидация включена по умолчанию. Чтобы отключить её, установите `taskShape.date.validate` в `false`. Подробнее см. в описании [`taskShape`](api/configs/taskshape_config.md). Фрагмент кода ниже отключает валидацию срока выполнения:

~~~js {5-10}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        date: {
            format: "%d %M %Y",
            validate: false // по умолчанию true
        }
    }
});
~~~

В этой конфигурации сроки выполнения отображаются серым цветом.

### Режим отметки задач как выполненных {#mode-of-marking-tasks-complete}

По умолчанию To Do List отмечает и снимает отметку задач в режиме `"auto"`:

- отметить все дочерние задачи как выполненные → родительская задача становится выполненной автоматически
- отметить родительскую задачу как выполненную → все дочерние задачи становятся выполненными автоматически
- отметить хотя бы одну дочернюю задачу выполненной задачи как невыполненную → родительская задача становится невыполненной автоматически
- отметить родительскую задачу как невыполненную → все дочерние задачи становятся невыполненными автоматически

Чтобы отключить это поведение и активировать режим `"manual"`, установите `taskShape.completed.behavior` в `"manual"`. Подробнее см. в описании [`taskShape`](api/configs/taskshape_config.md). Пример ниже активирует ручной режим:

~~~js {5-9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        completed: {
            behavior: "manual" // по умолчанию "auto"
        }
    }
});
~~~

**Связанный пример:** [To do list. Два варианта отметки родительской задачи как выполненной](https://snippet.dhtmlx.com/5892fcr2)

## История изменений {#history-of-changes}

To Do List отслеживает историю изменений по умолчанию. Пользователи могут отменять и повторять операции с помощью методов [`undo()`](api/methods/undo_method.md) и [`redo()`](api/methods/redo_method.md).

Используйте свойство [`history`](api/configs/history_config.md) для настройки этого поведения. Свойство принимает логическое значение (краткая форма) или объект с расширенными параметрами:

- `projects` - включить ветвление истории, чтобы каждый проект хранил отдельную историю; при значении `false` всё приложение использует общую историю
- `limit` - максимальное количество операций в истории

Пример ниже ограничивает историю 20 операциями и отключает ветвление по проектам:

~~~js {9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    history: { projects: false, limit: 20 }
});

list.addTask({ task: { text: "New task" } });
list.undo(); // отменить последнее действие
list.redo(); // восстановить его
~~~

Чтобы полностью отключить управление историей, установите свойство в `false`. Методы `undo()` и `redo()` станут недоступны, а соответствующие элементы панели инструментов исчезнут.

*История изменений:* Конфигурация `history`, методы `undo()` и `redo()` добавлены в v1.3.

## Панель инструментов {#toolbar}

Панель инструментов отображается в верхней части компонента и [инициализируется](guides/initialization.md#initialize-toolbar) и [настраивается](category/toolbar-properties.md) отдельно.

Чтобы изменить структуру панели инструментов по умолчанию, используйте свойство конфигурации [`items`](api/toolbar_api/configs/items_config.md) компонента Toolbar. Фрагмент ниже оставляет только элементы управления поиском и выпадающим списком:

~~~js
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: ["search", "combo"]
});
~~~

Свойство `items` определяет, какие элементы управления отображает панель инструментов. Перечислите их в нужном порядке.

## Режим скрытия выполненных задач {#hiding-mode-for-completed-tasks}

Подробнее см. в разделе [Скрытие выполненных задач](guides/hide_completed_tasks.md).

## Режим только для чтения {#read-only-mode}

В разделе [Режим только для чтения](guides/readonly_mode.md) описано, как сделать To Do List доступным только для чтения.
