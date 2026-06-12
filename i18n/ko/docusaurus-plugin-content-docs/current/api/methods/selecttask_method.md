---
sidebar_label: selectTask()
title: selectTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 selectTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# selectTask()

### 설명 {#description}

@short: ID로 지정한 태스크를 선택합니다

### 사용법 {#usage}

~~~js
selectTask({
    id: string | number,
    join?: boolean // 기본값: false
}): void;
~~~

### 파라미터 {#parameters}

- `id` - (필수) 태스크의 ID
- `join` - (선택) `true`이면 이전에 선택된 태스크의 ID를 유지하면서 지정한 태스크를 선택된 태스크 컬렉션에 추가합니다

:::info
`join: false`로 메서드를 호출하면 이전에 선택된 태스크에 대해 [`unselect-task`](api/events/unselecttask_event.md) 이벤트가 발생합니다
:::

### 예제 {#example}

~~~js {10,17-20}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    selected: ["1.1"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

console.log(list.getSelection()); // -> ['1.1']

list.selectTask({ 
    id: "1.1.1",
    join: true
});

console.log(list.getSelection()); // -> ['1.1', '1.1.1']
~~~

**변경 로그**: `join` 파라미터는 v1.1에서 추가되었습니다

**관련 문서**: [다중 선택 및 일괄 작업](guides/multiselection.md)
