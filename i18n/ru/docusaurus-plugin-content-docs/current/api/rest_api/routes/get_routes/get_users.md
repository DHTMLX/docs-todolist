---
sidebar_label: GET /users
title: GET /users
description: You can learn about the GET /users route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# GET `/users`

### Описание {#description}

@short: Получает данные о всех пользователях и возвращает json-объект с массивом объектов пользователей

Маршрут обрабатывает GET-запрос к пути `/users`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/users</td>
</tr>
</tbody>
</table>

### Тело запроса {#payload}

Тело запроса не требуется.

### Ответ {#response}

Маршрут возвращает json-объект с массивом всех объектов пользователей. <br/> 
Пример объекта пользователей см. в разделе [`users`](api/configs/users_config.md). <br/> 
HTTP-код состояния показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

---

**Полезные статьи:**

- [getUsers()](api/rest_api/methods/getusers_method.md)
- [Работа с сервером](guides/working_with_server.md)
