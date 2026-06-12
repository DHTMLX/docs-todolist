---
sidebar_label: api.intercept()
title: api.intercept 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 intercept 메서드에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 30일 무료 평가판도 다운로드할 수 있습니다.
---

# api.intercept()

### 설명 {#description}

@short: 내부 이벤트를 가로채고 차단할 수 있습니다

### 사용법 {#usage}

~~~js
api.intercept(
    event: string,
    callback: function
): void;
~~~

### 매개변수 {#parameters}

- `event` - (필수) 발생시킬 이벤트
- `callback` - (필수) 실행할 callback (callback 인수는 발생시킬 이벤트에 따라 달라집니다)

### 이벤트 {#events}

:::info
To Do List 내부 이벤트의 전체 목록은 [**여기**](api/overview/events_overview.md)에서 확인할 수 있습니다
:::

### 예제 {#example}

~~~js {12-16}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// forbid removing a project with the "first" ID
list.api.intercept("delete-project", ({ id }) => {
    if(id == "first"){
        return false;
    }
});
~~~
