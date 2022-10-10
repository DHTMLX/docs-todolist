---
sidebar_label: RestDataProvider
title: RestDataProvider
description: You can learn about the RestDataProvider service in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

The To Do List has the **RestDataProvider** service that completely supports REST API for dealing with the backend. It allows interacting with the server and performs the following data operations:

- **"add-task"**
- **"update-task"**
- **"delete-task"**
- **"add-project"**
- **"update-project"**
- **"delete-project"**
- **"set-project"**
- **"move-task"**
- **"clone-task"**

## Requests to server

:::info
Request format required by the server is described in the [**Server routes**](guides/server_routes.md) section.
:::

In the **RestDataProvider** service requests to the server are made in the following way:

- `GET` requests are impemented via the methods described below
- Other request types `POST, PUT, DELETE` are implemened with the **send** function in the **event handlers**

Example: 

~~~js
"move-task": {
				debounce: 300,
				handler: (ev: THandlersConfig["move-task"]) =>
					this.send(`move/${ev.id}`, "PUT", ev),
			},

~~~
:::info
`GET tasks/projects` is the only `GET` request in the event handling. It is used to retrieve tasks that belong to the active project.
~~~js
"set-project": {
				handler: (ev: THandlersConfig["set-project"]) =>
					this.send(`tasks/projects/${ev.id}`, "GET").then(data => {
						this._api.parse({
							tasks: this.parseTasks(data as any[]),
						});
						return Promise.resolve();
					}),
~~~
:::



## REST methods

The **RestDataProvider** service includes the special REST methods for dynamic data loading:

- [`getProjects()`](api/rest_api/methods/getprojects_method.md) - gets a promise with the **projects data**
- [`getProjectTasks()`](api/rest_api/methods/getprojecttasks_method.md) - gets a promise with the **tasks data** of the specified **project**
- [`getTags()`](api/rest_api/methods/gettags_method.md) - gets a promise with a list of **default tags**
- [`getTasks()`](api/rest_api/methods/gettasks_method.md) - gets a promise with the **tasks data**
- [`getUsers()`](api/rest_api/methods/getusers_method.md) - gets a promise with the **users data**
- [`setAPI()`](api/rest_api/methods/setapi_method.md) - sets API of the To Do List component into RestDataProvider

## Connecting to server scripts

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