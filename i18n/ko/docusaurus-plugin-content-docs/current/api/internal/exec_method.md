---
sidebar_label: api.exec()
title: api.exec 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 exec 메서드에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 30일 무료 평가판도 다운로드할 수 있습니다.
---

# api.exec()

### 설명 {#description}

@short: 내부 이벤트를 트리거할 수 있습니다

### 사용법 {#usage}

~~~js
api.exec(
    event: string,
    config: object
): void;
~~~

### 매개변수 {#parameters}

- `event` - (필수) 발생시킬 이벤트
- `config` - (필수) 구성 매개변수를 포함하는 객체 (발생시킬 이벤트를 참조하세요)

### 이벤트 {#events}

:::info
To Do List 내부 이벤트의 전체 목록은 [**여기**](api/overview/events_overview.md)에서 확인할 수 있습니다
:::

### 예제 {#example}

~~~js {12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// add a new project
list.api.exec("add-project", { project: { label: "New project" } });
~~~
