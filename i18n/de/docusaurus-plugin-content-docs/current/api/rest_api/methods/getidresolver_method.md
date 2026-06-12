---
sidebar_label: getIDResolver()
title: getIDResolver Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die getIDResolver-Methode des RestDataProvider. Entwicklerleitfäden und API-Referenz, Code-Beispiele und Live-Demos sowie ein kostenloser 30-Tage-Evaluierungsdownload von DHTMLX To Do List.
---

# getIDResolver()

### Beschreibung {#description}

@short: Gibt eine Funktion zurück, die Client-IDs (temporäre IDs) mit Server-IDs synchronisiert

:::info
Wenn der Client ein neues Objekt (Aufgabe oder Projekt) erstellt, erhält es eine temporäre ID, während die entsprechende Server-ID im RestDataProvider gespeichert wird. Die von `getIDResolver()` zurückgegebene Funktion ordnet eine Client-ID der zugehörigen Server-ID zu. Sie wird hauptsächlich bei der Verarbeitung von Server-Events in einem Mehrbenutzersystem eingesetzt.
:::

### Verwendung {#usage}

~~~js
getIDResolver(): (id: string | number, type: number) => string | number;
~~~

### Rückgabewert {#returns}

Die Methode gibt die Funktion `idResolver(id, type)` zurück:

- `id` - die aufzulösende Client-ID (temporäre ID)
- `type` - der Typ des Modells:
    - `1` - eine Aufgabe (`TaskID`)
    - `2` - ein Projekt (`ProjID`)

Die Funktion gibt die Server-ID zurück, die der übergebenen Client-ID entspricht.

### Beispiel {#example}

~~~js {4,7}
const { RestDataProvider } = todo;

const restProvider = new RestDataProvider(url);
const idResolver = restProvider.getIDResolver();

const TaskID = 1;
const serverId = idResolver(clientId, TaskID);
~~~

---

**Verwandte Artikel**: [Mit dem Server arbeiten](guides/working_with_server.md#customize-server-events)
