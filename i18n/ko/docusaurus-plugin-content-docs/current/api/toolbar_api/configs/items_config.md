---
sidebar_label: items
title: items Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 Toolbar의 items config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List 무료 30일 평가판을 다운로드하세요.
---

# items

### 설명 {#description}

@short: 선택 사항. To Do List의 toolbar에 표시할 컨트롤을 지정합니다

### 사용법 {#usage}

~~~js
items?: [
    "combo",
    "search",
    "menu",
    "undo",
    "redo"
    custom_control // string or function
];
~~~

### 기본 설정 {#default-config}

~~~js
items: ["combo", "search", "menu"]
~~~

### 매개변수 {#parameters}

`items` 배열에는 다음 파라미터를 포함할 수 있습니다:

- `"combo"` - 프로젝트를 선택하는 콤보 컨트롤
- `"search"` - 검색 바
- `"menu"` - 다음 작업을 수행할 수 있는 옵션 메뉴:
    - 아래 기준으로 작업을 오름차순/내림차순으로 정렬: 
        - 텍스트 기준
        - 마감일 기준
        - 완료일 기준
        - 생성일 기준
        - 수정일 기준
    - 완료된 작업 숨기기/표시
    - 새 프로젝트 추가, 현재 활성 프로젝트 이름 변경 또는 삭제
- `"undo"` - 마지막 작업을 되돌리는 컨트롤
- `"redo"` - undo로 되돌린 작업을 다시 실행하는 컨트롤
- `"custom_item"` - 문자열 또는 함수로 지정하는 커스텀 컨트롤

:::tip
`items` 배열에 원하는 순서로 요소를 나열하여 toolbar의 구조를 직접 정의할 수 있습니다
:::

### 예제 {#example}

~~~js {12-19}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: [
        `<div style="font-weight:500;font-size:18px;padding:0 10px; width: 100%">Logo<div/>`,
        "search",
        "menu",
        "undo",
        "redo",
        `<div style="margin-left: auto; padding-left: 10px;"><button class="g-btn g-btn--sm">Custom button</button></div>`,
    ]
});
~~~

**변경 로그:** `"undo"` 및 `"redo"` 파라미터는 v1.3에서 추가되었습니다

**관련 문서:**
- [구성](guides/configuration.md#toolbar)
- [커스터마이즈](guides/customization.md#customize-the-toolbar)
