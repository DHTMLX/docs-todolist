---
sidebar_label: REST routes overview
title: REST routes overview
description: You can have the REST routes overview of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page gives you the list of all REST routes with their short description and links to pages with more details. Before you dive into each route description, it's recommended to read about [Working with Server](guides/working_with_server.md).

<Tabs>
<TabItem value="GET" label="GET">
<table>
<thead>
<tr>
<th >Name</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/api/rest_api/routes/Get_users">Get /users</a></td>
<td>Returns a promise with an array of all users objects</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/GET routes/Get_tasks">Get /tasks</a></td>
<td>Returns a promise with an array of all tasks objects</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/GET routes/Get_projects">Get /projects</a></td>
<td>Returns a promise with an array of all available projects objects</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/GET routes/Get_tags">Get /tags</a></td>
<td>Returns a promise with an array of all default tags</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/GET routes/Get_projecttasks">Get /project/tasks</a></td>
<td>Returns a promise with an array of all tasks objects for the specified project</td>
</tr>
</tbody>
</table>


  </TabItem>
  
  <TabItem value="POST" label="POST">   
<table>
<thead>
<tr>
<th >Name</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td ><a href="/api/rest_api/routes/POST routes/Post_clone">Post /clone</a></td>
<td >Returns an object with the map of the <code>clientId:string = serverId:number</code> format</td>
</tr>
<tr>
<td ><a href="/api/rest_api/routes/POST routes/Post_projects">Post /projects</a></td>
<td >Returns a new project object with the project ID in it</td>
</tr>
<tr>
<td ><a href="/api/rest_api/routes/POST routes/Post_tasks">Post /tasks</a></td>
<td >Returns a new task object with the ID of a new task</td>
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
<td >Returns an empty promise in case tasks are successfully moved as requested</td>
</tr>
<tr>
<td ><a href="/api/rest_api/routes/PUT routes/Put_sort">Put /sort</a></td>
<td >Returns an empty promise in case tasks are sorted as requested</td>
</tr>
<tr>
<td ><a href="/api/rest_api/routes/PUT routes/Put_tasks">Put /tasks</a></td>
<td >Returns an empty promise in case a task is modified as requested</td>
</tr>
<tr>
<td><a href="/api/rest_api/routes/PUT routes/Put_projects">Put /projects</a></td><td>Returns an empty promise in case a project is modified as requested</td>
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
<td ><a href="/api/rest_api/routes/DELETE routes/Delete_tasks">Delete /tasks</a></td>
<td >Returns an empty promise object in case a task is successfully removed</td>
</tr>
<tr>
<td ><a href="/api/rest_api/routes/DELETE routes/Delete_projects">Delete /projects</a></td>
<td >Returns an empty promise object in case a project is successfully removed</td>
</tr>
</tbody>
</table>

  </TabItem>
</Tabs>