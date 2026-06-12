---
sidebar_label: POST /projects
title: POST /projects
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die POST /projects-Route. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# POST `/projects`

### Beschreibung {#description}

@short: Erstellt ein neues Projekt und gibt ein Projektobjekt mit der Projekt-ID zurück

Die Route verarbeitet die POST-Anfrage an den Pfad `/projects`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-Methode</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/projects</td>
</tr>
</tbody>
</table>

### Payload {#payload}

Der Server muss ein JSON-Objekt mit einer Eigenschaft empfangen:

| Name       | Typ        | Beschreibung |
| ---------- | ----------- | ----------- |
| `id`       | number      | *Optional*. Die ID eines neuen Projekts.|
| `label`    | string      | *Erforderlich*. Der Name des hinzuzufügenden neuen Projekts.|

Beispiel:

~~~json
{
    "id": 1,
    "label": "New Project"
}
~~~

### Antwort {#response}

Die Route gibt ein JSON-Objekt mit der ID des neuen Projekts zurück.

Beispiel:

~~~json
{
    "id": 3
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Änderungsprotokoll**: Der Parameter `id` wurde in v1.3 hinzugefügt

**Verwandte Artikel**:

- [send()](api/rest_api/methods/send_method.md)
- [addProject()](api/methods/addproject_method.md)
- [Mit dem Server arbeiten](guides/working_with_server.md)
