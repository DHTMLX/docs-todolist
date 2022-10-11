---
sidebar_label: send()
title: send Method
description: You can learn about the send method of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

### Description

@short:Sends an HTTP request with specified parameters to the server and returns a promise with the required data. 

All requests to the server are made with the **send()** method which is a part of the **RestDataProvider** service.


### Parameters

~~~js
send(url, method, data, headers)
~~~


| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- |
| `url`         |  string     | *Required*. A path to the server where a request is made to.            |
| `method`            |string             | *Required*. HTTP method type (Get, Post, Put, Delete, etc.)            |
| `data`  | object        | *Optional*. Additional parameters sent to the server. |
| `header`  |string       | *Required*. The required header is the **Content-Type** header set to *application/json*. More optional headers can be added. |


### Response

The method returns the promise object with the required data.

Either of the two response types can be returned: 

- a JSON object is returned in case of the success request status
- a string with an error text is returned back to the failed request (server error) 

### Example

The following example demonstrates how to add more headers to the **send** method:

~~~js

const customHeaders = {
customHeaders:
{ Authorization: "Bearer",
"Header2": "value2",
};

restDataProvider.send("https://docs.dhtmlx.com/todo-backend", "GET", dataObj, customHeaders);

~~~

**Related articles**: [Working with Server](guides/working_with_server.md)