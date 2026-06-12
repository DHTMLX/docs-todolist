---
sidebar_label: click-menu-item
title: click-menu-item Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das click-menu-item-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List.
---

# click-menu-item

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Benutzer auf ein Menüelement klickt

### Verwendung {#usage}

~~~js
"click-menu-item": ({
    id: string | number,
    type: "task" | "user" | "toolbar",
    action: string,
    params?: any
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `click-menu-item`-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe
- `type` - (erforderlich) der Typ eines Menüs
- `action` - (erforderlich) die ID des angeklickten Menüelements
- `params` - (optional) zusätzliche Daten des angeklickten Menüelements
