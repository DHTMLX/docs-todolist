---
sidebar_label: Server routes
title: Server routes
description: You can learn about server routes in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

## Routing REST API requests

The server RESTful routes handle requests sent from the client via the [**RestDataProvider**](guides/rest_data_provider.md) service. The business logic code is performed by the functions that are executed once the route is requested, and the response is sent back to the client. 

When the server receives an HTTP request, it identifies the HTTP method and path contained in the request, and then:

- selects the route with the full match for a method and path
- the route handler is called
- data is parsed and the business-logic function is called if necessary

--- 

## Request format

A request to the server is made with: 

- a standard HTTP request like `PUT tasks/{id}`

- `HEADER`: default *Content-Type* header set to *application/json*. Headers are generated right before the request is sent. More headers can be added using the **send** function in the **RestDataProvider** service (see more details below).

- `BODY`: additinal parameters are sent in the request *body* part as a **JSON file** that conforms to a standard JSON schema. GET and DELETE requests do not have the *body* part.

:::note
For the GO server it's important to make sure that the body fields match the required data types. For example, if the ID field gets the string value instead of a number, the error will be sent back.
:::

**Request example**:

~~~json
PUT move/3,
Content-Type:application/json
body: {
   parent: 0,
   targetId: 5,
   project: 0,
   operation: "move-task",
   reverse: true,
}

~~~

All request payload data is defined via the **RestDataProvider** service using the **send** method for each event handler.

Example:

~~~js
"update-project": {
				handler: (ev: THandlersConfig["update-project"]) =>
					this.send(`projects/${ev.id}`, "PUT", ev.project),
			},
~~~

You can also add more headers to the request using the **customHeaders** parameter in the **send** function of the **RestDataProvider** service.

Example:
~~~js {7,9-11}
protected send<T>(
		url: string,
		method: string,
		data?: any,
		customHeaders: any = {}
	): Promise<T> {
		const headers = {
			"Content-Type": "application/json",
			customHeaders: {
   Authorization: Bearer <token>
} 
		};
		const req: RequestInit = {
			method,
			headers,
		};
~~~

--- 

## Response format

A response is sent back in the form of a standard JSON file (for all responses with the *success* request status).
An empty JSON file is sent back for all PUT and DELETE requests with the *success* status.

**Response example:**

~~~json
[
  {
    "id": 1,
    "label": "Don Smith",
    "avatar": "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_61.jpg"
  },
  {
    "id": 2,
    "label": "Nadia Chasey",
    "avatar": "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_63.jpg"
  },
  {
    "id": 3,
    "label": "Mike Young",
    "avatar": "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_03.jpg"
  },
  {
    "id": 4,
    "label": "Elvira Webb",
    "avatar": "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_33.jpg"
  }
]
~~~

:::info
For asynchronous processing the work with responses is organized with the help of the Promise objects. 

:::

--- 

## Response status codes 

Response status codes that are sent back to the client are standard REST API status codes:

- 200 – success
- 500 - failed. Error message can be found in the response body.






