---
sidebar_label: Delete /projects
title: Delete /projects
description: You can learn about the Delete /projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Delete /projects

### Description

@short:Returns an empty promise object in case a project is successfully removed.

The route handles the DELETE request made to the **'/projects{id}'** path and sent by the [**send**](api/rest_api/methods/send_method.md) method to perform the **delete-project** operation (see [**delete-project**](api/methods/deleteproject_method.md)). 

Only one project can be removed per request. All project tasks, if any, are also removed. 


<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>DELETE</td>
<td>/projects</td>
<td>id</td>
</tr>
</tbody>
</table>


### Payload

The ID of a task to be removed is sent in the request line.

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  number  | *Required*. The id of a project to be removed.|



### Response

The route returns an empty promise object in case of a successful request.
 
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with an error text is thrown).

---

**Related articles**: [Working with Server](guides/working_with_server.md)