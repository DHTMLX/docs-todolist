---
sidebar_label: setConfig()
title: setConfig 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 setConfig 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# setConfig()

### 설명 {#description}

@short: To Do List에 새로운 구성을 설정합니다

### 사용법 {#usage}

~~~js
setConfig(config: object): void;
~~~

### 파라미터 {#parameters}

- `config` - (필수) To Do List의 새 구성이 담긴 객체. 속성 전체 목록은 [여기](api/api_overview.md#to-do-list-properties)를 참조하세요

:::tip
메서드는 전달한 파라미터만 변경합니다. 이 메서드를 통해 To Do List에 데이터를 로드할 수도 있지만, 이 목적에는 [`parse()`](api/methods/parse_method.md) 메서드를 사용하는 것을 권장합니다.
:::

:::important
`setConfig()` 메서드는 현재 컴포넌트를 제거하고 새 컴포넌트를 초기화합니다. **Toolbar**와 함께 컴포넌트를 사용하는 경우, Toolbar는 To Do List의 내부 API를 사용하므로 **Toolbar**의 [`setConfig()`](api/toolbar_api/methods/setconfig_method.md) 메서드도 호출해야 합니다. 아래 예제를 참조하세요!
:::

### 예제 {#example}

~~~js {16-19,21-24}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ],
    activeProject: "first"
});
            
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// To Do List의 구성 변경
list.setConfig({
    activeProject: "second"
});

// Toolbar의 구성 파라미터 업데이트
toolbar.setConfig({
    api: list.api,
});
~~~
