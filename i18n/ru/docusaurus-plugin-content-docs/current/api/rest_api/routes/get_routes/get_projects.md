---
sidebar_label: GET /projects
title: GET /projects
description: You can learn about the GET /projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# GET `/projects`

### Описание {#description}

@short: Получает данные о всех проектах и возвращает json-объект с массивом объектов проектов

Маршрут обрабатывает GET-запрос к пути `/projects`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/projects</td>
</tr>
</tbody>
</table>

### Тело запроса {#payload}

Тело запроса не требуется.

### Ответ {#response}

Маршрут возвращает json-объект с массивом всех объектов проектов.
Пример возвращаемого объекта см. в разделе [`projects`](api/configs/projects_config.md).

HTTP-код состояния показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

---

**Полезные статьи:**

- [getProjects()](api/rest_api/methods/getprojects_method.md)
- [Работа с сервером](guides/working_with_server.md)
