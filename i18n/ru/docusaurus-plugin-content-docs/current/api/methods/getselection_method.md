---
sidebar_label: getSelection()
title: Метод getSelection
description: Вы можете узнать о методе getSelection в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# getSelection()

### Описание {#description}

@short: Возвращает массив с идентификатором выбранной задачи

### Использование {#usage}

~~~js
getSelection({
    sorted?: boolean,
}): (string | number)[];
~~~

### Параметры {#parameters}

- `sorted` - (необязательный) если `true`, идентификаторы выбранных задач сортируются в порядке их отображения в списке; если `false`, идентификаторы задач выводятся без сортировки

### Возвращает {#returns}

Метод возвращает массив с идентификаторами выбранных задач

### Пример {#example}

~~~js {20,23}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.2", "1.1", "2.2", "2.1"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// сортировка отключена;
console.log(list.getSelection({ sorted: false })); // ["1.2", "1.1", "2.2", "2.1"]

// сортировка включена;
console.log(list.getSelection({ sorted: true })); // ["1.1", "1.2", "2.1", "2.2"]
~~~

**История изменений**: Параметр `sorted` добавлен в v1.1

**Связанная статья**: 
- [Объект задачи/Id](guides/task_object.md)
- [Множественный выбор и групповые операции](guides/multiselection.md)
