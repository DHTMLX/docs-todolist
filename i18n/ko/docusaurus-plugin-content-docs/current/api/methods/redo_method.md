---
sidebar_label: redo()
title: redo 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 redo 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# redo()

### 설명 {#description}

@short: undo 동작으로 되돌린 작업을 다시 실행합니다

:::info
[`history.projects`](api/configs/history_config.md) 파라미터를 `true`로 설정하면 각 프로젝트별로 변경 이력을 관리할 수 있습니다. 그렇지 않으면 앱 전체의 변경 이력을 관리합니다.
:::

### 사용법 {#usage}

~~~js
redo(): void;
~~~

### 예제 {#example}

~~~js {10,15}
const { ToDo } = todo;
const { tasks, users, projects, tags } = getData();

// To Do List 생성
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
    history: { projects: true, limit: 10 }
});

list.addTask({ task: { text: "New task 1" } });
list.undo();
list.redo();
~~~

**변경 로그:** `redo()` 메서드는 v1.3에서 추가되었습니다

**관련 API:**
    - [`history`](api/configs/history_config.md)
    - [`undo`](api/methods/undo_method.md)
