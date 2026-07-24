---
sidebar_label: updateProject()
title: updateProject 메서드
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 updateProject 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# updateProject()

### 설명 {#description}

@short: 프로젝트의 구성 매개변수를 업데이트합니다

### 사용법 {#usage}

~~~js
updateProject({
    id: string | number,
    project: object
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 업데이트할 프로젝트의 ID
- `project` - (필수) 업데이트할 프로젝트 매개변수의 해시를 포함하는 객체:
  - `label` - (선택) 프로젝트 이름

### 예제 {#example}

~~~js {16-21}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 프로젝트의 일부 구성 업데이트
list.updateProject({
    id: "second",
    project: {
        label: "Project 2"
    }
});
~~~

**관련 문서:** [프로젝트 조작](guides/project_operations.md)
