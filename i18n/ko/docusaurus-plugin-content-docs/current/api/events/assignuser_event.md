---
sidebar_label: assign-user
title: assign-user 이벤트
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 assign-user 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# assign-user

### 설명 {#description}

@short: 사용자가 작업에 배정될 때 발생합니다

### 사용법 {#usage}

~~~js
"assign-user": ({
    id: string | number,
    userId: string | number
}) => void;
~~~

### 매개변수 {#parameters}

`assign-user` 이벤트의 콜백은 다음 매개변수를 포함한 객체를 받을 수 있습니다:

- `id` - (필수) 작업의 ID
- `userId` - (필수) 작업에 배정된 사용자의 ID

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

// "assign-user" 이벤트 구독
list.api.on("assign-user", ({id, userId}) => {
    console.log("The", userId, "user is assigned to the", id, "task"); 
});
~~~

**관련 문서**: [작업 사용자](guides/task_users.md)
