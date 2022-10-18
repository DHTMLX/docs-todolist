---
sidebar_label: Put /move
title: Put /move
description: You can learn about the Put /move route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Put /move

### Description

@short:Returns an empty promise in case the task objects are successfully moved as requested.

The route handles the PUT request made to the **'/move{id}'** path and sent by the [**send**](api/rest_api/methods/send_method.md) method to move, indent or unindent tasks.<br/>
For more details about available operations, see the description of the **operation** parameter sent in the request body (see the **Payload** section below). 

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
<th style="width:25%">Query parameter</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/move</td>
<td>id</td>
</tr>
</tbody>
</table>


### Payload

The query parameter in the request line:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  number   | *Required*. The ID of the task to be moved. In case multiple tasks are requested to be moved, id is set to 0|

The object described in the [**move-task**](api/events/movetask_event.md) section is sent to the server in the **request body**.

The request body parameters parsed on the server are the following:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `parent`       |  number   | *Optional*. The ID of the parent task.|
| `project`       |  number   | *Optional*. The ID of the project to which a task belongs to.|
| `targetId`       |  number   | *Optional*. The ID of the target task where the moved task will be pasted.|
| `operation`       |  string  | *Required*. Server-specific parameter. It indicates the operation type. Available operation types: "null" - moves a task to a specified position within the current project (see [**"move-task"**](api/methods/movetask_method.md)), [**"indent"**](api/methods/indenttask_method.md), [**"unindent"**](api/methods/unindenttask_method.md), **"project"** - moves a task to another project (see [**"move-task"**](api/methods/movetask_method.md)).|
| `reverse`       | boolean   | *Optional*. The position where the moved task will be moved: before the target task (true) or after it (false by default).|
| `batch`       |  object  | *Required*. An array of IDs of all tasks that are moved. If a task has child items, only the task parent ID is included into the object.|


Optional parameters can be marked as nullable by adding `?` at the end of the property name:

~~~json
 
 {
   id: number,
   parent?: number,
   project?: number,
   targetId?: number,
   operation: string,
   reverse?: boolean,
   batch: number[]
 }
~~~ 

Examples of different operation types:

<details>
  <summary>operation == null </summary>
  In case one task is moved, its ID is sent in the request line.<br/> 
  If multiple tasks are moved, the ID value in the request line is set to 0, and all tasks IDs are specified in the <b>batch</b> array. <br/>
  

  ~~~json
  {
    targetId: number,
    reverse: boolean,
    batch?: number[],
    operation?: string,
}
~~~
    
  </details>  

  <details>
  <summary>operation == "indent" || operation == "unindent" </summary>
  
  
   In case the request is sent for one <b>indent/unindent</b> operation, its ID is sent in the request line and other task parameters are sent in the request body as below:

~~~json

   {
    id: number,
    targetId: number,
    reverse: boolean,
    operation: string,
    parent?: number,
} 

~~~

  </details>
  

  <details>
  <summary>multiple indent/unindent operations</summary>
  In case the request is sent to indent or unindent multiple tasks, the ID value in the request line is set to 0, each task ID with other parameters are listed in the <b>opbatch</b> array of task objects.

Let's denote each operation object as the <b>Operation</b> object:

~~~json

   {
    id: number,
    targetId: number,
    reverse: boolean,
    operation: string,
    parent?: number,
} 


~~~

Now we can list each task parameters in the **opbatch** array of the <b>Operation</b> objects: 

~~~json
{
    opbatch: Operation[]
}
// where Operation is defined in the previous example

~~~

  </details>

<details>

<summary>operation == "project"</summary>
  In case one task is moved, its ID is sent in the request line.<br/> 
  If multiple tasks are moved to another project, the ID value in the request line is set to 0, and all tasks IDs are specified in the <b>batch</b> array.<br/> 
  If you move a task with child items, only the ID of its parent is specified in the <b>batch</b> array.<br/>
  
  The <b>project</b> parameter is the ID of a project where tasks are moved. 

~~~json
{
    project: number,
    operation: string,
    batch?: number[],
}

~~~

</details>

### Response

  
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500, in this case an exception with an error text is thrown).

In case of the success status, an empty JSON object is returned back. 

---

**Related articles**: [Working with Server](guides/working_with_server.md)