---
sidebar_label: close-menu
title: close-menu Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 close-menu 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX To Do List 무료 30일 평가판을 다운로드하세요.
---

# close-menu

### 설명 {#description}

@short: 메뉴를 닫을 때 발생합니다

### 사용법 {#usage}

~~~js
"close-menu": ({
    id: string | number;
    type: "task" | "user" | "toolbar";
});
~~~

### 매개변수 {#parameters}

`close-menu` 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `id` - (필수) 메뉴가 닫히는 항목의 ID
- `type` - (필수) 메뉴의 유형

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

// "close-menu" 이벤트 구독
list.api.on("close-menu", ({id, type}) => {
    console.log("The menu is closed", id, type); 
});
~~~

**변경 사항**: v1.1에서 추가됨
