---
sidebar_label: update-task
title: update-task Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 update-task 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# update-task

### 설명 {#description}

@short: 태스크가 업데이트될 때 발생합니다

### 사용법 {#usage}

~~~js
"update-task": ({
    id: string | number,
    task: object,
    skipProvider?: boolean,
    batch?: object[]
}) => void;
~~~

### 매개변수 {#parameters}

`update-task` 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `id` - (필수) 업데이트된 태스크의 ID
- `task` - (필수) 업데이트된 태스크의 객체
- [RestDataProvider](guides/working_with_server.md) 작동에 적용할 수 있는 추가 매개변수:
  - `skipProvider` - (선택) RestDataProvider로 전송되는 이벤트를 건너뛸 수 있습니다. `false (기본값)`이면 RestDataProvider가 이벤트를 처리하고, `true`이면 RestDataProvider가 이벤트를 건너뜁니다
  - `batch` - (선택) 업데이트된 태스크 객체의 배열

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](category/event-bus-methods.md)를 사용할 수 있습니다
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

// "update-task" 이벤트 구독
list.api.on("update-task", ({id, task}) => {
    console.log("The", id, "task is updated. New task object is", task);
});
~~~


**관련 문서:** [태스크 작업](guides/task_operations.md#updating-a-task)
