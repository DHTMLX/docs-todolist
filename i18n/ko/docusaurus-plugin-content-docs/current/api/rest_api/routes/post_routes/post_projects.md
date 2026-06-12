---
sidebar_label: POST /projects
title: POST /projects
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 POST /projects 라우트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# POST `/projects`

### 설명 {#description}

@short: 새 프로젝트를 생성하고 프로젝트 ID가 포함된 프로젝트 객체를 반환합니다

이 라우트는 `/projects` 경로로 전송된 POST 요청을 처리합니다.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 메서드</th>
<th style="width:25%">라우트</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/projects</td>
</tr>
</tbody>
</table>

### 페이로드 {#payload}

서버는 하나의 속성을 포함한 json 객체를 수신해야 합니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *선택 사항*. 새 프로젝트의 ID입니다.|
| `label`    | string      | *필수*. 추가할 새 프로젝트의 이름입니다.|

예시:

~~~json
{
    "id": 1,
    "label": "New Project"
}
~~~

### 응답 {#response}

이 라우트는 새 프로젝트의 ID가 담긴 json 객체를 반환합니다.

예시:

~~~json
{
    "id": 3
}
~~~

HTTP 상태 코드는 요청의 성공 여부(response.status == 200) 또는 실패 여부(response.status == 500)를 나타냅니다.

---

**변경 이력**: `id` 파라미터가 v1.3에서 추가되었습니다.

**관련 문서**:

- [send()](api/rest_api/methods/send_method.md)
- [addProject()](api/methods/addproject_method.md)
- [서버와 함께 작업하기](guides/working_with_server.md)
