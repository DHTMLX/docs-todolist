---
sidebar_label: PUT /tasks
title: PUT /tasks
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die PUT /tasks-Route. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# PUT `/tasks`

### Beschreibung {#description}

@short: Aktualisiert die Daten der angegebenen Aufgabe(n) und gibt ein leeres JSON-Objekt zurück

Die Route verarbeitet die PUT-Anfrage an den Pfad `/tasks/{id}`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-Methode</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query-Parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/tasks</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query-Parameter {#query-parameters}

Der in der Anfragezeile übermittelte Query-Parameter:

| Name       | Typ        | Beschreibung |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Erforderlich*. Die ID der zu aktualisierenden Aufgabe.|

### Payload {#payload}

Der Server muss ein JSON-Objekt mit allen Aufgabeneigenschaften empfangen (sowohl unveränderten als auch neuen/geänderten).

Beispiel:

~~~json
{
    "text": "You can assign task performers and due dates using the menu.",
    "checked": true,
    "due_date": "2033-03-08T21:00:00Z",
    "creation_date": "2022-10-31T13:35:10.941583462+03:00",
    "project": 1,
    "assigned": [1, 2, 3, 4],
    "completion_date": "2022-10-31T10:45:20.142Z",
    "parent": 1,
}
~~~

Ein weiteres Beispiel des Aufgabenobjekts finden Sie im Abschnitt [`tasks`](api/configs/tasks_config.md).

Um mehrere Aufgaben mit einer Anfrage zu aktualisieren, fügen Sie ein Array von Aufgabenobjekten mit den erforderlichen Änderungen zum `batch`-Objekt im Anfrage-Body hinzu.<br/> In diesem Fall ist die Aufgaben-ID in der Anfragezeile ebenfalls zwingend erforderlich, zusammen mit allen Aufgabenparametern, die dem `batch`-Objekt im Anfrage-Body vorangehen.

Beispiel:

~~~json
{
    "text": "Greetings, everyone! 👋 \nI'm DHTMLX To Do List.",
    "checked": false,
    "creation_date": "2022-10-31T13:35:10.941342305+03:00",
    "project": 1,
    "due_date": "2022-10-07T21:00:00.000Z",
    "parent": 0,
    "batch": [
        {
            "text": "Select this task and then press Enter to create the task below 👇",
            "checked": false,
            "creation_date": "2022-10-31T13:35:10.941583979+03:00",
            "project": 1,
            "due_date": "2022-10-07T21:00:00.000Z",
            "parent": 0
        },
        {
            "text": "If you press Tab, this task will become a subtask. To edit it, press Ctrl (Cmd) + Enter.",
            "checked": false,
            "creation_date": "2022-10-31T13:35:10.941644198+03:00",
            "project": 1,
            "assigned": [4],
            "due_date": "2022-10-07T21:00:00.000Z",
            "parent": 0
        }
    ]
}
~~~

### Antwort {#response}
  
Bei Erfolg wird ein leeres JSON-Objekt zurückgegeben.

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:

- [updateTask()](api/methods/updatetask_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [Mit dem Server arbeiten](guides/working_with_server.md)
