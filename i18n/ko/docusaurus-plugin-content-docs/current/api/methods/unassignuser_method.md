---
sidebar_label: unassignUser()
title: unassignUser 메서드
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 unassignUser 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# unassignUser()

### 설명 {#description}

@short: 지정한 작업에서 담당자를 해제합니다

### 사용법 {#usage}

~~~js
unassignUser({
    id: string | number,
    userId: string | number
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 작업의 id
- `userId` - (필수) 작업에서 해제할 담당자의 id

### 예시 {#example}

~~~js {22-25}
const { ToDo, Toolbar } = todo;

// To Do List 생성
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1"},
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
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

// 작업에서 사용자 해제
list.unassignUser({
    id: "1.1",
    userId: "user_2"
});
~~~

**관련 문서**: [작업 담당자](guides/task_users.md)
