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

:::note

For quick navigation you can use either of the two tabs:

- **Routes by data objects** to get the idea which routes to use for which operations 
- **Routes by methods** to have a quick grasp of routes by http methods and what the server returns back

:::

<Tabs style="background-color: blue">
<TabItem value="name" label="Routes by data objects">
<Tabs>
<TabItem value="tasks" label="tasks">
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
<td>GET</td>
<td><a href="/api/rest_api/routes/GET routes/Get_tasks"> /tasks</a></td>
<td>Gets data on all tasks and returns a json object with an array of tasks objects</td>
</tr>
<tr>
<td>GET</td>
<td><a href="/api/rest_api/routes/GET routes/Get_projecttasks"> /project/tasks</a></td>
<td>Gets data on all tasks of the specified project and returns a json object with an array of all tasks objects for this specified project</td>
</tr>
<tr>
<td>POST</td>
<td><a href="/api/rest_api/routes/POST routes/Post_tasks"> /tasks</a></td>
<td>Creates a new task and returns a task object with the ID of a new task</td>
</tr>
<tr>
<td>POST</td>
<td><a href="/api/rest_api/routes/POST routes/Post_clone"> /clone</a></td>
<td>Creates a copy of a task and returns an object with the client task ID and duplicated task ID of the server</td>
</tr>
<tr>
<td>PUT</td>
<td><a href="/api/rest_api/routes/PUT routes/Put_tasks"> /tasks</a></td>
<td>Updates data on the specified task(s) and returns an empty json object</td>
</tr>
<tr>
<td>PUT</td>
<td><a href="/api/rest_api/routes/PUT routes/Put_move"> /move</a></td>
<td>Moves a task to the specified position and returns an empty json object</td>
</tr>
<tr>
<td>PUT</td>
<td><a href="/api/rest_api/routes/PUT routes/Put_sort"> /sort</a></td>
<td>Sorts all tasks of an active project by the specified parameters and returns an empty json object</td>
</tr>
<tr>
<td>DELETE</td>
<td><a href="/api/rest_api/routes/DELETE routes/Delete_tasks"> /tasks</a></td>
<td>Deletes data on a task and returns an empty json object</td>
</tr>

</tbody>
</table>
</TabItem>
<TabItem value="projects" label="projects">
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
<td>GET</td>
<td><a href="/api/rest_api/routes/GET routes/Get_projects"> /projects</a></td>
<td>Gets data on all projects and returns a json object with an array of projects objects</td>
</tr>
<tr>
<td>POST</td>
<td ><a href="/api/rest_api/routes/POST routes/Post_projects"> /projects</a></td>
<td>Creates a new project and returns a project object with the project ID in it</td>
</tr>
<tr>
<td>PUT</td>
<td><a href="/api/rest_api/routes/PUT routes/Put_projects"> /projects</a></td><td>Updates data on a project and returns an empty json object</td>
</tr>
<tr>
<td>DELETE</td>
<td><a href="/api/rest_api/routes/DELETE routes/Delete_projects"> /projects</a></td>
<td>Deletes data on a project and returns an empty json object</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="users" label="users">
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
<td>GET</td>
<td><a href="/api/rest_api/routes/Get_users"> /users</a></td>
<td>Gets data on all users and returns a json object with an array of users objects</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="tags" label="tags">
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
<td>GET</td>
<td><a href="/api/rest_api/routes/GET routes/Get_tags"> /tags</a></td>
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
<td><a href="/api/rest_api/routes/Get_users">Get /users</a></td>
<td>Returns a json object with an array of all users objects</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/GET routes/Get_tasks">Get /tasks</a></td>
<td>Returns a json object with an array of all tasks objects</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/GET routes/Get_projects">Get /projects</a></td>
<td>Returns a json object with an array of all available projects objects</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/GET routes/Get_tags">Get /tags</a></td>
<td>Returns a json object with an array of all default tags</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/GET routes/Get_projecttasks">Get /project/tasks</a></td>
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
<td ><a href="/api/rest_api/routes/POST routes/Post_clone">Post /clone</a></td>
<td >Returns a json object with the client task ID and duplicated task ID of the server.</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/POST routes/Post_projects">Post /projects</a></td>
<td>Returns a new project object with the project ID in it</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/POST routes/Post_tasks">Post /tasks</a></td>
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
<td ><a href="/api/rest_api/routes/PUT routes/Put_move">Put /move</a></td>
<td >Returns an empty json object in case tasks are successfully moved as requested</td>
</tr>
<tr>
<td ><a href="/api/rest_api/routes/PUT routes/Put_sort">Put /sort</a></td>
<td >Returns an empty json object in case tasks are sorted as requested</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/PUT routes/Put_tasks">Put /tasks</a></td>
<td>Returns an empty json object in case a task is modified as requested</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/PUT routes/Put_projects">Put /projects</a></td><td>Returns an empty json object in case a project is modified as requested</td>
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
<td><a href="/api/rest_api/routes/DELETE routes/Delete_tasks">Delete /tasks</a></td>
<td>Returns an empty json object in case a task is successfully removed</td>
</tr>
<tr>
<td ><a href="/api/rest_api/routes/DELETE routes/Delete_projects">Delete /projects</a></td>
<td >Returns an empty json object in case a project is successfully removed</td>
</tr>
</tbody>
</table>

</TabItem>
</Tabs>
</TabItem>
</Tabs>