---
sidebar_label: POST /projects
title: POST /projects
description: You can learn about the POST /projects route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# POST `/projects`

### Описание {#description}

@short: Создаёт новый проект и возвращает объект проекта с его ID

Маршрут обрабатывает POST-запрос к пути `/projects`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>POST</td>
<td>/projects</td>
</tr>
</tbody>
</table>

### Payload {#payload}

Сервер должен получить json-объект с одним свойством:

| Имя       | Тип        | Описание |
| ---------- | ----------- | ----------- |
| `id`       | number      | *Необязательный*. ID нового проекта.|
| `label`    | string      | *Обязательный*. Название нового добавляемого проекта.|

Пример:

~~~json
{
    "id": 1,
    "label": "New Project"
}
~~~

### Ответ {#response}

Маршрут возвращает json-объект с ID нового проекта.

Пример:

~~~json
{
    "id": 3
}
~~~

HTTP-код статуса показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

---

**Журнал изменений:** Параметр `id` добавлен в версии v1.3

**Полезные статьи:**

- [send()](api/rest_api/methods/send_method.md)
- [addProject()](api/methods/addproject_method.md)
- [Работа с сервером](guides/working_with_server.md)
