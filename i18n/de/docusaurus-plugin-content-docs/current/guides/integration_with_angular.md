---
sidebar_label: Integration mit Angular
title: Integration mit Angular
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie, wie die Integration mit Angular funktioniert. Sehen Sie sich Entwicklerleitfäden und die API-Referenz an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Integration mit Angular

:::tip
Machen Sie sich mit den grundlegenden Konzepten und Mustern von **Angular** vertraut, bevor Sie diese Dokumentation lesen. Zur Auffrischung Ihres Wissens lesen Sie die [**Angular-Dokumentation**](https://v17.angular.io/docs).
:::

DHTMLX To Do List ist mit **Angular** kompatibel. Die folgenden Beispiele zeigen, wie Sie beide zusammen verwenden. Ein vollständiges Projekt finden Sie im [**Beispiel auf GitHub**](https://github.com/DHTMLX/angular-todolist-demo).

## Projekt erstellen {#create-a-project}

Erstellen Sie ein neues Angular-Projekt und installieren Sie die Abhängigkeiten.

:::info
Bevor Sie ein neues Projekt erstellen, installieren Sie die [**Angular CLI**](https://v17.angular.io/cli) und [**Node.js**](https://nodejs.org/en/).
:::

Erstellen Sie mit Angular CLI ein neues Projekt namens *my-angular-todo-app*. Führen Sie folgenden Befehl aus:

~~~bash
ng new my-angular-todo-app
~~~

:::note
Deaktivieren Sie für diesen Leitfaden Server-Side Rendering (SSR) und Static Site Generation (SSG/Prerendering) beim Erstellen der neuen Angular-App.
:::

Der Befehl installiert alle benötigten Werkzeuge.

### Abhängigkeiten installieren {#install-dependencies}

Wechseln Sie in das neu erstellte App-Verzeichnis:

~~~bash
cd my-angular-todo-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver mit dem Paketmanager [**yarn**](https://yarnpkg.com/):

~~~bash
yarn
yarn start
~~~

Die App läuft unter einer Localhost-Adresse (z. B. `http://localhost:3000`).

## To-Do-Liste erstellen {#create-the-to-do-list}

Stoppen Sie die App und installieren Sie das To-Do-List-Paket.

### Schritt 1. Paket installieren {#step-1-install-the-package}

Laden Sie das [**To-Do-List-Testpaket**](how_to_start.md#installing-to-do-list-via-npm-or-yarn) herunter und folgen Sie den Anweisungen in der README-Datei. Die Testversion ist nur 30 Tage lang verfügbar.

### Schritt 2. Komponente erstellen {#step-2-create-the-component}

Erstellen Sie eine Angular-Komponente, um die To-Do-Liste mit der Toolbar in die Anwendung einzubinden. Fügen Sie im Verzeichnis *src/app/* den Ordner *todo* hinzu und erstellen Sie darin die Datei *todo.component.ts*.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie *todo.component.ts* und importieren Sie die Quelldateien der To-Do-Liste. Wählen Sie einen der beiden Importpfade:

- PRO-Version aus einem lokalen Ordner installiert — Import aus `dhx-todolist-package`
- Testversion — Import aus `@dhx/trial-todolist`

Das folgende Snippet importiert aus dem PRO-Paket:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from 'dhx-todolist-package';
~~~

Das folgende Snippet importiert aus dem Testpaket:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
~~~

Dieses Tutorial verwendet die **Testversion**.

#### Container festlegen und To-Do-Liste mit Toolbar initialisieren {#set-containers-and-initialize-the-to-do-list-with-toolbar}

Um die To-Do-Liste mit der Toolbar auf der Seite anzuzeigen, legen Sie Container für beide Komponenten fest und initialisieren Sie diese mit den Konstruktoren. Das folgende Beispiel definiert das Template, referenziert die Container und initialisiert die Komponenten innerhalb von `ngOnInit()`:

~~~jsx {1,8-11,15-18,24-31} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist'; 
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", // Template-Name, der in "app.component.ts" als <todo /> verwendet wird
    styleUrls: ["./todo.component.css"], // CSS-Datei einbinden

    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    // Container für Toolbar initialisieren
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // Container für To-Do-Liste initialisieren
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        // To-Do-List-Komponente initialisieren
        this._todo = new ToDo(this.todo_container.nativeElement, {});
        
        // Toolbar-Komponente initialisieren
        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // weitere Konfigurationseigenschaften 
        });
    }

    ngOnDestroy(): void {
        this._todo.destructor(); // To-Do-Liste zerstören
        this._toolbar.destructor(); // Toolbar zerstören
    }
}
~~~

#### Styles hinzufügen {#add-styles}

Importieren Sie die CSS-Datei, damit die To-Do-Liste korrekt dargestellt wird. Erstellen Sie die Datei *todo.component.css* im Verzeichnis *src/app/todo/* und fügen Sie die Styles für die To-Do-Liste und den Container hinzu. Das folgende Snippet importiert die To-Do-List-Styles und legt die Layout-Abmessungen fest:

~~~css title="todo.component.css"
/* To-Do-List-Styles importieren */
@import "@dhx/trial-todolist/dist/todo.css";

/* Styles für die Ausgangsseite */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
}

/* Styles für den To-Do-List- und Toolbar-Container */
.component_container {
    height: 100%; 
    max-width: 800px; 
    margin: 0 auto;
}

/* Styles für den To-Do-List-Container */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden {#load-data}

Erstellen Sie die Datei *data.ts* im Verzeichnis *src/app/todo/* und fügen Sie Daten hinzu. Das folgende Beispiel exportiert eine `getData()`-Funktion, die Aufgaben, Benutzer und Projekte zurückgibt:

~~~jsx {2,19,28,38} title="data.ts"
export function getData() {
    const tasks = [
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: 1
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: ["user_4", "user_1", "user_2", "user_3"],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: 2
        },
        // ...
    ];
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar:
                "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_61.jpg"
        },
        // ...
    ];
    const projects = [
        {
            id: "introduction",
            label: "Introduction to DHTMLX To Do List"
        },
        {
            id: "widgets",
            label: "Our widgets"
        }
    ];
    return { tasks, users, projects };
}
~~~

Öffnen Sie *todo.component.ts*. Importieren Sie die Datendatei und übergeben Sie die Dateneigenschaften an das Konfigurationsobjekt der To-Do-Liste innerhalb der Methode `ngOnInit()`. Das folgende Snippet wendet Benutzer-, Aufgaben- und Projektdaten bei der Initialisierung an:

~~~jsx {2,23,25-27} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import { getData } from "./data"; // Daten importieren
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", 
    styleUrls: ["./todo.component.css"], 
    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        const { users, tasks, projects } = getData(); // Dateneigenschaften initialisieren
        this._todo = new ToDo(this.todo_container.nativeElement, {
            users,
            tasks,
            projects,
            // weitere Konfigurationseigenschaften
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // weitere Konfigurationseigenschaften 
        });
    }

    ngOnDestroy(): void {
        this._todo.destructor();
        this._toolbar.destructor();
    }
}
~~~

Sie können auch die Methode [`parse()`](api/methods/parse_method.md) innerhalb von `ngOnInit()` verwenden, um Daten in die To-Do-Liste zu laden. Das folgende Beispiel lädt Daten nach der Initialisierung mit `parse()`:

~~~jsx {2,23,31-36} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import { getData } from "./data"; // Daten importieren
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", 
    styleUrls: ["./todo.component.css"], 
    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        const { users, tasks, projects } = getData(); // Dateneigenschaften initialisieren
        this._todo = new ToDo(this.todo_container.nativeElement, {});

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // weitere Konfigurationseigenschaften 
        });

        // Daten über die parse()-Methode anwenden
        this._todo.parse({ 
            users, 
            tasks, 
            projects 
        }); 
    }

    ngOnDestroy(): void {
        this._todo.destructor();
        this._toolbar.destructor();
    }
}
~~~

Jeder Aufruf von `parse(data)` ersetzt den aktuellen Datensatz.

Die Komponente rendert jetzt eine befüllte To-Do-Liste. Weitere verfügbare Eigenschaften finden Sie in der [Konfigurationsübersicht](api/overview/configs_overview.md).

#### Events verarbeiten {#handle-events}

Abonnieren Sie Events, um auf Benutzeraktionen zu reagieren. Siehe die [vollständige Event-Liste](api/overview/events_overview.md).

Öffnen Sie *todo.component.ts* und vervollständigen Sie die Methode `ngOnInit()`. Das folgende Snippet registriert einen Handler für das `add-task`-Event:

~~~jsx {5-7} title="todo.component.ts"
// ...
ngOnInit() {
    this._todo = new ToDo(this.todo_container.nativeElement, {});

    this._todo.events.on("add-task", (obj) => {
        console.log("A new task is added", obj);
    });
}

ngOnDestroy(): void {
    this._todo.destructor();
}
~~~

### Schritt 3. To-Do-Liste in die App einbinden {#step-3-add-the-to-do-list-into-the-app}

Um die `ToDoComponent` in die App einzubinden, öffnen Sie *src/app/app.component.ts* und ersetzen Sie den Standard-Code durch das folgende Snippet:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<todo/>` // Template aus "todo.component.ts" erstellt
})
export class AppComponent {
    name = "";
}
~~~

Erstellen Sie die Datei *app.module.ts* im Verzeichnis *src/app/* und registrieren Sie die `ToDoComponent`. Das folgende Beispiel deklariert die Komponenten und bootet die App:

~~~jsx {4-5,8} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ToDoComponent } from "./todo/todo.component";

@NgModule({
    declarations: [AppComponent, ToDoComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

Im letzten Schritt öffnen Sie *src/main.ts* und ersetzen den vorhandenen Code durch folgenden:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Starten Sie die App — die To-Do-Liste wird mit Beispieldaten gerendert:

![In einer Angular-Anwendung gerendertes DHTMLX To Do List mit Beispieldaten](/img/trial_todolist.png)

Das vollständige Projekt finden Sie auf [**GitHub**](https://github.com/DHTMLX/angular-todolist-demo).
