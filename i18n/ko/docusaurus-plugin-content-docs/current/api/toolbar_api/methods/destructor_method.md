---
sidebar_label: destructor()
title: destructor Method
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 Toolbar의 destructor 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List 무료 30일 평가판을 다운로드하세요.
---

# destructor()

### 설명 {#description}

@short: Toolbar의 모든 HTML 요소를 제거하고 관련 이벤트를 모두 분리합니다


### 사용법 {#usage}

~~~js
destructor(): void;
~~~


### 예제 {#example}

~~~js {13}
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

toolbar.destructor();
~~~
