---
sidebar_label: api.getState()
title: Метод api.getState
description: Вы можете узнать о методе getState в документации библиотеки DHTMLX JavaScript To Do List. Ознакомьтесь с руководствами разработчика и справочником API, изучите примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# api.getState()

### Описание {#description}

@short: Возвращает объект с текущими свойствами DataStore списка To Do List

### Использование {#usage}

~~~js
api.getState(): object;
~~~

### Возвращаемое значение {#returns}

Метод возвращает объект со следующими свойствами:

~~~js
{
    activeProject: object,
    tasks: object,
    id: object,
    projects: object,
    readonly: object,
    tags: object,
    taskShape: object,
    selected: object,
    users: object,
    historyState: object
}
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

const state = list.api.getState();
console.log(state);
~~~

**История изменений**: Параметр `historyState` был добавлен в v1.3
