---
sidebar_label: GET /tags
title: GET /tags
description: DHTMLX JavaScript To Do List 라이브러리의 GET /tags 라우트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# GET `/tags`

### 설명 {#description}

@short: 모든 태그 데이터를 가져와 해당 태그 배열이 담긴 json 객체를 반환합니다

이 라우트는 `/tags` 경로로 전송된 GET 요청을 처리합니다.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 메서드</th>
<th style="width:25%">라우트</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/tags</td>
</tr>
</tbody>
</table>

### 페이로드 {#payload}

페이로드가 필요하지 않습니다.

### 응답 {#response}

이 라우트는 모든 기본 태그 배열이 담긴 json 객체를 반환합니다. 
반환되는 객체의 예시는 [`tags`](api/configs/tags_config.md) 섹션을 참고하세요.

HTTP 상태 코드는 요청의 성공 여부(response.status == 200) 또는 실패 여부(response.status == 500)를 나타냅니다.

---

**관련 문서**:

- [getTags()](api/rest_api/methods/gettags_method.md)
- [서버 연동하기](guides/working_with_server.md)
