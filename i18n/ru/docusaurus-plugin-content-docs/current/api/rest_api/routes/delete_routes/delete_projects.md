---
sidebar_label: DELETE /projects
title: DELETE /projects
description: You can learn about the DELETE /projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# DELETE `/projects`

### Описание {#description}

@short: Удаляет данные проекта и возвращает пустой json-объект

:::note
Задачи, связанные с проектом, удалены не будут. Они будут перемещены в раздел *"Без проекта"*.
:::

Маршрут обрабатывает DELETE-запрос к пути `/projects/{id}`.

За один запрос можно удалить только один проект. Все задачи проекта, если они есть, также удаляются.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
<th style="width:25%">Параметр запроса</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>DELETE</td>
<td>/projects</td>
<td>id</td>
</tr>
</tbody>
</table>

### Параметры запроса {#query-parameters}

ID удаляемого проекта передаётся в строке запроса.

| Название   | Тип         | Описание |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Обязательный*. ID удаляемого проекта.|

### Тело запроса {#payload}

Тело запроса не требуется.

### Ответ {#response}

В случае успешного запроса маршрут возвращает пустой json-объект.

HTTP-код состояния показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

---

**Полезные статьи:**

- [send()](api/rest_api/methods/send_method.md)
- [deleteProject()](api/methods/deleteproject_method.md)
- [Работа с сервером](guides/working_with_server.md)
