---
sidebar_label: Post /projects
title: Post /projects
description: You can learn about the Post /projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

### Description

@short:Returns a new project object with the project ID in it.

The route handles the POST request made to the **'/projects'** path and sent by the [**send**](api/rest_api/methods/send_method.md) method to perform the **add-project** operation (see [**add-project**](api/methods/addproject_method.md)). 


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

The object described in the [**add-project**](api/events/addproject_event.md) section is sent in the request body.

The following parameter is parsed on the server side:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `label`       |  string  | *Required*. The name of a new project to be added.|


Example:

~~~json
{
   label: "Project name",
}
~~~

### Response

The route returns the ID of a new project in the JSON format. 

Example:

~~~json
{
    id: number,
}
~~~

 
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with an error text is thrown).

**Related articles**: [Working with Server](guides/working_with_server.md)