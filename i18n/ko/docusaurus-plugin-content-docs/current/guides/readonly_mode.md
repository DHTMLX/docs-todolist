---
sidebar_label: 읽기 전용 모드
title: 읽기 전용 모드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 읽기 전용 모드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# 읽기 전용 모드 {#read-only-mode}

To Do List를 읽기 전용으로 만들려면 [`readonly`](api/configs/readonly_config.md) 구성 속성을 `true`로 설정하세요. 아래 예제는 읽기 전용 모드로 To Do List를 초기화합니다:

~~~js {8}
const { ToDo, Toolbar } = todo;

// To Do List 생성
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

:::info
이 모드에서는 태스크를 편집할 수 없습니다. 사용자는 태스크를 선택하거나 완료 또는 미완료로 표시하는 것만 가능합니다.
:::

## 예제 {#example}

아래 라이브 코드 조각은 읽기 전용 모드를 보여줍니다:

<iframe src="https://snippet.dhtmlx.com/ru1q1p7y?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="520"></iframe>
