---
sidebar_label: PUT /tasks
title: PUT /tasks
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 PUT /tasks 路由。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# PUT `/tasks`

### 描述 {#description}

@short: 更新指定任务的数据，并返回一个空的 json 对象

该路由处理发送到 `/tasks/{id}` 路径的 PUT 请求。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">路由</th>
<th style="width:25%">查询参数</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/tasks</td>
<td>id</td>
</tr>
</tbody>
</table>

### 查询参数 {#query-parameters}

请求行中发送的查询参数：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。要更新的任务 ID。|

### Payload {#payload}

服务器需要接收一个包含所有任务属性（包括未更改和新增/修改的属性）的 json 对象。

示例：

~~~json
{
    "text": "You can assign task performers and due dates using the menu.",
    "checked": true,
    "due_date": "2033-03-08T21:00:00Z",
    "creation_date": "2022-10-31T13:35:10.941583462+03:00",
    "project": 1,
    "assigned": [1, 2, 3, 4],
    "completion_date": "2022-10-31T10:45:20.142Z",
    "parent": 1,
}
~~~

您可以在 [`tasks`](api/configs/tasks_config.md) 部分找到任务对象的另一个示例。

如需通过一次请求更新多个任务，应在请求体的 `batch` 对象中添加包含必要更改的任务对象数组。<br> 在这种情况下，请求行中的任务 ID 也是必填的，且请求体中 `batch` 对象之前的所有任务参数也需提供。

示例：

~~~json
{
    "text": "Greetings, everyone! 👋 \nI'm DHTMLX To Do List.",
    "checked": false,
    "creation_date": "2022-10-31T13:35:10.941342305+03:00",
    "project": 1,
    "due_date": "2022-10-07T21:00:00.000Z",
    "parent": 0,
    "batch": [
        {
            "text": "Select this task and then press Enter to create the task below 👇",
            "checked": false,
            "creation_date": "2022-10-31T13:35:10.941583979+03:00",
            "project": 1,
            "due_date": "2022-10-07T21:00:00.000Z",
            "parent": 0
        },
        {
            "text": "If you press Tab, this task will become a subtask. To edit it, press Ctrl (Cmd) + Enter.",
            "checked": false,
            "creation_date": "2022-10-31T13:35:10.941644198+03:00",
            "project": 1,
            "assigned": [4],
            "due_date": "2022-10-07T21:00:00.000Z",
            "parent": 0
        }
    ]
}
~~~

### 响应 {#response}
  
成功时返回一个空的 json 对象。

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章**：

- [updateTask()](api/methods/updatetask_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [与服务器配合使用](guides/working_with_server.md)
