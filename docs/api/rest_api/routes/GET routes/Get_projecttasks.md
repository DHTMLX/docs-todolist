---
sidebar_label: Get /tasks/projects
title: Get /tasks/projects
description: You can learn about the Get/tasks/projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

### Description

@short:Returns a promise with an array of all tasks objects for the specified project.

The route handles the GET request made to the **'/tasks/projects{id}'** path and sent by the [**getProjectTasks()**](api/rest_api/methods/getprojecttasks_method.md) method. 

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/tasks/projects</td>
<td>id</td>
</tr>
</tbody>
</table>


### Payload

The following parameter is sent in the request of the [getProjectTasks()](api/rest_api/methods/getprojecttasks_method.md) method:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  string     | *Required*. The ID of the project for which tasks are requested. It's sent as the request query parameter.|


### Response

The route returns a promise with an array that contains data for all tasks of the specified project in the JSON format. 
You can find the description of the object that is returned here: [tasks](api/configs/tasks_config.md).

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with some error text is thrown).



**Related articles**: [Working with Server](guides/working_with_server.md)