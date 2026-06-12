---
sidebar_label: history 
title: history Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 history config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# history

### 설명 {#description}

@short: 선택 사항. 변경 이력 관리를 활성화/비활성화합니다

:::info
`history` 속성을 사용하여 To Do List의 변경 이력 관리를 활성화하거나 비활성화할 수 있습니다. `history` 속성을 `false`로 설정하면 [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) 메서드와 Toolbar의 컨트롤을 사용하여 변경 이력을 관리할 수 없게 됩니다.
:::

### 사용법 {#usage}

~~~js
history?: boolean; 
// or 
history?: { 
    projects?: boolean, 
    limit?: number 
};
~~~

### 파라미터 {#parameters}

`history` 속성을 구성하려면 **간단한** 방식 또는 **확장** 방식을 사용할 수 있습니다:

**간단한** 방식:

- `history` - (선택 사항) To Do List의 변경 이력 관리를 활성화/비활성화합니다

**확장** 방식:
- `history` - (선택 사항) 변경 이력을 구성하는 확장 설정 객체. 다음 파라미터를 지정할 수 있습니다:
    - `projects` - (선택 사항) 이력 분기 기능을 활성화/비활성화합니다

    :::info
    `projects` 파라미터를 `true`로 설정하면 각 프로젝트별로 변경 이력을 개별적으로 관리할 수 있습니다. 그렇지 않으면 앱 전체에 대한 변경 이력을 관리합니다.
    :::

    - `limit` - (선택 사항) 이력 작업의 수를 제한합니다

### 기본 config {#default-config}

~~~jsx {}
history: true
~~~

### 예제 {#example}

~~~js {9}
const { ToDo } = todo;
const { tasks, users, projects } = getData();

// To Do List 생성
new ToDo("#root", {
    tasks,
    users,
    projects,
    history: { projects: false, limit: 20 }
});
~~~

**변경 이력**: `history` config는 v1.3에서 추가되었습니다

**관련 API**:
    - [`redo`](api/methods/redo_method.md)
    - [`undo`](api/methods/undo_method.md)
