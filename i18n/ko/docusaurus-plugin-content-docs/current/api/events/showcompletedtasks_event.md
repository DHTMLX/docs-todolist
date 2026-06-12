---
sidebar_label: show-completed-tasks
title: show-completed-tasks Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 show-completed-tasks event에 대해 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# show-completed-tasks

### 설명 {#description}

@short: To Do List가 완료된 task를 표시하는 모드로 전환될 때 발생합니다

### 사용법 {#usage}

~~~js
"show-completed-tasks": () => void;
~~~

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

// "show-completed-tasks" event 구독
list.api.on("show-completed-tasks", () => {
    console.log("The mode of showing of completed tasks is enabled"); 
});
~~~

**변경 이력**: v1.1에서 추가됨

**관련 문서**: [완료된 task 표시/숨기기](guides/hide_completed_tasks.md)
