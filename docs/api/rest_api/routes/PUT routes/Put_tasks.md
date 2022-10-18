---
sidebar_label: Put /tasks
title: Put /tasks
description: You can learn about the Put /tasks route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Put /tasks

### Description

@short:Returns an empty object in case a task is modified as requested.

The route handles the PUT request made to the **'/tasks{id}'** path and sent by the [**send**](api/rest_api/methods/send_method.md) method to perform the **update-task** operation (see [**update-task**](api/methods/updatetask_method.md)). 


<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/tasks</td>
<td>id</td>
</tr>
</tbody>
</table>


### Payload

The query parameter in the request line:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  number   | *Required*. The ID of the task to be updated.|


The **task object** with all task parameters (both unchanged and new/modified) is sent in the **request body**.

You can find the task object description in the [**tasks**](api/configs/tasks_config.md) section.

~~~json
{
        parent?: number,
        project?: number,
        text?: string,
        checked?: boolean,
        collapsed?: boolean,
        assigned?: (string | number)[],
        due_date?: Date | string,
        creation_date?: Date | string,
        completion_date?: Date | string,
        edited_date?: Date | string,
        [key: string]?: any
    }
~~~


### Response
  
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with an error text is thrown).

In case of the success status, an empty JSON object is returned back. 

---

**Related articles**: [Working with Server](guides/working_with_server.md)