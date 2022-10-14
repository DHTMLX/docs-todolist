---
sidebar_label: Post /clone
title: Post /clone
description: You can learn about the Post /clone route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

### Description

@short:Returns an object with the map of the "client task ID:server task ID" pair.  

The route handles the POST request made to the **'/clone'** path and sent by the [**send**](api/rest_api/methods/send_method.md) method to perform the **clone-task** operation (see [**clone-task**](api/methods/addproject_method.md)). 
 

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

The object described here [**clone-task**](api/events/clonetask_event.md) is sent in the request body.

The following parameters are parsed on the server side:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `targetId`       |  number   | *Optional*. The ID of the future target task where the cloned task will be added.|
| `parent`       |  number   | *Optional*. The ID of the parent task.|
| `project`       |  number   | *Optional*. The ID of the project to which a new task should be added.|
| `batch`       |  object | *Required*. An array of objects of all tasks that are cloned. If a task has child items, they should be included into the object.|

All optional parameters, if not sent, are set to 0 by default.

Only tasks with the same parent ID/project ID will be processed per request. 

Example:

~~~json
{
   targetId: number,
   parent: number,
   project: number,
   batch: task[]
}
~~~

### Response

The route returns the promise object with the map of the "client task ID:server task ID" pair for each task that is cloned.  

Response items:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `clientId`       | string | The client ID of the task being cloned.|
| `serverId`       |  number   | The server ID of the task being cloned.|

Example:

~~~json
{
"temp://1234567890120": 31,
"temp://1234567890121": 32,
"temp://1234567890122": 33,
"temp://1234567890123": 34,
...
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with an error text is thrown).

**Related articles**: [Working with Server](guides/working_with_server.md)