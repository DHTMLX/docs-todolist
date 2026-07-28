---
sidebar_label: projects
title: projects Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 projects config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# projects

### 설명 {#description}

@short: 선택 사항. 목록에 설정할 프로젝트 객체 배열을 지정합니다

### 사용법 {#usage}

~~~js
projects?: [
    {
        id: string | number,
        label: string
    },
    {...} // 추가 프로젝트
];
~~~

### 매개변수 {#parameters}

`projects` 속성은 프로젝트 객체 배열을 나타냅니다. 각 객체는 다음 파라미터 집합을 포함합니다:

- `id` - (필수) 프로젝트의 id
- `label` - (필수) 프로젝트 이름. 사용 가능한 프로젝트 목록에 표시됩니다

### 예제 {#example}

~~~js {4-7,11}
const { ToDo, Toolbar } = todo;

// 프로젝트 데이터
const projects = [
    { "id": "books", "label": "Books" },
    { "id": "films", "label": "Films" },
];

// To Do List 생성
const list = new ToDo("#root", {
    projects,
    activeProject: "films"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

:::tip
기본적으로 프로젝트 객체 목록의 첫 번째 프로젝트가 활성 프로젝트로 로드됩니다. 다른 프로젝트를 활성 프로젝트로 지정하려면 [`activeProject`](api/configs/activeproject_config.md) 속성을 사용하세요
:::

**관련 문서:** 
- [데이터 로드 및 저장](guides/loading_data.md)
- [프로젝트 관리](guides/project_index.md)
