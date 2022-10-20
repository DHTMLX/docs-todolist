---
sidebar_label: Get /tasks
title: Get /tasks
description: You can learn about the Get/tasks route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Get /tasks

### Description

@short:Returns a promise with an array of all tasks objects

The route handles the GET request made to the **'/tasks'** path and sent by the [**getTasks()**](api/rest_api/methods/gettasks_method.md) method. 

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

No input parameters are required. 

### Response

The route returns a promise with an array of all tasks objects. A response format is JSON. 
You can look up the description of the tasks object parameters in the [**tasks**](api/configs/tasks_config.md) section. <br/> 
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with some error text is thrown).

---

**Related articles**: [Working with Server](guides/working_with_server.md)