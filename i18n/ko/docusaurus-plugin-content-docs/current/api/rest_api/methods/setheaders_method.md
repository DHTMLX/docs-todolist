---
sidebar_label: setHeaders()
title: setHeaders 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 RestDataProvider의 setHeaders 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX To Do List의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# setHeaders()

### 설명 {#description}

@short: RestDataProvider의 모든 요청에 추가되는 커스텀 헤더를 설정합니다

:::info
`setHeaders()`에 전달된 헤더는 기본 `Content-Type: application/json` 헤더와 병합되어 각 요청과 함께 전송됩니다. 이 메서드는 주로 멀티유저 백엔드에서 인증 토큰(예: `Remote-Token` 헤더)을 전달할 때 사용됩니다.
:::

### 사용법 {#usage}

~~~js
setHeaders(headers: object): void;
~~~

### 파라미터 {#parameters}

| 이름       | 타입        | 설명 |
| ----------- | ----------- | ----------- |
| `headers`   |  object     | *필수*. 모든 요청에 추가될 커스텀 헤더 객체 |

### 예제 {#example}

~~~js {7-9}
const { RestDataProvider } = todo;

const url = "https://some_backend_url";

login(url).then(token => {
    const restProvider = new RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
    // ... To Do List를 초기화하고 provider를 연결합니다
});
~~~

---

**관련 문서**: [서버와 함께 작업하기](guides/working_with_server.md#multiuser-backend)
