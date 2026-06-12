---
sidebar_label: select-task
title: select-task Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 select-task event에 대해 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# select-task

### 설명 {#description}

@short: task를 선택할 때 발생합니다

### 사용법 {#usage}

~~~js
"select-task": ({
    id: string | number,
    join?: boolean
}) => void;
~~~

### 매개변수 {#parameters}

`select-task` event의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) task의 ID
- `join` - (선택) task가 선택된 모드를 정의합니다:
    - `true` - 다중 선택 모드
    - `false` - 단일 선택 모드

:::info
내부 event를 처리하려면 [**Event Bus 메서드**](category/event-bus-methods.md)를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// "select-task" event 구독
list.api.on("select-task", ({id, join}) => {
    console.log("The", id, "task is selected");
    console.log(join);
});
~~~

**변경 이력**: `join` 매개변수가 v1.1에서 추가됨

**관련 문서**:
- [Task 작업](guides/task_operations.md)
- [다중 선택 및 일괄 작업](guides/multiselection.md)
