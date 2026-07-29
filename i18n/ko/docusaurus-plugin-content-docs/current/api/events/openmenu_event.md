---
sidebar_label: open-menu
title: open-menu Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 open-menu event에 대해 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# open-menu

### 설명 {#description}

@short: 메뉴를 열 때 발생합니다

### 사용법 {#usage}

~~~js
"open-menu": ({
    id: string | number,
    type: "task" | "user" | "toolbar",
    source?: (string | number)[]
});
~~~

### 매개변수 {#parameters}

`open-menu` event의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 메뉴가 열리는 항목의 ID
- `type` - (필수) 메뉴의 유형
- `source` - (선택) 작업이 수행될 task의 ID 배열

### 예제 {#example}

~~~js
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// "open-menu" event 구독
list.api.on("open-menu", ({id, type, source}) => {
    console.log("The menu is opened", id, type, source); 
});
~~~

**변경 로그:** v1.1에서 추가
