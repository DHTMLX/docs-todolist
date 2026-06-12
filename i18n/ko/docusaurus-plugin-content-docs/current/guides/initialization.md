---
sidebar_label: 초기화
title: 초기화
description: DHTMLX JavaScript To Do List 초기화에 대해 문서에서 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 확인하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# 초기화 {#initialization}

페이지에 To Do List를 표시하려면 다음 단계를 따르세요:

1. [페이지에 To Do List 소스 파일 포함](#include-source-files)
2. [두 개의 컨테이너 생성](#create-containers): List용과 Toolbar용
3. [List 및 Toolbar 초기화](#initialize-to-do-list)

## 소스 파일 포함 {#include-source-files}

To Do List 패키지를 다운로드하여 프로젝트 폴더에 압축을 해제하세요. [다운로드 페이지](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml)에서 패키지를 받을 수 있습니다.

페이지에 다음 소스 파일을 포함하세요:

- *todo.js*
- *todo.css*

프로젝트 구조에 맞게 상대 경로를 조정하세요. 아래 예제는 *dist* 폴더에서 두 파일을 모두 불러옵니다:

~~~html title="index.html"
<script type="text/javascript" src="./dist/todo.js"></script>
<link rel="stylesheet" href="./dist/todo.css">
~~~

## 컨테이너 생성 {#create-containers}

To Do List 위젯은 List와 Toolbar 두 컴포넌트로 구성됩니다.

List와 Toolbar를 위한 **두 개의 컨테이너**를 생성하고 ID를 지정하세요(예: `"root"`와 `"toolbar"`). 다음 코드는 두 컨테이너를 선언합니다:

~~~html title="index.html"
<div id="toolbar"></div> <!-- Toolbar 컨테이너 (선택 사항) -->
<div id="root"></div> <!-- List 컨테이너 -->
~~~

## To Do List 초기화 {#initialize-to-do-list}

### List 초기화 {#initialize-list}

`new ToDo()` 생성자로 List를 초기화하세요. 생성자는 두 개의 매개변수를 받습니다:

- List를 배치할 컨테이너 (위에서 생성한 컨테이너)
- 구성 속성이 담긴 객체 (전체 목록은 [configs 개요](api/overview/configs_overview.md) 참고)

다음 코드는 `#root` 컨테이너 안에 List를 생성합니다:

~~~js title="index.js"
const { ToDo, Toolbar } = todo; // 전역 todo 객체를 구조 분해 할당

// List 생성
const list = new ToDo("#root", {
    // 구성 속성
});
~~~

### Toolbar 초기화 {#initialize-toolbar}

`new Toolbar()` 생성자로 Toolbar를 초기화하세요. 생성자는 두 개의 매개변수를 받습니다:

- Toolbar 컨테이너 (이전 단계에서 생성)
- 구성 속성이 담긴 객체 (전체 목록은 [toolbar 속성](category/toolbar-properties.md) 참고)

:::info
Toolbar 초기화는 선택 사항입니다. 애플리케이션에 Toolbar가 필요하지 않다면 이 단계를 건너뛰세요.
:::

아래 코드는 Toolbar를 생성하고 `api` 속성을 통해 List에 연결합니다:

~~~js {9-11} title="index.js"
const { ToDo, Toolbar } = todo; // 전역 todo 객체를 구조 분해 할당

// List 생성
const list = new ToDo("#root", {
    // 구성 속성
});

// Toolbar 생성
const toolbar = new Toolbar("#toolbar", {
    api: list.api
});
~~~

:::note
`todo` 전역을 `ToDo`와 `Toolbar`로 구조 분해하여 직접 사용하세요.

`new todo.ToDo()` 및 `new todo.Toolbar()` 생성자를 직접 호출하는 경우에는 이 단계를 건너뛰세요.
:::

## To Do List에 데이터 불러오기 {#load-data-into-to-do-list}

[데이터 불러오기](guides/loading_data.md) 문서에서 DHTMLX To Do List에 데이터를 불러오는 방법을 설명합니다.

## 예제 {#example}

<iframe src="https://snippet.dhtmlx.com/3vwlbwee?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
