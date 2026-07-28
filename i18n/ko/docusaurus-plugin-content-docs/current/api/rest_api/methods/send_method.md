---
sidebar_label: send()
title: send 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 RestDataProvider의 send 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX To Do List의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# send()

### 설명 {#description}

@short: 서버에 필요한 HTTP 요청을 전송하고, 요청에 따라 데이터 유무와 관계없이 promise를 반환합니다

서버에 대한 모든 요청은 [`RestDataProvider`](guides/working_with_server.md#restdataprovider) 서비스의 일부인 `send()` 메서드를 통해 이루어집니다.


### 사용법 {#usage}

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): Promise<obj[]>
~~~

### 매개변수 {#parameters}


| 이름       | 타입        | 설명 |
| ----------- | ----------- | ----------- |
| `url`         |  string     | *필수*. 요청을 전송할 서버 경로입니다.            |
| `method`            |string             | *필수*. HTTP 메서드 타입(Get, Post, Put, Delete)입니다.            |
| `data`  | object        | *선택*. 서버로 전송될 파라미터입니다. 기본적으로 발생한 이벤트의 파라미터가 전송됩니다. 커스텀 객체를 통해 추가 파라미터를 자유롭게 더할 수 있습니다. 아래 [예제](#examples)를 참고하세요. |
| `headers`  |object       | *선택*. 기본 헤더는 *application/json*으로 설정된 `Content-Type` 헤더입니다. `customHeaders` 파라미터를 사용해 추가 헤더를 더할 수 있습니다. 아래 [예제](#examples)를 참고하세요. |

### 응답 {#response}

이 메서드는 요청에 따라 데이터 유무와 관계없이 promise 객체를 반환합니다.

요청이 성공하면 promise가 반환됩니다. 요청이 실패한 경우(response.status == 500)에는 오류 텍스트와 함께 예외가 발생합니다.

반환값을 설정할 수 있습니다. 실패한 요청에 대한 응답을 처리하려면 반환된 promise의 `catch` 메서드를 사용하세요.

~~~js

restDataProvider.send(url, method, data)
.then(data => {
   ... // 성공: 데이터 처리
})
.catch(err => {
    ... // 오류 핸들러
});

~~~

### 예제 {#examples}

아래 예제는 기본 파라미터 외에 추가 파라미터를 포함하여 요청을 전송하는 방법을 보여줍니다.

~~~js {20-25}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getProjects(),
]).then(([tasks, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.on("set-project", obj => {
    obj.custom = "custom event";
    restDataProvider.send(`tasks/projects/0`, "GET", obj).then(data => {
        list.api.parse({ tasks: data });
        return Promise.resolve();
    });
});

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});

~~~

다음 예제는 `send` 메서드에 추가 헤더를 더하는 방법을 보여줍니다.

~~~js
const customHeaders = {
     "Authorization": "Bearer",
    "Custom header": "some value",
};

list.api.on("add-task", obj => {
    restDataProvider.send("tasks", "POST", obj, customHeaders);
});
~~~

또는 아래와 같이 RestDataProvider를 재정의하는 방법으로 헤더를 추가할 수 있습니다. 이 방식을 사용하면 서버로 전송하는 데이터를 더욱 세밀하게 제어할 수 있습니다.

~~~js {6-11}
const { ToDo, Toolbar, RestDataProvider } = todo;
...
// ToDo 초기화
...

class MyDataProvider extends RestDataProvider {
  send(url, method, data, headers) {
      headers = { ...headers, "SomeToken": "abc" };
      return super.send(url, method, data, headers);
  }
}

const myProvider = new MyDataProvider(url);
list.api.setNext(myProvider);
myProvider.setAPI(list.api);
~~~ 
---

**관련 문서:** [서버와 함께 작업하기](guides/working_with_server.md)
