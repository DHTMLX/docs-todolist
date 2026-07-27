---
sidebar_label: close-inline-editor
title: close-inline-editor 이벤트
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 close-inline-editor 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# close-inline-editor

### 설명 {#description}

@short: 작업/프로젝트의 인라인 편집기를 닫을 때 발생합니다

### 사용법 {#usage}

~~~js
"close-inline-editor": ({
    id: string | number,
    save: boolean
}) => void;
~~~

### 매개변수 {#parameters}

`close-inline-editor` 이벤트의 콜백은 다음 매개변수를 포함한 객체를 받을 수 있습니다:

- `id` - (필수) 작업/프로젝트의 ID
- `save` - (필수) 편집기를 닫은 후 변경 내용이 저장된 경우 `true`, 그렇지 않으면 `false`

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](category/event-bus-methods.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~js {15-17}
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

// "close-inline-editor" 이벤트 구독
list.api.on("close-inline-editor", ({id, save}) => {
    console.log("The inline editor is closed for the", id, "item"); 
});
~~~

**관련 문서:** [인라인 편집](guides/inline_editing.md#working-with-editor)
