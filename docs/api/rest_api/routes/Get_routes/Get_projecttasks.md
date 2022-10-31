---
sidebar_label: Get /tasks/projects
title: Get /tasks/projects
description: You can learn about the Get/tasks/projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Get /tasks/projects

### Description

@short:Gets data on all tasks of the specified project and returns a json object with an array of all tasks objects for this specified project

The route handles the GET request made to the **'/tasks/projects/{id}'** path.

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

### Query parameters

The following parameter is sent in the request line:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  string     | *Required*. The ID of the project for which tasks are requested. It's sent as the request query parameter.|


### Payload

No body parameters are required.

### Response

The route returns a json object with an array that contains data for all tasks of the specified project. 
You can find an example of the object that is returned here: [**tasks**](api/configs/tasks_config.md).

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: 

- [getProjectTasks()](api/rest_api/methods/getprojecttasks_method.md)
- [Working with Server](guides/working_with_server.md)