---
sidebar_label: hide-completed-tasks
title: hide-completed-tasks 이벤트
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 hide-completed-tasks 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# hide-completed-tasks

### 설명 {#description}

@short: To Do List가 완료된 태스크를 숨기는 모드로 전환될 때 발생합니다

### 사용법 {#usage}

~~~js
"hide-completed-tasks": () => void;
~~~

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

// "hide-completed-tasks" 이벤트 구독
list.api.on("hide-completed-tasks", () => {
    console.log("The mode of hiding of completed tasks is enabled"); 
});
~~~

**변경 이력**: v1.1에서 추가됨

**관련 문서**: [완료된 태스크 표시/숨기기](guides/hide_completed_tasks.md)
