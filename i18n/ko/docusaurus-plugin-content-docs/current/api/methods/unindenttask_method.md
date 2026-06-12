---
sidebar_label: unindentTask()
title: unindentTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 unindentTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# unindentTask()

### 설명 {#description}

@short: 인접 작업에 따라 작업의 중첩 수준을 한 단계 위로 올립니다

### 사용법 {#usage}

~~~js
unindentTask({
    id: string | number
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 작업의 id

### 예시 {#example}

~~~js {17-19,21} title="예시 1. 단일 작업의 중첩 수준 올리기"
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

// 작업의 중첩 수준 올리기
list.unindentTask({ 
    id: "1.2",
});

console.log(list.getParentIds({ id: "1.2" })); //  []
~~~

~~~js title="예시 2. 여러 작업의 중첩 수준 올리기"
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
    selected: ["1.1", "2.2"],
});

// 선택된 작업의 중첩 수준 올리기
list.eachSelected(id => {
    list.unindentTask({ id });
}, true);
~~~

**관련 문서:**
- [작업 조작](guides/task_operations.md)
- [다중 선택 및 일괄 작업](guides/multiselection.md)
