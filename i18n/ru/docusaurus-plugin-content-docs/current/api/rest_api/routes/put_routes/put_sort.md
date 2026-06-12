---
sidebar_label: PUT /sort
title: PUT /sort
description: You can learn about the PUT /sort route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# PUT `/sort`

### Описание {#description}

@short: Сортирует все задачи активного проекта по указанным параметрам и возвращает пустой json-объект

Маршрут обрабатывает PUT-запрос к пути `/sort/{id}`.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
<th style="width:25%">Query-параметр</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/sort</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query-параметры {#query-parameters}

Query-параметр, передаваемый в строке запроса:

| Имя       | Тип        | Описание |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Обязательный*. ID активного проекта, задачи которого будут отсортированы.|

### Payload {#payload}

Сервер ожидает получить json-объект со следующими свойствами:

| Имя       | Тип        | Описание |
| ---------- | ----------- | ----------- |
| `by`       |  string     | *Обязательный*. Поле, по которому выполняется сортировка.|
| `dir`      |  string     | *Обязательный*. Направление сортировки: "asc" или "desc".|

Пример:

~~~json
{
    "by": "due_date",
    "dir": "asc",
}
~~~

### Ответ {#response}
  
В случае успеха возвращается пустой json-объект.
HTTP-код статуса показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

---

**Связанные статьи**:
- [send()](api/rest_api/methods/send_method.md)
- [setSort()](api/methods/setsort_method.md)
- [Работа с сервером](guides/working_with_server.md)
