---
sidebar_label: GET /users
title: GET /users
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 GET /users route。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# GET `/users`

### 描述 {#description}

@short: 获取所有用户的数据，并返回包含用户对象数组的 json 对象

该 route 处理发送到 `/users` 路径的 GET 请求。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/users</td>
</tr>
</tbody>
</table>

### Payload {#payload}

无需 payload。

### 响应 {#response}

该 route 返回包含所有用户对象数组的 json 对象。 <br/> 
用户对象的示例，请参阅 [`users`](api/configs/users_config.md) 部分。 <br/> 
HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章**：

- [getUsers()](api/rest_api/methods/getusers_method.md)
- [与服务器协作](guides/working_with_server.md)
