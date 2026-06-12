---
sidebar_label: add-project
title: add-project 이벤트
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 add-project 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# add-project

### 설명 {#description}

@short: 새 프로젝트를 추가할 때 발생합니다

### 사용법 {#usage}

~~~js
"add-project": ({
    id: string | number,
    project?: object
}) => void;
~~~

### 매개변수 {#parameters}

`add-project` 이벤트의 콜백은 다음 매개변수를 포함한 객체를 받을 수 있습니다:

- `id` - (필수) 생성된 프로젝트의 ID
- `project` - (선택) 프로젝트 매개변수가 담긴 객체:
  - `label` - (선택) 프로젝트 이름

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

// "add-project" 이벤트 구독
list.api.on("add-project", ({id, project}) => {
    console.log("A new ", project.label, " project with ID:", id, "is added");
});
~~~

**관련 문서**: [프로젝트 작업](guides/project_operations.md#adding-a-new-project)
