---
sidebar_label: send()
title: send Method
description: You can learn about the send method of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# send()

### Description

@short: Sends a necessary HTTP request to the server and returns a promise with or without data depending on the request 

All requests to the server are made with the **send()** method which is a part of the [**RestDataProvider**](guides/working_with_server.md/#restdataprovider) service.


### Usage

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): Promise<obj[]>
~~~

### Parameters


| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `url`         |  string     | *Required*. A path to the server where a request is sent to.            |
| `method`            |string             | *Required*. An HTTP method type (Get, Post, Put, Delete)            |
| `data`  | object        | *Optional*. Parameters that are sent to the server. By default, parameters of the fired event are sent.  But you are free to add additional parameters with the custom object. See the [Example](#examples) below. |
| `headers`  |object       | *Optional*. A default header is the **Content-Type** header set to *application/json*. More optional headers can be added with the **customHeaders** parameter. See the [Example](#examples) below. |

### Response

The method returns the promise object with or without data depending on the request.

A promise is returned back to the success request status. In case of the failed request (response.status == 500), an exception with an error text is thrown.

You can configure what to return back. To handle a response to the failed request, use the **catch** method of the promise that is returned. 

~~~js

restDataProvider.send(url, method, data)
.then(data => {
   ... // success: do something with data
})
.catch(err => {
    ... // error handler
});

~~~

### Examples

The example below shows how to send a request with additional parameters besides the default ones:

~~~js {20-25}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getProjects(),
]).then(([tasks, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.on("set-project", obj => {
    obj.custom = "custom event";
    restDataProvider.send(`tasks/projects/0`, "GET", obj).then(data => {
        list.api.parse({ tasks: data });
        return Promise.resolve();
    });
});

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});

~~~

The following examples demonstrate how to add more headers to the **send** method.

~~~js
const customHeaders = {
     "Authorization": "Bearer",
    "Custom header": "some value",
};

list.api.on("add-task", obj => {
    restDataProvider.send("tasks", "POST", obj, customHeaders);
});
~~~

Or you can add headers in the way as below by redefining RestDataProvider, which can give you more control of the data you send to the server: 

~~~js {6-11}
const { ToDo, Toolbar, RestDataProvider } = todo;
...
// ToDo initialization
...

class MyDataProvider extends RestDataProvider {
  send(url, method, data, headers) {
      headers = { ...headers, "SomeToken": "abc" };
      return super.send(url, methods, data, headers);
  }
}

list.api.setNext(new MyDataProvider(url));
MyDataProvider.setAPI(list.api);
~~~ 
---

**Related articles**: [Working with Server](guides/working_with_server.md)