---
sidebar_label: edit-item
title: edit-item Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 edit-item 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX To Do List 무료 30일 평가판을 다운로드하세요.
---

# edit-item

### 설명 {#description}

@short: 인라인 편집기를 통해 태스크/프로젝트의 값이 편집될 때 발생합니다

### 사용법 {#usage}

~~~js
"edit-item": ({
    id: string | number,
    currentValue: string
}) => void;
~~~

### 매개변수 {#parameters}

`edit-item` 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `id` - (필수) 태스크/프로젝트의 ID
- `currentValue` - (필수) 태스크/프로젝트의 현재(저장되지 않은) 값

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

// "edit-item" 이벤트 구독
list.api.on("edit-item", ({id, currentValue}) => {
    console.log("The current value of the", id, "item is", currentValue); 
});
~~~

**관련 문서**: [인라인 편집](guides/inline_editing.md)
