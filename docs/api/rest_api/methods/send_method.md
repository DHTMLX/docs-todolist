---
sidebar_label: send()
title: send Method
description: You can learn about the send method of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# send()

### Description

@short:Sends a necessary HTTP request to the server and returns a promise with the required data. 

All requests to the server are made with the **send()** method which is a part of the **RestDataProvider** service.

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data: object,
    headers?: object,
): Promise<obj[]>
~~~

---

### Parameters


| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `url`         |  string     | *Required*. A path to the server where a request is made to.            |
| `method`            |string             | *Required*. HTTP method type (Get, Post, Put, Delete, etc.)            |
| `data`  | object        | *Optional*. Parameters that are sent to the server. By default, parameters of the fired event are sent.  But you are free to add additional parameters with the custom object. |
| `header`  |string       | *Required*. The required header is the **Content-Type** header set to *application/json*. More optional headers can be added. |

---

### Response

The method returns the promise object with the required data.

Either of the two response types can be returned: 

- a promise with data in JSON format in case of the success request status
- a string with an error text is returned back to the failed request (server error) 

---

### Example

The example below shows how to send a request with additional parameters besides the default ones:

~~~js
list.api.on("set-project", obj => {
    obj.custom = "custom event";
    restDataProvider.send(`tasks/projects/0`, "GET", obj).then(data => {
        list.api.parse({ tasks: data });
        return Promise.resolve();
    }),
});
~~~



The following example demonstrates how to add more headers to the **send** method:

~~~js
customHeaders:
{ "Authorization": "Bearer",
"Custom header": "some value",
};

list.api.on("add-task", obj => {
    restDataProvider.send("tasks", "POST", obj, customHeaders);
});

~~~

**Related articles**: [Working with Server](guides/working_with_server.md)