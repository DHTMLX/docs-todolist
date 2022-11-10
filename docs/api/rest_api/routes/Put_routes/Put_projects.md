---
sidebar_label: Put /projects
title: Put /projects
description: You can learn about the Put /projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Put /projects

### Description

@short: Updates data on a project and returns an empty json object

The route handles the PUT request made to the **'/projects/{id}'** path. 


<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query parameters

The query parameter sent in the request line is the following:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  number   | *Required*. The ID of the project to be updated.|



### Payload

The server needs to receive a json object with all project properties (both unchanged and new/modified). 

Example:

~~~json
{
    "label": "My Project"
}
~~~

You can find another example of the project object in the [**projects**](api/configs/projects_config.md) section.



### Response

In case of the success status, an empty json object is returned back. 
  
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: 

- [update-project()](api/methods/updateproject_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [Working with Server](guides/working_with_server.md)

