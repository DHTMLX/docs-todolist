---
sidebar_label: set-sort
title: set-sort Event
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 set-sort event에 대해 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# set-sort

### 설명 {#description}

@short: task를 정렬할 때 발생합니다

### 사용법 {#usage}

~~~js
"set-sort": ({
    by?: string | ((task: object) => string),
    dir?: "asc" | "desc",
    tree?: boolean,
}) => void;
~~~

### 매개변수 {#parameters}

`set-sort` event의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `by` - (선택) 검색 기준([task 속성](api/configs/tasks_config.md#parameters)의 키 또는 문자열을 반환하는 검색 함수)
- `dir` - (선택) 정렬 방향: "asc" 또는 "desc"
- `tree` - (선택) 하위 task에 대한 정렬 활성화 여부를 정의합니다

:::info
내부 event를 처리하려면 [**Event Bus 메서드**](category/event-bus-methods.md)를 사용할 수 있습니다.
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

// "set-sort" event 구독
list.api.on("set-sort", ({ by, dir, tree }) => {
    console.log(by, dir, tree);
});
~~~

**관련 문서**: [Task 정렬 및 필터링](guides/sorting_filtering_tasks.md)
