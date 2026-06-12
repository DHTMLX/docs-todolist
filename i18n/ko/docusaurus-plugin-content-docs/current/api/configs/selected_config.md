---
sidebar_label: selected
title: selected Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 selected config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# selected

### 설명 {#description}

@short: 선택 사항. To Do List 초기화 시 선택 상태로 설정할 작업 ID 배열

### 사용법 {#usage}

~~~js
selected?: (string | number)[];
~~~

### 예제 {#example}

~~~js {11}
const { ToDo, Toolbar } = todo;

// To Do List 생성
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    selected: ["1.1"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**변경 이력**: v1.1에서 추가됨

**관련 문서**: [다중 선택 및 일괄 작업](guides/multiselection.md)
