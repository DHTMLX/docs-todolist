---
sidebar_label: Get /users
title: Get /users
description: You can learn about the Get/users route of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

### Description

@short:Returns an array of all users objects.

The route handles the GET request made to the **'/users'** path and sent by the [**getUsers()**](api/rest_api/methods/getusers_method.md) method. 

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

No input parameters are required. 

### Response

The route returns a promise with an array of all users objects. A default response format is JSON. <br/> 
Look up for the users object parameters in the [users]("api/configs/users_config") section. <br/> 
The HTTP status code shows if a request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with an error text is thrown).
