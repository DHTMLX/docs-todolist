---
sidebar_label: POST /projects
title: POST /projects
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 POST /projects 路由。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# POST `/projects`

### 描述 {#description}

@short: 创建一个新项目，并返回包含项目 ID 的项目对象

该路由处理发送到 `/projects` 路径的 POST 请求。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">路由</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/projects</td>
</tr>
</tbody>
</table>

### Payload {#payload}

服务器需要接收一个包含以下属性的 json 对象：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *可选*。新项目的 ID。|
| `label`    | string      | *必填*。要添加的新项目名称。|

示例：

~~~json
{
    "id": 1,
    "label": "New Project"
}
~~~

### 响应 {#response}

该路由返回一个包含新项目 ID 的 json 对象。

示例：

~~~json
{
    "id": 3
}
~~~

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**更新日志：**`id` 参数在 v1.3 中新增

**相关文章：**

- [send()](api/rest_api/methods/send_method.md)
- [addProject()](api/methods/addproject_method.md)
- [与服务器配合使用](guides/working_with_server.md)
