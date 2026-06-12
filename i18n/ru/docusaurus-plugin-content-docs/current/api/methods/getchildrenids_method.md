---
sidebar_label: getChildrenIds()
title: Метод getChildrenIds
description: Вы можете узнать о методе getChildrenIds в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# getChildrenIds()

### Описание {#description}

@short: Возвращает идентификаторы дочерних задач указанной родительской задачи


### Использование {#usage}

~~~js
getChildrenIds({
    id: string | number,
    filtered?: boolean, // false по умолчанию
    tree?: boolean, // true по умолчанию
    hideCompleted?: boolean // false по умолчанию
}): (string|number)[];
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор родительской задачи
- `filtered` - (необязательный) если `false`, отфильтрованные дочерние задачи также будут включены в результат
- `tree` - (необязательный) если `true`, все дочерние задачи будут включены в результат; если `false`, будут включены только дочерние задачи первого уровня
- `hideCompleted` - (необязательный) если `false`, выполненные задачи будут включены в результат; в противном случае они будут исключены

:::tip
Параметр `filtered` можно использовать, если применялась фильтрация
:::

### Возвращает {#returns}

Метод возвращает массив идентификаторов дочерних задач

### Пример {#example}

~~~js {17-19,22,25-27,29-31}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// получить дочерние задачи до фильтрации
console.log(list.getChildrenIds({ id: "1" })); // ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // ['1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", hideCompleted: true })); // ['1.1', '1.2']

// отфильтровать задачи
list.setFilter({ match: "#tag1", highlight: true });

// получить дочерние задачи после фильтрации
console.log(list.getChildrenIds({ id: "1" })); // -> ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // -> ['1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", hideCompleted: true})); // -> ['1.1', '1.2']

console.log(list.getChildrenIds({ id: "1", filtered: true })); // -> ['1.1', '1.1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: false })); // -> ['1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, hideCompleted: true })); // -> ['1.1']
~~~

**История изменений**: Параметр `hideCompleted` добавлен в v1.1

**Связанная статья**: [Объект задачи/Id](guides/task_object.md)
