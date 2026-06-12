---
sidebar_label: readonly
title: readonly Config
description: Sie können mehr über die readonly-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# readonly

### Beschreibung {#description}

@short: Optional. Versetzt die To Do List in den Nur-Lesen-Modus

:::tip
Wenn der Nur-Lesen-Modus aktiviert ist, werden die Schaltfläche *Aufgabe hinzufügen* und die *3-Punkte*-Symbole in der Toolbar und in der Liste ausgeblendet.

Im *Nur-Lesen*-Modus ist es lediglich möglich, Aufgaben als erledigt/nicht erledigt zu markieren.
:::

### Verwendung {#usage}

~~~js
readonly?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx {}
readonly: false // Nur-Lesen-Modus ist deaktiviert
~~~

### Beispiel {#example}

~~~js {9}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

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

**Verwandter Artikel**: [Nur-Lesen-Modus](guides/readonly_mode.md)
