---
sidebar_label: To Do List overview
title: DHTMLX To Do List overview
slug: /
description: description
---

# DHTMLX To Do List overview

‍A to-do list is an organized way of maintaining the tasks you need to complete instead of relying on your memory. Whether you have general to-do’s or tasks around a particular project it’s important to keep track of what’s been completed, what’s in progress, and what’s remaining to be completed.

A to-do list helps you prioritize your task and gives you an action plan for the day. In this way, you always know what you need to do at what point in time. Planning your day with a to-do list helps you know exactly what you are doing, at what time and for how long on any given day.

Use a to do list in JavaScript/HTML 5 to manage and prioritize your tasks. Hook the component up to DHTMLX Gantt
and allow users to quickly organize their business processes in a simple and intuitive way.

https://dhtmlx.com/docs/products/dhtmlxTodo/


Создавать неограниченное количество задач и подзадач 

The tasks can be written down anywhere and can be later dragged and dropped into other lists.

unlimited tasks

assign a task to multiple people
assign a task to someone


Key codes:
В режиме выключенного редактора элемента

Editing mode is disabled for an item

 escape - Закрывает menu элемента, если оно открыто в момент нажатия;
 closes the menu if it is opened for the item

 enter - Создает новую задачу на одном уровне с той, на которой был предыдущий выбор. Переводит выбор на созданную задачу, открывает встроенный редактор;
 creates a new task on the same level as the selected one, moves selection to the created task and opens the editor

 space - Отмечает элемент как выполненный/не выполненный в зависимости от первоначального состояния;
marks the item as complete or incomplete depending on the initial state


 delete/backspace - Удаляет выбранный элемент. Если элемент является дочерним, то выбор переходит на элемент ниже, либо выше, до тех пор пока не достигнет родителя. В обычном режиме после удаления выбор перемещается на элемент ниже, находящийся на одном уровне, при отсутствии такого элемента, на элемент выше;
removes the selected item. When removing a child item, moves the selection down/up until it reaches the parent item. When removing the parent item, moves the selection down to the next parent item if it's exist; otherwise, moves the selection up to the previous parent item.


 arrowup - Перемещает выбор на элемент выше;
 moves the selection up to the previous item

 arrowdown - Перемещает выбор на элемент ниже;
 moves the selection down to the next item

 arrowright - Открывает свернутый родительский элемент;

expands the collapsed parent item

 arrowleft - Закрывает открытый родительский элемент. Либо переводит выбор элемента на родительский, если элемент свернут либо не имеет дочерних элементов;

collapses the expanded parent item. If the item is already collapsed or does not have child items, moves selection to the parent item.

 ctrl+arrowup - Позволяет перемещать элемент вверх на одном уровне;
moves the item up within the same level

 ctrl+arrowdown - Позволяет перемещать элемент вниз на одном уровне;
moves the item down within the same level

tab - Позволяет поднять уровень вложенности элемента до максимально возможного;
increases the nesting level of the item (up to the maximum possible level)

 shift+tab - Позволяет опустить уровень вложенности элемента до минимально возможного;
decreases the nesting level of the item (up to the minimum possible level)

 ctrl+enter - Открывает встроенный редактор элемента;
 opens the editor in the selected item

 ctrl+d - Дублирует выбранный элемент на одном уровне;
duplicates the selected item at the same level

ctrl+c - Копирует в буфер выбранный элемент, включая все дочерние элементы;
Copies the selected item into the clipboard, including all child items


ctrl+v - Вставляет скопированные элементы на один уровень с выбранным на данный момент элементом (буквально вставить можно на любой уровень, структура скопированного элемента сохраняется).

Pastes the copied items to the same level as the currently selected item. It is possible to paste a copied item to any level, the structure of the copied item is saved 

В режиме включенного редактора элемента
Editing mode is enabled for an item

 escape - Закрывает встроенный редактор без сохранения изменений;
 closes the editor without saving any changes you've made

 enter - Закрывает встроенный редактор с сохранением изменений;
  closes the editor and saves the changes
 shift+enter - Создает новый параграф.
 creates a new paragraph




 Indenting and outdenting

Select the items you want to indent or outdent in the timeline list.

Select Indent or Outdent from the menu by clicking the right mouse button over a task in the list.
Press Tab on the keyboard to indent or press Shift + Tab on the keyboard to outdent.

https://help.perforce.com/hansoft/current/user/Content/user/indenting-outdenting-items.htm