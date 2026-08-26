---
sidebar_label: Операции с задачами
title: Операции с задачами
description: Вы можете узнать об операциях с задачами в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Операции с задачами

## Добавление новой задачи {#adding-a-new-task}

Чтобы добавить новую задачу в список, используйте метод [`addTask()`](api/methods/addtask_method.md). Пример ниже добавляет задачу под указанным родителем:

~~~js
list.addTask({
    id: "1.1.1",
    project: "first",
    parent: "1.1",
    targetId: "1.1.2",
    reverse: true,
    task: {
        text: "Task 1.1.1",
    }
});
~~~

## Копирование и вставка задачи {#copyingpasting-a-task}

### Копирование и вставка {#copy-and-paste}

Самый быстрый способ скопировать и вставить задачу — метод [`copyTask()`](api/methods/copytask_method.md). Передайте следующие параметры:

- `id` - идентификатор копируемой задачи
- `project` - идентификатор целевого проекта, если он существует
- `targetId` - идентификатор целевой задачи, куда вставляется скопированная задача
- остальные параметры необязательны

Фрагмент ниже копирует задачу в новый проект:

~~~js
list.copyTask({ 
    id: "1.1", // ID копируемой задачи
    join: false, // сбрасывает копии других задач и копирует только эту
    project: "p_2", // ID будущего проекта (если существует)
    parent: "2.1", // ID будущего родителя
    targetId: "2.1.2", // ID целевой задачи
    reverse: true // вставить задачу перед целевой
});
~~~

### Копирование в буфер обмена {#copy-to-the-clipboard}

Чтобы скопировать задачу в буфер обмена без вставки, передайте идентификатор задачи методу [`copyTask()`](api/methods/copytask_method.md):

~~~js
list.copyTask({ 
    id: "1.1"
});
~~~

### Сохранение идентификаторов других копий {#save-ids-of-other-copies}

:::info
Чтобы скопировать задачу и сохранить ранее скопированные задачи, передайте `join: true` методу [`copyTask()`](api/methods/copytask_method.md). В противном случае метод копирует только указанную задачу и сбрасывает все предыдущие копии.
:::

### Вставка из буфера обмена {#paste-from-the-clipboard}

Вставьте скопированную задачу из буфера обмена в нужное место через метод [`pasteTask()`](api/methods/pastetask_method.md). Фрагмент ниже вставляет скопированную задачу рядом с целевой:

~~~js
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

:::info
Событие [`clone-task`](api/events/clonetask_event.md) срабатывает после [`paste-task`](api/events/pastetask_event.md), когда содержимое буфера обмена помещается в целевую позицию. Обратный вызов получает идентификатор родителя, идентификатор проекта, идентификатор цели и массив `batch` с объектами клонированных задач.
:::

## Обновление задачи {#updating-a-task}

Чтобы динамически обновить параметры задачи, используйте метод [`updateTask()`](api/methods/updatetask_method.md). Пример ниже изменяет текст задачи:

~~~js
list.updateTask({ 
    id: "1.1.1",
    task: {
        text: "Completed task"
    }
});
~~~

## Перемещение задачи {#moving-a-task}

Чтобы переместить задачу на другую позицию, используйте метод [`moveTask()`](api/methods/movetask_method.md). Фрагмент ниже перемещает задачу в другой проект:

~~~js
list.moveTask({ 
    id: "1.1", // ID перемещаемой задачи
    project:"p_2", // ID будущего проекта (если существует)
    parent: "2", // ID будущего родителя
    targetId: "2.1", // ID целевой задачи
    reverse: true // поместить задачу перед целевой
});
~~~

:::note
Родительская задача перемещается вместе со своими подзадачами.
:::

## Удаление задачи {#deleting-a-task}

Чтобы удалить задачу, используйте метод [`deleteTask()`](api/methods/deletetask_method.md):

~~~js
list.deleteTask({ id: "1.2" });
~~~

:::note
Метод удаляет задачу вместе со всеми её дочерними задачами.
:::

## Разворачивание и сворачивание задачи {#expandingcollapsing-a-task}

Чтобы свернуть задачу, используйте метод [`collapseTask()`](api/methods/collapsetask_method.md). Метод принимает идентификатор задачи в качестве параметра:

