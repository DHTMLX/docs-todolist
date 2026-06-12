---
sidebar_label: setHeaders()
title: setHeaders Method
description: You can learn about the setHeaders method of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# setHeaders()

### Description

@short: Sets custom headers that are added to every request of the RestDataProvider

:::info
The headers passed to **setHeaders()** are merged into the default **Content-Type: application/json** header and sent with each request. This is commonly used to pass an authorization token (for example, the **Remote-Token** header) in a multiuser backend.
:::

### Usage

~~~js
setHeaders(headers: object): void;
~~~

### Parameters

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `headers`   |  object     | *Required*. An object with custom headers added to every request |

### Example

~~~js {7-9}
const { RestDataProvider } = todo;

const url = "https://some_backend_url";

login(url).then(token => {
    const restProvider = new RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
    // ... initialize the To Do List and connect the provider
});
~~~

---

**Related articles**: [Working with Server](guides/working_with_server.md#multiuser-backend)
