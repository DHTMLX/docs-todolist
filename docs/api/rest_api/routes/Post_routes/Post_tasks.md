---
sidebar_label: Post /tasks
title: Post /tasks
description: You can learn about the Post /tasks route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Post /tasks

### Description

@short:Creates a new task and returns a task object with the ID of a new task

The route handles the POST request made to the **'/tasks'** path.


<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/tasks</td>
</tr>
</tbody>
</table>


### Payload

The server side expects to receive a json object with the next properties:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `targetId`       |  number   | *Optional*. The ID of the future target task where a new task will be added.|
| `parent`       |  number   | *Optional*. The ID of the parent task.|
| `project`       |  number   | *Optional*. The ID of the project to which a new task should be added.|
| `reverse`| boolean | *Optional*. Defines the position where a new task will be added: **true**, if the task is added before the target task; otherwise, **false** (default).|
| `task`       |  object  | *Required*. The task object an example of which you can find here [**tasks**](api/configs/tasks_config.md).|

Example:

~~~json
{
    "parent": 10,
    "project": 1,
    "reverse": false,
    "targetId": 10,
    "task": {
        "text": "My task",
        ...other values, 
    }
}
~~~

### Response

The route returns a json object with the ID of a new task. 

Example:

~~~json
{
    "id": 12
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:
- [send()](api/rest_api/methods/send_method.md)
- [add-task()](api/methods/addtask_method.md)
- [Working with Server](guides/working_with_server.md)



