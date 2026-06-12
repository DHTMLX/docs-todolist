---
sidebar_label: setConfig()
title: setConfig Method
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 Toolbar의 setConfig 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List 무료 30일 평가판을 다운로드하세요.
---

# setConfig()

### 설명 {#description}

@short: Toolbar 컴포넌트의 설정을 지정합니다


### 사용법 {#usage}

~~~js
setConfig(config: object): void;
~~~

### 파라미터 {#parameters}

- `config` - (필수) Toolbar 설정이 담긴 객체. 전체 속성 목록은 [여기](category/toolbar-properties.md)에서 확인하세요

### 예제 {#example}

~~~js {13-15}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

toolbar.setConfig({
    items: ["combo", "menu"]
});
~~~
