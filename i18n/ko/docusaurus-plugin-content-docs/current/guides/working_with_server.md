---
sidebar_label: 서버 연동
title: 서버 연동
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 서버 연동에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---
# 서버 연동

DHTMLX To Do List는 클라이언트와 서버 데이터 모두와 함께 동작합니다. 위젯은 특별한 백엔드 요구 사항이 없으며 REST API를 지원하는 모든 플랫폼에 연결할 수 있습니다.

:::info
위젯에는 내장 [**Go**](https://github.com/web-widgets/todo-go) 및 [**Node**](https://github.com/web-widgets/todo-node) 백엔드가 포함되어 있습니다. 커스텀 서버 스크립트도 사용할 수 있습니다.
:::

## RestDataProvider

To Do List는 REST 백엔드와 통신하고 다음 데이터 작업을 처리하는 `RestDataProvider` 서비스를 제공합니다.

- `"add-task"` - 작업 추가
- `"update-task"` - 작업 업데이트
- `"delete-task"` - 작업 삭제
- `"add-project"` - 프로젝트 추가
- `"update-project"` - 프로젝트 업데이트
- `"delete-project"` - 프로젝트 삭제
- `"set-project"` - 활성 프로젝트 설정
- `"move-task"` - 작업 이동
- `"clone-task"` - 작업 복제

## REST 메서드 {#rest-methods}

`RestDataProvider` 서비스는 동적 데이터 로딩을 위한 다음 REST 메서드를 포함합니다.

- [`getProjects()`](api/rest_api/methods/getprojects_method.md) - **프로젝트 데이터**가 담긴 promise 반환
- [`getProjectTasks()`](api/rest_api/methods/getprojecttasks_method.md) - 지정된 `project`의 **작업 데이터**가 담긴 promise 반환
- [`getTags()`](api/rest_api/methods/gettags_method.md) - **기본 태그** 목록이 담긴 promise 반환
- [`getTasks()`](api/rest_api/methods/gettasks_method.md) - **작업 데이터**가 담긴 promise 반환
- [`getUsers()`](api/rest_api/methods/getusers_method.md) - **사용자 데이터**가 담긴 promise 반환
- [`setAPI()`](api/rest_api/methods/setapi_method.md) - To Do List 컴포넌트의 API를 RestDataProvider에 설정
- [`send()`](api/rest_api/methods/send_method.md) - 서버에 요청을 보내고 요청에 따라 데이터가 있거나 없는 promise 반환

## 백엔드와 상호작용 {#interact-with-the-backend}

서버와 상호작용하려면 `RestDataProvider`를 서버 스크립트에 연결합니다. 내장 백엔드는 다음 두 저장소에서 제공됩니다.

- [**Go**](https://github.com/web-widgets/todo-go) - Go 백엔드
- [**Node**](https://github.com/web-widgets/todo-node) - Node.js 백엔드

커스텀 백엔드를 직접 만들 수도 있습니다.

:::tip
커스텀 백엔드를 사용하는 경우 자세한 내용은 [**REST API 라우트**](api/rest_api/routes/rest_routes_overview.md) 항목을 참조하세요.
:::

`RestDataProvider`를 백엔드에 연결하려면 `new RestDataProvider()` 생성자를 호출하고 해당 **URL**을 매개변수로 전달합니다. 아래 예제는 서버에서 로드한 데이터로 To Do List를 초기화합니다.

~~~js {4-5,23-24}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "https://some_backend_url";
const restProvider = new RestDataProvider(url);
Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, users, projects, tags]) => {
    const list = new ToDo("#root", {
        tasks,
        users,
        projects,
        tags,
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
데이터 작업(추가, 삭제 등)을 수행하고 서버에 해당 요청을 전송하려면 [`api.setNext()`](api/internal/setnext_method.md) 메서드를 통해 **Event Bus** 순서에 `RestDataProvider`를 포함시킵니다.
:::

### 예제 {#example}

아래 코드는 `RestDataProvider`를 백엔드에 연결하고 서버 데이터를 동적으로 로드합니다.

<iframe src="https://snippet.dhtmlx.com/hnk06gm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 멀티유저 백엔드 {#multiuser-backend}

멀티유저 기능을 사용하면 여러 사용자가 페이지 새로 고침 없이 동일한 작업을 실시간으로 관리할 수 있습니다. 사용자들은 서로의 변경 사항을 즉시 확인할 수 있습니다.

To Do List를 초기화하기 전에 서버에서 인증합니다. 아래 예제는 `login()` 함수를 정의합니다.

~~~js
const login = (url) => {
    const token = sessionStorage.getItem("login-token");
    if (token) {
        return Promise.resolve(token);
    }
    return fetch(url + "/login?id=1")
        .then(raw => raw.text())
        .then(token => {
            sessionStorage.setItem("login-token", token);
            return token;
        });
}
~~~

`login()` 함수는 이후 서버와의 모든 상호작용에 필요한 서버 토큰을 반환합니다. 각 요청의 `Remote-Token` 헤더 값으로 토큰을 포함합니다. 아래 코드는 토큰 헤더를 설정합니다.

~~~js
login(url).then(token => {
    const restProvider = new todo.RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
~~~

초기화 후 서버에서 발생하는 이벤트를 수신하기 위해 WebSocket을 추가합니다. 아래 예제는 WebSocket과 핸들러를 설정합니다.

~~~js {14-16,18-24}
Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, users, projects, tags]) => {
    const list = new todo.ToDo("#root", {
        tasks, users, projects, tags, activeProject,
    });
    const toolbar = new todo.Toolbar("#toolbar", {
        api: list.api,
    });

    // save data from client to server
    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);

    // get updates from server to client
    const events = new todo.RemoteEvents(url + "/api/v1", token);
    const handlers = todo.todoUpdates(
        list.api,
        restProvider.getIDResolver()
    );
    events.on(handlers);
});
~~~

### 예제 {#example-multiuser}

아래 코드는 다른 사용자의 변경 사항을 실시간으로 추적하기 위한 멀티유저 백엔드를 구성합니다.

<iframe src="https://snippet.dhtmlx.com/82ayq2lk?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 서버 이벤트 커스터마이징 {#customize-server-events}

서버 이벤트 처리를 위한 로직을 직접 정의합니다. `RemoteEvents.on(handlers)` 메서드에 `handlers` 객체를 전달합니다. `handlers` 객체의 구조는 다음과 같습니다.

~~~js
{
    "tasks": tasksHandler: function(obj: any),
    "projects": projectsHandler: function(obj: any)
}
~~~

서버에서 변경이 발생하면 서버는 수정된 요소의 이름을 반환합니다. 이름은 서버 로직에 따라 다를 수 있습니다.

업데이트된 데이터는 핸들러의 `obj` 인수로 전달됩니다. `type` 필드는 작업 유형을 지정합니다.

- `tasks`의 경우: `"add-task"`, `"update-task"`, `"delete-task"`, `"move-task"`, `"clone-task"`
- `projects`의 경우: `"add-project"`, `"update-project"`, `"delete-project"`, `"set-sort"`

아래 코드는 구현 세부 사항을 보여줍니다.

~~~js
const todoInstance = new todo.ToDo("#root", config);
const restProvider = new todo.RestDataProvider(url);
const idResolver = restProvider.getIDResolver();
const TaskID = 1;
const ProjID = 2;

const resolveTask = (data: any) => {
    for (const key in obj) {
        if (typeof obj[key] == "object") {
            resolveTask(obj[key]);
            continue;
        }
        if (key == "id" || key == "targetId" || key == "parent") {
            obj[key] = idResolver(obj[key], TaskID) || null;
        }
        if (key == "project") {
            obj[key] = idResolver(obj[key], ProjID) || null;
        }
    }
    return obj;
};

const tasksHandler = (obj: any) => {
    resolveTask(obj); // synchronize client ids with the server ids
    switch (obj.type) {
        case "add-task":
            todoInstance.api.exec("add-task", {
                id: obj.data.id,
                project: obj.data.project,
                parent: obj.data.parent,
                targetId: obj.data.targetId,
                reverse: obj.data.reverse,
                task: { ...obj.data.task },
                skipProvider: true // prevent the client from sending the request to the server
            })
            break;
        // other operations
    }
};

const handlers = {
    tasks: tasksHandler
};

const remoteEvents = new todo.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

`RestDataProvider.getIDResolver()` 메서드는 클라이언트 id와 서버 id를 동기화하는 함수를 반환합니다. 클라이언트가 새 객체(작업 또는 프로젝트)를 생성하면 받은 객체에는 임시 id와 `RestDataProvider` 내의 해당 서버 id가 존재합니다. `idResolver()` 함수는 클라이언트 id와 서버 id를 동기화합니다. 이 함수의 형식은 `idResolver(id: TID, type: number)`입니다.

`type` 인수는 모델의 유형이며 다음 값을 가집니다.

- `TaskID` - `1`
- `ProjID` - `2`

서버로 요청이 전송되지 않도록 하려면 `todoInstance.api.exec()` 메서드에 `skipProvider: true` 플래그를 전달합니다.
