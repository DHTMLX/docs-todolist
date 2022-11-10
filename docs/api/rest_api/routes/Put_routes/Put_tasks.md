---
sidebar_label: Put /tasks
title: Put /tasks
description: You can learn about the Put /tasks route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Put /tasks

### Description

@short: Updates data on the specified task(s) and returns an empty json object

The route handles the PUT request made to the **'/tasks/{id}'** path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/tasks</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query parameters

The query parameter that is sent in the request line:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  number   | *Required*. The ID of the task to be updated.|


### Payload

The server needs to receive a json object with all task properties (both unchanged and new/modified).

Example:

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

You can find another example of the task object in the [**tasks**](api/configs/tasks_config.md) section.

To update multiple tasks with one request, you should add an array of tasks objects with necessary changes to the **batch** object in the request body.<br> In this case the task ID in the request line is also mandatory with all task parameters that precede the **batch** object in the request body.

Example:

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


### Response
  
In case of the success status, an empty json object is returned back. 

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).



---

**Related articles**:

- [update-task()](api/methods/updatetask_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [Working with Server](guides/working_with_server.md)