---
sidebar_label: Put /move
title: Put /move
description: You can learn about the Put /move route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Put /move

### Description

@short:Moves a task to the specified position and returns an empty json object

The route handles the PUT request made to the **'/move/{id}'** path.
For more details about available operations, see the description of the **operation** property sent in the request body (see the **Payload** section below). 

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/move</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query parameters

The query parameter is sent in the request line:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  number   | *Required*. The ID of the task to be moved. In case multiple tasks are requested to be moved, the id should be set to 0|

:::info
When you move multiple tasks, make sure that the `id` is set to 0, otherwise (if set to another value), only one task (with this specified id value) will be moved.
:::

### Payload

The server expects to receive a json object with the next properties:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`| number|*Optional*. The ID of the moved task. The parameter is required for the **indent**/**unindent** operation types.|
| `parent`       |  number   | *Optional*. The ID of the parent task.|
| `project`       |  number   | *Optional*. The ID of the project to which a task belongs to.|
| `targetId`       |  number   | *Optional*. The ID of the target task where the moved task will be pasted.|
| `operation`       |  string  | *Required*. A server-specific parameter. It indicates the operation type. Available operation types: "null" - moves a task to a specified position within the current project (see [**"move-task"**](api/methods/movetask_method.md)), [**"indent"**](api/methods/indenttask_method.md), [**"unindent"**](api/methods/unindenttask_method.md), **"project"** - moves a task to another project (see [**"move-task"**](api/methods/movetask_method.md)).<br/>If a task is moved within one project (operation === null), the operation property is not mandatory in the payload.|
| `reverse`       | boolean   | *Optional*. The position where a task will be moved: before the target task (true) or after it (false by default).|
| `batch`       |  object  | *Required*. An array of IDs of all tasks that are moved. If a task has child items, only the task parent ID is included into the object.|


Example:



~~~json
 
 {
    "id": 5,
    "targetId": 2,
    "reverse": false,
    "operation": null,
    "batch": null
}
~~~ 

Examples of different operation types:

<details>
  <summary>operation === null </summary>
  In case one task is moved within the current project, its ID is sent in the request line and other properties are sent in the request body.<br/> If a task is moved within one project, the operation property is not mandatory in the payload. 
    
  Payload example: 

  ~~~json
 {
    "targetId": 1,
    "reverse": true,
    "batch": null
}
~~~

To move multiple tasks within the same project:
- In the request line, set the task ID value to 0
- In the request body, add the <b>batch</b> property that contains IDs of tasks to be moved
- Add other necessary properties in the request body

Payload example: 

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
  
  
   In case the request is sent for one <b>indent/unindent</b> operation, the task ID is sent in the request line and other task properties are sent in the request body.

   Example:

~~~json

   {
    "parent": 2,
    "targetId": 2,
    "operation": "indent"
}

~~~

  </details>
  

  <details>
  <summary>multiple indent/unindent operations</summary>

In case the request is sent to indent or unindent multiple tasks, the <b>ID</b> value in the request line is set to 0, each task ID with other parameters should be listed in the <b>opbatch</b> array of task objects.

In other words, to move multiple tasks, a json object in the request body should contain the <b>opbatch</b> array of tasks objects with the operations data.

Example:

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

  To move one task to another project:

  - Send the task ID as a query parameter in the request line<br/>
    OR<br/>
    Set this query parameter to 0 and add the task ID as the value of the <b>batch</b> property in the request body
  - In the request body:
    - Set the <b>operation</b> property value to <b>project</b>
    - Add the value of the <b>project</b> property which is the ID of a project where a task is moved
    - Add the task ID as the value of the <b>batch</b> property if the ID is set to 0 in the request line

  Example:

~~~json
    {
    "project": 2,
    "operation": "project",
    "batch": [3]
    }
~~~

  If multiple tasks are moved to another project, the <b>ID</b> value in the request line is set to 0, and all tasks IDs are specified in the <b>batch</b> array.<br/> 
  If you move a task with child items, only the ID of its parent is specified in the <b>batch</b> array.<br/>
  The <b>batch</b> property can contain any number of tasks IDs.


  Example:

~~~json
    {
    "project": 2,
    "operation": "project",
    "batch": [3, 5, 8, 9]
    }
~~~

</details>

### Response

  
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

In case of the success status, an empty json object is returned. 

---

**Related articles**: 
- [move-task()](api/events/movetask_event.md)
- [send()](api/rest_api/methods/send_method.md)
- [Working with Server](guides/working_with_server.md)