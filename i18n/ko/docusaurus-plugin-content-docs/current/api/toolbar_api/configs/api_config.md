---
sidebar_label: api
title: api Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 Toolbar의 api config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List 무료 30일 평가판을 다운로드하세요.
---

# api

### 설명 {#description}

@short: 필수. To Do List의 내부 API가 담긴 객체

:::info
검색 바와 Toolbar에 위치한 컨트롤이 올바르게 동작하려면 To Do List의 내부 API를 사용해야 합니다
:::

### 사용법 {#usage}

~~~js
api: object;
~~~

### 예제 {#example}

~~~js {11}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**관련 문서:**
- [초기화](guides/initialization.md)
