---
sidebar_label: Get /tags
title: Get /tags
description: You can learn about the Get /tags route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

### Description

@short:Returns an array of all default tags.

The route handles the GET request made to the **'/tags'** path and sent by the [**getTags()**](api/rest_api/methods/gettags_method.md) method. 

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/tags</td>
</tr>
</tbody>
</table>


### Payload

No input parameters are required.


### Response

The route returns a promise with an array of all default tags. 
You can find the description of the object that is returned in the [tags]("api/configs/tags_config") section.

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with some error text is thrown).



**Related articles**: [Working with Server](guides/working_with_server.md)