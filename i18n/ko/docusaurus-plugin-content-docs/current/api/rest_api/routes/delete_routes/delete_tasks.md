---
sidebar_label: DELETE /tasks
title: DELETE /tasks
description: DHTMLX JavaScript To Do List 라이브러리의 DELETE /tasks 라우트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# DELETE `/tasks`

### 설명 {#description}

@short: 태스크 데이터를 삭제하고 빈 json 객체를 반환합니다

이 라우트는 `/tasks/{id}` 또는 `/tasks` 경로로 전송된 DELETE 요청을 처리합니다.

하나의 요청으로 하나 또는 여러 태스크를 삭제할 수 있습니다. 하위 태스크가 있는 경우, 해당 태스크들도 모두 삭제됩니다.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 메서드</th>
<th style="width:25%">라우트</th>
<th style="width:25%">쿼리 파라미터</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>DELETE</td>
<td>/tasks</td>
<td>id</td>
</tr>
</tbody>
</table>

### 쿼리 파라미터 {#query-parameters}

삭제할 태스크의 ID는 요청 라인에 포함되어 전송됩니다.

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *선택*. 삭제할 태스크의 ID입니다.|

### 페이로드 {#payload}

서버는 다음 속성이 포함된 json 객체를 수신해야 합니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `batch`    | array       | *선택*. 삭제할 태스크 ID 목록입니다.|

예시:

~~~json
{
    "batch": [1, 2, 3]
}
~~~

### 응답 {#response}

요청이 성공적으로 처리된 경우 빈 json 객체를 반환합니다.

HTTP 상태 코드는 요청의 성공 여부(response.status == 200) 또는 실패 여부(response.status == 500)를 나타냅니다.

---

**변경 이력**: `batch` 페이로드는 v1.3에서 추가되었습니다

**관련 문서**:

- [send()](api/rest_api/methods/send_method.md)
- [deleteTasks()](api/methods/deletetask_method.md)
- [서버 연동하기](guides/working_with_server.md)
