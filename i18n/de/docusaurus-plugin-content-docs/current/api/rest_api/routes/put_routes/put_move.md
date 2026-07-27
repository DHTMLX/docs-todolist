---
sidebar_label: PUT /move
title: PUT /move
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die PUT /move-Route. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# PUT `/move`

### Beschreibung {#description}

@short: Verschiebt eine Aufgabe an die angegebene Position und gibt ein leeres JSON-Objekt zurück

Die Route verarbeitet die PUT-Anfrage an den Pfad `/move/{id}`.
Weitere Details zu den verfügbaren Operationen finden Sie in der Beschreibung der `operation`-Eigenschaft, die im Anfrage-Body übermittelt wird (siehe Abschnitt **Payload** unten).

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-Methode</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query-Parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/move</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query-Parameter {#query-parameters}

Der Query-Parameter wird in der Anfragezeile übermittelt:

| Name       | Typ        | Beschreibung |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Erforderlich*. Die ID der zu verschiebenden Aufgabe. Wenn mehrere Aufgaben verschoben werden sollen, muss die ID auf 0 gesetzt werden. |

:::info
Wenn Sie mehrere Aufgaben verschieben, stellen Sie sicher, dass die `id` auf 0 gesetzt ist. Andernfalls (bei einem anderen Wert) wird nur eine Aufgabe (mit der angegebenen ID) verschoben.
:::

### Payload {#payload}

Der Server erwartet ein JSON-Objekt mit folgenden Eigenschaften:

| Name       | Typ        | Beschreibung |
| ---------- | ----------- | ----------- |
| `id`       | number      |*Optional*. Die ID der verschobenen Aufgabe. Der Parameter ist für die Operationstypen `indent`/`unindent` erforderlich.|
| `parent`   |  number     | *Optional*. Die ID der übergeordneten Aufgabe.|
| `project`  |  number     | *Optional*. Die ID des Projekts, zu dem eine Aufgabe gehört.|
| `targetId` |  number     | *Optional*. Die ID der Zielaufgabe, an die die verschobene Aufgabe eingefügt wird.|
| `operation`|  string     | *Erforderlich*. Ein serverspezifischer Parameter, der den Operationstyp angibt. Verfügbare Operationstypen: "null" – verschiebt eine Aufgabe an eine angegebene Position innerhalb des aktuellen Projekts (siehe [`"move-task"`](api/methods/movetask_method.md)), [`"indent"`](api/methods/indenttask_method.md), [`"unindent"`](api/methods/unindenttask_method.md), `"project"` – verschiebt eine Aufgabe in ein anderes Projekt (siehe [`"move-task"`](api/methods/movetask_method.md)).<br/>Wenn eine Aufgabe innerhalb eines Projekts verschoben wird (operation === null), ist die `operation`-Eigenschaft im Payload nicht zwingend erforderlich.|
| `reverse`       | boolean   | *Optional*. Die Position, an die eine Aufgabe verschoben wird: vor der Zielaufgabe (true) oder dahinter (false, Standard).|
| `batch`       |  object  | *Erforderlich*. Ein Array der IDs aller zu verschiebenden Aufgaben. Wenn eine Aufgabe untergeordnete Elemente besitzt, wird nur die ID der übergeordneten Aufgabe ins Objekt aufgenommen.|

Beispiel:

~~~json
{
  "id": 5,
  "targetId": 2,
  "reverse": false,
  "operation": null,
  "batch": null
}
~~~

Beispiele für verschiedene Operationstypen:

<details>
  <summary>operation === null </summary>
  Wenn eine einzelne Aufgabe innerhalb des aktuellen Projekts verschoben wird, wird ihre ID in der Anfragezeile übermittelt; alle anderen Eigenschaften werden im Anfrage-Body übergeben.<br/> Wenn eine Aufgabe innerhalb eines Projekts verschoben wird, ist die `operation`-Eigenschaft im Payload nicht zwingend erforderlich.

  Payload-Beispiel:

~~~json
{
  "targetId": 1,
  "reverse": true,
  "batch": null
}
~~~

So verschieben Sie mehrere Aufgaben innerhalb desselben Projekts:
- Setzen Sie den Aufgaben-ID-Wert in der Anfragezeile auf 0
- Fügen Sie im Anfrage-Body die `batch`-Eigenschaft hinzu, die die IDs der zu verschiebenden Aufgaben enthält
- Fügen Sie weitere erforderliche Eigenschaften im Anfrage-Body hinzu

Payload-Beispiel:

~~~json
{
  "targetId": 1,
  "reverse": true,
  "batch": [1, 2, 3]
}
~~~
</details>  

<details>
  <summary>operation === "indent" || operation === "unindent" </summary>
   Wenn die Anfrage für eine einzelne `indent/unindent`-Operation gesendet wird, wird die Aufgaben-ID in der Anfragezeile übermittelt; alle anderen Aufgabeneigenschaften werden im Anfrage-Body übergeben.

   Beispiel:

    ~~~json
    {
      "parent": 2,
      "targetId": 2,
      "operation": "indent"
    }
    ~~~
</details>
  
<details>
  <summary>Mehrere indent/unindent-Operationen</summary>

Wenn die Anfrage zum Ein- oder Ausrücken mehrerer Aufgaben gesendet wird, wird der `ID`-Wert in der Anfragezeile auf 0 gesetzt; jede Aufgaben-ID mit weiteren Parametern muss im `opbatch`-Array von Aufgabenobjekten aufgelistet werden.

Mit anderen Worten: Um mehrere Aufgaben zu verschieben, muss das JSON-Objekt im Anfrage-Body das `opbatch`-Array von Aufgabenobjekten mit den Operationsdaten enthalten.

Beispiel:

~~~json
{
  "opbatch": [
    {
      "id": 1,
      "parent": 3,
      "targetId": 3,
      "operation": "indent"
    },
    {
      "id": 53,
      "parent": 3,
      "targetId": 3,
      "operation": "indent"
    }
  ]
}

~~~

</details>

<details>

<summary>operation === "project"</summary>

  So verschieben Sie eine einzelne Aufgabe in ein anderes Projekt:

  - Senden Sie die Aufgaben-ID als Query-Parameter in der Anfragezeile<br/>
    ODER<br/>
    Setzen Sie diesen Query-Parameter auf 0 und fügen Sie die Aufgaben-ID als Wert der `batch`-Eigenschaft im Anfrage-Body hinzu
  - Im Anfrage-Body:
    - Setzen Sie den Wert der `operation`-Eigenschaft auf `project`
    - Fügen Sie den Wert der `project`-Eigenschaft hinzu, also die ID des Projekts, in das die Aufgabe verschoben wird
    - Fügen Sie die Aufgaben-ID als Wert der `batch`-Eigenschaft hinzu, wenn die ID in der Anfragezeile auf 0 gesetzt ist

  Beispiel:

~~~json
    {
    "project": 2,
    "operation": "project",
    "batch": [3]
    }
~~~

  Wenn mehrere Aufgaben in ein anderes Projekt verschoben werden, wird der `ID`-Wert in der Anfragezeile auf 0 gesetzt und alle Aufgaben-IDs werden im `batch`-Array angegeben.<br/> 
  Wenn Sie eine Aufgabe mit untergeordneten Elementen verschieben, wird nur die ID der übergeordneten Aufgabe im `batch`-Array angegeben.<br/>
  Die `batch`-Eigenschaft kann eine beliebige Anzahl von Aufgaben-IDs enthalten.

  Beispiel:

~~~json
  {
    "project": 2,
    "operation": "project",
    "batch": [3, 5, 8, 9]
  }
~~~

</details>

### Antwort {#response}

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

Bei Erfolg wird ein leeres JSON-Objekt zurückgegeben.

---

**Verwandte Artikel:**
- [move-task](api/events/movetask_event.md)
- [send()](api/rest_api/methods/send_method.md)
- [Mit dem Server arbeiten](guides/working_with_server.md)
