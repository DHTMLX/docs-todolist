---
sidebar_label: getTask()
title: getTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 getTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수 있습니다.
---

# getTask()

### 설명 {#description}

@short: 지정한 ID로 작업 객체를 가져옵니다

### 사용법 {#usage}

~~~js
getTask({ id: string | number }): object;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 작업의 ID

### 반환값 {#returns}

이 메서드는 작업 데이터가 담긴 객체를 반환합니다

### 예제 {#example}

~~~js {19}
const { ToDo, Toolbar } = todo;
const { projects, users } = getData();

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 작업의 데이터 객체 가져오기
list.getTask({ id: "1.2" }); // -> {id: '1.2', text: 'Task 1.2', parent: '1'}
~~~

**관련 문서**: [작업 객체/Id](guides/task_object.md)
