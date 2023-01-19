---
sidebar_label: GET /users
title: GET /users
description: You can learn about the GET/users route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# GET /users

### Description

@short: Gets data on all users and returns a json object with an array of users objects

The route handles the GET request made to the **'/users'** path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/users</td>
</tr>
</tbody>
</table>

### Payload

No payload is required.

### Response

The route returns a json object with an array of all users objects. <br/> 
Look up an example of the users object in the [**users**](api/configs/users_config.md) section. <br/> 
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:

- [getUsers()](api/rest_api/methods/getusers_method.md)
- [Working with Server](guides/working_with_server.md)