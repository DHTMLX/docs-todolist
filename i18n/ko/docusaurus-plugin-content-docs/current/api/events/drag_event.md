---
sidebar_label: drag
title: drag Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 drag 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX To Do List 무료 30일 평가판을 다운로드하세요.
---

# drag

### 설명 {#description}

@short: 사용자가 태스크를 드래그할 때 발생합니다

### 사용법 {#usage}

~~~js
"drag":({
    start: string | number,
    source: (string | number)[],
    target: string | number | null,
    dropPosition: "top" | "bottom" | "in" | null
}) => void;
~~~

### 매개변수 {#parameters}

`drag` 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `start` - (필수) 드래그가 시작된 태스크의 ID
- `source` - (필수) 드래그된 태스크 ID 배열
- `target` - (필수) 잠재적 대상 태스크의 ID
- `dropPosition` - (필수) 태스크가 드롭될 대상 태스크에 대한 상대적 위치:
    - `top` - 대상 태스크 위
    - `bottom` - 대상 태스크 아래
    - `in` - 대상 태스크 위에 (자식으로)

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

// "drag" 이벤트 구독
list.api.on("drag", ({start, source, target, dropPosition}) => {
    console.log(start, source, target, dropPosition);
});
~~~

**변경 사항**: v1.1에서 추가됨

**관련 문서**: [드래그 앤 드롭](guides/configuration.md#drag-n-drop)
