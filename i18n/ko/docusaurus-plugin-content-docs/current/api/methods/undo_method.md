---
sidebar_label: undo()
title: undo 메서드
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 undo 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# undo()

### 설명 {#description}

@short: To Do List에서 마지막 작업을 취소합니다

:::info
[`history.projects`](api/configs/history_config.md) 매개변수를 `true`로 설정하면 각 프로젝트별로 변경 이력을 관리할 수 있습니다. 그렇지 않으면 앱 전체의 변경 이력을 관리합니다.
:::

### 사용법 {#usage}

~~~js
undo(): void;
~~~

### 예제 {#example}

~~~js {10,14}
const { ToDo } = todo;
const { tasks, users, projects, tags } = getData();

// To Do List 생성
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
    history: { projects: false, limit: 10 }
});

list.addTask({ task: { text: "New task 1" } });
list.undo();
~~~

**변경 로그:** `undo()` 메서드는 v1.3에서 추가

**관련 API:**
    - [`history`](api/configs/history_config.md)
    - [`redo`](api/methods/redo_method.md)
