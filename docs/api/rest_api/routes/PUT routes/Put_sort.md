---
sidebar_label: Put /sort
title: Put /sort
description: You can learn about the Put /sort route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Put /sort

### Description

@short:Returns an empty promise in case tasks are sorted as requested

The route handles the PUT request made to the **'/sort'** path and sent by the [**send**](api/rest_api/methods/send_method.md) method to perform the **set-sort** operation (see [**set-sort**](api/methods/setsort_method.md)).

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/sort</td>
</tr>
</tbody>
</table>


### Payload

The object that is sent in the request body is described here: [**set-sort**](api/events/setsort_event.md).

The parameters that are parsed on the server side are the following:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `by`       |  string   | *Required*. The field by which to sort.|
| `dir`       |  string   | *Required*. The direction of sorting: "asc" or "desc".|

~~~json

{
    by: string,
    dir: string,
}
~~~

### Response
  
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with an error text is thrown).

In case of the success status, an empty JSON object is returned back. 

---

**Related articles**: [Working with Server](guides/working_with_server.md)