---
sidebar_label: GET /tasks/projects
title: GET /tasks/projects
description: DHTMLX JavaScript To Do List 라이브러리의 GET /tasks/projects 라우트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# GET `/tasks/projects`

### 설명 {#description}

@short: 지정된 프로젝트의 모든 태스크 데이터를 가져와 해당 프로젝트의 모든 태스크 객체 배열이 담긴 json 객체를 반환합니다

이 라우트는 `/tasks/projects/{id}` 경로로 전송된 GET 요청을 처리합니다.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 메서드</th>
<th style="width:25%">라우트</th>
<th style="width:25%">쿼리 파라미터</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/tasks/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### 쿼리 파라미터 {#query-parameters}

다음 파라미터는 요청 라인에 포함되어 전송됩니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  string     | *필수*. 태스크를 요청할 프로젝트의 ID입니다.|

### 페이로드 {#payload}

페이로드가 필요하지 않습니다.

### 응답 {#response}

이 라우트는 지정된 프로젝트의 모든 태스크 데이터가 담긴 배열을 포함하는 json 객체를 반환합니다.
반환되는 객체의 예시는 [`tasks`](api/configs/tasks_config.md)를 참고하세요.

HTTP 상태 코드는 요청의 성공 여부(response.status == 200) 또는 실패 여부(response.status == 500)를 나타냅니다.

---

**관련 문서**:

- [getProjectTasks()](api/rest_api/methods/getprojecttasks_method.md)
- [서버 연동하기](guides/working_with_server.md)
