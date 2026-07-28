---
sidebar_label: POST /clone
title: POST /clone
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die POST /clone-Route. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# POST `/clone`

### Beschreibung {#description}

@short: Erstellt eine Kopie einer Aufgabe und gibt ein JSON-Objekt mit der Client-Aufgaben-ID und der duplizierten Aufgaben-ID des Servers zurück

Die Route verarbeitet die POST-Anfrage an den Pfad `/clone`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-Methode</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/clone</td>
</tr>
</tbody>
</table>

Nach Eingang der Anfrage werden auf der Serverseite folgende Elemente erstellt:

- die Duplikate der zu klonenden Aufgaben
- die Map mit dem Paar *Client-Aufgaben-ID: duplizierte Aufgaben-ID* für jede zu klonende Aufgabe

### Payload {#payload}

Der Server muss ein JSON-Objekt mit folgenden Eigenschaften empfangen:

| Name       | Typ        | Beschreibung |
| ----------- | ----------- | ----------- |
| `targetId`       |  number   | *Optional*. Die ID der Zielaufgabe, zu der die geklonte Aufgabe hinzugefügt wird.|
| `parent`       |  number   | *Optional*. Die ID der übergeordneten Aufgabe.|
| `project`       |  number   | *Optional*. Die ID des Projekts, dem eine neue Aufgabe hinzugefügt werden soll.|
| `batch`       |  object | *Erforderlich*. Ein Array von Objekten aller zu klonenden Aufgaben. Wenn eine Aufgabe untergeordnete Elemente besitzt, müssen diese ebenfalls im Objekt enthalten sein.|

Pro Anfrage werden nur Aufgaben mit derselben übergeordneten ID/Projekt-ID verarbeitet.

Beispiel:

~~~json
{
    "parent": null,
    "targetId": 18,
    "batch": [
        {
            "text": "If you press Tab, this task will become a subtask. To edit it, press Ctrl (Cmd) + Enter.",
            "checked": false,
            "due_date": "2022-10-07T21:00:00Z",
            "creation_date": "2022-10-31T11:20:04.171Z",
            "project": 1,
            "assigned": [4],
            "id": "temp://1667215197027",
            "parent": null
        },
        {
            "text": "You can create tasks with an infinite number of subtasks.",
            "checked": false,
            "creation_date": "2022-10-31T11:20:04.173Z",
            "project": 1,
            "assigned": [4],
            "id": "temp://1667215197028",
            "parent": null
        },
        {
            "text": "Use the Tab and Shift + Tab keys for this.",
            "checked": false,
            "creation_date": "2022-10-31T11:20:04.174Z",
            "parent": "temp://1667215197028",
            "project": 1,
            "id": "temp://1667215197029"
        }
    ]
}
~~~

### Antwort {#response}

Die Route gibt ein JSON-Objekt mit der Client-Aufgaben-ID und der duplizierten Aufgaben-ID des Servers zurück.<br/>
Client-Aufgaben-IDs sind temporäre IDs aus den Anfragen; die Werte sind neue Aufgaben-IDs, die beim Speichern der Daten generiert werden.

Beispiel:

~~~json
{
    //"clientId": serverId,
    "temp://1667215197027": 62,
    "temp://1667215197028": 63,
    "temp://1667215197029": 65,
    //...
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel:**
- [clone-task](api/events/clonetask_event.md)
- [copyTask()](api/methods/copytask_method.md)
- [pasteTask()](api/methods/pastetask_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [Mit dem Server arbeiten](guides/working_with_server.md)
