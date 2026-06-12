---
sidebar_label: REST-Routen-Übersicht
title: REST-Routen-Übersicht
description: Sie finden hier eine Übersicht aller REST-Routen der DHTMLX JavaScript To Do List-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# REST-Routen-Übersicht

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Diese Seite bietet eine Liste aller REST-Routen mit einer kurzen Beschreibung und Links zu Seiten mit weiteren Details.<br/> Bevor Sie sich mit den einzelnen Routen befassen, empfiehlt es sich, den Abschnitt [Arbeiten mit dem Server](guides/working_with_server.md) zu lesen.

---

:::info

Zur schnellen Navigation können Sie eine der beiden folgenden Registerkarten verwenden:

- **Routen nach Datenobjekten** – um einen Überblick zu erhalten, welche Routen für welche Operationen geeignet sind
- **Routen nach Methoden** – um einen schnellen Überblick über Routen nach HTTP-Methoden und die jeweiligen Server-Antworten zu erhalten

:::
<div style="border: solid #F8F8F8">
<Tabs>
<TabItem value="name" label="Routen nach Datenobjekten">
<Tabs>
<TabItem value="tasks" label="tasks">
<p>Verwenden Sie die folgenden Routen, um Operationen auf Aufgaben durchzuführen:</p>
<table>
<thead>
<tr>
<th>HTTP-Methode</th>
<th>Route</th>
<th>Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/tasks](api/rest_api/routes/get_routes/get_tasks.md)</td>
<td>Ruft Daten zu allen Aufgaben ab und gibt ein JSON-Objekt mit einem Array von Aufgaben-Objekten zurück</td>
</tr>
<tr>
<td>`GET`</td>
<td>[/tasks/projects](api/rest_api/routes/get_routes/get_projecttasks.md)</td>
<td>Ruft Daten zu allen Aufgaben des angegebenen Projekts ab und gibt ein JSON-Objekt mit einem Array aller Aufgaben-Objekte für dieses Projekt zurück</td>
</tr>
<tr>
<td>`POST`</td>
<td>[/tasks](api/rest_api/routes/post_routes/post_tasks.md)</td>
<td>Erstellt eine neue Aufgabe und gibt ein Aufgaben-Objekt mit der ID der neuen Aufgabe zurück</td>
</tr>
<tr>
<td>`POST`</td>
<td>[/clone](api/rest_api/routes/post_routes/post_clone.md)</td>
<td>Erstellt eine Kopie einer Aufgabe und gibt ein JSON-Objekt mit der Client-Aufgaben-ID und der duplizierten Aufgaben-ID des Servers zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/tasks](api/rest_api/routes/put_routes/put_tasks.md)</td>
<td>Aktualisiert Daten der angegebenen Aufgabe(n) und gibt ein leeres JSON-Objekt zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/move](api/rest_api/routes/put_routes/put_move.md)</td>
<td>Verschiebt eine Aufgabe an die angegebene Position und gibt ein leeres JSON-Objekt zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/sort](api/rest_api/routes/put_routes/put_sort.md)</td>
<td>Sortiert alle Aufgaben eines aktiven Projekts nach den angegebenen Parametern und gibt ein leeres JSON-Objekt zurück</td>
</tr>
<tr>
<td>`DELETE`</td>
<td>[/tasks](api/rest_api/routes/delete_routes/delete_tasks.md)</td>
<td>Löscht Daten einer Aufgabe und gibt ein leeres JSON-Objekt zurück</td>
</tr>

</tbody>
</table>
</TabItem>
<TabItem value="projects" label="projects">
<p>Verwenden Sie die folgenden Routen, um Operationen auf Projekten durchzuführen:</p>
<table>
<thead>
<tr>
<th>HTTP-Methode</th>
<th>Route</th>
<th>Beschreibung</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/projects](api/rest_api/routes/get_routes/get_projects.md)</td>
<td>Ruft Daten zu allen Projekten ab und gibt ein JSON-Objekt mit einem Array von Projekt-Objekten zurück</td>
</tr>
<tr>
<td>`POST`</td>
<td >[/projects](api/rest_api/routes/post_routes/post_projects.md)</td>
<td>Erstellt ein neues Projekt und gibt ein Projekt-Objekt mit der Projekt-ID zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/projects](api/rest_api/routes/put_routes/put_projects.md)</td><td>Aktualisiert Daten eines Projekts und gibt ein leeres JSON-Objekt zurück</td>
</tr>
<tr>
<td>`DELETE`</td>
<td>[/projects](api/rest_api/routes/delete_routes/delete_projects.md)</td>
<td>Löscht Daten eines Projekts und gibt ein leeres JSON-Objekt zurück</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="users" label="users">
<p>Verwenden Sie die folgenden Routen, um Operationen auf Benutzern durchzuführen:</p>
<table>
<thead>
<tr>
<th>HTTP-Methode</th>
<th>Route</th>
<th>Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/users](api/rest_api/routes/get_routes/get_users.md)</td>
<td>Ruft Daten zu allen Benutzern ab und gibt ein JSON-Objekt mit einem Array von Benutzer-Objekten zurück</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="tags" label="tags">
<p>Verwenden Sie die folgenden Routen, um Operationen auf Tags durchzuführen:</p>
<table>
<thead>
<tr>
<th >HTTP-Methode</th>
<th>Route</th>
<th >Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td>[/tags](api/rest_api/routes/get_routes/get_tags.md)</td>
<td>Ruft Daten zu allen Tags ab und gibt ein JSON-Objekt mit einem Array dieser Tags zurück</td>
</tr>

