---
sidebar_label: setHeaders()
title: setHeaders Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die setHeaders-Methode des RestDataProvider. Entwicklerleitfäden und API-Referenz, Code-Beispiele und Live-Demos sowie ein kostenloser 30-Tage-Evaluierungsdownload von DHTMLX To Do List.
---

# setHeaders()

### Beschreibung {#description}

@short: Legt benutzerdefinierte Header fest, die jeder Anfrage des RestDataProvider hinzugefügt werden

:::info
Die an `setHeaders()` übergebenen Header werden mit dem Standard-Header `Content-Type: application/json` zusammengeführt und mit jeder Anfrage gesendet. Dies wird häufig verwendet, um ein Autorisierungs-Token (zum Beispiel den `Remote-Token`-Header) in einem Mehrbenutzersystem zu übermitteln.
:::

### Verwendung {#usage}

~~~js
setHeaders(headers: object): void;
~~~

### Parameter {#parameters}

| Name       | Typ        | Beschreibung |
| ----------- | ----------- | ----------- |
| `headers`   |  object     | *Erforderlich*. Ein Objekt mit benutzerdefinierten Headern, die jeder Anfrage hinzugefügt werden |

### Beispiel {#example}

~~~js {7-9}
const { RestDataProvider } = todo;

const url = "https://some_backend_url";

login(url).then(token => {
    const restProvider = new RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
    // ... To Do List initialisieren und Provider verbinden
});
~~~

---

**Verwandte Artikel**: [Mit dem Server arbeiten](guides/working_with_server.md#multiuser-backend)
