---
sidebar_label: 프로젝트 관리
title: 프로젝트 관리
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 프로젝트 관리 방법에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# 프로젝트 관리 {#managing-projects}

:::info
프로젝트를 구성하려면 To Do List의 [`projects`](api/configs/projects_config.md) 속성을 사용하세요.

태스크를 프로젝트에 할당하려면 관련 [`task`](api/configs/tasks_config.md) 객체의 `project` 파라미터에 프로젝트 id를 전달하세요.

초기화 시 프로젝트를 활성 상태로 설정하려면 [`activeProject`](api/configs/activeproject_config.md) 속성을 사용하세요.
:::

이 가이드는 프로젝트 객체와 API를 통한 기본 프로젝트 작업을 다룹니다.

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
