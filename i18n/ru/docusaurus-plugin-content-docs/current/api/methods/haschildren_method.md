---
sidebar_label: hasChildren()
title: Метод hasChildren
description: Вы можете узнать о методе hasChildren в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# hasChildren()

### Описание {#description}

@short: Проверяет, есть ли у указанной задачи дочерние задачи


### Использование {#usage}

~~~js
hasChildren({
    id: string | number,
    filtered?: boolean, // false по умолчанию
    hideCompleted?: boolean // false по умолчанию
}): boolean;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор задачи
- `filtered` - (необязательный) если `false`, отфильтрованные дочерние задачи также будут включены в результат; в противном случае они будут исключены
- `hideCompleted` - (необязательный) если `false`, выполненные задачи будут включены в результат; в противном случае они будут исключены

:::tip
Параметр `filtered` используется, если применялась фильтрация
:::

### Возвращает {#returns}

Метод возвращает `true`, если у задачи есть дочерние задачи; в противном случае возвращает `false`

### Пример {#example}

~~~js {17,19,22,25-26,28}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1 #tag3" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// проверить наличие дочерних задач (до фильтрации)
console.log(list.hasChildren({ id: "1.1" })); // -> true

console.log(list.hasChildren({ id: "1.1", hideCompleted: true})); // -> false

// отфильтровать задачи
list.setFilter({ match: "#tag3", highlight: true });

// проверить наличие дочерних задач (после фильтрации)
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", hideCompleted: true })); // -> false

console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~

**История изменений:** Параметр `hideCompleted` добавлен в v1.1

**Связанная статья:** [Объект задачи/Id](guides/task_object.md)
