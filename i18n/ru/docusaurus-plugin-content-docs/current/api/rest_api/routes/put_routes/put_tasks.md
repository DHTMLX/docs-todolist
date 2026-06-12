---
sidebar_label: PUT /tasks
title: PUT /tasks
description: You can learn about the PUT /tasks route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# PUT `/tasks`

### Описание {#description}

@short: Обновляет данные указанной задачи (задач) и возвращает пустой json-объект

Маршрут обрабатывает PUT-запрос к пути `/tasks/{id}`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
<th style="width:25%">Query-параметр</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/tasks</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query-параметры {#query-parameters}

Query-параметр, передаваемый в строке запроса:

| Имя       | Тип        | Описание |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Обязательный*. ID обновляемой задачи.|

### Payload {#payload}

Сервер должен получить json-объект со всеми свойствами задачи (как неизменёнными, так и новыми/изменёнными).

Пример:

~~~json
{
    "text": "You can assign task performers and due dates using the menu.",
    "checked": true,
    "due_date": "2033-03-08T21:00:00Z",
    "creation_date": "2022-10-31T13:35:10.941583462+03:00",
    "project": 1,
    "assigned": [1, 2, 3, 4],
    "completion_date": "2022-10-31T10:45:20.142Z",
    "parent": 1,
}
~~~

Другой пример объекта задачи можно найти в разделе [`tasks`](api/configs/tasks_config.md).

Для обновления нескольких задач одним запросом добавьте массив объектов задач с необходимыми изменениями в свойство `batch` тела запроса.<br> В этом случае ID задачи в строке запроса также обязателен вместе со всеми параметрами задачи, предшествующими объекту `batch` в теле запроса.

Пример:

~~~json
{
    "text": "Greetings, everyone! 👋 \nI'm DHTMLX To Do List.",
    "checked": false,
    "creation_date": "2022-10-31T13:35:10.941342305+03:00",
    "project": 1,
    "due_date": "2022-10-07T21:00:00.000Z",
    "parent": 0,
    "batch": [
        {
            "text": "Select this task and then press Enter to create the task below 👇",
            "checked": false,
            "creation_date": "2022-10-31T13:35:10.941583979+03:00",
            "project": 1,
            "due_date": "2022-10-07T21:00:00.000Z",
            "parent": 0
        },
        {
            "text": "If you press Tab, this task will become a subtask. To edit it, press Ctrl (Cmd) + Enter.",
            "checked": false,
            "creation_date": "2022-10-31T13:35:10.941644198+03:00",
            "project": 1,
            "assigned": [4],
            "due_date": "2022-10-07T21:00:00.000Z",
            "parent": 0
        }
    ]
}
~~~

### Ответ {#response}
  
В случае успеха возвращается пустой json-объект.

HTTP-код статуса показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

---

**Связанные статьи**:

- [updateTask()](api/methods/updatetask_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [Работа с сервером](guides/working_with_server.md)
