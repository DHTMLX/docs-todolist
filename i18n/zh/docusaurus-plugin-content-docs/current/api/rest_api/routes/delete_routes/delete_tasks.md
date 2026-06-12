---
sidebar_label: DELETE /tasks
title: DELETE /tasks
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 DELETE /tasks route。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# DELETE `/tasks`

### 描述 {#description}

@short: 删除任务数据，并返回空 json 对象

该 route 处理发送到 `/tasks/{id}` 或 `/tasks` 路径的 DELETE 请求。

每次请求可以删除一个或多个任务。如果存在子任务，所有子任务也会一并删除。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">Route</th>
<th style="width:25%">查询参数</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>DELETE</td>
<td>/tasks</td>
<td>id</td>
</tr>
</tbody>
</table>

### 查询参数 {#query-parameters}

要删除的任务 ID 在请求行中发送。

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *可选*。要删除的任务 ID。|

### Payload {#payload}

服务器需要接收一个包含以下属性的 json 对象：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `batch`    | array       | *可选*。要删除的任务 ID 列表。|

示例：

~~~json
{
    "batch": [1, 2, 3]
}
~~~

### 响应 {#response}

请求成功时，该 route 返回空 json 对象。

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**变更日志**：`batch` payload 在 v1.3 中新增

**相关文章**：

- [send()](api/rest_api/methods/send_method.md)
- [deleteTasks()](api/methods/deletetask_method.md)
- [与服务器协作](guides/working_with_server.md)
