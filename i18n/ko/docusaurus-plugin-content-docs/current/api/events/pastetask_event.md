---
sidebar_label: paste-task
title: paste-task Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 paste-task event에 대해 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# paste-task

### 설명 {#description}

@short: 클립보드에서 지정된 위치로 task가 붙여넣기될 때 발생합니다

### 사용법 {#usage}

~~~js
"paste-task": ({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}) => void;
~~~

### 매개변수 {#parameters}

`paste-task` event의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `parent` - (선택) 상위 task의 ID
- `project` - (선택) 프로젝트의 ID
- `targetId` - (선택) task가 붙여넣기될 대상 task의 ID
- `reverse` - (선택) task가 대상 task 앞에 붙여넣기되면 `true`, 그렇지 않으면 `false`

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

// "paste-task" event 구독
list.api.on("paste-task", (obj) => {
    console.log("The task is pasted", obj); 
});
~~~ 

**관련 문서**: [Task 작업](guides/task_operations.md#copyingpasting-a-task)
