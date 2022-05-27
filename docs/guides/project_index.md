---
sidebar_label: Managing projects
title: Managing projects
description: descr
---

# Managing projects


:::info
To configure projects, use the [projects](api/configs/projects_config/) property of To do list.

To define what project a task will belong to, you need to pass the id of the necessary project to the **project** parameter of the related [task](api/configs/tasks_config.md) object

To make a certain project active on initialization of To do list, use the [activeProject](../../api/configs/activeproject_config/) property.
:::


The next guides will teach you how to work with the object of a project and how to implement basic operations with the projects via API.

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
