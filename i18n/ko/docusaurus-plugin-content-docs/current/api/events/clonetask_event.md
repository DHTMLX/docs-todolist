---
sidebar_label: clone-task
title: clone-task 이벤트
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 clone-task 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# clone-task

### 설명 {#description}

@short: 클립보드에서 지정된 위치로 작업이 붙여넣기될 때 발생합니다

이 이벤트는 [paste-task](api/events/pastetask_event.md) 이벤트 이후에 발생합니다

### 사용법 {#usage}

~~~js
"clone-task": ({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    batch: obj[]
}) => void;
~~~

### 매개변수 {#parameters}

`clone-task` 이벤트의 콜백은 다음 매개변수를 포함한 객체를 받을 수 있습니다:

- `parent` - (선택) 상위 작업의 ID
- `project` - (선택) 프로젝트의 ID
- `targetId` - (선택) 작업이 붙여넣기된 대상 작업의 ID
- `reverse` - (선택) 대상 작업 앞에 작업이 붙여넣기된 경우 `true`, 그렇지 않으면 `false`
- `batch` - (필수) 복사 후 붙여넣기된 객체들의 배열

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

// "clone-task" 이벤트 구독
list.api.on("clone-task", (obj) => {
    console.log(obj); 
});
~~~

**관련 문서:** [작업 관련 작업](guides/task_operations.md#copyingpasting-a-task)
