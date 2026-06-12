---
sidebar_label: setFilter()
title: setFilter-Methode
description: Sie können die setFilter-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# setFilter()

### Beschreibung {#description}

@short: Filtert Aufgaben nach den angegebenen Kriterien innerhalb eines aktiven Projekts

### Verwendung {#usage}

~~~js
setFilter({
    match: string | null,
    by?: string,
    highlight?: boolean,
    strict?: boolean
}): void;
~~~

### Parameter {#parameters}

- `match` - (erforderlich) ein Suchmuster
- `by` - (optional) der Parameter des `task`-Objekts für die Suche; standardmäßig *text*
- `highlight` - (optional) legt fest, ob gefundene Treffer hervorgehoben werden sollen
- `strict` - (optional) aktiviert den *strikten* Filtermodus. Die Suche wird nach exakter Übereinstimmung durchgeführt

:::info
Um die Filterung zurückzusetzen, übergeben Sie `match: null` an die Methode
:::

### Beispiel {#example}

~~~js {13-16,19}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

// To Do List erstellen
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});

// Daten nach den angegebenen Regeln filtern
list.setFilter({
    match: "ran",
    highlight: true
});

// Filterung zurücksetzen
list.setFilter({ match: null });
~~~

**Verwandter Artikel**: [Aufgaben sortieren und filtern](guides/sorting_filtering_tasks.md)
