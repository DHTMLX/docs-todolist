---
sidebar_label: Объект задачи/Id
title: Объект задачи/ID
description: Вы можете узнать об объекте задачи и идентификаторе задачи в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Объект задачи/Id

## Получение объекта задачи {#get-a-task-object}

Чтобы получить объект задачи, используйте метод [`getTask()`](api/methods/gettask_method.md). Пример ниже извлекает задачу по идентификатору:

~~~js
const tasks = [
    { id: "1", text: "Task 1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

list.getTask({ id: "1.2" }); // -> {id: '1.2', text: 'Task 1.2', parent: '1'}
~~~

## Проверка существования задачи {#check-if-a-task-exists}

Чтобы проверить, существует ли задача, используйте метод [`existsTask()`](api/methods/existstask_method.md). Фрагмент ниже проверяет два идентификатора:

~~~js
const tasks = [
    { id: "1", text: "Task 1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

list.existsTask({ id: "2" }); // -> false
list.existsTask({ id: "1.2" }); // -> true
~~~

## Получение идентификаторов дочерних задач {#get-child-ids}

Чтобы получить дочерние задачи, используйте метод [`getChildrenIds()`](api/methods/getchildrenids_method.md). Пример ниже возвращает всех потомков задачи:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

console.log(list.getChildrenIds({ id: "1" })); // ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // ['1.1', '1.2']
~~~

Фильтрация может скрывать некоторые задачи на странице. Параметр `filtered` определяет, будут ли скрытые задачи включены в результат. Установите его в `true`, чтобы исключить их (по умолчанию `false`). Фрагмент ниже демонстрирует оба варианта:

~~~js
// фильтрация задач
list.setFilter({ match: "#tag1", highlight: true });

// получение дочерних элементов задачи после фильтрации
console.log(list.getChildrenIds({ id: "1", filtered: false })); // -> ['1.1', '1.1.1', '1.2']

// включение параметра "filtered"
console.log(list.getChildrenIds({ id: "1", filtered: true })); // -> ['1.1', '1.1.1']
~~~

Установите `tree` в `false`, чтобы вернуть только дочерние задачи первого уровня:

~~~js
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: false })); // -> ['1.1']
console.log(list.getChildrenIds({ id: "1", filtered: false, tree: false })); // -> ['1.1', '1.2']
~~~

Установите `hideCompleted` в `true`, чтобы исключить завершённые дочерние задачи. Пример ниже комбинирует `filtered`, `tree` и `hideCompleted` различными способами:

~~~js {4,11,18,21}
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

// до фильтрации
console.log(list.getChildrenIds({ id: "1", tree: true, hideCompleted: false })); // -> ['1.1', '1.1.1', '1.2']

console.log(list.getChildrenIds({ id: "1", tree: true, hideCompleted: true })); // ['1.1', '1.2']

// фильтрация задач
list.setFilter({ match: "#tag1", highlight: true });

// после фильтрации
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: true, hideCompleted: false})); // -> ['1.1', '1.1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: true, hideCompleted: true })); // -> ['1.1']

console.log(list.getChildrenIds({ id: "1", filtered: false, tree: true, hideCompleted: false})); // -> ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", filtered: false, tree: true, hideCompleted: true})); // -> ['1.1', '1.2']
~~~

## Проверка наличия дочерних задач {#check-if-a-task-has-children}

Чтобы проверить, есть ли у задачи дочерние задачи, используйте метод [`hasChildren()`](api/methods/haschildren_method.md). Фрагмент ниже проверяет наличие дочерних задач:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1 #tag3" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

// проверка, есть ли у задачи дочерние элементы (до фильтрации)
console.log(list.hasChildren({ id: "1.1" })); // -> true
~~~

Фильтрация может скрывать некоторые задачи на странице. Параметр `filtered` определяет, будут ли отфильтрованные (скрытые) задачи включены в результат (`filtered: false` по умолчанию) или нет (`filtered: true`):

~~~js
// фильтрация задач
list.setFilter({ match: "#tag3", highlight: true });

// проверка, есть ли у задачи дочерние элементы (после фильтрации)
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~

Установите `hideCompleted` в `true`, чтобы исключить завершённые задачи из результата:

~~~js {4,9}
const tasks = [
    { id: "1", text: "Task 1 #tag1 #tag3" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", hideCompleted: true })); // -> false
~~~

## Получение идентификаторов родительских задач {#get-parent-ids}

Чтобы получить родительские задачи, используйте метод [`getParentIds()`](api/methods/getparentids_method.md). Пример ниже возвращает полную цепочку родителей для задачи:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

console.log(list.getParentIds({ id: "1.1.1" })); //  ['1.1', '1']
~~~

## Получение идентификаторов выделенных задач {#get-ids-of-selected-tasks}

Чтобы получить идентификаторы всех выделенных задач, используйте метод [`getSelection()`](api/methods/getselection_method.md). Фрагмент ниже инициализирует To Do List с предварительно выделенными задачами и добавляет ещё одно выделение:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { 
    tasks,
    selected: ["1.1", "1.2"]
});

list.selectTask({
    id: "1.1.1",
    join: true
});

console.log(list.getSelection({ sorted: false })); // -> ["1.1", "1.2", "1.1.1"]
~~~
