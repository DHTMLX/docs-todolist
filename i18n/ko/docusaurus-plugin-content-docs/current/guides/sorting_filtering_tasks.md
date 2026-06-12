---
sidebar_label: 작업 정렬 및 필터링
title: 작업 정렬 및 필터링
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 작업 정렬 및 필터링에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---

# 작업 정렬 및 필터링

## 작업 정렬 {#sorting-tasks}

초기화 후 다음 두 가지 방법 중 하나로 작업을 정렬할 수 있습니다.

- [Toolbar 메뉴](/#toolbar)의 **Sort by** 옵션 사용 — *텍스트*, *마감일*, *완료일*, *생성일* 또는 *수정일* 기준으로 작업 정렬
- [`setSort()`](api/methods/setsort_method.md) 메서드 사용 — 커스텀 정렬 함수를 지정하거나 [작업 속성](api/configs/tasks_config.md#parameters) 기준으로 정렬

아래 예제는 작업을 id 기준으로 오름차순 정렬합니다.

~~~js
list.setSort({
    by: task => task.id, // or by: "text"
    dir: "asc",
    // tree: true // enable tree sort, false by default
});
~~~

## 작업 필터링 {#filter-tasks}

다음 두 가지 방법 중 하나로 작업을 필터링할 수 있습니다.

- Toolbar의 [검색 표시줄](/#toolbar) 사용
- [`setFilter()`](api/methods/setfilter_method.md) 메서드 사용 — 정확히 일치하는 항목만 찾는 *strict* 모드 지원

아래 코드는 strict 모드에서 특정 해시태그로 작업을 필터링합니다.

~~~js
// filter data by the specified rules
list.setFilter({
    match: "#tag1",
    highlight: true,
    strict: true
});
~~~

필터링을 초기화하려면 `match: null`을 전달합니다.

~~~js
// reset filtering
list.setFilter({ match: null });
~~~
