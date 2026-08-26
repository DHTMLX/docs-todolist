---
sidebar_label: Stilanpassung
title: Stilanpassung
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie alles über die Stilanpassung der To-Do-Liste. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Stilanpassung

Passen Sie jeden Bereich der DHTMLX-To-Do-List-Oberfläche individuell an. Die Bibliothek stellt **zwei** Arten von CSS-Variablen bereit:

- Variablen, die den Stil der To-Do-Liste betreffen
- Variablen, die den Stil der WX-Bibliothek betreffen (Schriftart, Icons, Checkboxen und andere gemeinsame Elemente)

## Standardstil {#default-style}

Der folgende Code-Ausschnitt zeigt die Standardwerte aller CSS-Variablen, die die To-Do-Liste und die WX-Bibliothek beeinflussen.

:::tip Hinweis
Variablennamen können sich zwischen Versionen ändern. Überprüfen Sie diese nach jedem Update erneut.
:::

~~~html
<style>
    .wx-material-theme .wx-todo,
    .wx-material-theme .wx-todo_toolbar,
    .wx-material-theme .wx-todo_menu,
    .wx-material-theme.wx-portal {

    /* CSS-Variablen der WX-Bibliothek */

        /* Grundfarben */
        --wx-color-primary: #2f77e3;
        --wx-color-success: #0ab169;
        --wx-color-danger: #ff5252;

        --wx-color-font: #4d4d4d;
        --wx-color-font-disabled: #b3b3b3;

        --wx-color-secondary: #808080;
        --wx-color-secondary-hover: #4d4d4d;
        --wx-color-secondary-font: #fff;
        --wx-color-secondary-light: #b3b3b3;

        --wx-background: #fff;
        --wx-background-selected: #ededed;
        /* Ende Grundfarben */

        /* Schriftart */
        --wx-font-family: Roboto, Arial, Helvetica, sans-serif;
        --wx-font-size: 14px;
        --wx-font-size-s: 12px;
        --wx-font-weight: 400;
        --wx-font-weight-medium: 500;
        --wx-line-height: 20px;
        /* Ende Schriftart */

        /* Icons */
        --wx-icon-color: var(--wx-color-secondary);
        --wx-icon-background-hover: #d4d4d4;
        /* Ende Icons */

        /* Animation */
        --wx-all-transition: all 0.2s ease-out;
        /* Ende Animation */

        /* Rahmen */
        --wx-border-color: #dfdfdf;
        --wx-border-width: 1px;
        --wx-border-radius: 2px;
        --wx-border: var(--wx-border-width) solid var(--wx-border-color);
        /* Ende Rahmen */
        

        /* Checkbox */
        --wx-checkbox-size: var(--wx-base-size);
        --wx-checkbox-border-size: 2px;
        --wx-checkbox-color-unchecked: var(--wx-color-secondary);
        --wx-checkbox-color-checked: var(--wx-color-success);
        /* Ende Checkbox */
    
    /* Ende der CSS-Variablen der WX-Bibliothek */

    
    /* CSS-Variablen der To-Do-Liste */

        /* Hauptkomponente */
        --wx-todo-toolbar-background: var(--wx-background);
        --wx-todo-toolbar-height: 56px;
        --wx-todo-toolbar-align: center;
        --wx-todo-toolbar-justify: flex-start;

        --wx-todo-mark-background: #ffff88;
        --wx-todo-mark-background-strict: #d4c5f9;

        --wx-todo-date-color-current: var(--wx-color-success);
        --wx-todo-date-color-expired: var(--wx-color-danger);
        --wx-todo-date-color-regular: var(--wx-color-secondary);
        /* Ende Hauptkomponente */

    /* Ende der CSS-Variablen der To-Do-Liste */


    /* Sonstiges */
        --wx-base-size: 20px;
        --wx-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    /* Ende Sonstiges */
    }
</style>
~~~

## Benutzerdefinierter Stil {#custom-style}

Um die To-Do-Liste anzupassen, überschreiben Sie die entsprechenden CSS-Variablen.

Der folgende Code-Ausschnitt wendet einen benutzerdefinierten Stil auf die To-Do-Liste an:

<iframe src="https://snippet.dhtmlx.com/thmx9921?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Verwandte Artikel {#related-articles}

- [Anpassung](guides/customization.md) - Übersicht der verfügbaren Anpassungsoptionen
