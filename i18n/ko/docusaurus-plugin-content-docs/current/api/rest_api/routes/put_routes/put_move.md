---
sidebar_label: PUT /move
title: PUT /move
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 PUT /move 라우트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# PUT `/move`

### 설명 {#description}

@short: 작업을 지정된 위치로 이동하고 빈 json 객체를 반환합니다

이 라우트는 `/move/{id}` 경로로 전송된 PUT 요청을 처리합니다.
사용 가능한 작업에 대한 자세한 내용은 요청 본문에 전송되는 `operation` 속성 설명을 참조하십시오(아래 **페이로드** 섹션 참조).

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 메서드</th>
<th style="width:25%">라우트</th>
<th style="width:25%">쿼리 파라미터</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/move</td>
<td>id</td>
</tr>
</tbody>
</table>

### 쿼리 파라미터 {#query-parameters}

쿼리 파라미터는 요청 라인에 전송됩니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 이동할 작업의 ID입니다. 여러 작업을 이동하는 경우 id를 0으로 설정해야 합니다. |

:::info
여러 작업을 이동할 때는 `id`를 0으로 설정해야 합니다. 그렇지 않고 다른 값으로 설정하면 해당 id 값을 가진 작업 하나만 이동됩니다.
:::

### 페이로드 {#payload}

서버는 다음 속성들을 포함한 json 객체를 수신할 것으로 예상합니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       | number      |*선택 사항*. 이동된 작업의 ID입니다. `indent`/`unindent` 작업 유형에는 이 파라미터가 필수입니다.|
| `parent`   |  number     | *선택 사항*. 부모 작업의 ID입니다.|
| `project`  |  number     | *선택 사항*. 작업이 속한 프로젝트의 ID입니다.|
| `targetId` |  number     | *선택 사항*. 이동된 작업이 붙여넣기될 대상 작업의 ID입니다.|
| `operation`|  string     | *필수*. 서버 전용 파라미터입니다. 작업 유형을 나타냅니다. 사용 가능한 작업 유형: "null" - 현재 프로젝트 내 지정된 위치로 작업을 이동합니다([`"move-task"`](api/methods/movetask_method.md) 참조), [`"indent"`](api/methods/indenttask_method.md), [`"unindent"`](api/methods/unindenttask_method.md), `"project"` - 작업을 다른 프로젝트로 이동합니다([`"move-task"`](api/methods/movetask_method.md) 참조).<br/>한 프로젝트 내에서 작업이 이동되는 경우(operation === null), 페이로드에서 operation 속성은 필수가 아닙니다.|
| `reverse`       | boolean   | *선택 사항*. 작업이 이동될 위치: 대상 작업 앞(true) 또는 뒤(기본값 false).|
| `batch`       |  object  | *필수*. 이동되는 모든 작업의 ID 배열입니다. 작업에 하위 항목이 있는 경우 작업 부모 ID만 객체에 포함됩니다.|

예시:

~~~json
{
  "id": 5,
  "targetId": 2,
  "reverse": false,
  "operation": null,
  "batch": null
}
~~~

다양한 작업 유형 예시:

<details>
  <summary>operation === null </summary>
  현재 프로젝트 내에서 하나의 작업을 이동하는 경우, 해당 ID는 요청 라인에 전송되고 다른 속성들은 요청 본문에 전송됩니다.<br/> 한 프로젝트 내에서 작업이 이동되는 경우, operation 속성은 페이로드에서 필수가 아닙니다.

  페이로드 예시:

~~~json
{
  "targetId": 1,
  "reverse": true,
  "batch": null
}
~~~

동일한 프로젝트 내에서 여러 작업을 이동하려면:
- 요청 라인에서 작업 ID 값을 0으로 설정합니다
- 요청 본문에 이동할 작업들의 ID를 포함한 `batch` 속성을 추가합니다
- 요청 본문에 기타 필요한 속성들을 추가합니다

페이로드 예시:

~~~json
{
  "targetId": 1,
  "reverse": true,
  "batch": [1, 2, 3]
}
~~~
</details>  

<details>
  <summary>operation === "indent" || operation === "unindent" </summary>
   하나의 `indent/unindent` 작업에 대한 요청을 보내는 경우, 작업 ID는 요청 라인에 전송되고 다른 작업 속성들은 요청 본문에 전송됩니다.

   예시:

    ~~~json
    {
      "parent": 2,
      "targetId": 2,
      "operation": "indent"
    }
    ~~~
</details>
  
<details>
  <summary>다중 indent/unindent 작업</summary>

여러 작업을 들여쓰기하거나 내어쓰기하는 요청을 보내는 경우, 요청 라인의 `ID` 값은 0으로 설정되며, 각 작업 ID와 다른 파라미터들은 `opbatch` 작업 객체 배열에 나열되어야 합니다.

즉, 여러 작업을 이동하려면 요청 본문의 json 객체에 작업 데이터가 포함된 `opbatch` 작업 객체 배열이 포함되어야 합니다.

예시:

~~~json
{
  "opbatch": [
    {
      "id": 1,
      "parent": 3,
      "targetId": 3,
      "operation": "indent"
    },
    {
      "id": 53,
      "parent": 3,
      "targetId": 3,
      "operation": "indent"
    }
  ]
}

~~~

</details>

<details>

<summary>operation === "project"</summary>

  하나의 작업을 다른 프로젝트로 이동하려면:

  - 요청 라인에서 쿼리 파라미터로 작업 ID를 전송합니다<br/>
    또는<br/>
    이 쿼리 파라미터를 0으로 설정하고 요청 본문의 `batch` 속성 값으로 작업 ID를 추가합니다
  - 요청 본문에서:
    - `operation` 속성 값을 `project`로 설정합니다
    - 작업이 이동될 프로젝트의 ID인 `project` 속성 값을 추가합니다
    - 요청 라인에서 ID가 0으로 설정된 경우 `batch` 속성 값으로 작업 ID를 추가합니다

  예시:

~~~json
    {
    "project": 2,
    "operation": "project",
    "batch": [3]
    }
~~~

  여러 작업을 다른 프로젝트로 이동하는 경우, 요청 라인의 `ID` 값은 0으로 설정되고, 모든 작업 ID는 `batch` 배열에 지정됩니다.<br/> 
  하위 항목이 있는 작업을 이동하는 경우, 부모의 ID만 `batch` 배열에 지정됩니다.<br/>
  `batch` 속성에는 임의의 수의 작업 ID가 포함될 수 있습니다.

  예시:

~~~json
  {
    "project": 2,
    "operation": "project",
    "batch": [3, 5, 8, 9]
  }
~~~

</details>

### 응답 {#response}

HTTP 상태 코드는 요청의 성공 여부(response.status == 200) 또는 실패 여부(response.status == 500)를 나타냅니다.

성공 상태인 경우 빈 json 객체가 반환됩니다.

---

**관련 문서:**
- [move-task](api/events/movetask_event.md)
- [send()](api/rest_api/methods/send_method.md)
- [서버와 함께 작업하기](guides/working_with_server.md)
