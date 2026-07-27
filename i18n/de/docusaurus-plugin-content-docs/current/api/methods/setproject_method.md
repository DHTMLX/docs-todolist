---
sidebar_label: setProject()
title: setProject-Methode
description: Sie können die setProject-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# setProject()

### Beschreibung {#description}

@short: Legt das angegebene Projekt als aktives Projekt fest

### Verwendung {#usage}

~~~js
setProject({
    id: string | number | null
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID eines Projekts. Um den Abschnitt *Kein Projekt* anzuzeigen, setzen Sie die ID auf `null`

### Beispiel {#example}

~~~js {17-19}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ],
    activeProject: "second"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// aktives Projekt wechseln
list.setProject({
    id: "first"
});
~~~

**Verwandter Artikel:** [Operationen mit Projekten](guides/project_operations.md)
