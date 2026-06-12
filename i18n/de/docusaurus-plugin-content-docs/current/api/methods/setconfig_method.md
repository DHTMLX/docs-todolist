---
sidebar_label: setConfig()
title: setConfig-Methode
description: Sie können die setConfig-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# setConfig()

### Beschreibung {#description}

@short: Legt eine neue Konfiguration für die To Do List fest

### Verwendung {#usage}

~~~js
setConfig(config: object): void;
~~~

### Parameter {#parameters}

- `config` - (erforderlich) ein Objekt mit der neuen Konfiguration der To Do List. Die vollständige Liste der Eigenschaften finden Sie [hier](api/api_overview.md#to-do-list-properties)

:::tip
Die Methode ändert nur die übergebenen Parameter. Es ist auch möglich, Daten über die Methode in die To Do List zu laden, wir empfehlen jedoch, zu diesem Zweck die [`parse()`](api/methods/parse_method.md)-Methode zu verwenden.
:::

:::important
Die `setConfig()`-Methode zerstört die aktuelle Komponente und initialisiert eine neue. Wenn Sie die Komponente mit **Toolbar** verwenden, müssen Sie die [`setConfig()`](api/toolbar_api/methods/setconfig_method.md)-Methode der **Toolbar** aufrufen, da diese die interne API der To Do List verwendet. Siehe das Beispiel unten!
:::

### Beispiel {#example}

~~~js {16-19,21-24}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ],
    activeProject: "first"
});
            
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Konfiguration der To Do List ändern
list.setConfig({
    activeProject: "second"
});

// Konfigurationsparameter der Toolbar aktualisieren
toolbar.setConfig({
    api: list.api,
});
~~~
