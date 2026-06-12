---
sidebar_label: tags
title: tags Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 tags config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# tags

### 설명 {#description}

@short: 선택 사항. 기본적으로 표시될 해시태그 배열

:::tip
해시태그 목록을 보려면 검색창이나 텍스트 에디터에서 `#`을 입력하세요
:::

### 사용법 {#usage}

~~~js
tags?: string[];
~~~

:::info
해시태그는 어떤 기호로도 시작할 수 있으며, `#` 기호는 자동으로 추가됩니다
:::

### 예제 {#example}

~~~js {8}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags: ["urgent", "normal"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**관련 문서**: 
- [데이터 로드 및 저장](guides/loading_data.md)
- [인라인 편집](guides/inline_editing.md)
