---
sidebar_label: Working with server
title: Working with server
description: You can learn about working with server in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

DHTMLX To Do List allows working both with the client and server data. The widget doesn't have any special requirements for the backend. It can be easily connected with any backend platform which supports the REST API (RESTful API). The client-server interaction is illustrated in the diagram below:


![client_server](/img/c_s.png)

:::info
By default, the widget comes with the built-in [**Go**](https://github.com/web-widgets/todo-go) and [**Node**](https://github.com/web-widgets/todo-node) backend. But you can use your custom server scripts as well.
:::

The To Do List has the [**RestDataProvider**](guides/rest_data_provider.md) service that completely supports REST API for dealing with the backend. It allows interacting with the server. <br/>
Go to the next sections, to dive deeper into the **RestDataProvider** service, learn how to connect it to the server scripts, and get details about server routes that handle requests. 

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>