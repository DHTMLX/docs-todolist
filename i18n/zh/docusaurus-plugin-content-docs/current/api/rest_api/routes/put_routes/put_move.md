---
sidebar_label: PUT /move
title: PUT /move
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 PUT /move 路由。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# PUT `/move`

### 描述 {#description}

@short: 将任务移动到指定位置，并返回一个空的 json 对象

该路由处理发送到 `/move/{id}` 路径的 PUT 请求。
有关可用操作的更多详情，请参阅请求体中 `operation` 属性的描述（见下方 **Payload** 部分）。

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP 方法</th>
<th style="width:25%">路由</th>
<th style="width:25%">查询参数</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/move</td>
<td>id</td>
</tr>
</tbody>
</table>

### 查询参数 {#query-parameters}

查询参数在请求行中发送：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。要移动的任务 ID。如果请求移动多个任务，id 应设置为 0。|

:::info
移动多个任务时，请确保将 `id` 设置为 0，否则（如果设置为其他值），只有具有该指定 id 值的单个任务会被移动。
:::

### Payload {#payload}

服务器预期接收一个包含以下属性的 json 对象：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *可选*。被移动任务的 ID。`indent`/`unindent` 操作类型时为必填参数。|
| `parent`   |  number     | *可选*。父任务的 ID。|
| `project`  |  number     | *可选*。任务所属项目的 ID。|
| `targetId` |  number     | *可选*。移动后任务将被粘贴到的目标任务 ID。|
| `operation`|  string     | *必填*。服务器专用参数，用于指定操作类型。可用操作类型："null" - 在当前项目内将任务移动到指定位置（参见 [`"move-task"`](api/methods/movetask_method.md)）、[`"indent"`](api/methods/indenttask_method.md)、[`"unindent"`](api/methods/unindenttask_method.md)、`"project"` - 将任务移动到另一个项目（参见 [`"move-task"`](api/methods/movetask_method.md)）。<br/>如果任务在同一项目内移动（operation === null），则 payload 中的 operation 属性不是必填的。|
| `reverse`       | boolean   | *可选*。任务的移动位置：移动到目标任务之前（true）或之后（false，默认值）。|
| `batch`       |  object  | *必填*。包含所有待移动任务 ID 的数组。如果任务有子项，数组中只包含父任务的 ID。|

示例：

~~~json
{
  "id": 5,
  "targetId": 2,
  "reverse": false,
  "operation": null,
  "batch": null
}
~~~

不同操作类型的示例：

<details>
  <summary>operation === null </summary>
  当一个任务在当前项目内移动时，其 ID 在请求行中发送，其他属性在请求体中发送。<br/> 如果任务在同一项目内移动，payload 中的 operation 属性不是必填的。

  Payload 示例：

~~~json
{
  "targetId": 1,
  "reverse": true,
  "batch": null
}
~~~

在同一项目内移动多个任务时：
- 在请求行中将任务 ID 值设置为 0
- 在请求体中添加包含待移动任务 ID 的 `batch` 属性
- 在请求体中添加其他必要属性

Payload 示例：

~~~json
{
  "targetId": 1,
  "reverse": true,
  "batch": [1, 2, 3]
}
~~~
</details>  

<details>
  <summary>operation === "indent" || operation === "unindent" </summary>
   当请求针对单个 `indent/unindent` 操作时，任务 ID 在请求行中发送，其他任务属性在请求体中发送。

   示例：

    ~~~json
    {
      "parent": 2,
      "targetId": 2,
      "operation": "indent"
    }
    ~~~
</details>
  
<details>
  <summary>多个 indent/unindent 操作</summary>

当请求对多个任务进行缩进或取消缩进时，请求行中的 `ID` 值设置为 0，每个任务的 ID 及其他参数应列在 `opbatch` 任务对象数组中。

换言之，移动多个任务时，请求体中的 json 对象应包含带有操作数据的任务对象 `opbatch` 数组。

示例：

~~~json
{
  "opbatch": [
    {
      "id": 1,
      "parent": 3,
      "targetId": 3,
      "operation": "indent"
    },
    {
      "id": 53,
      "parent": 3,
      "targetId": 3,
      "operation": "indent"
    }
  ]
}

~~~

</details>

<details>

<summary>operation === "project"</summary>

  将一个任务移动到另一个项目：

  - 在请求行中将任务 ID 作为查询参数发送<br/>
    或<br/>
    将该查询参数设置为 0，并在请求体中将任务 ID 作为 `batch` 属性的值添加
  - 在请求体中：
    - 将 `operation` 属性值设置为 `project`
    - 添加 `project` 属性值，即任务移动目标项目的 ID
    - 如果请求行中 ID 设置为 0，则将任务 ID 作为 `batch` 属性的值添加

  示例：

~~~json
    {
    "project": 2,
    "operation": "project",
    "batch": [3]
    }
~~~

  如果将多个任务移动到另一个项目，请求行中的 `ID` 值设置为 0，所有任务 ID 在 `batch` 数组中指定。<br/> 
  如果移动带有子项的任务，`batch` 数组中只需指定父任务的 ID。<br/>
  `batch` 属性可以包含任意数量的任务 ID。

  示例：

~~~json
  {
    "project": 2,
    "operation": "project",
    "batch": [3, 5, 8, 9]
  }
~~~

</details>

### 响应 {#response}

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

成功时返回一个空的 json 对象。

---

**相关文章**：
- [move-task](api/events/movetask_event.md)
- [send()](api/rest_api/methods/send_method.md)
- [与服务器配合使用](guides/working_with_server.md)
