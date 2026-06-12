---
sidebar_label: setFilter()
title: setFilter 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 setFilter 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# setFilter()

### 설명 {#description}

@short: 활성 프로젝트 내에서 지정한 조건으로 태스크를 필터링합니다

### 사용법 {#usage}

~~~js
setFilter({
    match: string | null,
    by?: string,
    highlight?: boolean,
    strict?: boolean
}): void;
~~~

### 파라미터 {#parameters}

- `match` - (필수) 매칭할 패턴
- `by` - (선택) 검색에 사용할 `task` 객체의 파라미터. 기본값은 *text*
- `highlight` - (선택) 찾은 일치 항목을 강조 표시할지 여부를 설정합니다
- `strict` - (선택) 필터링의 *엄격* 모드를 활성화합니다. 정확히 일치하는 항목만 검색합니다

:::info
필터링을 초기화하려면 메서드에 `match: null`을 전달하세요
:::

### 예제 {#example}

~~~js {13-16,19}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

// To Do List 생성
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});

// 지정한 규칙으로 데이터 필터링
list.setFilter({
    match: "ran",
    highlight: true
});

// 필터링 초기화
list.setFilter({ match: null });
~~~

**관련 문서:** [태스크 정렬 및 필터링](guides/sorting_filtering_tasks.md)
