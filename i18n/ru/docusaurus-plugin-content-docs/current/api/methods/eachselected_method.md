---
sidebar_label: eachSelected()
title: Метод eachSelected
description: Вы можете узнать о методе eachSelected в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# eachSelected()

### Описание {#description}

@short: Перебирает все выбранные задачи

### Использование {#usage}

~~~js
eachSelected(
    callback: (id: string | number, index: number) => void,
    sorted?: boolean, // false по умолчанию
    reversed?: boolean, // false по умолчанию
);
~~~

### Параметры {#parameters}

- `callback` - (обязательный) функция обратного вызова, выполняемая для каждой выбранной задачи. Функция принимает два параметра:
    - `id` - идентификатор выбранной задачи
    - `index` - индекс текущей задачи
- `sorted` - (необязательный) определяет, нужно ли сортировать идентификаторы выбранных задач в порядке их отображения в списке (`true`) или нет (`false`)
- `reversed` - (необязательный) определяет, нужно ли перебирать выбранные задачи в обратном порядке (`true`) или нет (`false`)

### Пример {#example}

~~~js {22-24,27-29,32-34,37-39}
const { ToDo, Toolbar } = todo;

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
    selected: ["1.2", "1.1", "2.2", "2.1"],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// sorted - выключен; reversed - выключен;
list.eachSelected(id => {
    console.log("selected id:", id); // ["1.2", "1.1", "2.2", "2.1"]
});

// sorted - включён; reversed - выключен;
list.eachSelected(id => {
    console.log("selected id:", id); // ["1.1", "1.2", "2.1", "2.2"]
}, true);

// sorted - выключен; reversed - включён;
list.eachSelected(id => {
    console.log("selected id:", id); // ["2.1", "2.2", "1.1", "1.2"]
}, false, true);

// sorted - включён; reversed - включён;
list.eachSelected(id => {
    console.log("selected id:", id); // ["2.2", "2.1", "1.2", "1.1"]
}, true, true);
~~~

**История изменений:** Добавлен в v1.1

**Связанная статья:** [Множественный выбор и групповые операции](guides/multiselection.md)
