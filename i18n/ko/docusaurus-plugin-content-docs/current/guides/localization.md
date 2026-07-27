---
sidebar_label: 로컬라이제이션
title: 로컬라이제이션
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 To Do List 로컬라이제이션에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# 로컬라이제이션 {#localization}

DHTMLX To Do List 인터페이스를 원하는 언어로 표시할 수 있습니다. 라이브러리는 미리 정의된 여러 로케일을 제공하며, 직접 커스텀 로케일을 만들 수도 있습니다. 기본적으로 DHTMLX To Do List는 [영어 로케일](#default-locale)을 사용합니다.

## 기본 로케일 {#default-locale}

아래 코드 조각은 기본 영어 로케일의 전체 구조를 보여줍니다:

~~~js
const en = {
    calendar:{ // 캘린더의 번역 및 설정
        monthFull: [
            "January", "February", "March",
            "April", "May", "June", 
            "July", "August", "September", 
            "October", "November", "December"
        ],
        monthShort: [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun",
            "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"
        ],
        dayFull: [
            "Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    
        clear: "Clear",
        done: "Done",
        today: "Today",

        weekStart: 1 // 주의 시작 요일을 정의합니다 (기본값: 월요일)
    },
    // To Do List
    todo: {
        // Toolbar
        "No project": "No project",
        "Search project": "Search project",
        "Add project": "Add project",
        "Rename project": "Rename project",
        "Delete project": "Delete project",

        // v1.1에서 추가 (시작)
        "Completed tasks": "Completed tasks",
        "Show": "Show",
        "Hide": "Hide",
        "Sort by": "Sort by",
        "Text (a-z)": "Text (a-z)",
        "Text (z-a)": "Text (z-a)",
        "Due date (new to old)": "Due date (new to old)",
        "Due date (old to new)": "Due date (old to new)",
        "Completion date (new to old)": "Completion date (new to old)",
        "Completion date (old to new)": "Completion date (old to new)",
        "Created (new to old)": "Created (new to old)",
        "Created (old to new)": "Created (old to new)",
        "Edited (new to old)": "Edited (new to old)",
        "Edited (old to new)": "Edited (old to new)",
        // v1.1에서 추가 (끝)

        // Task
        "Add task below": "Add task below",
        "Add subtask": "Add subtask",
        "Set due date": "Set due date",
        "Indent": "Indent",
        "Unindent": "Unindent",
        "Assign to": "Assign to",
        "Move to": "Move to",
        "Duplicate": "Duplicate",
        "Copy": "Copy",
        "Paste": "Paste",
        "Delete": "Delete",

        // 우선순위 (v1.2에서 추가)
        "Priority (high to low)": "Priority (high to low)",
        "Priority (low to high)": "Priority (low to high)",
        "Set priority": "Set priority",
        "Reset priority": "Reset priority",

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

        // 편집기
        "Type what you want": "Type what you want",

        // 기타
        "Search": "Search",
        "Add task": "Add task",
        "New project": "New project",

        // 기본 우선순위 레이블
        "High": "High",
        "Medium": "Medium",
        "Low": "Low"
    }
};
~~~

## 커스텀 로케일 {#custom-locale}

To Do List 컴포넌트를 영어가 아닌 언어로 초기화하려면:

- 언어 설정을 정의합니다 — 모든 텍스트 레이블에 대한 번역을 제공합니다
- `locale` 구성 속성을 통해 To Do List 컴포넌트와 Toolbar에 로케일을 적용합니다

아래 예제는 독일어 로케일 객체를 선언합니다:

~~~js
const de = {
    calendar: {
        // 캘린더 레이블 번역
    },
    todo: {
        // To Do List 레이블 번역
    }
};
~~~

:::tip
커스텀 로케일을 만들려면 [기본 영어 로케일](#default-locale)을 복사한 후 텍스트 레이블을 번역하세요.
:::

:::info
[**이 GitHub 저장소**](https://github.com/web-widgets/wx-todo-locales/tree/master/locales)에서 다음 언어에 대한 To Do List 로케일을 제공합니다:

- 중국어 (`cn`)
- 프랑스어 (`fr`)
- 독일어 (`de`)
- 영어 (`en`)
- 이탈리아어 (`it`)
- 일본어 (`jp`)
- 포르투갈어 (`pt`)
- 러시아어 (`ru`)
- 스페인어 (`es`)

해당 파일에는 캘린더 레이블 번역이 포함되어 있지 않으므로 직접 추가해야 합니다.
:::

아래 코드 조각은 To Do List와 Toolbar에 `de` 로케일을 적용합니다:

~~~js {8,13}
const { ToDo, Toolbar} = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    locale: de // 컴포넌트에 "de" 로케일을 설정합니다
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // Toolbar에 "de" 로케일을 설정합니다
});
~~~

:::tip
로케일을 동적으로 변경하려면 To Do List에서 [`setLocale()`](api/methods/setlocale_method.md)을 호출하고, Toolbar에서 [대응하는 `setLocale()`](api/toolbar_api/methods/setlocale_method.md)을 호출하세요.
:::

## 예제 {#example}

아래 코드 조각은 EN과 DE 로케일 간에 전환합니다:

<iframe src="https://snippet.dhtmlx.com/kzjwvuq5?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
