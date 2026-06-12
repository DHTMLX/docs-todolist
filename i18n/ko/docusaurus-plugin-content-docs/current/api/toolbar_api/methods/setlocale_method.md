---
sidebar_label: setLocale()
title: setLocale Method
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 Toolbar의 setLocale 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List 무료 30일 평가판을 다운로드하세요.
---

# setLocale()

### 설명 {#description}

@short: Toolbar 컴포넌트에 지정된 로케일을 설정합니다

### 사용법 {#usage}

~~~js
setLocale(
    locale: object,
    api: object
): void;
~~~

### 파라미터 {#parameters}

- `locale` - (필수) 로케일 객체
- `api` - (필수) To Do List의 내부 API가 담긴 객체

### 예제 {#example}

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

// To Do List의 로케일 변경 (아래 정보 참조)
list.setLocale(de);

// Toolbar의 로케일 변경
toolbar.setLocale(de, list.api);
~~~

:::info
To Do List의 **Toolbar**는 별도 컴포넌트입니다. Toolbar의 로케일을 변경하기 전에 **To Do List** 컴포넌트에 [`setLocale()`](api/toolbar_api/methods/setlocale_method.md) 메서드를 먼저 적용했는지 확인하세요
:::

**관련 문서**: [지역화](guides/localization.md)
