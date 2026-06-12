---
sidebar_label: GET /tags
title: GET /tags
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 GET /tags route。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# GET `/tags`

### 描述 {#description}

@short: 获取所有标签的数据，并返回包含这些标签数组的 json 对象

该 route 处理发送到 `/tags` 路径的 GET 请求。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/tags</td>
</tr>
</tbody>
</table>

### Payload {#payload}

无需 payload。

### 响应 {#response}

该 route 返回包含所有默认标签数组的 json 对象。
返回对象的示例，请参阅 [`tags`](api/configs/tags_config.md) 部分。

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章**：

- [getTags()](api/rest_api/methods/gettags_method.md)
- [与服务器协作](guides/working_with_server.md)
