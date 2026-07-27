---
sidebar_label: update-project
title: update-project Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 update-project 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# update-project

### 설명 {#description}

@short: 프로젝트가 업데이트될 때 발생합니다

### 사용법 {#usage}

~~~js
"update-project": ({
    id: string | number,
    project: object
}) => void;
~~~

### 매개변수 {#parameters}

`update-project` 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `id` - (필수) 업데이트된 프로젝트의 ID
- `project` - (필수) 업데이트된 프로젝트의 객체
    - `label` - (선택) 프로젝트의 이름

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

// "update-project" 이벤트 구독
list.api.on("update-project", ({id, project}) => {
    console.log("The label of the project with ID:", id, "is changed to", project.label);
});
~~~

**관련 문서:** [프로젝트 작업](guides/project_operations.md#updating-a-project)
