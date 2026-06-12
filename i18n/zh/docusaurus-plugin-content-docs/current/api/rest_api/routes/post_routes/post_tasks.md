---
sidebar_label: POST /tasks
title: POST /tasks
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 POST /tasks 路由。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# POST `/tasks`

### 描述 {#description}

@short: 创建一个新任务，并返回包含新任务 ID 的任务对象

该路由处理发送到 `/tasks` 路径的 POST 请求。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">路由</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/tasks</td>
</tr>
</tbody>
</table>

### Payload {#payload}

服务器端预期接收一个包含以下属性的 json 对象：

| 名称        | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `id`        | number      | *可选*。新任务的 ID。|
| `targetId`  | number      | *可选*。新任务将被添加到的目标任务 ID。|
| `parent`    | number      | *可选*。父任务的 ID。|
| `project`   | number      | *可选*。新任务应添加到的项目 ID。|
| `reverse`   | boolean     | *可选*。定义新任务的添加位置：`true` 表示将任务添加到目标任务之前；否则为 `false`（默认值）。|
| `task`      | object      | *必填*。任务对象，示例请参阅 [`tasks`](api/configs/tasks_config.md)。|

示例：

~~~json
{
    "id": 26,
    "parent": 10,
    "project": 1,
    "reverse": false,
    "targetId": 10,
    "task": {
        "text": "My task",
        //...other values
    }
}
~~~

### 响应 {#response}

该路由返回一个包含新任务 ID 的 json 对象。

示例：

~~~json
{
    "id": 12
}
~~~

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**变更日志**：`id` 参数在 v1.3 中新增

**相关文章**：
- [send()](api/rest_api/methods/send_method.md)
- [addTask()](api/methods/addtask_method.md)
- [与服务器配合使用](guides/working_with_server.md)
