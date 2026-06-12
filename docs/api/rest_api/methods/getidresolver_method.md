---
sidebar_label: getIDResolver()
title: getIDResolver Method
description: You can learn about the getIDResolver method of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getIDResolver()

### Description

@short: Returns a function that synchronizes client (temporary) ids with server ids

:::info
When the client creates a new object (task or project), it receives a temporary id, while the corresponding server id is stored in the RestDataProvider. The function returned by `getIDResolver()` maps a client id to its server id. It is mainly used when handling server events in a multiuser backend.
:::

### Usage

~~~js
getIDResolver(): (id: string | number, type: number) => string | number;
~~~

### Returns

The method returns the `idResolver(id, type)` function:

- `id` - the client (temporary) id to resolve
- `type` - the type of the model:
    - `1` - a task (`TaskID`)
    - `2` - a project (`ProjID`)

The function returns the server id that corresponds to the passed client id.

### Example

~~~js {4,7}
const { RestDataProvider } = todo;

const restProvider = new RestDataProvider(url);
const idResolver = restProvider.getIDResolver();

const TaskID = 1;
const serverId = idResolver(clientId, TaskID);
~~~

---

**Related articles**: [Working with Server](guides/working_with_server.md#customize-server-events)
