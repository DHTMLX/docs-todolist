---
sidebar_label: GET /tasks/projects
title: GET /tasks/projects
description: You can learn about the GET /tasks/projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# GET `/tasks/projects`

### Описание {#description}

@short: Получает данные о всех задачах указанного проекта и возвращает json-объект с массивом всех объектов задач для этого проекта

Маршрут обрабатывает GET-запрос к пути `/tasks/projects/{id}`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
<th style="width:25%">Параметр запроса</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>GET</td>
<td>/tasks/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### Параметры запроса {#query-parameters}

В строке запроса передаётся следующий параметр:

| Название   | Тип         | Описание |
| ---------- | ----------- | ----------- |
| `id`       |  string     | *Обязательный*. ID проекта, для которого запрашиваются задачи.|

### Тело запроса {#payload}

Тело запроса не требуется.

### Ответ {#response}

Маршрут возвращает json-объект с массивом, содержащим данные о всех задачах указанного проекта.
Пример возвращаемого объекта см. здесь: [`tasks`](api/configs/tasks_config.md).

HTTP-код состояния показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

---

**Связанные статьи**:

- [getProjectTasks()](api/rest_api/methods/getprojecttasks_method.md)
- [Работа с сервером](guides/working_with_server.md)
