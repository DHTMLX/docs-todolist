---
sidebar_label: open-inline-editor
title: open-inline-editor 이벤트
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 open-inline-editor 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# open-inline-editor

### 설명 {#description}

@short: 태스크/프로젝트의 인라인 편집기가 열릴 때 발생합니다

### 사용법 {#usage}

~~~js
"open-inline-editor": ({
    id: string | number,
    type: "task" | "project"
}) => void;
~~~

### 매개변수 {#parameters}

`open-inline-editor` 이벤트의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 태스크/프로젝트의 ID
- `type` - (필수) 항목의 유형: "task" 또는 "project"

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

// "open-inline-editor" 이벤트 구독
list.api.on("open-inline-editor", ({id, type}) => {
    console.log("The inline editor is opened for the", type, "with ID:", id); 
});
~~~

**관련 문서**: [인라인 편집](guides/inline_editing.md#working-with-editor)
