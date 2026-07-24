---
sidebar_label: PUT /sort
title: PUT /sort
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 PUT /sort 라우트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# PUT `/sort`

### 설명 {#description}

@short: 활성 프로젝트의 모든 작업을 지정된 파라미터로 정렬하고 빈 json 객체를 반환합니다

이 라우트는 `/sort/{id}` 경로로 전송된 PUT 요청을 처리합니다.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 메서드</th>
<th style="width:25%">라우트</th>
<th style="width:25%">쿼리 파라미터</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/sort</td>
<td>id</td>
</tr>
</tbody>
</table>

### 쿼리 파라미터 {#query-parameters}

요청 라인에 전송되는 쿼리 파라미터:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 작업이 정렬될 활성 프로젝트의 ID입니다.|

### 페이로드 {#payload}

서버는 다음 속성들을 포함한 json 객체를 수신할 것으로 예상합니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `by`       |  string     | *필수*. 정렬 기준 필드입니다.|
| `dir`      |  string     | *필수*. 정렬 방향: "asc" 또는 "desc".|

예시:

~~~json
{
    "by": "due_date",
    "dir": "asc",
}
~~~

### 응답 {#response}
  
성공 상태인 경우 빈 json 객체가 반환됩니다.
HTTP 상태 코드는 요청의 성공 여부(response.status == 200) 또는 실패 여부(response.status == 500)를 나타냅니다.

---

**관련 문서:**
- [send()](api/rest_api/methods/send_method.md)
- [setSort()](api/methods/setsort_method.md)
- [서버와 함께 작업하기](guides/working_with_server.md)
