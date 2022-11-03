---
sidebar_label: Get /tags
title: Get /tags
description: You can learn about the Get /tags route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Get /tags

### Description

@short:Gets data on all tags and returns a json object with an array of these tags

The route handles the GET request made to the **'/tags'** path.

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

No payload is required.


### Response

The route returns a json object with an array of all default tags. 
You can find an example of the object that is returned in the [**tags**](api/configs/tags_config.md) section.

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: 

- [getTags()](api/rest_api/methods/gettags_method.md)
- [Working with Server](guides/working_with_server.md)