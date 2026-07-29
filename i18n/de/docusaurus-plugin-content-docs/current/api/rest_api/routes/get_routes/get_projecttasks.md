---
sidebar_label: GET /tasks/projects
title: GET /tasks/projects
description: Sie können mehr über die GET /tasks/projects-Route in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# GET `/tasks/projects`

### Beschreibung {#description}

@short: Ruft Daten zu allen Aufgaben des angegebenen Projekts ab und gibt ein JSON-Objekt mit einem Array aller Aufgaben-Objekte für dieses Projekt zurück

Die Route verarbeitet die GET-Anfrage an den Pfad `/tasks/projects/{id}`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-Methode</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query-Parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/tasks/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query-Parameter {#query-parameters}

Der folgende Parameter wird in der Anfrage-URL übermittelt:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  string     | *Erforderlich*. Die ID des Projekts, für das Aufgaben angefordert werden.|

### Payload {#payload}

Es ist kein Payload erforderlich.

### Antwort {#response}

Die Route gibt ein JSON-Objekt mit einem Array zurück, das Daten zu allen Aufgaben des angegebenen Projekts enthält.
Ein Beispiel des zurückgegebenen Objekts finden Sie hier: [`tasks`](api/configs/tasks_config.md).

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel:**

- [getProjectTasks()](api/rest_api/methods/getprojecttasks_method.md)
- [Arbeiten mit dem Server](guides/working_with_server.md)
