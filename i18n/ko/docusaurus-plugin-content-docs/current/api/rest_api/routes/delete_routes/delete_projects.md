---
sidebar_label: DELETE /projects
title: DELETE /projects
description: DHTMLX JavaScript To Do List 라이브러리의 DELETE /projects 라우트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# DELETE `/projects`

### 설명 {#description}

@short: 프로젝트 데이터를 삭제하고 빈 json 객체를 반환합니다

:::note
프로젝트에 연결된 태스크는 삭제되지 않습니다. 해당 태스크들은 *"프로젝트 없음"* 섹션으로 이동됩니다.
:::

이 라우트는 `/projects/{id}` 경로로 전송된 DELETE 요청을 처리합니다.

요청당 하나의 프로젝트만 삭제할 수 있습니다. 프로젝트에 태스크가 있는 경우, 해당 태스크들도 모두 삭제됩니다.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 메서드</th>
<th style="width:25%">라우트</th>
<th style="width:25%">쿼리 파라미터</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>DELETE</td>
<td>/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### 쿼리 파라미터 {#query-parameters}

삭제할 프로젝트의 ID는 요청 라인에 포함되어 전송됩니다.

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 삭제할 프로젝트의 ID입니다.|

### 페이로드 {#payload}

페이로드가 필요하지 않습니다.

### 응답 {#response}

요청이 성공적으로 처리된 경우 빈 json 객체를 반환합니다.

HTTP 상태 코드는 요청의 성공 여부(response.status == 200) 또는 실패 여부(response.status == 500)를 나타냅니다.

---

**관련 문서**:

- [send()](api/rest_api/methods/send_method.md)
- [deleteProject()](api/methods/deleteproject_method.md)
- [서버 연동하기](guides/working_with_server.md)
