---
sidebar_label: parse()
title: parse Methode
description: Sie können die parse-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# parse()

### Beschreibung {#description}

@short: Lädt Daten in die To Do List

### Verwendung {#usage}

~~~js
parse({
    tasks?: [],
    users?: [],
    projects?: [],
    tags?: [],
    priorities?: [],
    activeProject?: string
}): void;
~~~

### Parameter {#parameters}

- [`tasks`](api/configs/tasks_config.md) - (optional) ein Array von Objekten mit Aufgabendaten
- [`users`](api/configs/users_config.md) - (optional) ein Array von Objekten mit Benutzerdaten
- [`projects`](api/configs/projects_config.md) - (optional) ein Array von Objekten mit Projektdaten
- [`tags`](api/configs/tags_config.md) - (optional) ein Array mit einer Liste von Tags
- [`priorities`](api/configs/priorities_config.md) - (optional) ein Array von Objekten mit Prioritätsdaten
- [`activeProject`](api/configs/activeproject_config.md) - (optional) die ID des aktiven Projekts

### Beispiel {#example}

~~~js {3,10-14}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// vorbereitete Daten in die Komponente laden
list.parse({
    tasks,
    users,
    projects,
});
~~~

**Verwandter Artikel**: [Daten laden und speichern](guides/loading_data.md)
