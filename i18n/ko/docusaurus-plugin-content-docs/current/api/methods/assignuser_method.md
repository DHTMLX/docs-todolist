---
sidebar_label: assignUser()
title: assignUser Method
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 assignUser 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# assignUser()

### 설명 {#description}

@short: 지정된 태스크에 담당자를 배정합니다

### 사용법 {#usage}

~~~js
assignUser({
    id: string | number,
    userId: string | number
}): void;
~~~

### 파라미터 {#parameters}

- `id` - (필수) 태스크의 id
- `userId` - (필수) 태스크에 배정할 담당자의 id

### 예제 {#example}

~~~js {22-25}
const { ToDo, Toolbar } = todo;

// To do list 생성
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1"},
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users: [
        { "id": "user_1", "label": "John" },
        { "id": "user_2", "label": "Kate" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 태스크에 사용자 배정
list.assignUser({
    id: "1.1",
    userId: "user_2"
});
~~~

**관련 문서**: [태스크 담당자](guides/task_users.md)
