---
sidebar_label: DELETE /projects
title: DELETE /projects
description: You can learn about the DELETE /projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# DELETE `/projects`

### Description

@short: Deletes data on a project and returns an empty json object

:::note
The tasks linked to the project won't be removed. They will be moved to the *"No project"* section.
:::

The route handles the DELETE request made to the `/projects/{id}` path.

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

### Query parameters

The ID of a project to be removed is sent in the request line.

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The id of a project to be removed.|

### Payload

No payload is required.

### Response

The route returns an empty json object in case of a successful request.

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:

- [send()](api/rest_api/methods/send_method.md)
- [deleteProject()](api/methods/deleteproject_method.md)
- [Working with Server](guides/working_with_server.md)
