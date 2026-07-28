---
sidebar_label: readonly
title: readonly Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 readonly config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# readonly

### 설명 {#description}

@short: 선택 사항. To Do List를 읽기 전용으로 설정합니다

:::tip
읽기 전용 모드를 활성화하면 툴바와 목록에서 *작업 추가* 버튼과 *점 3개* 아이콘이 숨겨집니다

*읽기 전용* 모드에서는 작업을 완료/미완료로 표시하는 것만 가능합니다
:::

### 사용법 {#usage}

~~~js
readonly?: boolean;
~~~

### 기본 설정 {#default-config}

~~~jsx {}
readonly: false // 읽기 전용 모드 비활성화
~~~

### 예제 {#example}

~~~js {9}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// To Do List 생성
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**관련 문서:** [읽기 전용 모드](guides/readonly_mode.md)
