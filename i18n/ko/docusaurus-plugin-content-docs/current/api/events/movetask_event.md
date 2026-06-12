---
sidebar_label: move-task
title: move-task 이벤트
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 move-task 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# move-task

### 설명 {#description}

@short: 태스크를 이동할 때 발생합니다

### 사용법 {#usage}

~~~js
"move-task": ({
    id: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    operation?: "indent" | "unindent" | "project",
    batch?: (string| number)[]
}) => void;
~~~

### 매개변수 {#parameters}

`move-task` 이벤트의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 이동된 태스크의 ID
- `parent` - (선택) 부모 태스크의 ID
- `project` - (선택) 프로젝트의 ID
- `targetId` - (선택) 대상 태스크의 ID
- `reverse` - (선택) 태스크가 대상 태스크 앞에 붙여넣기 되면 `true`, 그렇지 않으면 `false`
- [RestDataProvider](guides/working_with_server.md) 작업에 적용할 수 있는 추가 매개변수:
    - `operation` - (선택) 태스크에 수행된 작업 유형; 값:
        - `indent` - 태스크 중첩 레벨을 한 단계 낮춤
        - `unindent` - 태스크 중첩 레벨을 한 단계 높임
        - `project` - 태스크를 다른 프로젝트로 이동
        - 값이 없으면 태스크가 속한 프로젝트 내에서 위치 변경을 의미합니다
    - `batch` - (선택) 작업이 수행된 태스크 ID 배열

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

// "move-task" 이벤트 구독
list.api.on("move-task", ({id}) => {
    console.log("The", id, "task is moved"); 
}); 
~~~

**관련 문서**: [태스크 작업](guides/task_operations.md#moving-a-task)
