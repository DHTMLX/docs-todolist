---
sidebar_label: REST routes 概览
title: REST routes 概览
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中查阅 REST routes 概览。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# REST routes 概览

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

本页面列出了所有 REST routes 及其简要说明，并提供了详细页面的链接。<br> 在深入了解每条 route 的描述之前，建议先阅读[与服务器协作](guides/working_with_server.md)。

---

:::info

如需快速导航，可以使用以下两个标签页之一：

- **按数据对象分类的 Routes**，了解针对不同操作应使用哪些 routes
- **按方法分类的 Routes**，通过 HTTP 方法快速浏览 routes 及服务器返回内容

:::
<div style="border: solid #F8F8F8">
<Tabs>
<TabItem value="name" label="按数据对象分类的 Routes">
<Tabs>
<TabItem value="tasks" label="tasks">
<p>使用以下 routes 对任务执行操作：</p>
<table>
<thead>
<tr>
<th>HTTP 方法</th>
<th>Route</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/tasks](api/rest_api/routes/get_routes/get_tasks.md)</td>
<td>获取所有任务的数据，并返回包含任务对象数组的 json 对象</td>
</tr>
<tr>
<td>`GET`</td>
<td>[/tasks/projects](api/rest_api/routes/get_routes/get_projecttasks.md)</td>
<td>获取指定项目的所有任务数据，并返回包含该项目所有任务对象数组的 json 对象</td>
</tr>
<tr>
<td>`POST`</td>
<td>[/tasks](api/rest_api/routes/post_routes/post_tasks.md)</td>
<td>创建新任务，并返回包含新任务 ID 的任务对象</td>
</tr>
<tr>
<td>`POST`</td>
<td>[/clone](api/rest_api/routes/post_routes/post_clone.md)</td>
<td>创建任务副本，并返回包含客户端任务 ID 和服务器复制任务 ID 的 json 对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/tasks](api/rest_api/routes/put_routes/put_tasks.md)</td>
<td>更新指定任务的数据，并返回空 json 对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/move](api/rest_api/routes/put_routes/put_move.md)</td>
<td>将任务移动到指定位置，并返回空 json 对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/sort](api/rest_api/routes/put_routes/put_sort.md)</td>
<td>按指定参数对当前项目的所有任务进行排序，并返回空 json 对象</td>
</tr>
<tr>
<td>`DELETE`</td>
<td>[/tasks](api/rest_api/routes/delete_routes/delete_tasks.md)</td>
<td>删除任务数据，并返回空 json 对象</td>
</tr>

</tbody>
</table>
</TabItem>
<TabItem value="projects" label="projects">
<p>使用以下 routes 对项目执行操作：</p>
<table>
<thead>
<tr>
<th>HTTP 方法</th>
<th>Route</th>
<th>描述</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/projects](api/rest_api/routes/get_routes/get_projects.md)</td>
<td>获取所有项目的数据，并返回包含项目对象数组的 json 对象</td>
</tr>
<tr>
<td>`POST`</td>
<td >[/projects](api/rest_api/routes/post_routes/post_projects.md)</td>
<td>创建新项目，并返回包含项目 ID 的项目对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/projects](api/rest_api/routes/put_routes/put_projects.md)</td><td>更新项目数据，并返回空 json 对象</td>
</tr>
<tr>
<td>`DELETE`</td>
<td>[/projects](api/rest_api/routes/delete_routes/delete_projects.md)</td>
<td>删除项目数据，并返回空 json 对象</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="users" label="users">
<p>使用以下 routes 对用户执行操作：</p>
<table>
<thead>
<tr>
<th>HTTP 方法</th>
<th>Route</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/users](api/rest_api/routes/get_routes/get_users.md)</td>
<td>获取所有用户的数据，并返回包含用户对象数组的 json 对象</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="tags" label="tags">
<p>使用以下 routes 对标签执行操作：</p>
<table>
<thead>
<tr>
<th >HTTP 方法</th>
<th>Route</th>
<th >描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/tags](api/rest_api/routes/get_routes/get_tags.md)</td>
<td>获取所有标签的数据，并返回包含这些标签数组的 json 对象</td>
</tr>

</tbody>
</table>
</TabItem>

</Tabs>

</TabItem>

<TabItem value="method" label="按方法分类的 Routes">
<Tabs>
<TabItem value="GET" label="GET">
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>[GET /users](api/rest_api/routes/get_routes/get_users.md)</td>
<td>返回包含所有用户对象数组的 json 对象</td>
</tr>
<tr>
<td>[GET /tasks](api/rest_api/routes/get_routes/get_tasks.md)</td>
<td>返回包含所有任务对象数组的 json 对象</td>
</tr>
<tr>
<td>[GET /projects](api/rest_api/routes/get_routes/get_projects.md)</td>
<td>返回包含所有可用项目对象数组的 json 对象</td>
</tr>
<tr>
<td>[GET /tags](api/rest_api/routes/get_routes/get_tags.md)</td>
<td>返回包含所有默认标签数组的 json 对象</td>
</tr>
<tr>
<td>[GET /tasks/projects](api/rest_api/routes/get_routes/get_projecttasks.md)</td>
<td>返回包含指定项目所有任务对象数组的 json 对象</td>
</tr>
</tbody>
</table>

</TabItem>
  
<TabItem value="POST" label="POST">   
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td >[POST /clone](api/rest_api/routes/post_routes/post_clone.md)</td>
<td >返回包含客户端任务 ID 和服务器复制任务 ID 的 json 对象。</td>
</tr>
<tr>
<td>[POST /projects](api/rest_api/routes/post_routes/post_projects.md)</td>
<td>返回包含项目 ID 的新项目对象</td>
</tr>
<tr>
<td>[POST /tasks](api/rest_api/routes/post_routes/post_tasks.md)</td>
<td>返回包含新任务 ID 的新任务对象</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="PUT" label="PUT">
<table>
<thead>
<tr>
<th >名称</th>
<th >描述</th>
</tr>
</thead>
<tbody>
<tr>
<td >[PUT /move](api/rest_api/routes/put_routes/put_move.md)</td>
<td >任务成功按请求移动时，返回空 json 对象</td>
</tr>
<tr>
<td >[PUT /sort](api/rest_api/routes/put_routes/put_sort.md)</td>
<td >任务成功按请求排序时，返回空 json 对象</td>
</tr>
<tr>
<td>[PUT /tasks](api/rest_api/routes/put_routes/put_tasks.md)</td>
<td>任务成功按请求修改时，返回空 json 对象</td>
</tr>
<tr>
<td>[PUT /projects](api/rest_api/routes/put_routes/put_projects.md)</td><td>项目成功按请求修改时，返回空 json 对象</td>
</tr>
</tbody>
</table>
</TabItem>
  
<TabItem value="DELETE" label="DELETE">
<table>
<thead>
<tr>
<th >名称</th>
<th >描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>[DELETE /tasks](api/rest_api/routes/delete_routes/delete_tasks.md)</td>
<td>任务成功删除时，返回空 json 对象</td>
</tr>
<tr>
<td >[DELETE /projects](api/rest_api/routes/delete_routes/delete_projects.md)</td>
<td >项目成功删除时，返回空 json 对象</td>
</tr>
</tbody>
</table>

</TabItem>
</Tabs>

</TabItem>
</Tabs>
</div>
