---
sidebar_label: POST /clone
title: POST /clone
description: You can learn about the POST /clone route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# POST `/clone`

### Описание {#description}

@short: Создаёт копию задачи и возвращает json-объект с клиентским ID задачи и ID дублированной задачи на сервере

Маршрут обрабатывает POST-запрос к пути `/clone`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/clone</td>
</tr>
</tbody>
</table>

После получения запроса на сервере создаются следующие объекты:

- дубликаты клонируемых задач
- карта соответствий *клиентский ID задачи: ID дублированной задачи* для каждой клонируемой задачи

### Payload {#payload}

Сервер должен получить json-объект со следующими свойствами:

| Имя       | Тип        | Описание |
| ----------- | ----------- | ----------- |
| `targetId`       |  number   | *Необязательный*. ID целевой задачи, после которой будет добавлена клонированная задача.|
| `parent`       |  number   | *Необязательный*. ID родительской задачи.|
| `project`       |  number   | *Необязательный*. ID проекта, в который должна быть добавлена новая задача.|
| `batch`       |  object | *Обязательный*. Массив объектов всех клонируемых задач. Если у задачи есть дочерние элементы, они должны быть включены в объект.|

За один запрос обрабатываются только задачи с одинаковым ID родителя/ID проекта.

Пример:

~~~json
{
    "parent": null,
    "targetId": 18,
    "batch": [
        {
            "text": "If you press Tab, this task will become a subtask. To edit it, press Ctrl (Cmd) + Enter.",
            "checked": false,
            "due_date": "2022-10-07T21:00:00Z",
            "creation_date": "2022-10-31T11:20:04.171Z",
            "project": 1,
            "assigned": [4],
            "id": "temp://1667215197027",
            "parent": null
        },
        {
            "text": "You can create tasks with an infinite number of subtasks.",
            "checked": false,
            "creation_date": "2022-10-31T11:20:04.173Z",
            "project": 1,
            "assigned": [4],
            "id": "temp://1667215197028",
            "parent": null
        },
        {
            "text": "Use the Tab and Shift + Tab keys for this.",
            "checked": false,
            "creation_date": "2022-10-31T11:20:04.174Z",
            "parent": "temp://1667215197028",
            "project": 1,
            "id": "temp://1667215197029"
        }
    ]
}
~~~

### Ответ {#response}

Маршрут возвращает json-объект с клиентским ID задачи и ID дублированной задачи на сервере.<br>
Клиентские ID задач — это временные ID, полученные в запросах; значениями являются новые ID задач, сгенерированные при сохранении данных.

Пример:

~~~json
{
    //"clientId": serverId,
    "temp://1667215197027": 62,
    "temp://1667215197028": 63,
    "temp://1667215197029": 65,
    //...
}
~~~

HTTP-код статуса показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

---

**Связанные статьи**:
- [clone-task](api/events/clonetask_event.md)
- [copyTask()](api/methods/copytask_method.md)
- [pasteTask()](api/methods/pastetask_method.md)
- [send()](api/rest_api/methods/send_method.md)
- [Работа с сервером](guides/working_with_server.md)
