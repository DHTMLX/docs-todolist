---
sidebar_label: api.getReactiveState()
title: Метод api.getReactiveState
description: Вы можете узнать о методе getReactiveState в документации библиотеки DHTMLX JavaScript To Do List. Ознакомьтесь с руководствами разработчика и справочником API, изучите примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# api.getReactiveState()

### Описание {#description}

@short: Возвращает объект с реактивными свойствами DataStore списка To Do List

### Использование {#usage}

~~~js
api.getReactiveState(): object;
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

~~~js {12-15}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// subscribe to the task selection
list.api.getReactiveState().selected.subscribe((value) => {
    console.log(value);
    // other actions
});
~~~

**История изменений:** Параметр `historyState` был добавлен в v1.3
