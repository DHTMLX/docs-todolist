---
sidebar_label: locale
title: locale Config
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die locale-Konfiguration der Toolbar. Lesen Sie Entwicklerhandbücher und API-Referenzen, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# locale

### Beschreibung {#description}

@short: Optional. Wendet die gewünschte Locale auf die Toolbar an

### Verwendung {#usage}

~~~js
locale?: object;
~~~

### Standardkonfiguration {#default-config}

Standardmäßig verwendet die Toolbar von DHTMLX To Do List die [englische Locale](guides/localization.md#default-locale).

~~~js
locale: en
~~~


### Beispiel {#example}

~~~js {8,13}
const { ToDo, Toolbar} = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    locale: de // sets the "de" locale in the To Do List component (read Info below)
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // sets the "de" locale in the Toolbar
});
~~~


:::info
Toolbar ist eine separate Komponente von To Do List. Bevor Sie die gewünschte Locale auf die Toolbar anwenden, stellen Sie sicher, dass Sie sie bereits auf die **To Do List** angewendet haben
:::

:::tip
Um die Locale dynamisch zu ändern, verwenden Sie die Methode [`setLocale()`](api/toolbar_api/methods/setlocale_method.md)
:::

**Verwandter Artikel:** [Lokalisierung](guides/localization.md)
