---
sidebar_label: setLocale()
title: setLocale 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 setLocale 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# setLocale()

### 설명 {#description}

@short: To Do List에 지정한 로케일을 설정합니다

### 사용법 {#usage}

~~~js
setLocale(
    locale: object,
): void;
~~~

### 파라미터 {#parameters}

- `locale` - (필수) 로케일 객체

:::important
`setLocale()` 메서드는 현재 컴포넌트를 제거하고 새 컴포넌트를 초기화합니다. **Toolbar**와 함께 컴포넌트를 사용하는 경우, Toolbar의 로케일을 변경하려면 **Toolbar**의 [`setLocale()`](api/toolbar_api/methods/setlocale_method.md) 메서드도 호출해야 합니다. 아래 예제를 참조하세요!
:::

### 예제 {#example}

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
        // 태스크
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
        // 단축키
        "Enter": "Enter",
        "Tab": "Tab",
        "Shift+Tab": "Shift+Tab",
        "Ctrl+D": "Ctrl+D",
        "Ctrl+C": "Ctrl+C",
        "Ctrl+V": "Ctrl+V",
        // Mac OS용
        "CMD+D": "CMD+D",
        "CMD+C": "CMD+C",
        "CMD+V": "CMD+V",
        // 에디터
        "Type what you want": "Warten auf Eingabe",
        // 기타
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

// To Do List의 로케일 변경
list.setLocale(de);

// Toolbar의 로케일 변경 (참고 사항 확인)
toolbar.setLocale(de, list.api);
~~~

**관련 문서:** [현지화](guides/localization.md)
