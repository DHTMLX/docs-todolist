---
sidebar_label: POST /projects
title: POST /projects
description: You can learn about the POST /projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# POST `/projects`

### Description

@short: Creates a new project and returns a project object with the project ID in it

The route handles the POST request made to the `/projects` path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/projects</td>
</tr>
</tbody>
</table>

### Payload

The server needs to receive a json object with one property:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `label`    |  string     | *Required*. The name of a new project to be added.|

Example:

~~~json
{
    "label": "New Project"
}
~~~

### Response

The route returns a json object with the ID of a new project.

Example:

~~~json
{
    "id": 3
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:

- [send()](api/rest_api/methods/send_method.md)
- [addProject()](api/methods/addproject_method.md)
- [Working with Server](guides/working_with_server.md)
