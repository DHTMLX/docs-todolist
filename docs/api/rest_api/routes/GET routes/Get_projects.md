---
sidebar_label: Get /projects
title: Get /projects
description: You can learn about the Get /projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

### Description

@short:Returns an array of all available projects objects.

The route handles the GET request made to the **'/projects'** path and sent by the [**getProjects()**](api/rest_api/methods/getprojects_method.md) method. 

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/projects</td>
</tr>
</tbody>
</table>


### Payload

No input parameters are required.


### Response

The route returns a promise with an array of all projects objects. 
For the description of the object parameters, go to [projects]("api/configs/projects_config").

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with some error text is thrown).



**Related articles**: [Working with Server](guides/working_with_server.md)