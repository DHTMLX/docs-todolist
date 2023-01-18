---
sidebar_label: GET /projects
title: GET /projects
description: You can learn about the GET /projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# GET /projects

### Description

@short: Gets data on all projects and returns a json object with an array of projects objects

The route handles the GET request made to the **'/projects'** path.

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

No payload is required.


### Response

The route returns a json object with an array of all projects objects. 
For an example of the returned object, go to [**projects**](api/configs/projects_config.md).

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: 

- [getProjects()](api/rest_api/methods/getprojects_method.md)
- [Working with Server](guides/working_with_server.md)