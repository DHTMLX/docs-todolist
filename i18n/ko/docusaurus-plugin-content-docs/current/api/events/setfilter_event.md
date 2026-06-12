---
sidebar_label: set-filter
title: set-filter Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 set-filter event에 대해 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# set-filter

### 설명 {#description}

@short: 지정된 기준으로 데이터를 필터링할 때 발생합니다

### 사용법 {#usage}

~~~js
"set-filter": ({
    match?: string | null,
    by?: string,
    highlight?: boolean,
    strict?: boolean
}) => void;
~~~

### 매개변수 {#parameters}

`set-filter` event의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `match` - (선택) 일치시킬 패턴
- `by` - (선택) 검색에 사용할 `task` 객체의 매개변수
- `highlight` - (선택) 검색된 일치 항목을 강조 표시할지 여부를 정의합니다
- `strict` - (선택) *strict* 필터링 모드가 활성화된 경우 `true`, 그렇지 않으면 `false`

:::info
내부 event를 처리하려면 [**Event Bus 메서드**](category/event-bus-methods.md)를 사용할 수 있습니다.
:::

### 예제 {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// "set-filter" event 구독
list.api.on("set-filter", (obj) => {
    console.log(obj);
});
~~~

**관련 문서**: [Task 정렬 및 필터링](guides/sorting_filtering_tasks.md)
