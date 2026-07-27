---
sidebar_label: collapseTask()
title: collapseTask Method
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 collapseTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# collapseTask()

### 설명 {#description}

@short: id로 태스크를 접습니다

### 사용법 {#usage}

~~~js
collapseTask({
    id: string | number
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 접을 태스크의 id

### 예제 {#example}

~~~js {17-19}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 태스크 접기
list.collapseTask({ 
    id: "1",
});
~~~

**관련 문서:** [태스크 관련 작업](guides/task_operations.md)
