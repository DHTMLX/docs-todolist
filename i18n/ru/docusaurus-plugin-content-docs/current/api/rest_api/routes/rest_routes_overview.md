---
sidebar_label: Обзор REST-маршрутов
title: Обзор REST-маршрутов
description: You can have the REST routes overview of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Обзор REST-маршрутов {#rest-routes-overview}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

На этой странице представлен список всех REST-маршрутов с кратким описанием и ссылками на страницы с подробной информацией.<br> Перед изучением каждого маршрута рекомендуется ознакомиться с разделом [Работа с сервером](guides/working_with_server.md).

---

:::info

Для быстрой навигации можно использовать одну из двух вкладок ниже:

- **Маршруты по объектам данных** — чтобы понять, какие маршруты использовать для каких операций
- **Маршруты по методам** — для быстрого ознакомления с маршрутами по HTTP-методам и данными, которые возвращает сервер

:::
<div style="border: solid #F8F8F8">
<Tabs>
<TabItem value="name" label="Маршруты по объектам данных">
<Tabs>
<TabItem value="tasks" label="tasks">
<p>Используйте следующие маршруты для выполнения операций с задачами:</p>
<table>
<thead>
<tr>
<th>HTTP-метод</th>
<th>Маршрут</th>
<th>Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/tasks](api/rest_api/routes/get_routes/get_tasks.md)</td>
<td>Получает данные о всех задачах и возвращает json-объект с массивом объектов задач</td>
</tr>
<tr>
<td>`GET`</td>
<td>[/tasks/projects](api/rest_api/routes/get_routes/get_projecttasks.md)</td>
<td>Получает данные о всех задачах указанного проекта и возвращает json-объект с массивом всех объектов задач для этого проекта</td>
</tr>
<tr>
<td>`POST`</td>
<td>[/tasks](api/rest_api/routes/post_routes/post_tasks.md)</td>
<td>Создаёт новую задачу и возвращает объект задачи с ID новой задачи</td>
</tr>
<tr>
<td>`POST`</td>
<td>[/clone](api/rest_api/routes/post_routes/post_clone.md)</td>
<td>Создаёт копию задачи и возвращает json-объект с клиентским ID задачи и ID дублированной задачи на сервере</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/tasks](api/rest_api/routes/put_routes/put_tasks.md)</td>
<td>Обновляет данные указанной задачи (задач) и возвращает пустой json-объект</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/move](api/rest_api/routes/put_routes/put_move.md)</td>
<td>Перемещает задачу в указанную позицию и возвращает пустой json-объект</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/sort](api/rest_api/routes/put_routes/put_sort.md)</td>
<td>Сортирует все задачи активного проекта по указанным параметрам и возвращает пустой json-объект</td>
</tr>
<tr>
<td>`DELETE`</td>
<td>[/tasks](api/rest_api/routes/delete_routes/delete_tasks.md)</td>
<td>Удаляет данные о задаче и возвращает пустой json-объект</td>
</tr>

</tbody>
</table>
</TabItem>
<TabItem value="projects" label="projects">
<p>Используйте следующие маршруты для выполнения операций с проектами:</p>
<table>
<thead>
<tr>
<th>HTTP-метод</th>
<th>Маршрут</th>
<th>Описание</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/projects](api/rest_api/routes/get_routes/get_projects.md)</td>
<td>Получает данные о всех проектах и возвращает json-объект с массивом объектов проектов</td>
</tr>
<tr>
<td>`POST`</td>
<td >[/projects](api/rest_api/routes/post_routes/post_projects.md)</td>
<td>Создаёт новый проект и возвращает объект проекта с ID проекта</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/projects](api/rest_api/routes/put_routes/put_projects.md)</td><td>Обновляет данные проекта и возвращает пустой json-объект</td>
</tr>
<tr>
<td>`DELETE`</td>
<td>[/projects](api/rest_api/routes/delete_routes/delete_projects.md)</td>
<td>Удаляет данные проекта и возвращает пустой json-объект</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="users" label="users">
<p>Используйте следующие маршруты для выполнения операций с пользователями:</p>
<table>
<thead>
<tr>
<th>HTTP-метод</th>
<th>Маршрут</th>
<th>Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/users](api/rest_api/routes/get_routes/get_users.md)</td>
<td>Получает данные о всех пользователях и возвращает json-объект с массивом объектов пользователей</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="tags" label="tags">
<p>Используйте следующие маршруты для выполнения операций с тегами:</p>
<table>
<thead>
<tr>
<th >HTTP-метод</th>
<th>Маршрут</th>
<th >Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/tags](api/rest_api/routes/get_routes/get_tags.md)</td>
<td>Получает данные о всех тегах и возвращает json-объект с массивом этих тегов</td>
</tr>

