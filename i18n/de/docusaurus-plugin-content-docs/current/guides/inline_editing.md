---
sidebar_label: Inline-Bearbeitung
title: Inline-Bearbeitung
description: Sie erfahren mehr über die Inline-Bearbeitung in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek. Durchsuchen Sie Entwickleranleitungen und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Evaluierungsversion von DHTMLX To Do List herunter.
---

# Inline-Bearbeitung

Doppelklicken Sie auf eine Aufgabe oder ein Projekt, um es inline zu bearbeiten. Die Inline-Bearbeitung ist standardmäßig aktiviert.

:::tip
Wenn Sie den [`readonly`](api/configs/readonly_config.md)-Modus der To Do List aktivieren, steht die Inline-Bearbeitung nicht mehr zur Verfügung.
:::

## Unterstützte Datenformate {#supported-formats-of-data}

Der Inline-Editor akzeptiert drei Datentypen: Text und Zahlen, Hashtags und Datumsangaben.

### Text und Zahlen {#text-and-numbers}

Geben Sie beliebigen Text oder Zahlen direkt in den Inline-Editor ein.

### Hashtags {#hashtags}

Verwenden Sie Hashtags, um Aufgaben zu kategorisieren und die Suche zu erleichtern. Beachten Sie folgende Regeln:

- ein Hashtag kombiniert das Symbol `#` mit Buchstaben und Zahlen (zum Beispiel `#sport`)
- um einen Hashtag zu erstellen, geben Sie `#` gefolgt von mindestens einem Symbol ein (zum Beispiel `#t`) und drücken Sie die Eingabetaste
- die To Do List unterstützt eine unbegrenzte Anzahl von Hashtags, die durch Leerzeichen getrennt werden (zum Beispiel `#tag #tag1`)
- alle Hashtags sind in allen Projekten zugänglich
- um die Liste der Hashtags anzuzeigen, geben Sie das Symbol `#` ein
- um einer Aufgabe einen Hashtag hinzuzufügen, klicken Sie in der Liste darauf
- um eine strikte Filterung zu aktivieren, klicken Sie auf einen Hashtag oder geben Sie ihn in die Suchleiste der Toolbar ein

:::info
Erstellen Sie eine Standardliste von Tags über die Eigenschaft [`tags`](api/configs/tags_config.md).
:::

### Datumsangaben {#dates}

Um ein Datum über den Inline-Editor einzugeben, tippen Sie das Symbol `!`. Der integrierte Datumswähler erscheint auf der Seite.

Sie können Text auch in die speziellen Symbole `!()` einschließen. Geben Sie zum Beispiel `!(Buchungsdatum eingeben)` ein und drücken Sie die Eingabetaste, um den Editor zu schließen. Klicken Sie später auf diesen Text, um den Datumswähler erneut zu öffnen.

:::info
Das Erscheinungsbild des Datums hängt von der [`locale`](api/configs/locale_config.md) und dem [Datumsformat](api/configs/taskshape_config.md) ab.
:::

## Mit dem Editor arbeiten {#working-with-editor}

Um den Editor für eine bestimmte Aufgabe oder ein Projekt zu öffnen, verwenden Sie die Methode [`openInlineEditor()`](api/methods/openinlineeditor_method.md). Der folgende Ausschnitt öffnet den Editor für eine bestimmte Aufgabe:

~~~js
list.openInlineEditor({ id: "1.1.1" });
~~~

Um den Editor zu schließen und die Änderungen zu speichern, übergeben Sie die Element-ID an die Methode [`closeInlineEditor()`](api/methods/closeinlineeditor_method.md):

~~~js
list.closeInlineEditor({
    id: "1.1.1"
});
~~~

Um den Editor zu schließen ohne die Änderungen zu speichern, setzen Sie den Parameter `save` auf `false`. Das folgende Beispiel verwirft die Änderungen beim Schließen:

~~~js
list.closeInlineEditor({
    id: "1.1.1",
    save: false
});
~~~

## Änderungen im Editor verfolgen {#track-editor-changes}

Abonnieren Sie das Event [`edit-item`](api/events/edititem_event.md), um den in den Inline-Editor eingegebenen Wert zu verfolgen. Das Event wird ausgelöst, während der Benutzer tippt, bevor der Wert gespeichert wird.

Der folgende Ausschnitt protokolliert den aktuellen Editor-Wert für eine Aufgabe oder ein Projekt:

~~~js
list.api.on("edit-item", ({ id, currentValue }) => {
    console.log("Current value of", id, "is", currentValue);
});
~~~

## Tastenkürzel {#keyboard-shortcuts}

:::info
Weitere Informationen finden Sie in der Anleitung zur [**Tastaturnavigation**](guides/keyboard_navigation.md).
:::
