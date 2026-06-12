---
sidebar_label: api.getStores()
title: Метод api.getStores
description: Вы можете узнать о методе getStores в документации библиотеки DHTMLX JavaScript To Do List. Ознакомьтесь с руководствами разработчика и справочником API, изучите примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# api.getStores()

### Описание {#description}

@short: Возвращает объект с объектом DataStore списка To Do List

### Использование {#usage}

~~~js
api.getStores(): object;
~~~

### Возвращаемое значение {#returns}

Метод возвращает объект с `DataStore`:

~~~js
state: DataStore // ( object )
~~~

### Пример {#example}

~~~js {11-12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const stores = list.api.getStores();
console.log(stores);
~~~
