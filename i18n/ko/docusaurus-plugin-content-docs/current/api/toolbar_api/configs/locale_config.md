---
sidebar_label: locale
title: locale Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 Toolbar의 locale config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List 무료 30일 평가판을 다운로드하세요.
---

# locale

### 설명 {#description}

@short: 선택 사항. Toolbar에 필요한 로케일을 적용합니다

### 사용법 {#usage}

~~~js
locale?: object;
~~~

### 기본 설정 {#default-config}

기본적으로 DHTMLX To Do List의 Toolbar는 [영어 로케일](guides/localization.md#default-locale)을 사용합니다.

~~~js
locale: en
~~~


### 예제 {#example}

~~~js {8,13}
const { ToDo, Toolbar} = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    locale: de // To Do List 컴포넌트에 "de" 로케일 설정 (아래 정보 참조)
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // Toolbar에 "de" 로케일 설정
});
~~~


:::info
Toolbar는 To Do List의 별도 컴포넌트입니다. Toolbar에 로케일을 적용하기 전에 **To Do List**에 먼저 로케일을 적용했는지 확인하세요
:::

:::tip
로케일을 동적으로 변경하려면 [`setLocale()`](api/toolbar_api/methods/setlocale_method.md) 메서드를 사용하세요
:::

**관련 문서**: [지역화](guides/localization.md)
