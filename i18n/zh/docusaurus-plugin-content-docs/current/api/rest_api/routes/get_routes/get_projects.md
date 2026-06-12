---
sidebar_label: GET /projects
title: GET /projects
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 GET /projects route。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# GET `/projects`

### 描述 {#description}

@short: 获取所有项目的数据，并返回包含项目对象数组的 json 对象

该 route 处理发送到 `/projects` 路径的 GET 请求。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/projects</td>
</tr>
</tbody>
</table>

### Payload {#payload}

无需 payload。

### 响应 {#response}

该 route 返回包含所有项目对象数组的 json 对象。
返回对象的示例，请参阅 [`projects`](api/configs/projects_config.md)。

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章**：

- [getProjects()](api/rest_api/methods/getprojects_method.md)
- [与服务器协作](guides/working_with_server.md)
