---
sidebar_label: getIDResolver()
title: getIDResolver 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 RestDataProvider의 getIDResolver 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX To Do List의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# getIDResolver()

### 설명 {#description}

@short: 클라이언트(임시) ID를 서버 ID와 동기화하는 함수를 반환합니다

:::info
클라이언트가 새 객체(작업 또는 프로젝트)를 생성하면 임시 ID가 부여되며, 해당 서버 ID는 RestDataProvider에 저장됩니다. `getIDResolver()`가 반환하는 함수는 클라이언트 ID를 해당 서버 ID로 매핑합니다. 이 함수는 주로 멀티유저 백엔드에서 서버 이벤트를 처리할 때 사용됩니다.
:::

### 사용법 {#usage}

~~~js
getIDResolver(): (id: string | number, type: number) => string | number;
~~~

### 반환값 {#returns}

이 메서드는 `idResolver(id, type)` 함수를 반환합니다.

- `id` - 해석할 클라이언트(임시) ID
- `type` - 모델 타입:
    - `1` - 작업 (`TaskID`)
    - `2` - 프로젝트 (`ProjID`)

이 함수는 전달된 클라이언트 ID에 해당하는 서버 ID를 반환합니다.

### 예제 {#example}

~~~js {4,7}
const { RestDataProvider } = todo;

const restProvider = new RestDataProvider(url);
const idResolver = restProvider.getIDResolver();

const TaskID = 1;
const serverId = idResolver(clientId, TaskID);
~~~

---

**관련 문서:** [서버와 함께 작업하기](guides/working_with_server.md#customize-server-events)
