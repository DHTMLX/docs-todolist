---
sidebar_label: POST /clone
title: POST /clone
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 POST /clone 路由。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# POST `/clone`

### 描述 {#description}

@short: 创建任务的副本，并返回包含客户端任务 ID 和服务器端重复任务 ID 的 json 对象

该路由处理发送到 `/clone` 路径的 POST 请求。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">路由</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/clone</td>
</tr>
</tbody>
</table>

请求被接收后，服务器端将创建以下内容：

- 待克隆任务的副本
- 包含每个被克隆任务的 *客户端任务 ID：重复任务 ID* 键值对的映射表

### Payload {#payload}

服务器需要接收一个包含以下属性的 json 对象：

| 名称       | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `targetId`       |  number   | *可选*。克隆任务将被添加到的目标任务 ID。|
| `parent`       |  number   | *可选*。父任务的 ID。|
| `project`       |  number   | *可选*。新任务应添加到的项目 ID。|
| `batch`       |  object | *必填*。包含所有待克隆任务对象的数组。如果某个任务有子项，子项也应包含在对象中。|

每次请求仅处理具有相同父级 ID/项目 ID 的任务。

示例：

~~~json
{
    "parent": null,
    "targetId": 18,
    "batch": [
        {
            "text": "If you press Tab, this task will become a subtask. To edit it, press Ctrl (Cmd) + Enter.",
            "checked": false,
            "due_date": "2022-10-07T21:00:00Z",
            "creation_date": "2022-10-31T11:20:04.171Z",
            "project": 1,
            "assigned": [4],
            "id": "temp://1667215197027",
            "parent": null
        },
        {
            "text": "You can create tasks with an infinite number of subtasks.",
            "checked": false,
            "creation_date": "2022-10-31T11:20:04.173Z",
            "project": 1,
            "assigned": [4],
            "id": "temp://1667215197028",
            "parent": null
        },
        {
            "text": "Use the Tab and Shift + Tab keys for this.",
            "checked": false,
            "creation_date": "2022-10-31T11:20:04.174Z",
            "parent": "temp://1667215197028",
            "project": 1,
            "id": "temp://1667215197029"
        }
    ]
}
~~~

### 响应 {#response}

该路由返回一个包含客户端任务 ID 和服务器端重复任务 ID 的 json 对象。<br>
客户端任务 ID 是请求中收到的临时 ID，值是数据保存时生成的新任务 ID。

示例：

~~~json
{
    //"clientId": serverId,
    "temp://1667215197027": 62,
    "temp://1667215197028": 63,
    "temp://1667215197029": 65,
    //...
}
~~~

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章：**
- [clone-task](api/events/clonetask_event.md)
- [copyTask()](api/methods/copytask_method.md)
- [pasteTask()](api/methods/pastetask_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [与服务器配合使用](guides/working_with_server.md)
