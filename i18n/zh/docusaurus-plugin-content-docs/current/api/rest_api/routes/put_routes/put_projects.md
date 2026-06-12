---
sidebar_label: PUT /projects
title: PUT /projects
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 PUT /projects 路由。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# PUT `/projects`

### 描述 {#description}

@short: 更新指定项目的数据，并返回一个空的 json 对象

该路由处理发送到 `/projects/{id}` 路径的 PUT 请求。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">路由</th>
<th style="width:25%">查询参数</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### 查询参数 {#query-parameters}

请求行中发送的查询参数如下：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。要更新的项目 ID。|

### Payload {#payload}

服务器需要接收一个包含所有项目属性（包括未更改和新增/修改的属性）的 json 对象。

示例：

~~~json
{
    "label": "My Project"
}
~~~

您可以在 [`projects`](api/configs/projects_config.md) 部分找到项目对象的另一个示例。

### 响应 {#response}

成功时返回一个空的 json 对象。
  
HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章**：

- [updateProject()](api/methods/updateproject_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [与服务器配合使用](guides/working_with_server.md)
