---
sidebar_label: unindent-task
title: unindent-task Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 unindent-task 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# unindent-task

### 설명 {#description}

@short: 태스크의 중첩 레벨이 한 단계 올라갈 때 발생합니다

### 사용법 {#usage}

~~~js
"unindent-task": ({
    id: string | number
}) => void;
~~~

### 매개변수 {#parameters}

`unindent-task` 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `id` - (필수) 태스크의 ID

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

// "unindent-task" 이벤트 구독
list.api.on("unindent-task", ({id}) => {
    console.log("The nesting level of the", id, "task is promoted by one"); 
});
~~~ 

**관련 문서:** [태스크 작업](guides/task_operations.md#changing-the-indent-level-of-a-task)
