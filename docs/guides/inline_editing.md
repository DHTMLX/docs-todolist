---
sidebar_label: Inline editing
title: Inline editing
description: descr
---

# Inline editing

Inline editing lets you edit the content of a task/project directly by double-clicking on it. The functionality is enabled by default.

```todo change
But if you disable editing of all tasks via the [readonly] property 

```

To open the editor for a particular task/project, use the [openInlineEditor()](../../api/methods/openinlineeditor_method/) method:

~~~js
~~~

To close the editor after finishing the editing of the item and save the made changes, pass the ID of the item to the [closeInlineEditor()](../../api/methods/closeinlineeditor_method/) method. 

~~~js
~~~

If you don't need to save the changes after closing the editor, set the second **save** parameter of the method to *false*:

~~~js
~~~~

