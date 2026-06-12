---
sidebar_label: Миграция на новые версии
title: Миграция на новые версии
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Миграция на новые версии {#migration-to-newer-versions}

## 1.1 -> 1.2 {#11---12}

Свойство [`taskShape`](api/configs/taskshape_config.md) компонента To Do List было обновлено следующим образом:

~~~js {} title="До v1.2"
taskShape: {
    counter: { ... },
    date: { ... },
    completed: { ... },
}
~~~

~~~js {5-8} title="Начиная с v1.2"
taskShape: {
    counter: { ... },
    date: { ... },
    completed: { ... },
    priority: {
        cover: true,
        label: true
    }
}
~~~

Свойство [`tasks`](api/configs/tasks_config.md) компонента To Do List было обновлено следующим образом:

~~~js {} title="До v1.2"
tasks: [
    {
        id: ...,
        parent: ...,
        project: ...,
        ...,
    }, { ... }
]
~~~

~~~js {6} title="Начиная с v1.2"
tasks: [
    {
        id: ...,
        parent: ...,
        project: ...,
        priority: 1,
        ...,
    }, { ... }
]
~~~

## 1.0 -> 1.1 {#10---11}

В версии 1.1 параметр `selectable` свойства [`taskShape`](api/configs/taskshape_config.md) был переименован в `completed`. Кроме того, параметр расширен новой опцией `taskHide`.

~~~js {2} title="До v1.1"
taskShape: {
    selectable: {
        behavior: "manual"
    }
}
~~~

~~~js {2-5} title="Начиная с v1.1"
taskShape: {
    completed: {
        behavior: "manual",
        taskHide: true
    }
}
~~~
