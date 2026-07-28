---
sidebar_label: POST /tasks
title: POST /tasks
description: You can learn about the POST /tasks route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# POST `/tasks`

### Описание {#description}

@short: Создаёт новую задачу и возвращает объект задачи с ID новой задачи

Маршрут обрабатывает POST-запрос к пути `/tasks`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/tasks</td>
</tr>
</tbody>
</table>

### Payload {#payload}

Серверная сторона ожидает получить json-объект со следующими свойствами:

| Имя        | Тип        | Описание |
| ----------- | ----------- | ----------- |
| `id`        | number      | *Необязательный*. ID новой задачи.|
| `targetId`  | number      | *Необязательный*. ID целевой задачи, после которой будет добавлена новая задача.|
| `parent`    | number      | *Необязательный*. ID родительской задачи.|
| `project`   | number      | *Необязательный*. ID проекта, в который должна быть добавлена новая задача.|
| `reverse`   | boolean     | *Необязательный*. Определяет позицию, куда будет добавлена новая задача: `true` — задача добавляется перед целевой; в противном случае `false` (по умолчанию).|
| `task`      | object      | *Обязательный*. Объект задачи, пример которого можно найти здесь [`tasks`](api/configs/tasks_config.md).|

Пример:

~~~json
{
    "id": 26,
    "parent": 10,
    "project": 1,
    "reverse": false,
    "targetId": 10,
    "task": {
        "text": "My task",
        //...other values
    }
}
~~~

### Ответ {#response}

Маршрут возвращает json-объект с ID новой задачи.

Пример:

~~~json
{
    "id": 12
}
~~~

HTTP-код статуса показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

---

**Журнал изменений:** Параметр `id` добавлен в версии v1.3

**Полезные статьи:**
- [send()](api/rest_api/methods/send_method.md)
- [addTask()](api/methods/addtask_method.md)
- [Работа с сервером](guides/working_with_server.md)
