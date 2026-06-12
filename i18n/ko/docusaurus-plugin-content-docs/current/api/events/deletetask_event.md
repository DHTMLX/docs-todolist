---
sidebar_label: delete-task
title: delete-task Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 delete-task 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX To Do List 무료 30일 평가판을 다운로드하세요.
---

# delete-task

### 설명 {#description}

@short: 태스크를 삭제할 때 발생합니다

### 사용법 {#usage}

~~~js
"delete-task": ({
    id: string | number,
    batch?: (string | number)[]
}) => void;
~~~

### 매개변수 {#parameters}

`delete-task` 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `id` - (필수) 삭제된 태스크의 ID
- `batch` - (선택) 일괄 작업으로 함께 삭제된 태스크 ID 배열

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

// "delete-task" 이벤트 구독
list.api.on("delete-task", ({id}) => {
    console.log("The", id, "task is removed"); 
});
~~~

**관련 문서**: [태스크 작업](guides/task_operations.md#deleting-a-task)
