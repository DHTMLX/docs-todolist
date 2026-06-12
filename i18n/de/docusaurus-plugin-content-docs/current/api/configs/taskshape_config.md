---
sidebar_label: taskShape
title: taskShape Config
description: Sie können mehr über die taskShape-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# taskShape

### Beschreibung {#description}

@short: Optional. Ein Objekt mit Einstellungen für die Darstellung von Aufgaben

### Verwendung {#usage}

~~~js
taskShape?: {
    counter?: {
        type: "percentage" | "number", 
    },
    date?: {
        format: string,
        validate: boolean
    },
    completed?: {
        behavior: "manual" | "auto",
        taskHide: boolean
    },
    priority?: {
        cover: boolean,
        label: boolean
    }
};
~~~

### Standardkonfiguration {#default-config}

~~~js
taskShape: {
    counter: {
        type: "number", 
    },
    date: {
        format: "%d %M %Y",
        validate: true 
    },
    completed: {
        behavior: "auto",
        taskHide: false
    },
    priority: {
        cover: true,
        label: true
    }
}
~~~

### Parameter {#parameters}

Um die Darstellung der Aufgabe zu konfigurieren, können Sie die folgenden Parameter im Objekt `taskShape` angeben:

- `counter` - (optional) ein Objekt mit Einstellungen für den Zähler erledigter Unteraufgaben der ersten Ebene:
    - `type` - (erforderlich) der Anzeigetyp des Zählers. Es gibt zwei Typen:
        - *"number"* - der Wert des Zählers wird als Verhältnis zweier Zahlen angezeigt: die Anzahl der erledigten Unteraufgaben und die Gesamtzahl der Unteraufgaben
        - *"percentage"* - der Wert des Zählers wird als Prozentsatz angezeigt
- `date` - (optional) ein Objekt mit Datumseinstellungen:
    - `format` - (erforderlich) definiert das Format der Datumsanzeige. Standardmäßig "%d %M %Y". Die vollständige Liste der verfügbaren Zeichen ist [unten](#list-of-characters) aufgeführt
    - `validate` - (erforderlich) legt fest, ob die Eigenschaft `due_date` des [Aufgabenobjekts](api/configs/tasks_config.md) validiert werden soll
- `completed` - (optional) ein Objekt mit Einstellungen zur Steuerung der Markierung und Anzeige erledigter Aufgaben. Es enthält einen Parameter:
    - `behavior` - (erforderlich) legt das Verhalten für übergeordnete und untergeordnete Aufgaben fest, wenn diese als erledigt/nicht erledigt markiert werden. Es gibt zwei Optionen:
        - *"auto"* - aktiviert den Modus `"auto"`:
            - Wenn Sie alle untergeordneten Aufgaben als erledigt markieren, wird die übergeordnete Aufgabe automatisch als erledigt markiert
            - Wenn Sie die übergeordnete Aufgabe als erledigt markieren, werden alle untergeordneten Aufgaben automatisch als erledigt markiert
            - Wenn Sie mindestens eine untergeordnete Aufgabe einer erledigten Aufgabe als nicht erledigt markieren, wird die Aufgabe automatisch als nicht erledigt markiert
            - Wenn Sie die übergeordnete Aufgabe als nicht erledigt markieren, werden alle untergeordneten Aufgaben automatisch als nicht erledigt markiert
        - *"manual"* - aktiviert den Modus `"manual"`. Sie müssen jede Aufgabe (ob untergeordnet oder übergeordnet) manuell als erledigt markieren
    - `taskHide` - (erforderlich) aktiviert/deaktiviert den Modus zum Ausblenden erledigter Aufgaben aus der Liste
- `priority` - (optional) - ein Objekt mit Einstellungen, das die Darstellung der Priorität festlegt. Hier können Sie die folgenden Parameter angeben:
    - `cover` - (erforderlich) - legt fest, ob eine Prioritäts-Abdeckung angezeigt werden soll
    - `label` - (erforderlich) - legt fest, ob eine Prioritäts-Bezeichnung angezeigt werden soll

### Beispiel {#example}

~~~js {10-26}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, priorities } = getData();

// To Do List erstellen
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    priorities,
    taskShape: {
        counter: {
            type: "percentage",
        },
        date: {
            format: "%d %m %Y",
            validate: false,
        },
        completed: {
            behavior: "manual",
            taskHide: true,
        },
        priority: {
            cover: true,
            label: false,
        }
    }
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

### Zeichenliste {#list-of-characters}

DHTMLX To Do List verwendet die folgenden Zeichen zur Festlegung eines Datumsformats:

| Zeichen | Definition                                              |
|---------|---------------------------------------------------------|
| `%d`    | Tag als Zahl mit führender Null, 01..31                 |
| `%j`    | Tag als Zahl, 1..31                                     |
| `%D`    | Kurzname des Tages, So Mo Di...                         |
| `%l`    | Vollständiger Name des Tages, Sonntag Montag Dienstag...|
| `%m`    | Monat als Zahl mit führender Null, 01..12               |
| `%n`    | Monat als Zahl, 1..12                                   |
| `%M`    | Kurzname des Monats, Jan Feb Mär...                     |
| `%F`    | Vollständiger Name des Monats, Januar Februar März...   |
| `%y`    | Jahr als Zahl, 2 Stellen                                |
| `%Y`    | Jahr als Zahl, 4 Stellen                                |

:::tip
Lesen Sie den Artikel [**Lokalisierung**](guides/localization.md), um zu erfahren, wie Sie die Datumsbezeichnungen in der gewünschten Sprache darstellen können.
:::

**Änderungsprotokoll:**

- Der Parameter `priority` wurde in v1.2 hinzugefügt

**Verwandte Artikel:**

- [Konfiguration](guides/configuration.md#tasks)
- [Erledigte Aufgaben anzeigen/ausblenden](guides/hide_completed_tasks.md)

**Verwandte Beispiele:**
- [To Do List. Unteraufgaben-Zähler und Datumsformat](https://snippet.dhtmlx.com/magidhw8?tag=todolist)
- [To Do List. Zwei Varianten zum Markieren einer übergeordneten Aufgabe als erledigt](https://snippet.dhtmlx.com/5892fcr2?tag=todolist)
- [To Do List. Benutzerdefinierte Tastenkombinationen für das Festlegen von Prioritäten](https://snippet.dhtmlx.com/5cymicwt?tag=todolist)
