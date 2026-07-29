---
sidebar_label: PUT /projects
title: PUT /projects
description: You can learn about the PUT /projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# PUT `/projects`

### Описание {#description}

@short: Обновляет данные проекта и возвращает пустой json-объект

Маршрут обрабатывает PUT-запрос к пути `/projects/{id}`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
<th style="width:25%">Query-параметр</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query-параметры {#query-parameters}

Query-параметр, передаваемый в строке запроса:

| Имя       | Тип        | Описание |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Обязательный*. ID обновляемого проекта.|

### Payload {#payload}

Сервер должен получить json-объект со всеми свойствами проекта (как неизменёнными, так и новыми/изменёнными).

Пример:

~~~json
{
    "label": "My Project"
}
~~~

Другой пример объекта проекта можно найти в разделе [`projects`](api/configs/projects_config.md).

### Ответ {#response}

В случае успеха возвращается пустой json-объект.
  
HTTP-код статуса показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

---

**Полезные статьи:**

- [updateProject()](api/methods/updateproject_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [Работа с сервером](guides/working_with_server.md)
