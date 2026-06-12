---
sidebar_label: users
title: users Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 users config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# users

### 설명 {#description}

@short: 선택 사항. 사용자 데이터를 포함하는 객체 배열을 지정합니다

### 사용법 {#usage}

~~~js
users?: [
    {
        id: string | number,
        label: string,
        avatar?: string,
        color?: string,
    },
    {...} // 추가 사용자 객체
];
~~~

### 파라미터 {#parameters}

`users` 속성은 사람 객체 배열을 나타냅니다. 각 객체는 다음 파라미터 집합을 포함합니다:

- `id` - (필수) 사람의 id
- `label` - (필수) 사람의 설명
- `avatar` - (선택 사항) 사람의 이미지 경로
- `color` - (선택 사항) 이미지가 업로드되지 않은 경우 아이콘의 색상

:::info
`color` 파라미터가 지정되지 않으면 기본 색상 세트의 색상이 적용됩니다.
:::

### 예제 {#example}

~~~js {29-40,48}
const { ToDo, Toolbar } = todo;

const tasks = [
    {
        id: "1",
        project: "books",
        // parent: null,
        text: "Read books",
        collapsed: false,
        due_date: new Date()
    },
    {
        id: "2",
        project: "books",
        parent: "1",
        text: "Don Quixote",
        assigned: [ "user_1" ],
    },
    {
        id: "3",
        project: "books",
        parent: "1",
        text: "The Great Gatsby",
        assigned: [ "user_2" ],
        checked: true,
    },
];

const users = [
    { 
        id: "user_1",
        label: "John",
        avatar: "../avatar_02.jpg" 
    },
    { 
        id: "user_2", 
        label: "Kate",
        avatar: "../avatar_03.jpg"  
    },
];

const projects = [
    { "id": "books", "label": "Books" },
];

const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**관련 문서**:
- [데이터 로드 및 저장](guides/loading_data.md)
- [작업 사용자](guides/task_users.md)
