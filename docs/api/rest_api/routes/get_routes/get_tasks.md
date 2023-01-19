---
sidebar_label: GET /tasks
title: GET /tasks
description: You can learn about the GET /tasks route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# GET /tasks

### Description

@short: Gets data on all tasks and returns a json object with an array of tasks objects

The route handles the GET request made to the **'/tasks'** path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/tasks</td>
</tr>
</tbody>
</table>

### Payload

No payload is required.

### Response

The route returns a json object with an array of all tasks objects.
You can look up an example of the tasks object in the [**tasks**](api/configs/tasks_config.md) section. <br/> 
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:

- [getTasks()](api/rest_api/methods/gettasks_method.md)
- [Working with Server](guides/working_with_server.md)