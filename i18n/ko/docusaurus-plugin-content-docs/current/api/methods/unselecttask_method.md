---
sidebar_label: unselectTask()
title: unselectTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 unselectTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# unselectTask()

### 설명 {#description}

@short: 작업(들)의 선택을 해제합니다

### 사용법 {#usage}

~~~js
unselectTask({
    id: string | number | null
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 선택 해제할 작업의 id

:::info
메서드에 `id: null`을 전달하면 선택된 모든 작업의 선택이 해제되며, 각 작업에 대해 [`unselect-task`](api/events/unselecttask_event.md) 이벤트가 발생합니다
:::


### 예시 {#example}

~~~js {17,20}
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

// 작업 선택
list.selectTask({ id: "1.1"});

// 선택된 작업 선택 해제
list.unselectTask({ id: "1.1" });
~~~

**변경 로그**: `id: null`을 메서드에 전달하는 기능은 v1.1에서 추가됨

**관련 문서**: [다중 선택 및 일괄 작업](guides/multiselection.md)
