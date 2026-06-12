---
sidebar_label: Migration zu neueren Versionen
title: Migration zu neueren Versionen
description: Sie können Informationen zur Migration zu neueren Versionen in der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek nachlesen. Erkunden Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Migration zu neueren Versionen {#migration-to-newer-versions}

## 1.1 -> 1.2 {#11---12}

Die Eigenschaft [`taskShape`](api/configs/taskshape_config.md) von To Do List wurde wie folgt aktualisiert:

~~~js {} title="Vor v1.2"
taskShape: {
    counter: { ... },
    date: { ... },
    completed: { ... },
}
~~~

~~~js {5-8} title="Ab v1.2"
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

Die Eigenschaft [`tasks`](api/configs/tasks_config.md) von To Do List wurde wie folgt aktualisiert:

~~~js {} title="Vor v1.2"
tasks: [
    {
        id: ...,
        parent: ...,
        project: ...,
        ...,
    }, { ... }
]
~~~

~~~js {6} title="Ab v1.2"
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

In Version 1.1 wurde der Parameter `selectable` der Eigenschaft [`taskShape`](api/configs/taskshape_config.md) in `completed` umbenannt. Darüber hinaus wurde der Parameter um die neue Option `taskHide` erweitert.

~~~js {2} title="Vor v1.1"
taskShape: {
    selectable: {
        behavior: "manual"
    }
}
~~~

~~~js {2-5} title="Ab v1.1"
taskShape: {
    completed: {
        behavior: "manual",
        taskHide: true
    }
}
~~~
