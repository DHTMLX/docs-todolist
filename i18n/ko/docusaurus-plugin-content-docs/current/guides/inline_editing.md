---
sidebar_label: 인라인 편집
title: 인라인 편집
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 인라인 편집에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 확인하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# 인라인 편집 {#inline-editing}

작업 또는 프로젝트를 더블 클릭하면 인라인으로 편집할 수 있습니다. 인라인 편집은 기본적으로 활성화되어 있습니다.

:::tip
To Do List의 [`readonly`](api/configs/readonly_config.md) 모드를 활성화하면 인라인 편집을 사용할 수 없습니다.
:::

## 지원되는 데이터 형식 {#supported-formats-of-data}

인라인 편집기는 텍스트와 숫자, 해시태그, 날짜의 세 가지 데이터 유형을 허용합니다.

### 텍스트와 숫자 {#text-and-numbers}

인라인 편집기에 텍스트나 숫자를 직접 입력하세요.

### 해시태그 {#hashtags}

해시태그를 사용하여 작업을 분류하고 검색을 더 쉽게 하세요. 다음 규칙을 따르세요:

- 해시태그는 `#` 기호와 문자 및 숫자의 조합입니다(예: `#sport`)
- 해시태그를 만들려면 `#` 다음에 하나 이상의 문자를 입력하고(예: `#t`) Enter를 누르세요
- To Do List는 무제한 수의 해시태그를 지원하며, 공백으로 구분하세요(예: `#tag #tag1`)
- 모든 해시태그는 모든 프로젝트에서 접근 가능합니다
- 해시태그 목록을 보려면 `#` 기호를 입력하세요
- 작업에 해시태그를 추가하려면 목록에서 클릭하세요
- 엄격한 필터링을 활성화하려면 해시태그를 클릭하거나 도구 모음의 검색창에 입력하세요

:::info
[`tags`](api/configs/tags_config.md) 속성을 통해 기본 태그 목록을 생성하세요.
:::

### 날짜 {#dates}

인라인 편집기를 통해 날짜를 입력하려면 `!` 기호를 입력하세요. 페이지에 내장 날짜 선택기가 표시됩니다.

특수 기호 `!()`로 텍스트를 감쌀 수도 있습니다. 예를 들어 `!(예약 날짜 입력)`을 입력하고 Enter를 눌러 편집기를 닫으세요. 나중에 이 텍스트를 클릭하면 날짜 선택기가 다시 열립니다.

:::info
날짜 외관은 [`locale`](api/configs/locale_config.md) 및 [날짜 형식](api/configs/taskshape_config.md)에 따라 달라집니다.
:::

## 편집기 사용 {#working-with-editor}

특정 작업 또는 프로젝트의 편집기를 열려면 [`openInlineEditor()`](api/methods/openinlineeditor_method.md) 메서드를 사용하세요. 아래 코드는 특정 작업의 편집기를 엽니다:

~~~js
list.openInlineEditor({ id: "1.1.1" });
~~~

편집기를 닫고 변경 사항을 저장하려면 [`closeInlineEditor()`](api/methods/closeinlineeditor_method.md) 메서드에 항목 id를 전달하세요:

~~~js
list.closeInlineEditor({
    id: "1.1.1"
});
~~~

변경 사항을 저장하지 않고 편집기를 닫으려면 `save` 매개변수를 `false`로 설정하세요. 아래 예제는 닫을 때 변경 사항을 취소합니다:

~~~js
list.closeInlineEditor({
    id: "1.1.1",
    save: false
});
~~~

## 편집기 변경 사항 추적 {#track-editor-changes}

[`edit-item`](api/events/edititem_event.md) 이벤트를 구독하여 인라인 편집기에 입력된 값을 추적하세요. 이 이벤트는 사용자가 입력할 때, 값이 저장되기 전에 발생합니다.

아래 코드는 작업 또는 프로젝트의 현재 편집기 값을 로그에 기록합니다:

~~~js
list.api.on("edit-item", ({ id, currentValue }) => {
    console.log("Current value of", id, "is", currentValue);
});
~~~

## 키보드 단축키 {#keyboard-shortcuts}

:::info
자세한 내용은 [**키보드 탐색**](guides/keyboard_navigation.md) 가이드를 참고하세요.
:::
