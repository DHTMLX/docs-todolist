---
sidebar_label: Скрытие выполненных задач
title: Показать/скрыть выполненные задачи
description: You can learn about how to hide or show completed tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Показать/скрыть выполненные задачи {#showhide-completed-tasks}

## Начальный режим {#initial-mode}

To Do List поддерживает два режима отображения задач:

- показывать все задачи (*по умолчанию*)
- скрывать выполненные задачи

Скрывайте выполненные задачи при запуске, чтобы пользователи сосредотачивались на незавершённых. Установите `taskShape.completed.taskHide` в `true`. Подробнее см. в описании [`taskShape`](api/configs/taskshape_config.md). Пример ниже скрывает выполненные задачи при инициализации:

~~~js {6}
const list = new ToDo("#root", {
    tasks,
    taskShape: {
        completed: {
            behavior: "manual",
            taskHide: true
        }
    }
});
~~~

## Переключение между режимами {#switching-between-modes}

После инициализации переключайтесь между режимами одним из двух способов:

- через пункт **Выполненные задачи → Показать/Скрыть** в [меню панели инструментов](/#toolbar)
- через методы [`hideCompletedTasks()`](api/methods/hidecompletedtasks_method.md) и [`showCompletedTasks()`](api/methods/showcompletedtasks_method.md)

Фрагмент ниже показывает, как скрыть или показать выполненные задачи во время выполнения:

~~~js
list.hideCompletedTasks();
// или
list.showCompletedTasks();
~~~
