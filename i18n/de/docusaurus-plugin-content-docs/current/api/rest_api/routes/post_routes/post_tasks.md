---
sidebar_label: POST /tasks
title: POST /tasks
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die POST /tasks-Route. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# POST `/tasks`

### Beschreibung {#description}

@short: Erstellt eine neue Aufgabe und gibt ein Aufgabenobjekt mit der ID der neuen Aufgabe zurück

Die Route verarbeitet die POST-Anfrage an den Pfad `/tasks`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-Methode</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/tasks</td>
</tr>
</tbody>
</table>

### Payload {#payload}

Die Serverseite erwartet ein JSON-Objekt mit folgenden Eigenschaften:

| Name        | Typ        | Beschreibung |
| ----------- | ----------- | ----------- |
| `id`        | number      | *Optional*. Die ID einer neuen Aufgabe.|
| `targetId`  | number      | *Optional*. Die ID der künftigen Zielaufgabe, zu der eine neue Aufgabe hinzugefügt wird.|
| `parent`    | number      | *Optional*. Die ID der übergeordneten Aufgabe.|
| `project`   | number      | *Optional*. Die ID des Projekts, dem eine neue Aufgabe hinzugefügt werden soll.|
| `reverse`   | boolean     | *Optional*. Legt die Position fest, an der eine neue Aufgabe hinzugefügt wird: `true`, wenn die Aufgabe vor der Zielaufgabe eingefügt wird; andernfalls `false` (Standard).|
| `task`      | object      | *Erforderlich*. Das Aufgabenobjekt, dessen Beispiel Sie hier finden: [`tasks`](api/configs/tasks_config.md).|

Beispiel:

~~~json
{
    "id": 26,
    "parent": 10,
    "project": 1,
    "reverse": false,
    "targetId": 10,
    "task": {
        "text": "My task",
        //...andere Werte
    }
}
~~~

### Antwort {#response}

Die Route gibt ein JSON-Objekt mit der ID der neuen Aufgabe zurück.

Beispiel:

~~~json
{
    "id": 12
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Changelog:** Der Parameter `id` wurde in v1.3 hinzugefügt

**Verwandte Artikel:**
- [send()](api/rest_api/methods/send_method.md)
- [addTask()](api/methods/addtask_method.md)
- [Mit dem Server arbeiten](guides/working_with_server.md)
