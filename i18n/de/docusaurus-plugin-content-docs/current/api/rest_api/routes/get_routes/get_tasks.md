---
sidebar_label: GET /tasks
title: GET /tasks
description: Sie können mehr über die GET /tasks-Route in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# GET `/tasks`

### Beschreibung {#description}

@short: Ruft Daten zu allen Aufgaben ab und gibt ein JSON-Objekt mit einem Array von Aufgaben-Objekten zurück

Die Route verarbeitet die GET-Anfrage an den Pfad `/tasks`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-Methode</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/tasks</td>
</tr>
</tbody>
</table>

### Payload {#payload}

Es ist kein Payload erforderlich.

### Antwort {#response}

Die Route gibt ein JSON-Objekt mit einem Array aller Aufgaben-Objekte zurück.
Ein Beispiel des Aufgaben-Objekts finden Sie im Abschnitt [`tasks`](api/configs/tasks_config.md). <br/> 
Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:

- [getTasks()](api/rest_api/methods/gettasks_method.md)
- [Arbeiten mit dem Server](guides/working_with_server.md)
