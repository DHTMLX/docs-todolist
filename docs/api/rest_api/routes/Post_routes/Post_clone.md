---
sidebar_label: Post /clone
title: Post /clone
description: You can learn about the Post /clone route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Post /clone

### Description

@short: Creates a copy of a task and returns a json object with the client task ID and duplicated task ID of the server

The route handles the POST request made to the **'/clone'** path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/clone</td>
</tr>
</tbody>
</table>

Once the request is received, the following items are created on the server side:

- the duplicates of the tasks to be cloned
- the map with the pair of the *client task ID: duplicated task ID* for each task being cloned

### Payload

The server needs to receive a json object with the next properties:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `targetId`       |  number   | *Optional*. The ID of the target task where the cloned task will be added.|
| `parent`       |  number   | *Optional*. The ID of the parent task.|
| `project`       |  number   | *Optional*. The ID of the project to which a new task should be added.|
| `batch`       |  object | *Required*. An array of objects of all tasks that are cloned. If a task has child items, they should be included into the object.|

Only tasks with the same parent ID/project ID will be processed per request. 

Example:

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

### Response

The route returns a json object with the client task ID and duplicated task ID of the server.<br>
Client tasks IDs are temporary IDs received in the requests and values are new tasks IDs generated during data saving.

Example:

~~~json
{
//“clientId”: serverId,
    "temp://1667215197027": 62,
    "temp://1667215197028": 63,
    "temp://1667215197029": 65
...
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: 
- [clone-task()](api/events/clonetask_event.md)
- [copy-task()](api/methods/copytask_method.md)
- [paste-task()](api/methods/pastetask_method.md)
- [send()](api/rest_api/methods/send_method.md) 
- [Working with Server](guides/working_with_server.md)