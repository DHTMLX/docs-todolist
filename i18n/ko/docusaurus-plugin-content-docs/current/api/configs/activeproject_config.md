---
sidebar_label: activeProject
title: activeProject Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 activeProject config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# activeProject

### 설명 {#description}

@short: 선택 사항. 활성 프로젝트의 ID

:::info
지정한 활성 프로젝트가 존재하지 않거나 To Do List에 로드된 프로젝트가 없는 경우, 컴포넌트 초기화 시 *No project* 섹션이 표시됩니다.

다음 경우에 작업은 *No project* 섹션에 속합니다:
- [루트 작업 객체](api/configs/tasks_config.md)에 `project` 파라미터가 지정되지 않은 경우
- [루트 작업 객체](api/configs/tasks_config.md)에 `project: null | undefined`가 지정된 경우
:::

### 사용법 {#usage}

~~~js
activeProject?: string | number | null;
~~~

:::info
`activeProject`가 지정되지 않고 *No project* 섹션에 속하는 작업도 없는 경우, 프로젝트 객체 목록의 첫 번째 프로젝트가 활성 프로젝트로 로드됩니다.
:::

### 예제 {#example}

~~~js {4-7,11-12}
const { ToDo, Toolbar } = todo;

// 프로젝트 데이터
const projects = [
    { "id": "books", "label": "Books" },
    { "id": "films", "label": "Films" },
];

// To do list 생성
const list = new ToDo("#root", {
    projects,
    activeProject: "films"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**관련 문서**: [프로젝트 관리](guides/project_index.md)
