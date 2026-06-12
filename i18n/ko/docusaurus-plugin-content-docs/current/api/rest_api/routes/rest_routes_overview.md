---
sidebar_label: REST 라우트 개요
title: REST 라우트 개요
description: DHTMLX JavaScript To Do List 라이브러리의 REST 라우트 개요를 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# REST 라우트 개요

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

이 페이지는 모든 REST 라우트의 목록과 간단한 설명, 그리고 세부 정보 페이지 링크를 제공합니다.<br> 각 라우트 설명을 살펴보기 전에 [서버 연동하기](guides/working_with_server.md)를 먼저 읽어보시기를 권장합니다.

---

:::info

빠른 탐색을 위해 아래 두 탭 중 하나를 사용할 수 있습니다:

- **데이터 객체별 라우트** — 어떤 작업에 어떤 라우트를 사용해야 하는지 파악할 수 있습니다
- **메서드별 라우트** — HTTP 메서드별로 라우트를 빠르게 파악하고 서버가 반환하는 내용을 확인할 수 있습니다

:::
<div style="border: solid #F8F8F8">
<Tabs>
<TabItem value="name" label="데이터 객체별 라우트">
<Tabs>
<TabItem value="tasks" label="tasks">
<p>다음 라우트를 사용하여 태스크 관련 작업을 수행합니다:</p>
<table>
<thead>
<tr>
<th>HTTP 메서드</th>
<th>라우트</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/tasks](api/rest_api/routes/get_routes/get_tasks.md)</td>
<td>모든 태스크 데이터를 가져와 태스크 객체 배열이 담긴 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`GET`</td>
<td>[/tasks/projects](api/rest_api/routes/get_routes/get_projecttasks.md)</td>
<td>지정된 프로젝트의 모든 태스크 데이터를 가져와 해당 프로젝트의 모든 태스크 객체 배열이 담긴 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`POST`</td>
<td>[/tasks](api/rest_api/routes/post_routes/post_tasks.md)</td>
<td>새 태스크를 생성하고 새 태스크의 ID가 포함된 태스크 객체를 반환합니다</td>
</tr>
<tr>
<td>`POST`</td>
<td>[/clone](api/rest_api/routes/post_routes/post_clone.md)</td>
<td>태스크 복사본을 생성하고 클라이언트 태스크 ID와 서버의 복제된 태스크 ID가 담긴 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/tasks](api/rest_api/routes/put_routes/put_tasks.md)</td>
<td>지정된 태스크의 데이터를 업데이트하고 빈 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/move](api/rest_api/routes/put_routes/put_move.md)</td>
<td>태스크를 지정된 위치로 이동하고 빈 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/sort](api/rest_api/routes/put_routes/put_sort.md)</td>
<td>활성 프로젝트의 모든 태스크를 지정된 파라미터로 정렬하고 빈 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`DELETE`</td>
<td>[/tasks](api/rest_api/routes/delete_routes/delete_tasks.md)</td>
<td>태스크 데이터를 삭제하고 빈 json 객체를 반환합니다</td>
</tr>

</tbody>
</table>
</TabItem>
<TabItem value="projects" label="projects">
<p>다음 라우트를 사용하여 프로젝트 관련 작업을 수행합니다:</p>
<table>
<thead>
<tr>
<th>HTTP 메서드</th>
<th>라우트</th>
<th>설명</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/projects](api/rest_api/routes/get_routes/get_projects.md)</td>
<td>모든 프로젝트 데이터를 가져와 프로젝트 객체 배열이 담긴 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`POST`</td>
<td >[/projects](api/rest_api/routes/post_routes/post_projects.md)</td>
<td>새 프로젝트를 생성하고 프로젝트 ID가 포함된 프로젝트 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/projects](api/rest_api/routes/put_routes/put_projects.md)</td><td>프로젝트 데이터를 업데이트하고 빈 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`DELETE`</td>
<td>[/projects](api/rest_api/routes/delete_routes/delete_projects.md)</td>
<td>프로젝트 데이터를 삭제하고 빈 json 객체를 반환합니다</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="users" label="users">
<p>다음 라우트를 사용하여 사용자 관련 작업을 수행합니다:</p>
<table>
<thead>
<tr>
<th>HTTP 메서드</th>
<th>라우트</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/users](api/rest_api/routes/get_routes/get_users.md)</td>
<td>모든 사용자 데이터를 가져와 사용자 객체 배열이 담긴 json 객체를 반환합니다</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="tags" label="tags">
<p>다음 라우트를 사용하여 태그 관련 작업을 수행합니다:</p>
<table>
<thead>
<tr>
<th >HTTP 메서드</th>
<th>라우트</th>
<th >설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/tags](api/rest_api/routes/get_routes/get_tags.md)</td>
<td>모든 태그 데이터를 가져와 해당 태그 배열이 담긴 json 객체를 반환합니다</td>
</tr>

