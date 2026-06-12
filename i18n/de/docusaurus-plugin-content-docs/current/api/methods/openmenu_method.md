---
sidebar_label: openMenu()
title: openMenu Methode
description: Sie können die openMenu-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# openMenu()

### Beschreibung {#description}

@short: Öffnet das Menü einer Aufgabe/eines Projekts an den angegebenen Koordinaten

### Verwendung {#usage}

~~~js
openMenu({
    id: string | number,
    type?: "task" | "user" | "project",
    coords: { x: number, y: number }
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID einer Aufgabe/eines Projekts
- `type` - (optional) der Typ des Menüs. Es gibt drei Menütypen:
  - `task` (standardmäßig) - das Aufgaben-Menü
  - `user` - das Benutzer-Menü
  - `project` - das Projekt-Menü
- `coords` - (erforderlich) ein Objekt mit den x- und y-Koordinaten des Menüs:
    - `x` - (erforderlich) der Wert der x-Koordinate
    - `y` - (erforderlich) der Wert der y-Koordinate
