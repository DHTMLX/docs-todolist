---
sidebar_label: PUT /move
title: PUT /move
description: You can learn about the PUT /move route in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# PUT `/move`

### Описание {#description}

@short: Перемещает задачу в указанную позицию и возвращает пустой json-объект

Маршрут обрабатывает PUT-запрос к пути `/move/{id}`.
Подробнее о доступных операциях см. описание свойства `operation`, передаваемого в теле запроса (раздел **Payload** ниже).

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP-метод</th>
<th style="width:25%">Маршрут</th>
<th style="width:25%">Query-параметр</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>PUT</td>
<td>/move</td>
<td>id</td>
</tr>
</tbody>
</table>

### Query-параметры {#query-parameters}

Query-параметр передаётся в строке запроса:

| Имя       | Тип        | Описание |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Обязательный*. ID перемещаемой задачи. При перемещении нескольких задач значение id должно быть равно 0. |

:::info
При перемещении нескольких задач убедитесь, что `id` равен 0, иначе (если задано другое значение) будет перемещена только одна задача с этим ID.
:::

### Payload {#payload}

Сервер ожидает получить json-объект со следующими свойствами:

| Имя       | Тип        | Описание |
| ---------- | ----------- | ----------- |
| `id`       | number      |*Необязательный*. ID перемещаемой задачи. Параметр обязателен для типов операций `indent`/`unindent`.|
| `parent`   |  number     | *Необязательный*. ID родительской задачи.|
| `project`  |  number     | *Необязательный*. ID проекта, к которому относится задача.|
| `targetId` |  number     | *Необязательный*. ID целевой задачи, на место которой будет вставлена перемещаемая задача.|
| `operation`|  string     | *Обязательный*. Серверный параметр, указывающий тип операции. Доступные типы операций: "null" — перемещает задачу в указанную позицию внутри текущего проекта (см. [`"move-task"`](api/methods/movetask_method.md)), [`"indent"`](api/methods/indenttask_method.md), [`"unindent"`](api/methods/unindenttask_method.md), `"project"` — перемещает задачу в другой проект (см. [`"move-task"`](api/methods/movetask_method.md)).<br/>Если задача перемещается внутри одного проекта (operation === null), свойство operation в payload не обязательно.|
| `reverse`       | boolean   | *Необязательный*. Позиция, куда будет перемещена задача: перед целевой задачей (true) или после неё (false по умолчанию).|
| `batch`       |  object  | *Обязательный*. Массив ID всех перемещаемых задач. Если у задачи есть дочерние элементы, в объект включается только ID родительской задачи.|

Пример:

~~~json
{
  "id": 5,
  "targetId": 2,
  "reverse": false,
  "operation": null,
  "batch": null
}
~~~

Примеры различных типов операций:

<details>
  <summary>operation === null </summary>
  При перемещении одной задачи внутри текущего проекта её ID передаётся в строке запроса, а остальные свойства — в теле запроса.<br/> Если задача перемещается внутри одного проекта, свойство operation в payload не обязательно.

  Пример payload:

~~~json
{
  "targetId": 1,
  "reverse": true,
  "batch": null
}
~~~

Для перемещения нескольких задач внутри одного проекта:
- В строке запроса установите значение ID задачи равным 0
- В теле запроса добавьте свойство `batch` с ID перемещаемых задач
- Добавьте в тело запроса остальные необходимые свойства

Пример payload:

~~~json
{
  "targetId": 1,
  "reverse": true,
  "batch": [1, 2, 3]
}
~~~
</details>  

<details>
  <summary>operation === "indent" || operation === "unindent" </summary>
   При выполнении одной операции `indent/unindent` ID задачи передаётся в строке запроса, а остальные свойства — в теле запроса.

   Пример:

    ~~~json
    {
      "parent": 2,
      "targetId": 2,
      "operation": "indent"
    }
    ~~~
</details>
  
<details>
  <summary>множественные операции indent/unindent</summary>

При выполнении операции indent или unindent для нескольких задач значение `ID` в строке запроса устанавливается равным 0, а ID каждой задачи вместе с остальными параметрами должен быть перечислен в массиве `opbatch` объектов задач.

Иными словами, для перемещения нескольких задач json-объект в теле запроса должен содержать массив `opbatch` с объектами задач и данными операций.

Пример:

~~~json
{
  "opbatch": [
    {
      "id": 1,
      "parent": 3,
      "targetId": 3,
      "operation": "indent"
    },
    {
      "id": 53,
      "parent": 3,
      "targetId": 3,
      "operation": "indent"
    }
  ]
}

~~~

</details>

<details>

<summary>operation === "project"</summary>

  Для перемещения одной задачи в другой проект:

  - Передайте ID задачи как query-параметр в строке запроса<br/>
    ИЛИ<br/>
    Установите этот query-параметр равным 0 и добавьте ID задачи как значение свойства `batch` в теле запроса
  - В теле запроса:
    - Установите значение свойства `operation` равным `project`
    - Добавьте значение свойства `project` — ID проекта, в который перемещается задача
    - Добавьте ID задачи как значение свойства `batch`, если ID в строке запроса равен 0

  Пример:

~~~json
    {
    "project": 2,
    "operation": "project",
    "batch": [3]
    }
~~~

  При перемещении нескольких задач в другой проект значение `ID` в строке запроса устанавливается равным 0, а все ID задач указываются в массиве `batch`.<br/> 
  При перемещении задачи с дочерними элементами в массиве `batch` указывается только ID родительской задачи.<br/>
  Свойство `batch` может содержать любое количество ID задач.

  Пример:

~~~json
  {
    "project": 2,
    "operation": "project",
    "batch": [3, 5, 8, 9]
  }
~~~

</details>

### Ответ {#response}

HTTP-код статуса показывает, выполнен ли запрос успешно (response.status == 200) или завершился ошибкой (response.status == 500).

В случае успеха возвращается пустой json-объект.

---

**Связанные статьи**:
- [move-task](api/events/movetask_event.md)
- [send()](api/rest_api/methods/send_method.md)
- [Работа с сервером](guides/working_with_server.md)
