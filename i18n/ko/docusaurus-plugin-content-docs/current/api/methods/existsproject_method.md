---
sidebar_label: existsProject()
title: existsProject 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 existsProject 메서드에 대해 알아보실 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---

# existsProject()

### 설명 {#description}

@short: 지정된 프로젝트가 DataStore에 존재하는지 확인합니다


### 사용법 {#usage}

~~~js
existsProject({ id: string | number }): boolean;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 프로젝트의 ID

### 반환값 {#returns}

프로젝트가 존재하면 `true`를, 그렇지 않으면 `false`를 반환합니다

### 예제 {#example}

~~~js {16-17}
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

// 프로젝트 존재 여부 확인
list.existsProject({ id: 1 }); // -> false
list.existsProject({ id: "first" }); // -> true
~~~

**관련 문서**: [프로젝트 객체](guides/project_object_operations.md)
