---
sidebar_label: setLocale()
title: Метод setLocale
description: Вы можете узнать о методе setLocale в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# setLocale()

### Описание {#description}

@short: Устанавливает указанную локаль для To Do List

### Использование {#usage}

~~~js
setLocale(
    locale: object,
): void;
~~~

### Параметры {#parameters}

- `locale` - (обязательный) объект локали

:::important
Метод `setLocale()` уничтожает текущий компонент и инициализирует новый. Если вы используете компонент совместно с **Toolbar**, необходимо вызвать метод [`setLocale()`](api/toolbar_api/methods/setlocale_method.md) компонента **Toolbar**, чтобы изменить его локаль. Смотрите пример ниже!
:::

### Пример {#example}

~~~js {97-98,100-102}
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
        // задачи
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
        // горячие клавиши
        "Enter": "Enter",
        "Tab": "Tab",
        "Shift+Tab": "Shift+Tab",
        "Ctrl+D": "Ctrl+D",
        "Ctrl+C": "Ctrl+C",
        "Ctrl+V": "Ctrl+V",
        // для Mac OS
        "CMD+D": "CMD+D",
        "CMD+C": "CMD+C",
        "CMD+V": "CMD+V",
        // редактор
        "Type what you want": "Warten auf Eingabe",
        // прочее
        "Search": "Suche",
        "Add task": "Aufgabe hinzufügen",
        "New project": "Neues Projekt",
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

// смена локали To Do List
list.setLocale(de);

// смена локали Toolbar (см. примечание)
toolbar.setLocale(de, list.api);
~~~

**Связанная статья**: [Локализация](guides/localization.md)
