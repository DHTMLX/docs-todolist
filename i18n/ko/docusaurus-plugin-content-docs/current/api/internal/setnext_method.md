---
sidebar_label: api.setNext()
title: api.setNext 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 setNext 메서드에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 30일 무료 평가판도 다운로드할 수 있습니다.
---

# api.setNext()

### 설명 {#description}

@short: Event Bus 순서에 특정 동작을 추가할 수 있습니다

### 사용법 {#usage}

~~~js
api.setNext(next: any): void;
~~~

### 매개변수 {#parameters}

- `next` - (필수) **Event Bus** 순서에 포함할 동작

### 예제 {#example}

~~~js {20}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjects(),
    restProvider.getTasks(),
]).then(([tasks, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});
~~~

:::info
데이터 조작(**추가, 삭제** 등)을 수행하고 서버에 해당 요청을 전송하려면 `RestDataProvider`를 **Event Bus** 순서에 포함해야 합니다
:::
