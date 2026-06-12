---
sidebar_label: indentTask()
title: indentTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 indentTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# indentTask()

### 설명 {#description}

@short: 인접한 태스크에 따라 태스크의 중첩 수준을 한 단계 낮춥니다

### 사용법 {#usage}

~~~js
indentTask({
    id: string | number
}): void;
~~~

### 파라미터 {#parameters}

- `id` - (필수) 태스크의 id

### 예제 {#example}

~~~js {17-19} title="예제 1. 태스크 하나의 중첩 수준 낮추기"
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

// 태스크의 중첩 수준을 낮춥니다
list.indentTask({ 
    id: "1.2",
});

console.log(list.getParentIds({ id: "1.2" })); //  ['1.1', '1']
~~~

~~~js title="예제 2. 여러 태스크의 중첩 수준 낮추기"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1"},
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2" },
    ],
    selected: ["1.1", "2.2"],
});

// 선택된 태스크들의 중첩 수준을 낮춥니다
list.eachSelected(id => {
    list.indentTask({ id });
}, true);
~~~

**관련 문서**:
- [태스크 작업](guides/task_operations.md)
- [다중 선택 및 일괄 작업](guides/multiselection.md)
