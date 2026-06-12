---
sidebar_label: click-menu-item
title: click-menu-item 이벤트
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 click-menu-item 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# click-menu-item

### 설명 {#description}

@short: 사용자가 메뉴 항목을 클릭할 때 발생합니다

### 사용법 {#usage}

~~~js
"click-menu-item": ({
    id: string | number,
    type: "task" | "user" | "toolbar",
    action: string,
    params?: any
}) => void;
~~~

### 매개변수 {#parameters}

`click-menu-item` 이벤트의 콜백은 다음 매개변수를 포함한 객체를 받을 수 있습니다:

- `id` - (필수) 작업의 ID
- `type` - (필수) 메뉴의 유형
- `action` - (필수) 클릭된 메뉴 항목의 ID
- `params` - (선택) 클릭된 메뉴 항목의 추가 데이터
