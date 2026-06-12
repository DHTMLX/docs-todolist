---
sidebar_label: Schreibgeschützter Modus
title: Schreibgeschützter Modus
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über den schreibgeschützten Modus. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Schreibgeschützter Modus

Um die To Do List schreibgeschützt zu machen, setzen Sie die Konfigurationseigenschaft [`readonly`](api/configs/readonly_config.md) auf `true`. Das folgende Beispiel initialisiert die To Do List im schreibgeschützten Modus:

~~~js {8}
const { ToDo, Toolbar } = todo;

// To Do List erstellen
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

:::info
In diesem Modus sind Aufgaben nicht bearbeitbar. Benutzer können eine Aufgabe nur auswählen und als erledigt oder unerledigt markieren.
:::

## Beispiel {#example}

Das folgende Live-Snippet demonstriert den schreibgeschützten Modus:

<iframe src="https://snippet.dhtmlx.com/ru1q1p7y?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="520"></iframe>
