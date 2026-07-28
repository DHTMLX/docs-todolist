---
sidebar_label: end-drag
title: end-drag 이벤트
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 end-drag 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# end-drag

### 설명 {#description}

@short: 태스크 드래그가 완료될 때 발생합니다

### 사용법 {#usage}

~~~js
"end-drag":({
    target: string | number | null,
    dropPosition: "top" | "bottom" | "in" | null,
    mode: "move" | "copy"
}) => void;
~~~

### 매개변수 {#parameters}

`end-drag` 이벤트의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `target` - (필수) 드래그가 완료된 태스크의 ID
- `dropPosition` - (필수) 드래그한 태스크가 놓인 위치:
    - `top` - 대상 태스크 위
    - `bottom` - 대상 태스크 아래
    - `in` - 대상 태스크 위에 겹침
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
    api: list.api
});

// "drag" 이벤트 구독
list.api.on("drag", ({ target, dropPosition, mode }) => {
    console.log(target, dropPosition, mode);
});
~~~

**변경 로그:** v1.1에서 추가

**관련 문서:** [드래그 앤 드롭](guides/configuration.md#drag-n-drop)
