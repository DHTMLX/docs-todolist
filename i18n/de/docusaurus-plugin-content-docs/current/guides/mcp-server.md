---
sidebar_label: DHTMLX MCP server
title: DHTMLX To Do List MCP-Integration für Aufgaben und REST-Synchronisierung
description: Aufgaben, Unteraufgaben, Projekte, Prioritäten und REST-Synchronisierung in DHTMLX To Do List bleiben für KI-Assistenten über den MCP-Server jederzeit aktuell.
---

# DHTMLX To Do List MCP-Server: Aufgaben, Projekte und REST-Synchronisierung

DHTMLX To Do List wirkt an der Oberfläche wie eine einfache Checkliste, bringt aber [verschachtelte Unteraufgaben](guides/task_operations.md#adding-a-new-task), [Tastenkürzel für Prioritäten](/#prioritizing-a-task), [Umsortieren per Drag-and-Drop](guides/configuration.md#drag-n-drop), [Filterung über Hashtags](guides/inline_editing.md#hashtags) und ein REST-Backend mit, das über den [Event Bus](api/internal/setnext_method.md) verkettet wird. Damit generierter Code funktioniert, benötigt er die aktuellen Signaturen zum [Kopieren einer Aufgabe](api/methods/copytask_method.md) oder zum [Einrücken einer Aufgabe zu einer Unteraufgabe](api/methods/indenttask_method.md), die richtige Struktur der Event-Payload und die [Optionen für Aufgabenfelder](api/configs/taskshape_config.md), die es heute tatsächlich gibt — und nicht eine veraltete Erinnerung aus dem Training.

Genau hier hilft der DHTMLX MCP-Server: Er lässt den Assistenten die aktuelle To Do List-Dokumentation prüfen, bevor dieser antwortet. Verweisen Sie ihn auf [Aufgabenoperationen](guides/task_operations.md), [Mehrfachauswahl und Sammelaktionen](guides/multiselection.md), die [Integration des REST-Backends](guides/working_with_server.md) oder die [Konfiguration von Aufgaben und Projekten](guides/configuration.md), und der Assistent ruft die aktuelle API-Oberfläche ab, statt zu raten.

### MCP-Endpunkt {#mcp-endpoint}

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
Der DHTMLX MCP-Server deckt alle wichtigen DHTMLX-Produkte ab, nicht nur DHTMLX To Do List. Derselbe Endpunkt und dieselben Konfigurationsanweisungen funktionieren unabhängig davon, mit welcher DHTMLX-Komponente Sie arbeiten.
:::

## MCP-Server-Unterstützung für die gesamte To Do List-API {#mcp-server-support-across-the-to-do-list-api}

Der Index des Servers umfasst die vollständige Dokumentation von DHTMLX To Do List, darunter:

- Nachschlagen der aktuellen API für [To Do List-Methoden](api/overview/methods_overview.md), [Events](api/overview/events_overview.md), [Eigenschaften](api/overview/configs_overview.md) und die zugehörige [Toolbar API](category/toolbar-properties.md).
- Erzeugen von sofort lauffähigem Code für [Initialisierung](guides/initialization.md) und [Konfiguration](guides/configuration.md) für einen bestimmten Satz von Aufgaben, Projekten und Benutzern.
- Verwalten der Aufgabenhierarchie und von Sammelaktionen, etwa [Hinzufügen, Verschieben und Löschen von Aufgaben](guides/task_operations.md), Ändern der [Einrückungsebene](guides/task_operations.md#changing-the-indent-level-of-a-task) und Ausführen von Operationen über [mehrere ausgewählte Aufgaben](guides/multiselection.md).
- Arbeiten mit [Projekten](guides/project_operations.md) und dem [Projektobjekt](guides/project_object_operations.md), einschließlich des Wechsels des aktiven Projekts und des Verschiebens von Aufgaben zwischen Projekten.
- Zuweisen von [Aufgabenbearbeitern](guides/task_users.md), Festlegen von Fälligkeitsdaten und Konfigurieren von [Prioritäten](api/configs/priorities_config.md).
- Anbinden von `RestDataProvider` an ein [REST-Backend](guides/working_with_server.md), einschließlich des Mehrbenutzermodus und der über `api.setNext()` festgelegten Reihenfolge im Event Bus.
- Konfigurieren von [Sortierung und Filterung](guides/sorting_filtering_tasks.md), [Ausblenden erledigter Aufgaben](guides/hide_completed_tasks.md) und [Nur-Lesen-Modus](guides/readonly_mode.md).
- Umgang mit [Inline-Bearbeitung](guides/inline_editing.md) und [Tastenkürzeln](guides/keyboard_navigation.md) für Aufgaben und Projekte.
- Erkunden von [Lokalisierung](guides/localization.md), [Stilanpassung](guides/stylization.md) und der Integration mit [React](guides/integration_with_react.md), [Vue](guides/integration_with_vue.md), [Angular](guides/integration_with_angular.md) und [Svelte](guides/integration_with_svelte.md).

## Wie eine To Do List-Frage den MCP-Server durchläuft {#how-a-to-do-list-question-moves-through-the-mcp-server}

Stellen Sie dem DHTMLX MCP-Server eine beliebige Frage zu To Do List, und die Anfrage durchläuft eine Retrieval-Augmented Generation (RAG)-Pipeline über das Model Context Protocol (MCP). Von dort übernimmt einer von zwei Workflows: *Search* liefert passende Referenzseiten zurück, aus denen der Assistent seine Antwort formuliert, während *Inference* dieselben Seiten liest und direkt antwortet. Eine To Do List-Anfrage bündelt oft zwei getrennte Aufgaben: eine, die aktuelle Dokumentation benötigt, und eine, die der Assistent bereits allein erledigen kann. Die erste trennt er ab, bevor überhaupt etwas MCP erreicht.

So sieht dieser Ablauf für den Prompt *"Wie stelle ich sicher, dass Operationen zum Hinzufügen und Verschieben von Aufgaben meinen Server in der richtigen Reihenfolge erreichen?"* aus:

1. Der Assistent erkennt die Dokumentationsaufgabe: wie man RestDataProvider mit api.setNext() in den Event Bus einreiht.
2. Der Server bestimmt genau die Dokumentation zur Arbeit mit dem Server, zu der sie gehört.
3. Das Erzeugen dieses Handlers erfordert Code, daher geht die Anfrage an *Search* (eine engere Frage, etwa welches Event in der Kette zuerst ausgelöst wird, ginge stattdessen an *Inference*).
4. *Search* holt die passenden Seiten aus einem Vektorindex, der auf der aktuellen To Do List-Dokumentation aufgebaut ist.
5. Diese Seiten gelangen als Kontext zurück zum Assistenten.
6. Der Assistent setzt aus diesem Kontext den Code für die Event-Bus-Verkettung zusammen und ergänzt anschließend die serverspezifischen Anfragedetails aus seinem eigenen Wissen, statt bei der To Do List-API zu raten.

Dank dieser Recherche bindet der Assistent RestDataProvider genau so in den Event Bus ein, wie es heute tatsächlich funktioniert.

## MCP-Verbindung einrichten {#setting-up-the-mcp-connection}

Ob Sie ein neues To Do List-Projekt aufsetzen oder an ein bestehendes `RestDataProvider`-Backend andocken — beides beginnt gleich: Richten Sie Ihr Tool auf die untenstehende URL aus, je nach Erwartung des Tools über einen CLI-Befehl oder einen JSON-Konfigurationseintrag.

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

Die folgenden Abschnitte behandeln die Einrichtung Tool für Tool.

### Claude Code {#claude-code}

:::info
Eine vollständige Übersicht zur MCP-Einrichtung in Claude Code finden Sie in der [offiziellen Dokumentation](https://code.claude.com/docs/en/mcp).
:::

Um den Server über die Befehlszeile zu registrieren, führen Sie aus:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Auch eine manuelle Einrichtung ist möglich — fügen Sie dazu einfach Folgendes zu Ihrer `.mcp.json` hinzu:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor {#cursor}

:::info
Die schrittweise MCP-Konfiguration für Cursor finden Sie in der [offiziellen Dokumentation](https://cursor.com/en-US/docs/mcp).
:::

Schritte zum Hinzufügen des Servers:

1. Öffnen Sie die Einstellungen (`Cmd+Shift+J` unter Mac, `Ctrl+Shift+J` unter Windows/Linux)
2. Wechseln Sie zu **Tools & MCP**
3. Klicken Sie auf **Add Custom MCP**
4. Fügen Sie die folgende Konfiguration ein:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity {#google-antigravity}

#### Antigravity 2.0 {#antigravity-20}

:::info
Antigravity beschreibt die Integration von MCP-Servern in der [offiziellen Dokumentation](https://antigravity.google/docs/mcp).
:::

Führen Sie die folgenden Schritte aus, um den DHTMLX MCP-Server mit Google Antigravity zu verbinden:

1. Öffnen Sie die Befehlspalette
2. Geben Sie "mcp add" ein
3. Wählen Sie "HTTP"
4. Geben Sie die folgenden Werte an:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info
Die Schritte zur Migration von Gemini CLI zu Antigravity CLI finden Sie im [zugehörigen Leitfaden](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes).
:::

Um den DHTMLX MCP-Server mit Antigravity CLI zu verbinden, erstellen Sie `mcp_config.json` an einem dieser Orte:

- Global: `~/.gemini/config/mcp_config.json`
- Arbeitsbereich: `.agents/mcp_config.json`

Fügen Sie die folgende Konfiguration hinzu:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Führen Sie anschließend `agy` im Terminal aus.

### ChatGPT {#chatgpt}

:::info
Die eigene Dokumentation von ChatGPT beschreibt den vollständigen [Einrichtungsprozess für MCP-Connectors](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt).
:::

Schritte zur Konfiguration des Connectors:

1. Wechseln Sie zu **Settings** → **Apps & Connectors**
2. Klicken Sie auf **Advanced settings**
3. Aktivieren Sie den **Developer mode**
4. Kehren Sie zu **Apps & Connectors** zurück und klicken Sie auf "Create"
5. Füllen Sie die Angaben zum Connector aus:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentifizierung: `No authentication`
6. Klicken Sie auf **Create**

Nachdem Sie den Connector erstellt haben, ruft ChatGPT während der Unterhaltungen Dokumentation vom MCP-Server ab.

:::info
Für intensive Coding-Workflows sind andere MCP-fähige Tools möglicherweise besser geeignet.
:::

### Weitere Tools {#other-tools}

Die meisten anderen KI-Coding-Tools unterstützen MCP ebenfalls, meist unter einer Einstellungsbezeichnung wie "Model Context Protocol" oder "Context Sources". Fügen Sie dort `https://docs.dhtmlx.com/mcp` als benutzerdefinierte Quelle hinzu.

## Wie der MCP-Server mit Ihren Daten umgeht {#how-the-mcp-server-treats-your-data}

Der MCP-Server ist ein gehosteter Dienst: Auf Ihrem Rechner läuft nichts, es werden keine Dateien aus Ihrer Umgebung gelesen und keine personenbezogenen Benutzerdaten gespeichert.

Zur Fehlersuche und zur Verbesserung des Dienstes können an den Server gesendete Anfragen protokolliert werden.

Wenn Ihre Organisation strengere Garantien benötigt, fragen Sie unter `info@dhtmlx.com` nach einer kommerziellen Bereitstellung mit deaktivierter Protokollierung von Anfragen.

## To Do List-Prompts zum Kopieren und Anpassen {#to-do-list-prompts-to-copy-and-adapt}

Jede Gruppe unten zielt auf eine Art von Operation ab. Kopieren Sie ein Beispiel und passen Sie den Wortlaut an Ihre eigenen Daten an.

**Aufgaben und Hierarchie**

~~~
How do I add a subtask under a specific task in DHTMLX To Do List?
~~~
~~~
How do I make a task become a subtask of the task directly above it? Use the docs.
~~~
~~~
How do I copy a task along with its subtasks and paste it into a different project?
~~~

**Projekte**

~~~
How do I switch to a different active project and move a task into it?
~~~
~~~
What happens to a project's tasks when I delete the project in DHTMLX To Do List?
~~~

**Auswahl und Sammeloperationen**

~~~
How do I select several tasks and mark them all as complete at once in DHTMLX To Do List?
~~~
~~~
How do I delete all currently selected tasks at once? Use the docs.
~~~

**Server-Integration**

~~~
How do I connect DHTMLX To Do List to my Node.js backend and load tasks on initialization?
~~~
~~~
How do I set up multiuser mode so task changes sync across clients in real time?
~~~

## To Do List-Prompts präziser formulieren {#making-to-do-list-prompts-more-precise}

- **Nennen Sie die genaue Methode.** DHTMLX To Do List stellt mehrere ähnlich benannte Methodenpaare bereit (`checkTask()`/`uncheckTask()`, `indentTask()`/`unindentTask()`, `hideCompletedTasks()`/`showCompletedTasks()`). Geben Sie den Methodennamen an, damit der Assistent die richtige Referenz abruft, statt die Parameter zu erraten.
- **Sagen Sie, ob das Ziel eine Aufgabe, ein Projekt oder ein Benutzer ist.** Viele Methoden erwarten ein ähnliches id-basiertes Objekt (zum Beispiel `getTask()` gegenüber `getProject()`). Die Nennung des Ziels grenzt die Suche auf den richtigen Teil der API ein.
- **Beschreiben Sie die Datenstruktur.** Prompts wie "eine Aufgabe mit Unteraufgaben und einem Fälligkeitsdatum" oder "eine mehreren Benutzern zugewiesene Aufgabe" liefern präzisere Dokumentation als ein allgemeines "eine Aufgabe". Das ist besonders wichtig, wenn Sie zu ladende Daten vorbereiten oder `taskShape` konfigurieren.
- **Ergänzen Sie "Use the docs"** in Ihrem Prompt. Diese Formulierung signalisiert, dass der Assistent eine MCP-Abfrage auslösen soll, statt allein aus den Trainingsdaten zu antworten. Am meisten hilft das bei Event-Payloads (zum Beispiel `open-menu` oder `edit-item`) und bei der Anbindung des REST-Backends — beides ändert sich zwischen Versionen.
