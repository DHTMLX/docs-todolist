---
sidebar_label: Множественный выбор и групповые операции
title: Множественный выбор и групповые операции
description: В документации библиотеки DHTMLX JavaScript To Do List вы можете узнать о выборе нескольких задач. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Множественный выбор и групповые операции

Библиотека To Do List позволяет выбирать несколько задач и управлять ими одновременно.

![Несколько выбранных задач в виджете DHTMLX To Do List](/img/multiselection.png)

:::info
Узнайте, как [выбирать](/#selecting-tasks) и [управлять несколькими задачами](/#managing-multiple-tasks) через интерфейс.
:::

## Предварительно выбранные задачи {#initially-selected-tasks}

Чтобы создать To Do List с заранее выбранными задачами, используйте конфигурационное свойство [`selected`](api/configs/selected_config.md). Пример ниже предварительно выбирает три задачи при инициализации:

~~~js {12}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "1.2", "2.2"],
});

console.log(list.getSelection()); // ["1.1", "1.2", "2.2"]
~~~

## Выбор задач {#select-tasks}

Используйте метод [`selectTask()`](api/methods/selecttask_method.md) для выбора задач после инициализации. Метод принимает два параметра:

- `id` — идентификатор выбираемой задачи
- `join` — добавлять ли задачу к текущему выделению

### Выбор одной задачи {#select-one-task}

По умолчанию параметр `join` равен `false`. Метод выбирает только указанную задачу и сбрасывает ранее выбранные.

Следующий фрагмент заменяет текущее выделение одной задачей:

~~~js {19}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "1.2", "2.2"],
});

console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]

list.selectTask({ 
    id: "2.1", 
    join: false // сбросить выделение ранее выбранных задач
});

console.log(list.getSelection()) // ["2.1"]
~~~

### Выбор нескольких задач {#select-multiple-tasks}

Чтобы выбрать несколько задач, установите параметр `join` в `true`. Метод `selectTask()` добавит указанную задачу к текущему выделению.

Пример ниже выбирает несколько задач в цикле:

~~~js {14-18}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ]
});

const selected = ["1.1", "1.2", "2.2"];

for (id of selected) {
    list.selectTask({ id, join: true });
}

console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]
~~~

Фрагмент ниже добавляет ещё одну задачу к текущему выделению:

~~~js {3}
console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]

list.selectTask({ id: "2.1", join: true });

console.log(list.getSelection()) // ["1.1", "1.2", "2.2", "2.1"]
~~~

## Получение всех выбранных задач {#get-all-selected-tasks}

Чтобы получить идентификаторы всех текущих выбранных задач, используйте метод [`getSelection()`](api/methods/getselection_method.md). Пример ниже показывает разницу между несортированным и сортированным выводом:

~~~js
// сортировка отключена
list.getSelection({ sorted: false }); // ["1.2", "1.1", "2.2", "2.1"]

// сортировка включена
list.getSelection({ sorted: true }); // ["1.1", "1.2", "2.1", "2.2"]
~~~

Включите параметр `sorted`, чтобы получить идентификаторы выбранных задач в порядке их отображения на экране.

## Управление выбранными задачами {#manage-selected-tasks}

После выбора нескольких задач примените операции ко всем им сразу.

Библиотека предоставляет метод [`eachSelected()`](api/methods/eachselected_method.md) для перебора всех выбранных задач. Метод принимает дополнительные параметры — `sorted` и `reversed` — управляющие сортировкой и направлением обхода.

Пример ниже удаляет все выбранные задачи:

~~~js
list.eachSelected(id => {
    list.deleteTask({ id });
}, true);
~~~

### Список доступных операций {#list-of-available-operations}

Через методы API можно выполнять следующие групповые операции над несколькими выбранными задачами:

- [`copyTask()`](api/methods/copytask_method.md) — копировать задачи
- [`pasteTask()`](api/methods/pastetask_method.md) — вставить задачи
- [`moveTask()`](api/methods/movetask_method.md) — переместить задачи
- [`deleteTask()`](api/methods/deletetask_method.md) — удалить задачи
- [`checkTask()`](api/methods/checktask_method.md), [`uncheckTask()`](api/methods/unchecktask_method.md) — отметить задачи как выполненные или невыполненные
- [`indentTask()`](api/methods/indenttask_method.md), [`unindentTask()`](api/methods/unindenttask_method.md) — увеличить или уменьшить уровень вложенности задач

## Сброс выделения {#reset-selection}

### Снять выделение с одной задачи {#unselect-one-task}

Чтобы снять выделение с одной задачи, передайте её идентификатор в метод [`unselectTask()`](api/methods/unselecttask_method.md). Фрагмент ниже снимает выделение с одной задачи:

~~~js
list.unselectTask({ id: "1.1" });
~~~

### Снять выделение со всех задач {#unselect-all-tasks}

Чтобы снять выделение со всех текущих выбранных задач, передайте `id: null` в метод [`unselectTask()`](api/methods/unselecttask_method.md):

~~~js
list.unselectTask({ id: null });
~~~

## Горячие клавиши {#keyboard-shortcuts}

:::info
Дополнительную информацию смотрите в руководстве [**Навигация с клавиатуры**](guides/keyboard_navigation.md).
:::
