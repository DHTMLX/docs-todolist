---
sidebar_label: PUT /tasks
title: PUT /tasks
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 PUT /tasks 라우트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# PUT `/tasks`

### 설명 {#description}

@short: 지정된 작업의 데이터를 업데이트하고 빈 json 객체를 반환합니다

이 라우트는 `/tasks/{id}` 경로로 전송된 PUT 요청을 처리합니다.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 메서드</th>
<th style="width:25%">라우트</th>
<th style="width:25%">쿼리 파라미터</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/tasks</td>
<td>id</td>
</tr>
</tbody>
</table>

### 쿼리 파라미터 {#query-parameters}

요청 라인에 전송되는 쿼리 파라미터:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 업데이트할 작업의 ID입니다.|

### 페이로드 {#payload}

서버는 변경되지 않은 속성과 새로 추가되거나 수정된 속성을 모두 포함한 모든 작업 속성이 담긴 json 객체를 수신해야 합니다.

예시:

~~~json
{
    "text": "You can assign task performers and due dates using the menu.",
    "checked": true,
    "due_date": "2033-03-08T21:00:00Z",
    "creation_date": "2022-10-31T13:35:10.941583462+03:00",
    "project": 1,
    "assigned": [1, 2, 3, 4],
    "completion_date": "2022-10-31T10:45:20.142Z",
    "parent": 1,
}
~~~

작업 객체의 다른 예시는 [`tasks`](api/configs/tasks_config.md) 섹션에서 확인할 수 있습니다.

하나의 요청으로 여러 작업을 업데이트하려면 요청 본문의 `batch` 객체에 필요한 변경 사항이 포함된 작업 객체 배열을 추가해야 합니다.<br> 이 경우 요청 라인의 작업 ID도 필수이며, 요청 본문에서 `batch` 객체 앞에 오는 모든 작업 파라미터가 포함되어야 합니다.

예시:

~~~json
{
    "text": "Greetings, everyone! 👋 \nI'm DHTMLX To Do List.",
    "checked": false,
    "creation_date": "2022-10-31T13:35:10.941342305+03:00",
    "project": 1,
    "due_date": "2022-10-07T21:00:00.000Z",
    "parent": 0,
    "batch": [
        {
            "text": "Select this task and then press Enter to create the task below 👇",
            "checked": false,
            "creation_date": "2022-10-31T13:35:10.941583979+03:00",
            "project": 1,
            "due_date": "2022-10-07T21:00:00.000Z",
            "parent": 0
        },
        {
            "text": "If you press Tab, this task will become a subtask. To edit it, press Ctrl (Cmd) + Enter.",
            "checked": false,
            "creation_date": "2022-10-31T13:35:10.941644198+03:00",
            "project": 1,
            "assigned": [4],
            "due_date": "2022-10-07T21:00:00.000Z",
            "parent": 0
        }
    ]
}
~~~

### 응답 {#response}
  
성공 상태인 경우 빈 json 객체가 반환됩니다.

HTTP 상태 코드는 요청의 성공 여부(response.status == 200) 또는 실패 여부(response.status == 500)를 나타냅니다.

---

**관련 문서**:

- [updateTask()](api/methods/updatetask_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [서버와 함께 작업하기](guides/working_with_server.md)
