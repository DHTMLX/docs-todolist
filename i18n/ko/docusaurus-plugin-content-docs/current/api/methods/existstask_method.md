---
sidebar_label: existsTask()
title: existsTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 existsTask 메서드에 대해 알아보실 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---

# existsTask()

### 설명 {#description}

@short: 지정된 태스크가 DataStore에 존재하는지 확인합니다


### 사용법 {#usage}

~~~js
existsTask({ id: string | number }): boolean;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 태스크의 ID

### 반환값 {#returns}

태스크가 존재하면 `true`를, 그렇지 않으면 `false`를 반환합니다

### 예제 {#example}

~~~js {19-20}
const { ToDo, Toolbar } = todo;
const { users, projects } = getData();

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

// 태스크 존재 여부 확인
list.existsTask({ id: "2" }); // -> false
list.existsTask({ id: "1.2" }); // -> true
~~~

**관련 문서:** [태스크 객체/Id](guides/task_object.md)
