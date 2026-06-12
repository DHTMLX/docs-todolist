---
sidebar_label: Abgeschlossene Aufgaben ausblenden
title: Abgeschlossene Aufgaben anzeigen/ausblenden
description: Sie erfahren mehr darüber, wie abgeschlossene Aufgaben in der DHTMLX JavaScript To Do List ausgeblendet oder angezeigt werden können, in der Dokumentation. Durchsuchen Sie Entwickleranleitungen und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Evaluierungsversion von DHTMLX To Do List herunter.
---

# Abgeschlossene Aufgaben anzeigen/ausblenden

## Anfangsmodus {#initial-mode}

Die To Do List verfügt über zwei Anzeigemodi für Aufgaben:

- alle Aufgaben anzeigen (*Standard*)
- abgeschlossene Aufgaben ausblenden

Blenden Sie abgeschlossene Aufgaben beim Start aus, damit sich Benutzer auf ausstehende konzentrieren können. Setzen Sie `taskShape.completed.taskHide` auf `true`. Weitere Details finden Sie in der [`taskShape`](api/configs/taskshape_config.md)-Referenz. Das folgende Beispiel blendet abgeschlossene Aufgaben bei der Initialisierung aus:

~~~js {6}
const list = new ToDo("#root", {
    tasks,
    taskShape: {
        completed: {
            behavior: "manual",
            taskHide: true
        }
    }
});
~~~

## Zwischen Modi wechseln {#switching-between-modes}

Nach der Initialisierung können Sie auf zwei Wegen zwischen den Modi wechseln:

- über die Option **Abgeschlossene Aufgaben → Anzeigen/Ausblenden** im [Toolbar-Menü](/#toolbar)
- über die Methoden [`hideCompletedTasks()`](api/methods/hidecompletedtasks_method.md) und [`showCompletedTasks()`](api/methods/showcompletedtasks_method.md)

Der folgende Ausschnitt zeigt, wie abgeschlossene Aufgaben zur Laufzeit aus- oder eingeblendet werden:

~~~js
list.hideCompletedTasks();
// oder
list.showCompletedTasks();
~~~
