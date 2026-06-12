---
sidebar_label: getSelection()
title: getSelection 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 getSelection 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수 있습니다.
---

# getSelection()

### 설명 {#description}

@short: 선택된 작업의 ID가 담긴 배열을 가져옵니다

### 사용법 {#usage}

~~~js
getSelection({
    sorted?: boolean,
}): (string | number)[];
~~~

### 매개변수 {#parameters}

- `sorted` - (선택) `true`이면 선택된 작업의 ID를 목록에 표시되는 순서대로 정렬하고, `false`이면 정렬 없이 작업 ID를 출력합니다

### 반환값 {#returns}

이 메서드는 선택된 작업의 ID 배열을 반환합니다

### 예제 {#example}

~~~js {20,23}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.2", "1.1", "2.2", "2.1"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// sorted - 비활성화;
console.log(list.getSelection({ sorted: false })); // ["1.2", "1.1", "2.2", "2.1"]

// sorted - 활성화;
console.log(list.getSelection({ sorted: true })); // ["1.1", "1.2", "2.1", "2.2"]
~~~

**변경 로그**: `sorted` 매개변수가 v1.1에서 추가되었습니다

**관련 문서**: 
- [작업 객체/Id](guides/task_object.md)
- [다중 선택 및 일괄 연산](guides/multiselection.md)
