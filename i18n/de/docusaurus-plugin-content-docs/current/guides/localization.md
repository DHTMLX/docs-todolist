---
sidebar_label: Lokalisierung
title: Lokalisierung
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über die Lokalisierung der To Do List. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Lokalisierung

Zeigen Sie die DHTMLX To Do List-Oberfläche in jeder Sprache an. Die Bibliothek stellt eine Reihe vordefinierter Locales bereit und ermöglicht die Erstellung eigener Locales. Standardmäßig verwendet DHTMLX To Do List das [Englische Locale](#default-locale).

## Standard-Locale {#default-locale}

Der folgende Code-Ausschnitt zeigt die vollständige Struktur des standardmäßigen Englischen Locale:

~~~js
const en = {
    calendar:{ // Übersetzungen und Einstellungen des Kalenders
        monthFull: [
            "January", "February", "March",
            "April", "May", "June", 
            "July", "August", "September", 
            "October", "November", "December"
        ],
        monthShort: [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun",
            "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"
        ],
        dayFull: [
            "Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    
        clear: "Clear",
        done: "Done",
        today: "Today",

        weekStart: 1 // legt den ersten Wochentag fest (standardmäßig Montag)
    },
    // To Do List
    todo: {
        // Toolbar
        "No project": "No project",
        "Search project": "Search project",
        "Add project": "Add project",
        "Rename project": "Rename project",
        "Delete project": "Delete project",

        // hinzugefügt in v1.1 (Anfang)
        "Completed tasks": "Completed tasks",
        "Show": "Show",
        "Hide": "Hide",
        "Sort by": "Sort by",
        "Text (a-z)": "Text (a-z)",
        "Text (z-a)": "Text (z-a)",
        "Due date (new to old)": "Due date (new to old)",
        "Due date (old to new)": "Due date (old to new)",
        "Completion date (new to old)": "Completion date (new to old)",
        "Completion date (old to new)": "Completion date (old to new)",
        "Created (new to old)": "Created (new to old)",
        "Created (old to new)": "Created (old to new)",
        "Edited (new to old)": "Edited (new to old)",
        "Edited (old to new)": "Edited (old to new)",
        // hinzugefügt in v1.1 (Ende)

        // Aufgabe
        "Add task below": "Add task below",
        "Add subtask": "Add subtask",
        "Set due date": "Set due date",
        "Indent": "Indent",
        "Unindent": "Unindent",
        "Assign to": "Assign to",
        "Move to": "Move to",
        "Duplicate": "Duplicate",
        "Copy": "Copy",
        "Paste": "Paste",
        "Delete": "Delete",

        // Prioritäten (hinzugefügt in v1.2)
        "Priority (high to low)": "Priority (high to low)",
        "Priority (low to high)": "Priority (low to high)",
        "Set priority": "Set priority",
        "Reset priority": "Reset priority",

        // Tastenkürzel
        "Enter": "Enter",
        "Tab": "Tab",
        "Shift+Tab": "Shift+Tab",
        "Ctrl+D": "Ctrl+D",
        "Ctrl+C": "Ctrl+C",
        "Ctrl+V": "Ctrl+V",
        
        // Für Mac OS
        "CMD+D": "CMD+D",
        "CMD+C": "CMD+C",
        "CMD+V": "CMD+V",

        // Editor
        "Type what you want": "Type what you want",

        // Sonstiges
        "Search": "Search",
        "Add task": "Add task",
        "New project": "New project",

        // Standard-Prioritätsbezeichnungen
        "High": "High",
        "Medium": "Medium",
        "Low": "Low"
    }
};
~~~

## Benutzerdefiniertes Locale {#custom-locale}

So initialisieren Sie die To Do List-Komponente in einer anderen Sprache als Englisch:

- Definieren Sie die Spracheinstellungen, indem Sie Übersetzungen für alle Textbezeichnungen bereitstellen
- Wenden Sie das Locale auf die To Do List-Komponente und die Toolbar über die Konfigurationseigenschaft `locale` an

Das folgende Beispiel deklariert ein Deutsches Locale-Objekt:

~~~js
const de = {
    calendar: {
        // Übersetzungen für Kalenderbezeichnungen
    },
    todo: {
        // Übersetzungen für To Do List-Bezeichnungen
    }
};
~~~

:::tip
Um ein benutzerdefiniertes Locale zu erstellen, kopieren Sie das [Standard-Englische Locale](#default-locale) und übersetzen Sie dessen Textbezeichnungen.
:::

:::info
[**Dieses GitHub-Repository**](https://github.com/web-widgets/wx-todo-locales/tree/master/locales) stellt To Do List-Locales für folgende Sprachen bereit:

- Chinesisch (`cn`)
- Französisch (`fr`)
- Deutsch (`de`)
- Englisch (`en`)
- Italienisch (`it`)
- Japanisch (`jp`)
- Portugiesisch (`pt`)
- Russisch (`ru`)
- Spanisch (`es`)

Die Dateien enthalten keine Übersetzungen für die Kalenderbezeichnungen, fügen Sie diese daher selbst hinzu.
:::

Der folgende Code-Ausschnitt wendet das `de`-Locale auf die To Do List und die Toolbar an:

~~~js {8,13}
const { ToDo, Toolbar} = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    locale: de // setzt das "de"-Locale in der Komponente
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // setzt das "de"-Locale in der Toolbar
});
~~~

:::tip
Um das Locale dynamisch zu wechseln, rufen Sie [`setLocale()`](api/methods/setlocale_method.md) auf der To Do List und das entsprechende [`setLocale()`](api/toolbar_api/methods/setlocale_method.md) auf der Toolbar auf.
:::

## Beispiel {#example}

Der folgende Code-Ausschnitt wechselt zwischen dem EN- und dem DE-Locale:

<iframe src="https://snippet.dhtmlx.com/kzjwvuq5?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
