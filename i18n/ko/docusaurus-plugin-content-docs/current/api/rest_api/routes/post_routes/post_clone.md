---
sidebar_label: POST /clone
title: POST /clone
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 POST /clone 라우트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# POST `/clone`

### 설명 {#description}

@short: 작업의 복사본을 생성하고 클라이언트 작업 ID와 서버의 복제된 작업 ID가 담긴 json 객체를 반환합니다

이 라우트는 `/clone` 경로로 전송된 POST 요청을 처리합니다.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 메서드</th>
<th style="width:25%">라우트</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/clone</td>
</tr>
</tbody>
</table>

요청이 수신되면 서버 측에서 다음 항목들이 생성됩니다:

- 복제할 작업들의 복사본
- 복제되는 각 작업에 대한 *클라이언트 작업 ID: 복제된 작업 ID* 쌍의 맵

### 페이로드 {#payload}

서버는 다음 속성들을 포함한 json 객체를 수신해야 합니다:

| 이름       | 타입        | 설명 |
| ----------- | ----------- | ----------- |
| `targetId`       |  number   | *선택 사항*. 복제된 작업이 추가될 대상 작업의 ID입니다.|
| `parent`       |  number   | *선택 사항*. 부모 작업의 ID입니다.|
| `project`       |  number   | *선택 사항*. 새 작업이 추가될 프로젝트의 ID입니다.|
| `batch`       |  object | *필수*. 복제되는 모든 작업의 객체 배열입니다. 작업에 하위 항목이 있는 경우 해당 항목도 객체에 포함되어야 합니다.|

요청당 동일한 부모 ID/프로젝트 ID를 가진 작업들만 처리됩니다.

예시:

~~~json
{
    "parent": null,
    "targetId": 18,
    "batch": [
        {
            "text": "If you press Tab, this task will become a subtask. To edit it, press Ctrl (Cmd) + Enter.",
            "checked": false,
            "due_date": "2022-10-07T21:00:00Z",
            "creation_date": "2022-10-31T11:20:04.171Z",
            "project": 1,
            "assigned": [4],
            "id": "temp://1667215197027",
            "parent": null
        },
        {
            "text": "You can create tasks with an infinite number of subtasks.",
            "checked": false,
            "creation_date": "2022-10-31T11:20:04.173Z",
            "project": 1,
            "assigned": [4],
            "id": "temp://1667215197028",
            "parent": null
        },
        {
            "text": "Use the Tab and Shift + Tab keys for this.",
            "checked": false,
            "creation_date": "2022-10-31T11:20:04.174Z",
            "parent": "temp://1667215197028",
            "project": 1,
            "id": "temp://1667215197029"
        }
    ]
}
~~~

### 응답 {#response}

이 라우트는 클라이언트 작업 ID와 서버의 복제된 작업 ID가 담긴 json 객체를 반환합니다.<br>
클라이언트 작업 ID는 요청에서 수신된 임시 ID이며, 값은 데이터 저장 시 생성된 새 작업 ID입니다.

예시:

~~~json
{
    //"clientId": serverId,
    "temp://1667215197027": 62,
    "temp://1667215197028": 63,
    "temp://1667215197029": 65,
    //...
}
~~~

HTTP 상태 코드는 요청의 성공 여부(response.status == 200) 또는 실패 여부(response.status == 500)를 나타냅니다.

---

**관련 문서**:
- [clone-task](api/events/clonetask_event.md)
- [copyTask()](api/methods/copytask_method.md)
- [pasteTask()](api/methods/pastetask_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [서버와 함께 작업하기](guides/working_with_server.md)
