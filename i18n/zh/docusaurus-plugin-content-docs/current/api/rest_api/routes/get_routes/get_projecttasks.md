---
sidebar_label: GET /tasks/projects
title: GET /tasks/projects
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 GET /tasks/projects route。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# GET `/tasks/projects`

### 描述 {#description}

@short: 获取指定项目的所有任务数据，并返回包含该项目所有任务对象数组的 json 对象

该 route 处理发送到 `/tasks/projects/{id}` 路径的 GET 请求。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">Route</th>
<th style="width:25%">查询参数</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/tasks/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### 查询参数 {#query-parameters}

以下参数在请求行中发送：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  string     | *必填*。请求任务所属项目的 ID。|

### Payload {#payload}

无需 payload。

### 响应 {#response}

该 route 返回一个 json 对象，其中包含指定项目所有任务数据的数组。
返回对象的示例，请参阅 [`tasks`](api/configs/tasks_config.md)。

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章**：

- [getProjectTasks()](api/rest_api/methods/getprojecttasks_method.md)
- [与服务器协作](guides/working_with_server.md)
