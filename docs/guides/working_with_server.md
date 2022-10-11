---
sidebar_label: Working with server
title: Working with server
description: You can learn about working with server in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Working with server

DHTMLX To Do List allows working both with the client and server data. The widget doesn't have any special requirements for the backend. It can be easily connected with any backend platform which supports the REST API (RESTful API).

:::info
By default, the widget comes with the built-in [**Go**](https://github.com/web-widgets/todo-go) and [**Node**](https://github.com/web-widgets/todo-node) backend. But you can use your custom server scripts as well.
:::

## RestDataProvider

The To Do List has the **RestDataProvider** service that completely supports REST API for dealing with the backend. It allows interacting with the server and perform the following data operations:

- **"add-task"**
- **"update-task"**
- **"delete-task"**
- **"add-project"**
- **"update-project"**
- **"delete-project"**
- **"set-project"**
- **"move-task"**
- **"clone-task"**

## REST methods

The **RestDataProvider** service includes the special REST methods for dynamic data loading:

- [`getProjects()`](api/rest_api/methods/getprojects_method.md) - gets a promise with the **projects data**
- [`getProjectTasks()`](api/rest_api/methods/getprojecttasks_method.md) - gets a promise with the **tasks data** of the specified **project**
- [`getTags()`](api/rest_api/methods/gettags_method.md) - gets a promise with a list of **default tags**
- [`getTasks()`](api/rest_api/methods/gettasks_method.md) - gets a promise with the **tasks data**
- [`getUsers()`](api/rest_api/methods/getusers_method.md) - gets a promise with the **users data**
- [`setAPI()`](api/rest_api/methods/setapi_method.md) - sets API of the To Do List component into RestDataProvider
- [`send()`](api/rest_api/methods/send_method.md) - sends a necessary request to the server and gets a promise with or without data depending on the request


## Interacting with backend

To interact with the server, you need to connect **RestDataProvider** to the corresponding server scripts. If you want to use the built-in backend, you can find the needed scripts in the following repositories:

- [**Go**](https://github.com/web-widgets/todo-go) backend
- [**Node**](https://github.com/web-widgets/todo-node) backend

or you can create a custom one.

To connect **RestDataProvider** to the backend, you need to call the **new RestDataProvider()** constructor by passing the corresponding **URL** as a parameter.

~~~js {4-5,23-24}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "https://some_backend_url";
const restProvider = new RestDataProvider(url);
Promise.all([
	restProvider.getProjectTasks(activeProject),
	restProvider.getUsers(),
	restProvider.getProjects(),
	restProvider.getTags(),
]).then(([tasks, users, projects, tags]) => {
	const list = new ToDo("#root", {
		tasks,
		users,
		projects,
		tags,
		activeProject,
	});
	const toolbar = new Toolbar("#toolbar", {
		api: list.api,
	});

	list.api.setNext(restProvider);
	restProvider.setAPI(list.api);
});
~~~

:::info
You need to include **RestDataProvider** into the **Event Bus** order via the [`api.setNext()`](api/internal/setnext_method.md) method to perform operations with data (*adding, deleting,* etc) and send the corresponding requests to the server
:::

## Example

The snippet below shows you how to connect **RestDataProvider** to the backend and load server data dynamically:

<iframe src="https://snippet.dhtmlx.com/hnk06gm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>