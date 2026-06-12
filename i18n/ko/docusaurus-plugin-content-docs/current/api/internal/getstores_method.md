---
sidebar_label: api.getStores()
title: api.getStores 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 getStores 메서드에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 30일 무료 평가판도 다운로드할 수 있습니다.
---

# api.getStores()

### 설명 {#description}

@short: To Do List의 DataStore 객체를 포함하는 객체를 가져옵니다

### 사용법 {#usage}

~~~js
api.getStores(): object;
~~~

### 반환값 {#returns}

이 메서드는 `DataStore`를 포함하는 객체를 반환합니다:

~~~js
state: DataStore // ( object )
~~~

### 예제 {#example}

~~~js {11-12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const stores = list.api.getStores();
console.log(stores);
~~~
