---
sidebar_label: eachSelected()
title: eachSelected 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 eachSelected 메서드에 대해 알아보실 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---

# eachSelected()

### 설명 {#description}

@short: 선택된 모든 태스크를 순회합니다

### 사용법 {#usage}

~~~js
eachSelected(
    callback: (id: string | number, index: number) => void,
    sorted?: boolean, // 기본값: false
    reversed?: boolean, // 기본값: false
);
~~~

### 매개변수 {#parameters}

- `callback` - (필수) 선택된 각 태스크에 대해 실행할 콜백 함수입니다. 이 함수는 두 개의 매개변수를 받습니다:
    - `id` - 선택된 태스크의 ID
    - `index` - 현재 태스크의 인덱스
- `sorted` - (선택) 목록에 표시된 순서대로 선택된 태스크의 ID를 정렬할지(`true`) 여부(`false`)를 정의합니다
- `reversed` - (선택) 선택된 태스크를 역순으로 순회할지(`true`) 여부(`false`)를 정의합니다

### 예제 {#example}

~~~js {22-24,27-29,32-34,37-39}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.2", "1.1", "2.2", "2.1"],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// sorted - 비활성화; reversed - 비활성화;
list.eachSelected(id => {
    console.log("selected id:", id); // ["1.2", "1.1", "2.2", "2.1"]
});

// sorted - 활성화; reversed - 비활성화;
list.eachSelected(id => {
    console.log("selected id:", id); // ["1.1", "1.2", "2.1", "2.2"]
}, true);

// sorted - 비활성화; reversed - 활성화;
list.eachSelected(id => {
    console.log("selected id:", id); // ["2.1", "2.2", "1.1", "1.2"]
}, false, true);

// sorted - 활성화; reversed - 활성화;
list.eachSelected(id => {
    console.log("selected id:", id); // ["2.2", "2.1", "1.2", "1.1"]
}, true, true);
~~~

**변경 로그:** v1.1에서 추가되었습니다

**관련 문서:** [다중 선택 및 일괄 작업](guides/multiselection.md)
