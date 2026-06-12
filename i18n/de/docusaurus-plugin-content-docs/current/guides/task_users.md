---
sidebar_label: Aufgaben-Bearbeiter
title: Aufgaben-Bearbeiter
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie alles über Aufgaben-Bearbeiter. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Aufgaben-Bearbeiter

Delegieren Sie Aufgaben an eine oder mehrere Personen.

## Aufgaben-Bearbeiter konfigurieren {#configure-task-assignees}

Geben Sie die Liste der Bearbeiter über die Konfigurationseigenschaft [`users`](api/configs/users_config.md) an. Das folgende Beispiel definiert vier Benutzer:

~~~js
const users = [
    { id: "user_1", label: "Don Smith", avatar: "../avatar_61.jpg"},
    { id: "user_2", label: "Nadia Chasey", avatar: "../avatar_63.jpg" },
    { id: "user_3", label: "Mike Young", avatar: "../avatar_03.jpg" },
    { id: "user_4", label: "Elvira Webb", avatar: "../avatar_33.jpg" }
];

const list = new ToDo("#root", { users });
~~~

## Bearbeiter bei der Initialisierung festlegen {#set-assignees-on-initialization}

Um Personen einer Aufgabe bei der Initialisierung zuzuweisen, übergeben Sie die IDs der Bearbeiter an den Parameter `assigned` des entsprechenden [`task`](api/configs/tasks_config.md)-Objekts. Der folgende Code-Ausschnitt weist vier Benutzer einer Aufgabe zu:

~~~js {11}
const users = [
    { id: "user_1", label: "Don Smith", avatar: "../avatar_61.jpg"},
    ...
];

const tasks = [
    {
        id: "2",
        project: "introduction",
        text: "You can assign task performers using the menu.",
        assigned: [ "user_1", "user_2", "user_3", "user_4" ],
    }
];

const list = new ToDo("#root", {
    tasks,
    users
});
~~~

Die zugewiesenen Personen erscheinen rechts neben der Aufgabe.

![users](../assets/users.png)

Um die Liste der einer Aufgabe zugewiesenen Personen anzuzeigen, klicken Sie auf die Avatare. Zum Schließen klicken Sie außerhalb der Liste.

## Aufgaben-Bearbeiter ändern {#change-task-assignees}

Nach der Initialisierung können Sie einen Aufgaben-Bearbeiter auf eine von zwei Arten neu zuweisen oder entfernen:

- über die Option **Zuweisen an** im Aufgabenmenü
- über die Methoden [`assignUser()`](api/methods/assignuser_method.md) und [`unassignUser()`](api/methods/unassignuser_method.md)

Das folgende Beispiel weist einer Aufgabe einen Benutzer zu und entfernt einen Benutzer von einer anderen:

~~~js
// einer Aufgabe eine Person zuweisen
list.assignUser({
    id: "3",
    userId: "user_1"
});

// eine Person von der Aufgabe entfernen
list.unassignUser({
    id: "2",
    userId: "user_1"
});
~~~
