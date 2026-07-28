---
sidebar_label: getTasks()
title: getTasks 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 RestDataProvider의 getTasks 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX To Do List의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# getTasks()

### 설명 {#description}

@short: 전체 작업 객체 배열을 담은 promise를 가져옵니다

:::info
`getTasks()` 메서드는 서버와의 작업을 위해 설계된 `RestDataProvider` 서비스의 일부입니다
:::

### 사용법 {#usage}

~~~js
getTasks(): Promise<obj[]>;
~~~

### 응답 {#response}

`getTasks()` 메서드는 `GET` 방식으로 서버에 요청을 전송하고, 작업 데이터를 담은 **promise**를 반환합니다.


### 예제 {#example}

~~~js {5,8}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getTasks(),
    restProvider.getProjects(),
]).then(([tasks, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});
~~~
---

**관련 문서:** [서버와 함께 작업하기](guides/working_with_server.md)
