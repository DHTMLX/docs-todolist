---
sidebar_label: DELETE /tasks
title: DELETE /tasks
description: Sie können mehr über die DELETE /tasks-Route in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# DELETE `/tasks`

### Beschreibung {#description}

@short: Löscht Daten einer Aufgabe und gibt ein leeres JSON-Objekt zurück

Die Route verarbeitet die DELETE-Anfrage an den Pfad `/tasks/{id}` oder `/tasks`.

Eine oder mehrere Aufgaben können in einer Anfrage gelöscht werden. Alle untergeordneten Aufgaben, sofern vorhanden, werden ebenfalls gelöscht.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-Methode</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query-Parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>DELETE</td>
<td>/tasks</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query-Parameter {#query-parameters}

Die ID der zu entfernenden Aufgabe wird in der Anfrage-URL übermittelt.

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       | number      | *Optional*. Die ID der zu entfernenden Aufgabe.|

### Payload {#payload}

Der Server erwartet ein JSON-Objekt mit einer Eigenschaft:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `batch`    | array       | *Optional*. Die Liste der zu entfernenden Aufgaben-IDs.|

Beispiel:

~~~json
{
    "batch": [1, 2, 3]
}
~~~

### Antwort {#response}

Die Route gibt bei einer erfolgreichen Anfrage ein leeres JSON-Objekt zurück.

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Changelog:** Der `batch`-Payload wurde in v1.3 hinzugefügt

**Verwandte Artikel:**

- [send()](api/rest_api/methods/send_method.md)
- [deleteTasks()](api/methods/deletetask_method.md)
- [Arbeiten mit dem Server](guides/working_with_server.md)
