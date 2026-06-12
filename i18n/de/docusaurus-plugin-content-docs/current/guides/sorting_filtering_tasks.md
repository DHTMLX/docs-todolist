---
sidebar_label: Aufgaben sortieren und filtern
title: Aufgaben sortieren und filtern
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie alles über das Sortieren und Filtern von Aufgaben. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Aufgaben sortieren und filtern

## Aufgaben sortieren {#sorting-tasks}

Nach der Initialisierung können Sie Aufgaben auf eine von zwei Arten sortieren:

- über die Option **Sortieren nach** im [Toolbar-Menü](/#toolbar) — Aufgaben nach *Text*, *Fälligkeitsdatum*, *Abschlussdatum*, *Erstellungsdatum* oder *Bearbeitungsdatum* sortieren
- über die Methode [`setSort()`](api/methods/setsort_method.md) — eine benutzerdefinierte Sortierfunktion angeben oder nach einem [Aufgaben-Attribut](api/configs/tasks_config.md#parameters) sortieren

Das folgende Beispiel sortiert Aufgaben nach ID in aufsteigender Reihenfolge:

~~~js
list.setSort({
    by: task => task.id, // oder by: "text"
    dir: "asc",
    // tree: true // Baum-Sortierung aktivieren, standardmäßig false
});
~~~

## Aufgaben filtern

Aufgaben können auf eine von zwei Arten gefiltert werden:

- über die [Suchleiste](/#toolbar) der Toolbar
- über die Methode [`setFilter()`](api/methods/setfilter_method.md) — unterstützt den *strict*-Modus für exakte Übereinstimmungen

Der folgende Code-Ausschnitt filtert Aufgaben nach einem bestimmten Hashtag im strict-Modus:

~~~js
// Daten nach den angegebenen Regeln filtern
list.setFilter({
    match: "#tag1",
    highlight: true,
    strict: true
});
~~~

Um den Filter zurückzusetzen, übergeben Sie `match: null`:

~~~js
// Filter zurücksetzen
list.setFilter({ match: null });
~~~
