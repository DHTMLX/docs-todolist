---
sidebar_label: setAPI()
title: setAPI 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 RestDataProvider의 setAPI 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX To Do List의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# setAPI()

### 설명 {#description}

@short: 필수. To Do List 컴포넌트의 API를 RestDataProvider에 설정합니다

:::info
`setAPI()` 메서드는 RestDataProvider 메서드가 올바르게 동작하기 위해 반드시 필요합니다.
:::

### 사용법 {#usage}

~~~js
setAPI(api: IApi): void;
~~~

### 매개변수 {#parameters}

| 이름       | 타입        | 설명 |
| ----------- | ----------- | ----------- |
| `api`       |  object   | *필수*. 컴포넌트의 API 객체 |


### 예제 {#example}

~~~js {5,12,23}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
]).then(([tasks, users, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        users,
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

---

**관련 문서:** [서버와 함께 작업하기](guides/working_with_server.md)
