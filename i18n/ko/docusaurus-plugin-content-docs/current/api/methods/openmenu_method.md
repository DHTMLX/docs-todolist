---
sidebar_label: openMenu()
title: openMenu 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 openMenu 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# openMenu()

### 설명 {#description}

@short: 지정한 좌표에서 태스크/프로젝트의 메뉴를 엽니다

### 사용법 {#usage}

~~~js
openMenu({
    id: string | number,
    type?: "task" | "user" | "project",
    coords: { x: number, y: number }
}): void;
~~~

### 파라미터 {#parameters}

- `id` - (필수) 태스크/프로젝트의 ID
- `type` - (선택) 메뉴의 유형. 세 가지 메뉴 유형이 있습니다:
  - `task` (기본값) - 태스크 메뉴
  - `user` - 사용자 메뉴
  - `project` - 프로젝트 메뉴
- `coords` - (필수) 메뉴의 x 및 y 좌표를 담은 객체:
    - `x` - (필수) x 좌표 값
    - `y` - (필수) y 좌표 값
