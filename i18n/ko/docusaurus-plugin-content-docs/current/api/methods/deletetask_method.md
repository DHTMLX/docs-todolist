---
sidebar_label: deleteTask()
title: deleteTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 deleteTask 메서드에 대해 알아보실 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---

# deleteTask()

### 설명 {#description}

@short: 지정된 태스크를 DataStore에서 삭제합니다

:::note
이 메서드는 해당 태스크와 모든 하위 태스크를 함께 삭제합니다
:::

### 사용법 {#usage}

~~~js
deleteTask({
    id: string | number
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 삭제할 태스크의 ID

### 예제 {#example}

~~~js {17-19} title="예제 1. 태스크 하나 삭제하기"
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

// 태스크 삭제
list.deleteTask({ 
    id: "1.2",
});
~~~

~~~js title="예제 2. 여러 태스크 삭제하기"
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
    selected: ["1.1", "2.1"],
});

// 선택된 태스크 삭제
list.eachSelected(id => {
    list.deleteTask({ id });
}, true);
~~~

**관련 문서**:
- [태스크 작업](guides/task_operations.md)
- [다중 선택 및 일괄 작업](guides/multiselection.md)
