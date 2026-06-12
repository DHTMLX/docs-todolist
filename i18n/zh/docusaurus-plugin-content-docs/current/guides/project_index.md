---
sidebar_label: 管理项目
title: 管理项目
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解如何管理项目。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 管理项目 {#managing-projects}

:::info
要配置项目，请使用 To Do List 的 [`projects`](api/configs/projects_config.md) 属性。

要将任务分配到项目，请将项目 id 传入相关 [`task`](api/configs/tasks_config.md) 对象的 `project` 参数。

要在初始化时将某个项目设为活动项目，请使用 [`activeProject`](api/configs/activeproject_config.md) 属性。
:::

以下指南介绍了项目对象及通过 API 执行的基本项目操作。

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
