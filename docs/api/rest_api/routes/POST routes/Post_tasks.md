---
sidebar_label: Post /tasks
title: Post /tasks
description: You can learn about the Post /tasks route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

### Description

@short:Returns a new task object with the ID of a new task.

The route handles the POST request made to the **'/tasks'** path and sent by the [**send**](api/rest_api/methods/send_method.md) method to perform the **add-task** operation (see [**add-task**](api/methods/addtask_method.md)). 


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

The following request body parameters are sent in the JSON format:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `targetid`       |  number   | *Required*. The ID of the future target task where the new task will be added.|
| `parent`       |  number   | *Required*. The ID of the parent task.|
| `project`       |  number   | *Required*. The ID of the project to which a new task should be added.|


Example:

~~~json
{
targetId: 2,
parent: 1,
project: 1,
}
~~~

### Response

The route returns the ID of a new task in the JSON format. 

~~~json
{
    id: 4:,
}
~~~

 
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with an error text is thrown).

**Related articles**: [Working with Server](guides/working_with_server.md)