---
sidebar_label: id
title: id Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 id config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# id

### 설명 {#description}

@short: 선택 사항. To Do List의 ID

:::info
자동으로 생성되며, Toolbar 등 컴포넌트 각 부분의 올바른 동작을 보장합니다
:::

### 사용법 {#usage}

~~~js
id?: string | number;
~~~

### 예제 {#example}

~~~js {9}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// To do list 생성
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    id: "root"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~
