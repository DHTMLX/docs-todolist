---
sidebar_label: tags
title: tags Config
description: Sie können mehr über die tags-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# tags

### Beschreibung {#description}

@short: Optional. Ein Array von Hashtags, die standardmäßig angezeigt werden

:::tip
Um die Liste der Hashtags anzuzeigen, geben Sie `#` in die Suchleiste oder in den Texteditor ein.
:::

### Verwendung {#usage}

~~~js
tags?: string[];
~~~

:::info
Ein Hashtag kann mit einem beliebigen Symbol beginnen, das `#`-Symbol wird automatisch hinzugefügt.
:::

### Beispiel {#example}

~~~js {8}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags: ["urgent", "normal"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Verwandte Artikel:** 
- [Daten laden und speichern](guides/loading_data.md)
- [Inline-Bearbeitung](guides/inline_editing.md)
