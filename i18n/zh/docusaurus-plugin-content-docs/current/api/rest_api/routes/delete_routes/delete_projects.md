---
sidebar_label: DELETE /projects
title: DELETE /projects
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 DELETE /projects route。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# DELETE `/projects`

### 描述 {#description}

@short: 删除项目数据，并返回空 json 对象

:::note
与该项目关联的任务不会被删除，它们将被移至 *"无项目"* 分区。
:::

该 route 处理发送到 `/projects/{id}` 路径的 DELETE 请求。

每次请求只能删除一个项目。如果该项目存在任务，所有项目任务也会一并删除。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">Route</th>
<th style="width:25%">查询参数</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>DELETE</td>
<td>/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### 查询参数 {#query-parameters}

要删除的项目 ID 在请求行中发送。

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。要删除的项目 ID。|

### Payload {#payload}

无需 payload。

### 响应 {#response}

请求成功时，该 route 返回空 json 对象。

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章**：

- [send()](api/rest_api/methods/send_method.md)
- [deleteProject()](api/methods/deleteproject_method.md)
- [与服务器协作](guides/working_with_server.md)
