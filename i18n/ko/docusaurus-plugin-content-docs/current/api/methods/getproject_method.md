---
sidebar_label: getProject()
title: getProject 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 getProject 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수 있습니다.
---

# getProject()

### 설명 {#description}

@short: 지정한 ID로 프로젝트 객체를 가져옵니다

### 사용법 {#usage}

~~~js
getProject({ id: string | number }): object;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 프로젝트의 ID

### 반환값 {#returns}

이 메서드는 프로젝트 데이터가 담긴 객체를 반환합니다

### 예제 {#example}

~~~js {19}
const { ToDo, Toolbar } = todo;
const { tasks, users } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 프로젝트의 데이터 객체 가져오기
list.getProject({ id: "first" }); // -> {id: 'first', label: 'First project'}
~~~

**관련 문서**: [프로젝트 객체](guides/project_object_operations.md)
