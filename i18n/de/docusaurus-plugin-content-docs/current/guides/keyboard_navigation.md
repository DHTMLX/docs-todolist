---
sidebar_label: Tastaturnavigation
title: Tastaturnavigation
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie, wie die Tastaturnavigation funktioniert. Sehen Sie sich Entwicklerleitfäden und die API-Referenz an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Tastaturnavigation

DHTMLX To Do List unterstützt vollständige Tastaturnavigation. Erstellen, verwalten und organisieren Sie Aufgaben ohne Maus.

Tastenkürzel funktionieren nur, wenn eine Aufgabe fokussiert ist. Um eine Aufgabe zu fokussieren, klicken Sie darauf oder verwenden Sie <kbd>ArrowUp</kbd> / <kbd>ArrowDown</kbd>, um durch die Liste zu navigieren.

:::tip
Tastenkürzel funktionieren **nicht**, wenn die Suchleiste in der Toolbar fokussiert ist.
:::

:::info
Die Tastaturnavigation funktioniert nicht im [`readonly`](api/configs/readonly_config.md)-Modus.
:::

## Standardmodus {#default-mode}

Die folgenden Tastenkürzel funktionieren, wenn der Inline-Editor **geschlossen** ist.

### Navigation und Auswahl {#navigation-and-selection}

| Tastenkürzel | Beschreibung |
| :---------------- | :---------- |
| <kbd>ArrowUp</kbd> | Verschiebt die Auswahl zur vorherigen Aufgabe |
| <kbd>ArrowDown</kbd> | Verschiebt die Auswahl zur nächsten Aufgabe |
| <kbd>ArrowRight</kbd> | Klappt eine eingeklappte übergeordnete Aufgabe auf |
| <kbd>ArrowLeft</kbd> | Klappt eine aufgeklappte übergeordnete Aufgabe ein. Falls bereits eingeklappt oder keine Unteraufgaben vorhanden, verschiebt die Auswahl zur übergeordneten Aufgabe |
| <kbd>Shift</kbd>+<kbd>ArrowUp</kbd> | Erweitert die Auswahl auf die Aufgabe darüber. Falls diese Aufgabe bereits ausgewählt ist, wird sie abgewählt |
| <kbd>Shift</kbd>+<kbd>ArrowDown</kbd> | Erweitert die Auswahl auf die Aufgabe darunter (einschließlich ihrer Unteraufgaben). Falls diese Aufgabe bereits ausgewählt ist, wird sie abgewählt |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Click</kbd> / <kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Click</kbd> | Wählt mehrere Aufgaben zusammen mit ihren Unteraufgaben aus oder ab:<br/>• Falls die Aufgabe ausgewählte übergeordnete Aufgaben hat — wählt die Aufgabe und ihre übergeordneten Aufgaben ab<br/>• Falls die Aufgabe ausgewählte Unteraufgaben hat — wählt nur die Aufgabe selbst ab |
| <kbd>Shift</kbd>+<kbd>Click</kbd> | Wählt einen Bereich von Aufgaben zwischen der aktuell ausgewählten Aufgabe und der angeklickten Aufgabe aus |

:::info
Weitere Informationen zur Arbeit mit mehreren ausgewählten Aufgaben finden Sie im Leitfaden [Mehrfachauswahl](guides/multiselection.md).
:::

### Aufgabenverwaltung {#task-management}

| Tastenkürzel | Beschreibung |
| :---------------- | :---------- |
| <kbd>Enter</kbd> | Erstellt eine neue Aufgabe auf derselben Ebene wie die ausgewählte, verschiebt die Auswahl darauf und öffnet den Editor |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Enter</kbd> | Öffnet den Inline-Editor für die ausgewählte Aufgabe |
| <kbd>Space</kbd> | Markiert die ausgewählte Aufgabe als abgeschlossen. Falls bereits abgeschlossen, wird sie als nicht abgeschlossen markiert |
| <kbd>Delete</kbd> / <kbd>Backspace</kbd> | Entfernt die ausgewählte Aufgabe. Nach dem Entfernen verschiebt sich die Auswahl zur nächsten Aufgabe nach unten oder zur übergeordneten Aufgabe, falls keine nächste Aufgabe vorhanden ist |
| <kbd>Tab</kbd> | Stuft die Aufgabe herab — verschiebt sie eine Hierarchieebene tiefer |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | Stuft die Aufgabe herauf — verschiebt sie eine Hierarchieebene höher |
| <kbd>Ctrl</kbd>+<kbd>ArrowUp</kbd> | Verschiebt die ausgewählte Aufgabe innerhalb derselben Ebene nach oben |
| <kbd>Ctrl</kbd>+<kbd>ArrowDown</kbd> | Verschiebt die ausgewählte Aufgabe innerhalb derselben Ebene nach unten |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>D</kbd> | Dupliziert die ausgewählte Aufgabe auf derselben Ebene |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>C</kbd> | Kopiert die ausgewählte Aufgabe (einschließlich aller Unteraufgaben) in die Zwischenablage |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>V</kbd> | Fügt die kopierte Aufgabe auf derselben Ebene wie die aktuell ausgewählte Aufgabe ein und bewahrt dabei die ursprüngliche Struktur |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Z</kbd> | Macht den letzten Vorgang rückgängig (Undo) |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Y</kbd> / <kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | Stellt den rückgängig gemachten Vorgang wieder her (Redo) |
| <kbd>Alt</kbd>+<kbd>1</kbd> / <kbd>Alt</kbd>+<kbd>2</kbd> / <kbd>Alt</kbd>+<kbd>3</kbd> | Legt die Priorität der ausgewählten Aufgabe fest (entspricht dem Hotkey des jeweiligen [`priorities`](api/configs/priorities_config.md)-Eintrags) |
| <kbd>Alt</kbd>+<kbd>0</kbd> | Setzt die Priorität der ausgewählten Aufgabe zurück |
| <kbd>Escape</kbd> | Schließt das Kontextmenü, falls es geöffnet ist. Erneutes Drücken schließt den Editor, setzt aktive Filter zurück und klappt Suchergebnisse in der Toolbar ein |

## Bearbeitungsmodus {#editing-mode}

Die folgenden Tastenkürzel funktionieren, wenn der Inline-Editor **geöffnet** ist.

| Tastenkürzel | Beschreibung |
| :---------------- | :---------- |
| <kbd>Enter</kbd> | Speichert Änderungen und schließt den Editor |
| <kbd>Shift</kbd>+<kbd>Enter</kbd> | Fügt einen neuen Absatz im Editor ein |
| <kbd>Escape</kbd> | Schließt den Editor, ohne Änderungen zu speichern |

## Verwandte Artikel {#related-articles}

- [`keypress-on-todo`](api/events/keypressontodo_event.md)-Event — Tastendrücke abfangen und benutzerdefiniertes Verhalten implementieren
- [Inline-Bearbeitung](guides/inline_editing.md) — erfahren Sie, wie Sie den Editor programmgesteuert steuern
- [Mehrfachauswahl](guides/multiselection.md) — mit mehreren ausgewählten Aufgaben arbeiten
