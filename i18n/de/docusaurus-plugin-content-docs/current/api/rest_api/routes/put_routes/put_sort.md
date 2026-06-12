---
sidebar_label: PUT /sort
title: PUT /sort
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die PUT /sort-Route. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# PUT `/sort`

### Beschreibung {#description}

@short: Sortiert alle Aufgaben eines aktiven Projekts nach den angegebenen Parametern und gibt ein leeres JSON-Objekt zurück

Die Route verarbeitet die PUT-Anfrage an den Pfad `/sort/{id}`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-Methode</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query-Parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/sort</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query-Parameter {#query-parameters}

Der in der Anfragezeile übermittelte Query-Parameter:

| Name       | Typ        | Beschreibung |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Erforderlich*. Die ID des aktiven Projekts, dessen Aufgaben sortiert werden sollen.|

### Payload {#payload}

Der Server erwartet ein JSON-Objekt mit folgenden Eigenschaften:

| Name       | Typ        | Beschreibung |
| ---------- | ----------- | ----------- |
| `by`       |  string     | *Erforderlich*. Das Feld, nach dem sortiert werden soll.|
| `dir`      |  string     | *Erforderlich*. Die Sortierrichtung: "asc" oder "desc".|

Beispiel:

~~~json
{
    "by": "due_date",
    "dir": "asc",
}
~~~

### Antwort {#response}
  
Bei Erfolg wird ein leeres JSON-Objekt zurückgegeben.
Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:
- [send()](api/rest_api/methods/send_method.md)
- [setSort()](api/methods/setsort_method.md)
- [Mit dem Server arbeiten](guides/working_with_server.md)
