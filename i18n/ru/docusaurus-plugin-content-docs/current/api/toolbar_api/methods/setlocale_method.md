---
sidebar_label: setLocale()
title: setLocale Method
description: В документации библиотеки DHTMLX JavaScript To Do List вы можете узнать о методе setLocale компонента Toolbar. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# setLocale()

### Описание {#description}

@short: Устанавливает указанную локаль для компонента Toolbar

### Использование {#usage}

~~~js
setLocale(
    locale: object,
    api: object
): void;
~~~

### Параметры {#parameters}
 
- `locale` - (обязательный) объект локали
- `api` - (обязательный) объект с внутренним API компонента To Do List

### Пример {#example}

~~~js {100-101}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const de = {
    calendar: {
        monthShort: [
            "Jan",
            "Feb",
            "Mrz",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dez",
        ],
        monthFull: [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
        ],
        dayShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        dayFull: [
            "Sonntag",
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag",
        ],
        clear: "Entfernen",
        done: "Fertig",
        today: "Heute",
    },
    todo: {
        // Toolbar
        "No project": "Kein Projekt",
        "Search project": "Projekt suchen",
        "Add project": "Projekt hinzufügen",
        "Rename project": "Projekt umbenennen",
        "Delete project": "Projekt löschen",
        // Task
        "Add task below": "Aufgabe unten hinzufügen",
        "Add subtask": "Unteraufgabe hinzufügen",
        "Set due date": "Fälligkeitsdatum festlegen",
        "Indent": "Einzug",
        "Unindent": "Nicht einrücken",
        "Assign to": "Zuweisen",
        "Move to": "Ziehen nach",
        "Duplicate": "Duplikat",
        "Copy": "Kopieren",
        "Paste": "Einfügung",
        "Delete": "Löschen",
        // Shortcut
        "Enter": "Enter",
        "Tab": "Tab",
        "Shift+Tab": "Shift+Tab",
        "Ctrl+D": "Ctrl+D",
        "Ctrl+C": "Ctrl+C",
        "Ctrl+V": "Ctrl+V",
        // For Mac OS
        "CMD+D": "CMD+D",
        "CMD+C": "CMD+C",
        "CMD+V": "CMD+V",
        // Editor
        "Type what you want": "Warten auf Eingabe",
        // Other
        "Search": "Suche",
        "Add task": "Aufgabe hinzufügen",
        "New project": "Neues Projekt"
    },
};

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// изменить локаль To Do List (см. информацию ниже)
list.setLocale(de);

// изменить локаль Toolbar
toolbar.setLocale(de, list.api);
~~~

:::info
**Toolbar** компонента To Do List является отдельным компонентом. Перед изменением его локали убедитесь, что вы уже применили метод [`setLocale()`](api/toolbar_api/methods/setlocale_method.md) к компоненту **To Do List**
:::

**Связанная статья:** [Локализация](guides/localization.md)
