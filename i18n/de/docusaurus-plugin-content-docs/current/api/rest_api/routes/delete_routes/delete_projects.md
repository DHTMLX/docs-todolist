---
sidebar_label: DELETE /projects
title: DELETE /projects
description: Sie können mehr über die DELETE /projects-Route in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# DELETE `/projects`

### Beschreibung {#description}

@short: Löscht Daten eines Projekts und gibt ein leeres JSON-Objekt zurück

:::note
Die mit dem Projekt verknüpften Aufgaben werden nicht entfernt. Sie werden in den Bereich *„Kein Projekt"* verschoben.
:::

Die Route verarbeitet die DELETE-Anfrage an den Pfad `/projects/{id}`.

Pro Anfrage kann nur ein Projekt entfernt werden. Alle Projektaufgaben, sofern vorhanden, werden ebenfalls entfernt.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-Methode</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query-Parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>DELETE</td>
<td>/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query-Parameter {#query-parameters}

Die ID des zu entfernenden Projekts wird in der Anfrage-URL übermittelt.

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  number     | *Erforderlich*. Die ID des zu entfernenden Projekts.|

### Payload {#payload}

Es ist kein Payload erforderlich.

### Antwort {#response}

Die Route gibt bei einer erfolgreichen Anfrage ein leeres JSON-Objekt zurück.

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel:**

- [send()](api/rest_api/methods/send_method.md)
- [deleteProject()](api/methods/deleteproject_method.md)
- [Arbeiten mit dem Server](guides/working_with_server.md)
