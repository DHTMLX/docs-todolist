---
sidebar_label: setSort()
title: setSort 메서드
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 setSort 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# setSort()

### 설명 {#description}

@short: 활성 프로젝트의 작업을 지정한 매개변수로 정렬합니다

### 사용법 {#usage}

~~~js
setSort({
    by?: string | ((task: object) => string),
    dir?: "asc" | "desc",
    tree?: boolean
}): void;
~~~

### 매개변수 {#parameters}

- `by` - (선택) 검색 기준 ([작업 속성](api/configs/tasks_config.md#parameters)의 키 또는 문자열을 반환하는 검색 함수)
- `dir` - (선택) 정렬 방향: "asc" 또는 "desc"
- `tree` - (선택) 하위 작업에 대한 정렬을 활성화/비활성화합니다. 기본값은 `false`입니다

### 예제 {#example}

~~~js {21-25}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "a", text: "A" },
        { id: "ac", text: "C", parent: "a" },
        { id: "ad", text: "D", parent: "a" },
        { id: "aa", text: "A", parent: "a" },
        { id: "ab", text: "B", parent: "a" },
        { id: "c", text: "C" },
        { id: "d", text: "D" },
        { id: "b", text: "B" },
    ],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// "text" 매개변수를 기준으로 오름차순 정렬
list.setSort({
    by: task => task.id, // 또는 by: "text"
    dir: "asc",
    // tree: true // 트리 정렬 활성화, 기본값은 false
});
~~~

**변경 로그:** v1.1에서 추가

**관련 문서:** [작업 정렬 및 필터링](guides/sorting_filtering_tasks.md)