</tbody>
</table>
</TabItem>

</Tabs>

</TabItem>

<TabItem value="method" label="Routen nach Methoden">
<Tabs>
<TabItem value="GET" label="GET">
<table>
<thead>
<tr>
<th>Name</th>
<th>Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td>[GET /users](api/rest_api/routes/get_routes/get_users.md)</td>
<td>Gibt ein JSON-Objekt mit einem Array aller Benutzer-Objekte zurück</td>
</tr>
<tr>
<td>[GET /tasks](api/rest_api/routes/get_routes/get_tasks.md)</td>
<td>Gibt ein JSON-Objekt mit einem Array aller Aufgaben-Objekte zurück</td>
</tr>
<tr>
<td>[GET /projects](api/rest_api/routes/get_routes/get_projects.md)</td>
<td>Gibt ein JSON-Objekt mit einem Array aller verfügbaren Projekt-Objekte zurück</td>
</tr>
<tr>
<td>[GET /tags](api/rest_api/routes/get_routes/get_tags.md)</td>
<td>Gibt ein JSON-Objekt mit einem Array aller Standard-Tags zurück</td>
</tr>
<tr>
<td>[GET /tasks/projects](api/rest_api/routes/get_routes/get_projecttasks.md)</td>
<td>Gibt ein JSON-Objekt mit einem Array aller Aufgaben-Objekte für das angegebene Projekt zurück</td>
</tr>
</tbody>
</table>

</TabItem>
  
<TabItem value="POST" label="POST">   
<table>
<thead>
<tr>
<th>Name</th>
<th>Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td >[POST /clone](api/rest_api/routes/post_routes/post_clone.md)</td>
<td >Gibt ein JSON-Objekt mit der Client-Aufgaben-ID und der duplizierten Aufgaben-ID des Servers zurück.</td>
</tr>
<tr>
<td>[POST /projects](api/rest_api/routes/post_routes/post_projects.md)</td>
<td>Gibt ein neues Projekt-Objekt mit der Projekt-ID zurück</td>
</tr>
<tr>
<td>[POST /tasks](api/rest_api/routes/post_routes/post_tasks.md)</td>
<td>Gibt ein neues Aufgaben-Objekt mit der ID der neuen Aufgabe zurück</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="PUT" label="PUT">
<table>
<thead>
<tr>
<th >Name</th>
<th >Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td >[PUT /move](api/rest_api/routes/put_routes/put_move.md)</td>
<td >Gibt ein leeres JSON-Objekt zurück, wenn die Aufgaben erfolgreich wie gewünscht verschoben wurden</td>
</tr>
<tr>
<td >[PUT /sort](api/rest_api/routes/put_routes/put_sort.md)</td>
<td >Gibt ein leeres JSON-Objekt zurück, wenn die Aufgaben wie gewünscht sortiert wurden</td>
</tr>
<tr>
<td>[PUT /tasks](api/rest_api/routes/put_routes/put_tasks.md)</td>
<td>Gibt ein leeres JSON-Objekt zurück, wenn eine Aufgabe wie gewünscht geändert wurde</td>
</tr>
<tr>
<td>[PUT /projects](api/rest_api/routes/put_routes/put_projects.md)</td><td>Gibt ein leeres JSON-Objekt zurück, wenn ein Projekt wie gewünscht geändert wurde</td>
</tr>
</tbody>
</table>
</TabItem>
  
<TabItem value="DELETE" label="DELETE">
<table>
<thead>
<tr>
<th >Name</th>
<th >Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td>[DELETE /tasks](api/rest_api/routes/delete_routes/delete_tasks.md)</td>
<td>Gibt ein leeres JSON-Objekt zurück, wenn eine Aufgabe erfolgreich entfernt wurde</td>
</tr>
<tr>
<td >[DELETE /projects](api/rest_api/routes/delete_routes/delete_projects.md)</td>
<td >Gibt ein leeres JSON-Objekt zurück, wenn ein Projekt erfolgreich entfernt wurde</td>
</tr>
</tbody>
</table>

</TabItem>
</Tabs>

</TabItem>
</Tabs>
</div>
