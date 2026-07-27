---
sidebar_label: PUT /sort
title: PUT /sort
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 PUT /sort 路由。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# PUT `/sort`

### 描述 {#description}

@short: 按指定参数对活动项目的所有任务进行排序，并返回一个空的 json 对象

该路由处理发送到 `/sort/{id}` 路径的 PUT 请求。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">路由</th>
<th style="width:25%">查询参数</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/sort</td>
<td>id</td>
</tr>
</tbody>
</table>

### 查询参数 {#query-parameters}

请求行中发送的查询参数：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。要对其任务进行排序的活动项目 ID。|

### Payload {#payload}

服务器预期接收一个包含以下属性的 json 对象：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `by`       |  string     | *必填*。排序依据的字段。|
| `dir`      |  string     | *必填*。排序方向："asc" 或 "desc"。|

示例：

~~~json
{
    "by": "due_date",
    "dir": "asc",
}
~~~

### 响应 {#response}
  
成功时返回一个空的 json 对象。
HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章：**
- [send()](api/rest_api/methods/send_method.md)
- [setSort()](api/methods/setsort_method.md)
- [与服务器配合使用](guides/working_with_server.md)
