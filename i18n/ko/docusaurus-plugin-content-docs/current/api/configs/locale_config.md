---
sidebar_label: locale
title: locale Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 locale config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# locale

### 설명 {#description}

@short: 선택 사항. 컴포넌트에 필요한 로케일을 적용합니다

### 사용법 {#usage}

~~~js
locale?: object;
~~~

### 기본 config {#default-config}

기본적으로 DHTMLX To Do List는 [영어 로케일](guides/localization.md#default-locale)을 사용합니다.

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
    locale: de // 컴포넌트에 "de" 로케일을 설정합니다
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // Toolbar에 "de" 로케일을 설정합니다 (아래 정보를 참조하세요)
});
~~~


:::info
Toolbar는 To Do List의 별도 컴포넌트입니다. 따라서 관련 [`locale`](api/toolbar_api/configs/locale_config.md) 속성을 통해 **Toolbar**에도 필요한 로케일을 적용해야 합니다
:::

:::tip
로케일을 동적으로 변경하려면 [`setLocale()`](api/methods/setlocale_method.md) 메서드를 사용하세요
:::

**관련 문서**: [지역화](guides/localization.md)

**관련 예제**: [To do list. 지역화](https://snippet.dhtmlx.com/kzjwvuq5)
