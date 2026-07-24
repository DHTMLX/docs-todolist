---
sidebar_label: expandTask()
title: expandTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 expandTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수 있습니다.
---

# expandTask()

### 설명 {#description}

@short: 지정한 id의 접힌 작업을 펼칩니다

### 사용법 {#usage}

~~~js
expandTask({
    id: string | number
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 펼칠 작업의 id

### 예제 {#example}

~~~js {17-19,22-24}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 작업 접기
list.collapseTask({ 
    id: "1.1",
});

// 접힌 작업 펼치기
list.expandTask({ 
    id: "1.1",
});
~~~

**관련 문서:** [작업 관련 연산](guides/task_operations.md)