~~~js
list.collapseTask({ id: "1.1" });

~~~

Чтобы развернуть свёрнутую задачу по её идентификатору, используйте метод [`expandTask()`](api/methods/expandtask_method.md):

~~~js
list.expandTask({ id: "1.1" });
~~~

## Контекстное меню {#context-menu}

У каждой задачи и пользователя есть контекстное меню. Отслеживайте его активность с помощью двух событий:

- [`open-menu`](api/events/openmenu_event.md) - срабатывает при открытии меню; предоставляет идентификатор элемента, тип меню и, при необходимости, массив идентификаторов задач (`source`) для пакетных операций
- [`close-menu`](api/events/closemenu_event.md) - срабатывает при закрытии меню; предоставляет идентификатор элемента и тип меню

Пример ниже логирует события жизненного цикла меню:

~~~js
list.api.on("open-menu", ({ id, type, source }) => {
    console.log("menu opened for", id, "type", type, "source", source);
});

list.api.on("close-menu", ({ id, type }) => {
    console.log("menu closed for", id, "type", type);
});
~~~

*История изменений:* События `open-menu` и `close-menu` были добавлены в v1.1.

## Пометка задачи как выполненной или невыполненной {#marking-a-task-completeincomplete}

Пометьте задачу как выполненную или невыполненную через методы [`checkTask()`](api/methods/checktask_method.md) и [`uncheckTask()`](api/methods/unchecktask_method.md). Пример ниже показывает оба вызова:

~~~js
list.checkTask({ 
    id: "1.1.1",
    manual: false
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: false
});
~~~

При `manual: false` результат зависит от `taskShape.completed.behavior` (подробнее см. справочник [`taskShape`](api/configs/taskshape_config.md)).

Если `taskShape.completed.behavior` равен `"auto"`, но вам нужна разовая ручная отметка, установите `manual: true`:

~~~js
list.checkTask({ 
    id: "1.1.1",
    manual: true
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: true
});
~~~

## Изменение уровня вложенности задачи {#changing-the-indent-level-of-a-task}

Динамически изменяйте уровень вложенности задачи с помощью следующих методов:

- [`indentTask()`](api/methods/indenttask_method.md) - понизить уровень вложенности задачи на один
- [`unindentTask()`](api/methods/unindenttask_method.md) - повысить уровень вложенности задачи на один

Фрагмент ниже понижает задачу на один уровень глубже:

~~~js
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

list.indentTask({ id: "1.2" });

console.log(list.getParentIds({ id: "1.2" })); //  ['1.1', '1']
~~~

Пример ниже повышает задачу на один уровень вверх:

~~~js
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

list.unindentTask({ id: "1.2" });

console.log(list.getParentIds({ id: "1.2" })); //  []
~~~

:::info
Если задача уже находится на верхнем уровне, `unindentTask()` не выполняет никаких действий.
:::

## Фильтрация задач {#filter-tasks}

Найдите задачи, соответствующие заданным критериям, с помощью метода [`setFilter()`](api/methods/setfilter_method.md). Метод поддерживает *строгий* режим для точного совпадения. Фрагмент ниже фильтрует задачи по хэштегу:

~~~js
// фильтрация данных по заданным правилам
list.setFilter({
    match: "#tag1",
    highlight: true,
    strict: true
});
~~~

Чтобы сбросить фильтрацию, передайте `match: null`:

~~~js
// сброс фильтрации
list.setFilter({ match: null });
~~~

## Отмена и повтор действий {#undo-and-redo}

To Do List по умолчанию отслеживает историю изменений. Чтобы отменить последнюю операцию, вызовите метод [`undo()`](api/methods/undo_method.md). Чтобы восстановить операцию, отменённую с помощью `undo()`, вызовите метод [`redo()`](api/methods/redo_method.md):

~~~js
list.addTask({ task: { text: "New task" } });

list.undo(); // отмена добавления
list.redo(); // восстановить
~~~

Область и глубина истории зависят от свойства конфигурации [`history`](api/configs/history_config.md). Подробнее см. [Конфигурация → История изменений](guides/configuration.md#history-of-changes).

*История изменений:* Методы `undo()` и `redo()` были добавлены в v1.3.
