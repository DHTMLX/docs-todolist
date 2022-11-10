---
sidebar_label: Delete /tasks
title: Delete /tasks
description: You can learn about the Delete /tasks route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Delete /tasks

### Description

@short: Deletes data on a task and returns an empty json object

The route handles the DELETE request made to the **'/tasks/{id}'** path.

Only one task can be removed per request. All child tasks, if any, are also removed. 


<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>DELETE</td>
<td>/tasks</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query parameters

The ID of a task that should be removed is sent in the request line.

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  number  | *Required*. The id of a task to be removed.|

### Payload

No payload is required.

### Response

The route returns an empty json object in case of a successful request.
 
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: 

- [send()](api/rest_api/methods/send_method.md)
- [delete-tasks()](api/methods/deletetask_method.md)
- [Working with Server](guides/working_with_server.md)