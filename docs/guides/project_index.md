---
sidebar_label: Managing projects
title: Managing projects
description: You can learn how to manage projects in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Managing projects


:::info
To configure projects, use the [`projects`](api/configs/projects_config.md) property of To Do List.

To define what project a task will belong to, you need to pass the id of the necessary project to the **project** parameter of the related [`task`](api/configs/tasks_config.md) object

To make a certain project active on initialization of To Do List, use the [`activeProject`](api/configs/activeproject_config.md) property.
:::


The next guides will teach you how to work with the object of a project and how to implement basic operations with the projects via API.

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
