---
sidebar_label: locale
title: locale Config
description: Sie können mehr über die locale-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# locale

### Beschreibung {#description}

@short: Optional. Wendet das erforderliche Gebietsschema auf die Komponente an

### Verwendung {#usage}

~~~js
locale?: object;
~~~

### Standardkonfiguration {#default-config}

Standardmäßig verwendet DHTMLX To Do List das [englische Gebietsschema](guides/localization.md#default-locale).

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
    locale: de // setzt das Gebietsschema "de" in der Komponente
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // setzt das Gebietsschema "de" in der Toolbar (siehe Hinweis unten)
});
~~~


:::info
Die Toolbar ist eine separate Komponente von To Do List. Daher müssen Sie das erforderliche Gebietsschema auch auf die **Toolbar** über die zugehörige Eigenschaft [`locale`](api/toolbar_api/configs/locale_config.md) anwenden.
:::

:::tip
Um das Gebietsschema dynamisch zu ändern, verwenden Sie die Methode [`setLocale()`](api/methods/setlocale_method.md).
:::

**Verwandter Artikel:** [Lokalisierung](guides/localization.md)

**Verwandtes Beispiel:** [To-do-Liste. Lokalisierung](https://snippet.dhtmlx.com/kzjwvuq5)
