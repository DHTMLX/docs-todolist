---
sidebar_label: Put /sort
title: Put /sort
description: You can learn about the Put /sort route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Put /sort

### Description

@short:Sorts all tasks of an active project by the specified parameters and returns an empty json object

The route handles the PUT request made to the **'/sort/{id}'** path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/sort</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query parameters

The query parameter that is sent in the request line:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  number   | *Required*. The ID of the active project for which tasks will be sorted.|

### Payload

The server expects to receive a json object with the next properties:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `by`       |  string   | *Required*. The field by which to sort.|
| `dir`       |  string   | *Required*. The direction of sorting: "asc" or "desc".|

Example: 

~~~json
{

    "by": "due_date",
    "dir": "asc",
}
~~~

### Response
  
In case of the success status, an empty json object is returned. 
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:
- [send()](api/rest_api/methods/send_method.md)
- [set-sort()](api/methods/setsort_method.md)
- [Working with Server](guides/working_with_server.md)