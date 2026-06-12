---
sidebar_label: readonly
title: readonly Config
description: You can learn about the readonly config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# readonly

### Описание {#description}

@short: Необязательный. Переводит To Do List в режим только для чтения

:::tip
После включения режима только для чтения кнопка *добавления задачи* и иконки *трёх точек* скрываются на панели инструментов и в списке

В режиме *readonly* можно только отмечать задачи как выполненные/невыполненные
:::

### Использование {#usage}

~~~js
readonly?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx {}
readonly: false // режим только для чтения отключён
~~~

### Пример {#example}

~~~js {9}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// создание To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Связанная статья**: [Режим только для чтения](guides/readonly_mode.md)
