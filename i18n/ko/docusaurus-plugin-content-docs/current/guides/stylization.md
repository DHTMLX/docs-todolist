---
sidebar_label: 스타일 지정
title: 스타일 지정
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 To Do List 스타일 지정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---

# 스타일 지정

DHTMLX To Do List 인터페이스의 모든 부분에 스타일을 적용할 수 있습니다. 라이브러리는 **두 가지** 유형의 CSS 변수를 제공합니다.

- To Do List 스타일과 관련된 변수
- WX 라이브러리 스타일(폰트, 아이콘, 체크박스 및 기타 공통 요소)과 관련된 변수

## 기본 스타일 {#default-style}

아래 코드는 To Do List 및 WX 라이브러리에 영향을 주는 모든 CSS 변수의 기본값을 보여줍니다.

:::tip 노트
변수 이름은 버전마다 변경될 수 있습니다. 업데이트 후에는 반드시 다시 확인하세요.
:::

~~~html
<style>
    .wx-material-theme .wx-todo,
    .wx-material-theme .wx-todo_toolbar,
    .wx-material-theme .wx-todo_menu,
    .wx-material-theme.wx-portal {

    /* WX library CSS variables */

        /* base colors */
        --wx-color-primary: #2f77e3;
        --wx-color-success: #0ab169;
        --wx-color-danger: #ff5252;

        --wx-color-font: #4d4d4d;
        --wx-color-font-disabled: #b3b3b3;

        --wx-color-secondary: #808080;
        --wx-color-secondary-hover: #4d4d4d;
        --wx-color-secondary-font: #fff;
        --wx-color-secondary-light: #b3b3b3;

        --wx-background: #fff;
        --wx-background-selected: #ededed;
        /* end base colors */

        /* font */
        --wx-font-family: Roboto, Arial, Helvetica, sans-serif;
        --wx-font-size: 14px;
        --wx-font-size-s: 12px;
        --wx-font-weight: 400;
        --wx-font-weight-medium: 500;
        --wx-line-height: 20px;
        /* end font */

        /* icons */
        --wx-icon-color: var(--wx-color-secondary);
        --wx-icon-background-hover: #d4d4d4;
        /* end icons */

        /* animation */
        --wx-all-transition: all 0.2s ease-out;
        /* end animation */

        /* border */
        --wx-border-color: #dfdfdf;
        --wx-border-width: 1px;
        --wx-border-radius: 2px;
        --wx-border: var(--wx-border-width) solid var(--wx-border-color);
        /* end border */
        

        /* checkbox */
        --wx-checkbox-size: var(--wx-base-size);
        --wx-checkbox-border-size: 2px;
        --wx-checkbox-color-unchecked: var(--wx-color-secondary);
        --wx-checkbox-color-checked: var(--wx-color-success);
        /* end checkbox */
    
    /* end of WX library CSS variables */

    
    /* To Do List CSS variables */

        /* Main component */
        --wx-todo-toolbar-background: var(--wx-background);
        --wx-todo-toolbar-height: 56px;
        --wx-todo-toolbar-align: center;
        --wx-todo-toolbar-justify: flex-start;

        --wx-todo-mark-background: #ffff88;
        --wx-todo-mark-background-strict: #d4c5f9;

        --wx-todo-date-color-current: var(--wx-color-success);
        --wx-todo-date-color-expired: var(--wx-color-danger);
        --wx-todo-date-color-regular: var(--wx-color-secondary);
        /* End main component */

    /* end of To Do List CSS variables */


    /* other */
        --wx-base-size: 20px;
        --wx-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    /* end other */
    }
</style>
~~~

## 커스텀 스타일 {#custom-style}

To Do List를 커스터마이징하려면 관련 CSS 변수를 재정의합니다.

아래 코드는 To Do List에 커스텀 스타일을 적용하는 예제입니다.

<iframe src="https://snippet.dhtmlx.com/thmx9921?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 관련 문서 {#related-articles}

- [커스터마이제이션](guides/customization.md) — 사용 가능한 커스터마이제이션 옵션 개요
