---
sidebar_label: Initialisierung
title: Initialisierung
description: Sie erfahren mehr über die Initialisierung von DHTMLX JavaScript To Do List in der Dokumentation. Durchsuchen Sie Entwickleranleitungen und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Evaluierungsversion von DHTMLX To Do List herunter.
---

# Initialisierung

Um die To Do List auf der Seite anzuzeigen, führen Sie die folgenden Schritte aus:

1. [Quelldateien der To Do List auf einer Seite einbinden](#include-source-files)
2. [Zwei Container erstellen](#create-containers): einen für die Liste und einen für die Toolbar
3. [Liste und Toolbar initialisieren](#initialize-to-do-list)

## Quelldateien einbinden {#include-source-files}

Laden Sie das To Do List-Paket herunter und entpacken Sie es in einen Ordner Ihres Projekts. Das Paket erhalten Sie auf der [Download-Seite](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml).

Binden Sie die folgenden Quelldateien auf Ihrer Seite ein:

- *todo.js*
- *todo.css*

Passen Sie die relativen Pfade an die Struktur Ihres Projekts an. Das folgende Beispiel lädt beide Dateien aus dem Ordner *dist*:

~~~html title="index.html"
<script type="text/javascript" src="./dist/todo.js"></script>
<link rel="stylesheet" href="./dist/todo.css">
~~~

## Container erstellen {#create-containers}

Das To Do List-Widget besteht aus zwei Komponenten: einer Liste und einer Toolbar.

Erstellen Sie **zwei Container** für die Liste und die Toolbar und weisen Sie ihnen IDs zu (zum Beispiel `"root"` und `"toolbar"`). Der folgende Ausschnitt deklariert beide Container:

~~~html title="index.html"
<div id="toolbar"></div> <!-- Container für die Toolbar (optional) -->
<div id="root"></div> <!-- Container für die Liste -->
~~~

## To Do List initialisieren {#initialize-to-do-list}

### Liste initialisieren {#initialize-list}

Initialisieren Sie die Liste mit dem Konstruktor `new ToDo()`. Der Konstruktor nimmt zwei Parameter entgegen:

- einen Container, in den die Liste eingefügt werden soll (der oben erstellte Container)
- ein Objekt mit Konfigurationseigenschaften (die vollständige Liste finden Sie in der [Konfigurationsübersicht](api/overview/configs_overview.md))

Der folgende Code-Ausschnitt erstellt eine Liste innerhalb des Containers `#root`:

~~~js title="index.js"
const { ToDo, Toolbar } = todo; // globales todo-Objekt destrukturieren

// Liste erstellen
const list = new ToDo("#root", {
    // Konfigurationseigenschaften
});
~~~

### Toolbar initialisieren {#initialize-toolbar}

Initialisieren Sie die Toolbar mit dem Konstruktor `new Toolbar()`. Der Konstruktor nimmt zwei Parameter entgegen:

- einen Container für die Toolbar (im vorherigen Schritt erstellt)
- ein Objekt mit Konfigurationseigenschaften (die vollständige Liste finden Sie in den [Toolbar-Eigenschaften](category/toolbar-properties.md))

:::info
Die Toolbar-Initialisierung ist optional. Überspringen Sie diesen Schritt, wenn Sie in Ihrer Anwendung keine Toolbar benötigen.
:::

Der folgende Code-Ausschnitt erstellt die Toolbar und verknüpft sie über die Eigenschaft `api` mit der Liste:

~~~js {9-11} title="index.js"
const { ToDo, Toolbar } = todo; // globales todo-Objekt destrukturieren

// Liste erstellen
const list = new ToDo("#root", {
    // Konfigurationseigenschaften
});

// Toolbar erstellen
const toolbar = new Toolbar("#toolbar", {
    api: list.api
});
~~~

:::note
Destrukturieren Sie das globale `todo`-Objekt in `ToDo` und `Toolbar`, um sie direkt zu verwenden.

Überspringen Sie diesen Schritt, wenn Sie die Konstruktoren `new todo.ToDo()` und `new todo.Toolbar()` direkt aufrufen.
:::

## Daten in die To Do List laden {#load-data-into-to-do-list}

Der Artikel [Daten laden](guides/loading_data.md) beschreibt, wie Daten in die DHTMLX To Do List geladen werden.

## Beispiel {#example}

<iframe src="https://snippet.dhtmlx.com/3vwlbwee?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
