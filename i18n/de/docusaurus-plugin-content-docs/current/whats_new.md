---
sidebar_label: Was ist neu
title: Was ist neu
description: Sie können neue Informationen über die DHTMLX JavaScript To-Do-List-Bibliothek erfahren. Erkunden Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Was ist neu {#whats-new}

Wenn Sie To Do List von einer älteren Version aktualisieren, lesen Sie [Migration zu neueren Versionen](migration.md) für weitere Details.

## Version 1.3.2 {#version-132}

Veröffentlicht am 10. Juni 2026

### Fehlerbehebungen {#fixes}

- Benutzerdefinierte Menü-Icons werden nicht korrekt angezeigt
- Aufgaben-IDs werden nicht synchronisiert: Temporäre IDs werden beim Erstellen und Klonen von Aufgaben nicht durch serverseitige IDs in der Benutzeroberfläche ersetzt
- Der Aufgabeneditor und aktive Menüs werden nicht geschlossen, wenn ein Projekt gelöscht wird

## Version 1.3.1 {#version-131}

Veröffentlicht am 3. April 2025

### Fehlerbehebungen {#fixes-131}

- Der Build enthält nicht die Dateien *todo.es.d.ts* und *todo.d.ts* der importierten Bibliotheken

## Version 1.3 {#version-13}

Veröffentlicht am 27. Februar 2025

[Versionsüberblick im Blog](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-3/)

### Neue Funktionalität {#new-functionality}

- Sie können den Änderungsverlauf in einem einzelnen Projekt oder in der gesamten App über die Eigenschaft [`history`](api/configs/history_config.md) und die Methoden [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) verwalten
- Sie können ein Kontextmenü über die Eigenschaft [`menu`](api/configs/menu_config.md) anpassen ([Beispiel](https://snippet.dhtmlx.com/slpjstbb))

### Neue API {#new-api}

- Die Eigenschaft [`history`](api/configs/history_config.md) ermöglicht es, den Änderungsverlauf in einem einzelnen Projekt oder in der gesamten App zu aktivieren/deaktivieren und die Anzahl gespeicherter Aktionen zu begrenzen
- Die Methoden [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) ermöglichen die Verwaltung des Änderungsverlaufs
- Die Eigenschaft [`menu`](api/configs/menu_config.md) ermöglicht die Anpassung eines Kontextmenüs ([Beispiel](https://snippet.dhtmlx.com/cmfqmg00))

### Aktualisierungen {#updates}

- Die Methoden [`getState()`](api/internal/getstate_method.md) und [`getReactiveState()`](api/internal/getreactivestate_method.md) geben das `historyState`-Objekt zurück
- Die Eigenschaft [`items`](api/toolbar_api/configs/items_config.md) der Toolbar wurde um die Parameter `"undo"` und `"redo"` erweitert, mit denen Steuerelemente zur Verwaltung des Änderungsverlaufs angezeigt werden können
- Die `POST`-Routen [`/tasks`](api/rest_api/routes/post_routes/post_tasks.md) und [`/projects`](api/rest_api/routes/post_routes/post_projects.md) wurden um den Parameter `id` erweitert, der die Verwaltung von Verlaufsänderungen im Backend ermöglicht
- Die `DELETE`-Route [`/tasks`](api/rest_api/routes/delete_routes/delete_tasks.md) wurde um das `batch`-Payload erweitert. Der Parameter `id` für die zu löschende Aufgabe ist nun optional. Sie können mehrere Aufgaben auf einmal löschen

### Fehlerbehebungen {#fixes-13}

- Unbeabsichtigtes Ziehen von Aufgaben kann Klone im gesamten Fenster hinterlassen
- Aufgaben eines neuen Projekts werden nach dem Wechsel in ein anderes Projekt nicht angezeigt
- Das Kalender-Popup für das Fälligkeitsdatum schließt sich nicht bei einem Klick außerhalb

## Version 1.2.12 {#version-1212}

Veröffentlicht am 15. November 2024

### Fehlerbehebungen {#fixes-1212}

- Menüs werden bei einem Klick außerhalb nicht ausgeblendet

## Version 1.2.10 {#version-1210}

Veröffentlicht am 19. September 2024

### Fehlerbehebungen {#fixes-1210}

- RestDataProvider-API. Falsche Verarbeitung temporärer IDs, die in Arrays gespeichert sind, bevor sie an den Server gesendet werden

## Version 1.2.9 {#version-129}

Veröffentlicht am 26. August 2024

### Fehlerbehebungen {#fixes-129}

- Skriptfehler beim Sortieren eines leeren Projekts
- Untermenüs funktionieren auf Touch-Geräten nicht
- Falsche Typen für das `api`-Objekt

## Version 1.2.8 {#version-128}

Veröffentlicht am 29. Februar 2024

### Fehlerbehebungen {#fixes-128}

- Fehlerhafter Build auf dem npm-Server

## Version 1.2.7 {#version-127}

Veröffentlicht am 6. Februar 2024

### Fehlerbehebungen {#fixes-127}

- Problem beim Drücken von Enter beim Umbenennen eines Projekts
- Problem beim Drücken von Enter bei der Projektsuche
- Überschreiben von wx-Stilen bei Verwendung mit komplexen Widgets. Weitere Informationen finden Sie im Handbuch [Stilisierung](guides/stylization.md)

## Version 1.2.5 {#version-125}

Veröffentlicht am 7. Dezember 2023

### Fehlerbehebungen {#fixes-125}

- Beim Aufrufen eines nicht verwendeten Menüeintrags tritt ein Skriptfehler auf

## Version 1.2.4 {#version-124}

Veröffentlicht am 7. Dezember 2023

### Fehlerbehebungen {#fixes-124}

- Das Verschieben von Einträgen zwischen neuen Projekten funktioniert nicht

## Version 1.2.3 {#version-123}

Veröffentlicht am 13. September 2023

### Aktualisierungen {#updates-123}

- Möglichkeit, die Komponente als ES-Modul zu importieren

## Version 1.2.1 {#version-121}

Veröffentlicht am 28. August 2023

### Fehlerbehebungen {#fixes-121}

- Datumsauswähler auf die oberste Ebene verschoben
- Beim Öffnen des Kalenders in einer Aufgabe wird der Aufgabentext über dem Kalender angezeigt
- Beim Öffnen eines Kontextmenüs wird es falsch positioniert

## Version 1.2 {#version-12}

Veröffentlicht am 16. Mai 2023

[Versionsüberblick im Blog](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-2/)

### Neue Funktionalität {#new-functionality-12}

- Sie können Ihre Aufgaben über das Kontextmenü oder die entsprechende API priorisieren ([Beispiel](https://snippet.dhtmlx.com/5cymicwt))
- Sie können Aufgaben nach Prioritäten sortieren
- Das [Multiuser-Backend](guides/working_with_server.md#multiuser-backend) ermöglicht die Nachverfolgung von Änderungen anderer Benutzer in Echtzeit ([Beispiel](https://snippet.dhtmlx.com/82ayq2lk))
- Anzeige von To-Do-List-Aufgaben in einer Tabellenansicht. Integration mit der Komponente [JavaScript DataGrid](https://dhtmlx.com/docs/products/dhtmlxGrid/) ([Beispiel](https://snippet.dhtmlx.com/e97idjs8))

### Neue API {#new-api-12}

Die Eigenschaft [`priorities`](api/configs/priorities_config.md) ermöglicht die Festlegung einer Anfangspriorität für Aufgaben

### Aktualisierungen {#updates-12}

- Die Eigenschaft [`tasks`](api/configs/tasks_config.md) wurde um den Parameter `priority` erweitert. Dieser Parameter ermöglicht es Benutzern, eine Anfangspriorität festzulegen
- Die Eigenschaft [`taskShape`](api/configs/taskshape_config.md) wurde um den Parameter `priority` erweitert. Dieser Parameter ermöglicht es dem Benutzer, die Prioritätsdarstellung der Karte zu verwalten
- Die [erweiterte Liste lokalisierter Optionen](guides/localization.md)
### Fehlerbehebungen {#fixes-12}

- Das Festlegen von Benutzern ohne die Eigenschaft `users[n].avatar` verursacht einen Fehler

## Version 1.1 {#version-11}

Veröffentlicht am 10. Oktober 2022

[Versionsüberblick im Blog](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-1/)

### Breaking Changes {#breaking-changes}

Das neue Release führt einige Änderungen an der Eigenschaft `taskShape` ein. Lesen Sie den [Migrationsartikel](migration.md#10---11), um mit der neuesten Version auf dem Laufenden zu bleiben.

### Neue Funktionalität {#new-functionality-11}

- Drag-and-Drop:
    - Möglichkeit, [die Funktion zu konfigurieren oder zu deaktivieren](guides/configuration.md#drag-n-drop)
    - Neue Events: [`start-drag`](api/events/startdrag_event.md), [`drag`](api/events/drag_event.md), [`end-drag`](api/events/enddrag_event.md)
- Mehrfachauswahl und Massenoperationen:
    - Möglichkeit, [mehrere Aufgaben auszuwählen](/#selecting-multiple-tasks) und [zu verwalten](/#managing-multiple-tasks) mit Tastaturkürzeln
    - Möglichkeit, mehrere Aufgaben über das Menü zu verwalten
    - Möglichkeit, [mehrere Aufgaben über die API auszuwählen und zu verwalten](guides/multiselection.md):
        - Neue Eigenschaft [`selected`](api/configs/selected_config.md)
        - Neuer Parameter `join` für die Methoden: [`selectTask()`](api/methods/selecttask_method.md), [`copyTask()`](api/methods/copytask_method.md)
        - Neuer Parameter `join` für die Events: [`select-task`](api/events/selecttask_event.md), [`copy-task`](api/events/copytask_event.md)
        - Neue Methode: [`eachSelected()`](api/methods/eachselected_method.md)
        - Aktualisierte Methode: [`getSelection()`](api/methods/getselection_method.md) 
    - Möglichkeit, alle Aufgaben über die Methode [`unselectTask()`](api/methods/unselecttask_method.md) abzuwählen
- [To-Do-Liste mit ausgeblendeten erledigten Aufgaben](guides/hide_completed_tasks.md#initial-mode)
- [Erledigte Aufgaben ein-/ausblenden](guides/hide_completed_tasks.md#switching-between-modes):
    - über das Toolbar-Menü
    - über die API:
        - Neue Methoden: [`hideCompletedTasks()`](api/methods/hidecompletedtasks_method.md), [`showCompletedTasks()`](api/methods/showcompletedtasks_method.md)
        - Neue Events: [`hide-completed-tasks`](api/events/hidecompletedtasks_event.md), [`show-completed-tasks`](api/events/showcompletedtasks_event.md)
        - Neuer Parameter `hideCompleted` für die Methoden: [`hasChildren()`](api/methods/haschildren_method.md), [`getChildrenIds()`](api/methods/getchildrenids_method.md)
- [Aufgabensortierung](guides/sorting_filtering_tasks.md#sorting-tasks):
    - über das Toolbar-Menü
    - über die API:
        - Neue Methode: [`setSort()`](api/methods/setsort_method.md)
        - Neues Event: [`set-sort`](api/events/setsort_event.md)
        - Erweiterte Parameterliste der Eigenschaft [`tasks`](api/configs/tasks_config.md)
- Neue Events zur Menüverwaltung: [`open-menu`](api/events/openmenu_event.md) und [`close-menu`](api/events/closemenu_event.md)

### Aktualisierungen {#updates-11}

- [Erweiterte Liste von Lokalisierungsoptionen](guides/localization.md)

## Version 1.0.1 {#version-101}

Veröffentlicht am 5. Juli 2022

### Fehlerbehebungen {#fixes-101}

- Die Funktionsweise der API wurde erheblich verbessert

## Version 1.0 {#version-10}

Veröffentlicht am 20. Juni 2022

[Versionsüberblick im Blog](https://dhtmlx.com/blog/dhtmlx-list-1-0-advanced-task-assignment-inline-editing-handy-keyboard-navigation/)

### Grundfunktionen {#initial-functionality}

- Möglichkeit, [Daten für `tasks`, `projects`, `users`, `tags`, `activeProject` zu laden](guides/loading_data.md)
- Möglichkeit, mit `projects` auf folgende Arten zu arbeiten:
    - [über die API](guides/project_index.md):
        - [aktives Projekt wechseln](api/methods/setproject_method.md)
        - [neue Projekte hinzufügen](api/methods/addproject_method.md)
        - [Projekte aktualisieren](api/methods/updateproject_method.md)
        - [Projekte löschen](api/methods/deleteproject_method.md)
    - [über die Benutzeroberfläche](/#toolbar):
        - zwischen Projekten wechseln
        - Projekte hinzufügen, umbenennen oder löschen
        - nach Projekten suchen
- Möglichkeit, mit `tasks` auf folgende Arten zu arbeiten:
    - [über die API](guides/task_index.md):
        - [neue Aufgaben hinzufügen](api/methods/addtask_method.md)
        - [Aufgaben aktualisieren](api/methods/updatetask_method.md)
        - [Aufgaben löschen](api/methods/deletetask_method.md)
        - [Aufgaben verschieben](api/methods/movetask_method.md)
        - Aufgaben [kopieren](api/methods/copytask_method.md) und [einfügen](api/methods/pastetask_method.md)
        - Aufgaben [abhaken](api/methods/checktask_method.md) und [abhaken aufheben](api/methods/unchecktask_method.md)
        - Aufgaben [ein-](api/methods/collapsetask_method.md) und [ausklappen](api/methods/expandtask_method.md)
        - Aufgaben [auswählen](api/methods/selecttask_method.md) und [abwählen](api/methods/unselecttask_method.md)
        - Einrückungsebene von Aufgaben ändern: [indentTask()](api/methods/indenttask_method.md) / [unindentTask()](api/methods/unindenttask_method.md)
        - Benutzer [zuweisen](api/methods/assignuser_method.md) und [entfernen](api/methods/unassignuser_method.md)
        - [Aufgaben filtern](api/methods/setfilter_method.md)
    - [über die Benutzeroberfläche](/#managing-a-task):
        - Aufgaben hinzufügen, kopieren und einfügen, auswählen, verschieben, einrücken/ausrücken, löschen
        - nach Aufgaben suchen (nach Symbolen oder Hashtags)
        - Aufgaben bearbeiten:
            - [Aufgabeninhalt per Doppelklick bearbeiten](guides/inline_editing.md): Text, Zahlen, Hashtags, Datumsangaben eingeben
            - Benutzer zuweisen/entfernen
            - Fälligkeitsdatum festlegen
- Möglichkeit, **Erscheinungsbild und Verhalten von Aufgaben** zu konfigurieren:
    - [Zähler erledigter Unteraufgaben](guides/configuration.md#counter-of-completed-subtasks)
    - [Datumsformat](guides/configuration.md#date-format)
    - [Fälligkeitsdatum-Validierung](guides/configuration.md#due-date-validation)
    - [Modus zur Markierung von Aufgaben als erledigt](guides/configuration.md#mode-of-marking-tasks-complete)
- Möglichkeit, die **Toolbar** zu [konfigurieren](guides/configuration.md#toolbar) und [anpassen](guides/customization.md#customize-the-toolbar)
- [Tastaturnavigation](api/events/keypressontodo_event.md#keyboard-shortcuts)
- [Nur-Lesen-Modus](guides/readonly_mode.md)
- [Lokalisierung](guides/localization.md)
- [Backend-Integration](guides/working_with_server.md) (Go und Node)
- [Integration mit anderen DHTMLX-Widgets](guides/integration.md)
- Browserübergreifende Kompatibilität
- Touch-Unterstützung

### API {#api}

- **To-Do-List-API**: 
    - [Methoden](api/overview/methods_overview.md)
    - Interne API:
        - [Event Bus-Methoden](category/event-bus-methods.md)
        - [State-Methoden](category/state-methods.md)
    - [Events](api/overview/events_overview.md)
    - [Eigenschaften](api/overview/configs_overview.md)
- **Toolbar-API**:
    - [Methoden](category/toolbar-methods.md)
    - [Eigenschaften](category/toolbar-properties.md)
- **RestDataProvider-API**:
    - [REST-Methoden](category/rest-methods.md)