</tbody>
</table>
</TabItem>

</Tabs>

</TabItem>

<TabItem value="method" label="메서드별 라우트">
<Tabs>
<TabItem value="GET" label="GET">
<table>
<thead>
<tr>
<th>이름</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>[GET /users](api/rest_api/routes/get_routes/get_users.md)</td>
<td>모든 사용자 객체 배열이 담긴 json 객체를 반환합니다</td>
</tr>
<tr>
<td>[GET /tasks](api/rest_api/routes/get_routes/get_tasks.md)</td>
<td>모든 태스크 객체 배열이 담긴 json 객체를 반환합니다</td>
</tr>
<tr>
<td>[GET /projects](api/rest_api/routes/get_routes/get_projects.md)</td>
<td>사용 가능한 모든 프로젝트 객체 배열이 담긴 json 객체를 반환합니다</td>
</tr>
<tr>
<td>[GET /tags](api/rest_api/routes/get_routes/get_tags.md)</td>
<td>모든 기본 태그 배열이 담긴 json 객체를 반환합니다</td>
</tr>
<tr>
<td>[GET /tasks/projects](api/rest_api/routes/get_routes/get_projecttasks.md)</td>
<td>지정된 프로젝트의 모든 태스크 객체 배열이 담긴 json 객체를 반환합니다</td>
</tr>
</tbody>
</table>

</TabItem>
  
<TabItem value="POST" label="POST">   
<table>
<thead>
<tr>
<th>이름</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td >[POST /clone](api/rest_api/routes/post_routes/post_clone.md)</td>
<td >클라이언트 태스크 ID와 서버의 복제된 태스크 ID가 담긴 json 객체를 반환합니다.</td>
</tr>
<tr>
<td>[POST /projects](api/rest_api/routes/post_routes/post_projects.md)</td>
<td>프로젝트 ID가 포함된 새 프로젝트 객체를 반환합니다</td>
</tr>
<tr>
<td>[POST /tasks](api/rest_api/routes/post_routes/post_tasks.md)</td>
<td>새 태스크의 ID가 포함된 새 태스크 객체를 반환합니다</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="PUT" label="PUT">
<table>
<thead>
<tr>
<th >이름</th>
<th >설명</th>
</tr>
</thead>
<tbody>
<tr>
<td >[PUT /move](api/rest_api/routes/put_routes/put_move.md)</td>
<td >요청대로 태스크가 성공적으로 이동된 경우 빈 json 객체를 반환합니다</td>
</tr>
<tr>
<td >[PUT /sort](api/rest_api/routes/put_routes/put_sort.md)</td>
<td >요청대로 태스크가 정렬된 경우 빈 json 객체를 반환합니다</td>
</tr>
<tr>
<td>[PUT /tasks](api/rest_api/routes/put_routes/put_tasks.md)</td>
<td>요청대로 태스크가 수정된 경우 빈 json 객체를 반환합니다</td>
</tr>
<tr>
<td>[PUT /projects](api/rest_api/routes/put_routes/put_projects.md)</td><td>요청대로 프로젝트가 수정된 경우 빈 json 객체를 반환합니다</td>
</tr>
</tbody>
</table>
</TabItem>
  
<TabItem value="DELETE" label="DELETE">
<table>
<thead>
<tr>
<th >이름</th>
<th >설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>[DELETE /tasks](api/rest_api/routes/delete_routes/delete_tasks.md)</td>
<td>태스크가 성공적으로 삭제된 경우 빈 json 객체를 반환합니다</td>
</tr>
<tr>
<td >[DELETE /projects](api/rest_api/routes/delete_routes/delete_projects.md)</td>
<td >프로젝트가 성공적으로 삭제된 경우 빈 json 객체를 반환합니다</td>
</tr>
</tbody>
</table>

</TabItem>
</Tabs>

</TabItem>
</Tabs>
</div>
