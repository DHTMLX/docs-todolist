---
sidebar_label: start-drag
title: start-drag Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 start-drag 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# start-drag

### 설명 {#description}

@short: 사용자가 태스크를 드래그하기 시작할 때 발생합니다

### 사용법 {#usage}

~~~js
"start-drag":({
    start: string | number,
    mode: "move" | "copy"
}) => void;
~~~

### 매개변수 {#parameters}

`start-drag` 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `start` - (필수) 드래그 작업이 시작된 태스크의 ID
- `mode` - (필수) 드래그 앤 드롭 모드:
    - `move` - 이동 모드
    - `copy` - 복사 모드

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

// "start-drag" 이벤트 구독
list.api.on("start-drag", ({ start, mode }) => {
    console.log(start, mode);
});
~~~

**변경 로그:** v1.1에서 추가

**관련 문서:** [드래그 앤 드롭](guides/configuration.md#drag-n-drop)
