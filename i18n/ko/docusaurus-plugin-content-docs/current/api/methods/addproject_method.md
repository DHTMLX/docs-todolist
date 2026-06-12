---
sidebar_label: addProject()
title: addProject Method
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 addProject 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# addProject()

### 설명 {#description}

@short: 새 프로젝트를 추가합니다

### 사용법 {#usage}

~~~js
addProject({
    id?: string | number,
    project?: object
}): void;
~~~

### 파라미터 {#parameters}

- `id` - (선택) 새 프로젝트의 ID
- `project` - (선택) 프로젝트의 파라미터를 담은 객체:
  - `label` - (선택) 프로젝트 이름을 나타내는 문자열

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

// 새 프로젝트 추가
list.addProject({
    id: "fourth",
    project: {
        label: "Fourth project"
    }
});
~~~

**관련 문서:** [프로젝트 관련 작업](guides/project_operations.md)