</tbody>
</table>
</TabItem>

</Tabs>

</TabItem>

<TabItem value="method" label="Маршруты по методам">
<Tabs>
<TabItem value="GET" label="GET">
<table>
<thead>
<tr>
<th>Название</th>
<th>Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td>[GET /users](api/rest_api/routes/get_routes/get_users.md)</td>
<td>Возвращает json-объект с массивом всех объектов пользователей</td>
</tr>
<tr>
<td>[GET /tasks](api/rest_api/routes/get_routes/get_tasks.md)</td>
<td>Возвращает json-объект с массивом всех объектов задач</td>
</tr>
<tr>
<td>[GET /projects](api/rest_api/routes/get_routes/get_projects.md)</td>
<td>Возвращает json-объект с массивом всех доступных объектов проектов</td>
</tr>
<tr>
<td>[GET /tags](api/rest_api/routes/get_routes/get_tags.md)</td>
<td>Возвращает json-объект с массивом всех тегов по умолчанию</td>
</tr>
<tr>
<td>[GET /tasks/projects](api/rest_api/routes/get_routes/get_projecttasks.md)</td>
<td>Возвращает json-объект с массивом всех объектов задач для указанного проекта</td>
</tr>
</tbody>
</table>

</TabItem>
  
<TabItem value="POST" label="POST">   
<table>
<thead>
<tr>
<th>Название</th>
<th>Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td >[POST /clone](api/rest_api/routes/post_routes/post_clone.md)</td>
<td >Возвращает json-объект с клиентским ID задачи и ID дублированной задачи на сервере.</td>
</tr>
<tr>
<td>[POST /projects](api/rest_api/routes/post_routes/post_projects.md)</td>
<td>Возвращает новый объект проекта с ID проекта</td>
</tr>
<tr>
<td>[POST /tasks](api/rest_api/routes/post_routes/post_tasks.md)</td>
<td>Возвращает новый объект задачи с ID новой задачи</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="PUT" label="PUT">
<table>
<thead>
<tr>
<th >Название</th>
<th >Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td >[PUT /move](api/rest_api/routes/put_routes/put_move.md)</td>
<td >Возвращает пустой json-объект, если задачи успешно перемещены в соответствии с запросом</td>
</tr>
<tr>
<td >[PUT /sort](api/rest_api/routes/put_routes/put_sort.md)</td>
<td >Возвращает пустой json-объект, если задачи отсортированы в соответствии с запросом</td>
</tr>
<tr>
<td>[PUT /tasks](api/rest_api/routes/put_routes/put_tasks.md)</td>
<td>Возвращает пустой json-объект, если задача изменена в соответствии с запросом</td>
</tr>
<tr>
<td>[PUT /projects](api/rest_api/routes/put_routes/put_projects.md)</td><td>Возвращает пустой json-объект, если проект изменён в соответствии с запросом</td>
</tr>
</tbody>
</table>
</TabItem>
  
<TabItem value="DELETE" label="DELETE">
<table>
<thead>
<tr>
<th >Название</th>
<th >Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td>[DELETE /tasks](api/rest_api/routes/delete_routes/delete_tasks.md)</td>
<td>Возвращает пустой json-объект, если задача успешно удалена</td>
</tr>
<tr>
<td >[DELETE /projects](api/rest_api/routes/delete_routes/delete_projects.md)</td>
<td >Возвращает пустой json-объект, если проект успешно удалён</td>
</tr>
</tbody>
</table>

</TabItem>
</Tabs>

</TabItem>
</Tabs>
</div>
