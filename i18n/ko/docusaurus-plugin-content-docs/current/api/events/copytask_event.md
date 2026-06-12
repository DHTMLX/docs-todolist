---
sidebar_label: copy-task
title: copy-task Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 copy-task 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX To Do List 무료 30일 평가판을 다운로드하세요.
---

# copy-task

### 설명 {#description}

@short: 태스크가 클립보드에 복사될 때 발생합니다

### 사용법 {#usage}

~~~js
"copy-task": ({
    id: string | number,
    join?: boolean,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}) => void;
~~~

### 매개변수 {#parameters}

`copy-task` 이벤트의 콜백은 다음 매개변수를 가진 객체를 받습니다:

- `id` - (필수) 태스크의 ID
- `join` - (선택) 태스크가 복사된 모드를 정의합니다:
    - `true` - 다중 복사 모드
    - `false` - 단일 복사 모드

복사된 태스크가 클립보드에서 다른 위치로 붙여넣기 되는 경우, 객체는 *네 가지 추가* 매개변수를 받을 수 있습니다:

- `parent` - (선택) 부모 태스크의 ID
- `project` - (선택) 프로젝트의 ID
- `targetId` - (선택) 복사된 태스크가 붙여넣기 되는 대상 태스크의 ID
- `reverse` - (선택) 복사된 태스크가 대상 태스크 앞에 붙여넣기 되면 `true`, 그렇지 않으면 `false`

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

// "copy-task" 이벤트 구독
list.api.on("copy-task", ({id}) => {
    console.log("The", id, "task is copied"); 
});
~~~ 

**변경 사항:** `join` 매개변수가 v1.1에서 추가됨

**관련 문서:** [태스크 작업](guides/task_operations.md#copyingpasting-a-task)
