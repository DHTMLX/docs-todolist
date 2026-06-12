---
sidebar_label: DELETE /tasks
title: DELETE /tasks
description: You can learn about the DELETE /tasks route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# DELETE `/tasks`

### Описание {#description}

@short: Удаляет данные о задаче и возвращает пустой json-объект

Маршрут обрабатывает DELETE-запрос к пути `/tasks/{id}` или `/tasks`.

В одном запросе можно удалить одну или несколько задач. Все дочерние задачи, если они есть, также удаляются.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
<th style="width:25%">Параметр запроса</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>DELETE</td>
<td>/tasks</td>
<td>id</td>
</tr>
</tbody>
</table>

### Параметры запроса {#query-parameters}

ID удаляемой задачи передаётся в строке запроса.

| Название   | Тип         | Описание |
| ---------- | ----------- | ----------- |
| `id`       | number      | *Необязательный*. ID удаляемой задачи.|

### Тело запроса {#payload}

Сервер должен получить json-объект с одним свойством:

| Название   | Тип         | Описание |
| ---------- | ----------- | ----------- |
| `batch`    | array       | *Необязательный*. Список ID задач для удаления.|

Пример:

~~~json
{
    "batch": [1, 2, 3]
}
~~~

### Ответ {#response}

В случае успешного запроса маршрут возвращает пустой json-объект.

HTTP-код состояния показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

---

**История изменений**: Параметр тела `batch` добавлен в v1.3

**Связанные статьи**:

- [send()](api/rest_api/methods/send_method.md)
- [deleteTasks()](api/methods/deletetask_method.md)
- [Работа с сервером](guides/working_with_server.md)
