---
sidebar_label: PUT /projects
title: PUT /projects
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die PUT /projects-Route. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# PUT `/projects`

### Beschreibung {#description}

@short: Aktualisiert die Daten eines Projekts und gibt ein leeres JSON-Objekt zurück

Die Route verarbeitet die PUT-Anfrage an den Pfad `/projects/{id}`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-Methode</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query-Parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query-Parameter {#query-parameters}

Der in der Anfragezeile übermittelte Query-Parameter lautet:

| Name       | Typ        | Beschreibung |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Erforderlich*. Die ID des zu aktualisierenden Projekts.|

### Payload {#payload}

Der Server muss ein JSON-Objekt mit allen Projekteigenschaften empfangen (sowohl unveränderten als auch neuen/geänderten).

Beispiel:

~~~json
{
    "label": "My Project"
}
~~~

Ein weiteres Beispiel des Projektobjekts finden Sie im Abschnitt [`projects`](api/configs/projects_config.md).

### Antwort {#response}

Bei Erfolg wird ein leeres JSON-Objekt zurückgegeben.
  
Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:

- [updateProject()](api/methods/updateproject_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [Mit dem Server arbeiten](guides/working_with_server.md)
