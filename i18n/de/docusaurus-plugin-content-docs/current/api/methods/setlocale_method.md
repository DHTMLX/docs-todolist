---
sidebar_label: setLocale()
title: setLocale-Methode
description: Sie können die setLocale-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# setLocale()

### Beschreibung {#description}

@short: Legt das angegebene Gebietsschema für die To Do List fest

### Verwendung {#usage}

~~~js
setLocale(
    locale: object,
): void;
~~~

### Parameter {#parameters}

- `locale` - (erforderlich) ein Objekt des Gebietsschemas

:::important
Die `setLocale()`-Methode zerstört die aktuelle Komponente und initialisiert eine neue. Wenn Sie die Komponente mit **Toolbar** verwenden, müssen Sie die [`setLocale()`](api/toolbar_api/methods/setlocale_method.md)-Methode der **Toolbar** aufrufen, um deren Gebietsschema zu ändern. Siehe das Beispiel unten!
:::

### Beispiel {#example}

~~~js {97-98,100-102}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const de = {
    calendar: {
        monthShort: [
            "Jan",
            "Feb",
            "Mrz",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dez",
        ],
        monthFull: [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
        ],
        dayShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        dayFull: [
            "Sonntag",
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag",
        ],
        clear: "Entfernen",
        done: "Fertig",
        today: "Heute",
    },
    todo: {
        // Toolbar
        "No project": "Kein Projekt",
        "Search project": "Projekt suchen",
        "Add project": "Projekt hinzufügen",
        "Rename project": "Projekt umbenennen",
        "Delete project": "Projekt löschen",
        // Task
        "Add task below": "Aufgabe unten hinzufügen",
        "Add subtask": "Unteraufgabe hinzufügen",
        "Set due date": "Fälligkeitsdatum festlegen",
        "Indent": "Einzug",
        "Unindent": "Nicht einrücken",
        "Assign to": "Zuweisen",
        "Move to": "Ziehen nach",
        "Duplicate": "Duplikat",
        "Copy": "Kopieren",
        "Paste": "Einfügung",
        "Delete": "Löschen",
        // Shortcut
        "Enter": "Enter",
        "Tab": "Tab",
        "Shift+Tab": "Shift+Tab",
        "Ctrl+D": "Ctrl+D",
        "Ctrl+C": "Ctrl+C",
        "Ctrl+V": "Ctrl+V",
        // For Mac OS
        "CMD+D": "CMD+D",
        "CMD+C": "CMD+C",
        "CMD+V": "CMD+V",
        // Editor
        "Type what you want": "Warten auf Eingabe",
        // Other
        "Search": "Suche",
        "Add task": "Aufgabe hinzufügen",
        "New project": "Neues Projekt",
    },
};

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Gebietsschema der To Do List ändern
list.setLocale(de);

// Gebietsschema der Toolbar ändern (Hinweis beachten)
toolbar.setLocale(de, list.api);
~~~

**Verwandter Artikel**: [Lokalisierung](guides/localization.md)
