---
sidebar_label: REST routes overview
title: REST routes overview
description: You can have the REST routes overview of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# REST routes overview

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page gives you the list of all REST routes with their short description and links to pages with more details.<br> Before you dive into each route description, it's recommended to read about [Working with Server](guides/working_with_server.md).

---

:::info

For quick navigation you can use either of the two tabs below:

- **Routes by data objects** to get the idea which routes to use for which operations 
- **Routes by methods** to have a quick grasp of routes by http methods and what the server returns back

:::
<div style="border: solid #F8F8F8">
<Tabs>
<TabItem value="name" label="Routes by data objects">
<Tabs>
<TabItem value="tasks" label="tasks">
<p>Use the next routes to perform operations on tasks:</p>
<table>
<thead>
<tr>
<th>HTTP method</th>
<th>Route</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/tasks](api/rest_api/routes/get_routes/get_tasks.md)</td>
<td>Gets data on all tasks and returns a json object with an array of tasks objects</td>
</tr>
<tr>
<td>`GET`</td>
<td>[/tasks/projects](api/rest_api/routes/get_routes/get_projecttasks.md)</td>
<td>Gets data on all tasks of the specified project and returns a json object with an array of all tasks objects for this specified project</td>
</tr>
<tr>
<td>`POST`</td>
<td>[/tasks](api/rest_api/routes/post_routes/post_tasks.md)</td>
<td>Creates a new task and returns a task object with the ID of a new task</td>
</tr>
<tr>
<td>`POST`</td>
<td>[/clone](api/rest_api/routes/post_routes/post_clone.md)</td>
<td>Creates a copy of a task and returns a json object with the client task ID and duplicated task ID of the server</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/tasks](api/rest_api/routes/put_routes/put_tasks.md)</td>
<td>Updates data on the specified task(s) and returns an empty json object</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/move](api/rest_api/routes/put_routes/put_move.md)</td>
<td>Moves a task to the specified position and returns an empty json object</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/sort](api/rest_api/routes/put_routes/put_sort.md)</td>
<td>Sorts all tasks of an active project by the specified parameters and returns an empty json object</td>
</tr>
<tr>
<td>`DELETE`</td>
<td>[/tasks](api/rest_api/routes/delete_routes/delete_tasks.md)</td>
<td>Deletes data on a task and returns an empty json object</td>
</tr>

</tbody>
</table>
</TabItem>
<TabItem value="projects" label="projects">
<p>Use the next routes to perform operations on projects:</p>
<table>
<thead>
<tr>
<th>HTTP method</th>
<th>Route</th>
<th>Description</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/projects](api/rest_api/routes/get_routes/get_projects.md)</td>
<td>Gets data on all projects and returns a json object with an array of projects objects</td>
</tr>
<tr>
<td>`POST`</td>
<td >[/projects](api/rest_api/routes/post_routes/post_projects.md)</td>
<td>Creates a new project and returns a project object with the project ID in it</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/projects](api/rest_api/routes/put_routes/put_projects.md)</td><td>Updates data on a project and returns an empty json object</td>
</tr>
<tr>
<td>`DELETE`</td>
<td>[/projects](api/rest_api/routes/delete_routes/delete_projects.md)</td>
<td>Deletes data on a project and returns an empty json object</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="users" label="users">
<p>Use the next routes to perform operations on users:</p>
<table>
<thead>
<tr>
<th>HTTP method</th>
<th>Route</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/users](api/rest_api/routes/get_routes/get_users.md)</td>
<td>Gets data on all users and returns a json object with an array of users objects</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="tags" label="tags">
<p>Use the next routes to perform operations on tags:</p>
<table>
<thead>
<tr>
<th >HTTP method</th>
<th>Route</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/tags](api/rest_api/routes/get_routes/get_tags.md)</td>
<td>Gets data on all tags and returns a json object with an array of these tags</td>
</tr>

</tbody>
</table>
</TabItem>

</Tabs>

</TabItem>

<TabItem value="method" label="Routes by methods">
<Tabs>
<TabItem value="GET" label="GET">
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>[GET /users](api/rest_api/routes/get_routes/get_users.md)</td>
<td>Returns a json object with an array of all users objects</td>
</tr>
<tr>
<td>[GET /tasks](api/rest_api/routes/get_routes/get_tasks.md)</td>
<td>Returns a json object with an array of all tasks objects</td>
</tr>
<tr>
<td>[GET /projects](api/rest_api/routes/get_routes/get_projects.md)</td>
<td>Returns a json object with an array of all available projects objects</td>
</tr>
<tr>
<td>[GET /tags](api/rest_api/routes/get_routes/get_tags.md)</td>
<td>Returns a json object with an array of all default tags</td>
</tr>
<tr>
<td>[GET /tasks/projects](api/rest_api/routes/get_routes/get_projecttasks.md)</td>
<td>Returns a json object with an array of all tasks objects for the specified project</td>
</tr>
</tbody>
</table>

</TabItem>
  
<TabItem value="POST" label="POST">   
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >[POST /clone](api/rest_api/routes/post_routes/post_clone.md)</td>
<td >Returns a json object with the client task ID and duplicated task ID of the server.</td>
</tr>
<tr>
<td>[POST /projects](api/rest_api/routes/post_routes/post_projects.md)</td>
<td>Returns a new project object with the project ID in it</td>
</tr>
<tr>
<td>[POST /tasks](api/rest_api/routes/post_routes/post_tasks.md)</td>
<td>Returns a new task object with the ID of a new task</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="PUT" label="PUT">
<table>
<thead>
<tr>
<th >Name</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >[PUT /move](api/rest_api/routes/put_routes/put_move.md)</td>
<td >Returns an empty json object in case tasks are successfully moved as requested</td>
</tr>
<tr>
<td >[PUT /sort](api/rest_api/routes/put_routes/put_sort.md)</td>
<td >Returns an empty json object in case tasks are sorted as requested</td>
</tr>
<tr>
<td>[PUT /tasks](api/rest_api/routes/put_routes/put_tasks.md)</td>
<td>Returns an empty json object in case a task is modified as requested</td>
</tr>
<tr>
<td>[PUT /projects](api/rest_api/routes/put_routes/put_projects.md)</td><td>Returns an empty json object in case a project is modified as requested</td>
</tr>
</tbody>
</table>
</TabItem>
  
<TabItem value="DELETE" label="DELETE">
<table>
<thead>
<tr>
<th >Name</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>[DELETE /tasks](api/rest_api/routes/delete_routes/delete_tasks.md)</td>
<td>Returns an empty json object in case a task is successfully removed</td>
</tr>
<tr>
<td >[DELETE /projects](api/rest_api/routes/delete_routes/delete_projects.md)</td>
<td >Returns an empty json object in case a project is successfully removed</td>
</tr>
</tbody>
</table>

</TabItem>
</Tabs>

</TabItem>
</Tabs>
</div>
