---
sidebar_label: set-project
title: set-project Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 set-project event에 대해 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# set-project

### 설명 {#description}

@short: 활성 프로젝트를 변경할 때 발생합니다

:::info
현재 활성 프로젝트를 변경하기 위해 [setProject] 메서드를 사용할 때 event가 발생합니다.
:::

### 사용법 {#usage}

~~~js
"set-project": ({
    id: string | number
}) => void;
~~~

### 매개변수 {#parameters}

`set-project` event의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 새로 활성화된 프로젝트의 ID

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

// "set-project" event 구독
list.api.on("set-project", ({id}) => {
    console.log("The active project is changed to", id);
});
~~~

**관련 문서:** [프로젝트 작업](guides/project_operations.md#changing-the-active-project)
