---
sidebar_label: hideCompletedTasks()
title: hideCompletedTasks 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 hideCompletedTasks 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# hideCompletedTasks()

### 설명 {#description}

@short: 완료된 태스크를 페이지에서 숨기는 모드로 To Do List를 전환합니다

### 사용법 {#usage}

~~~js
hideCompletedTasks(): void;
~~~


### 예제 {#example}

~~~js {13}
const { ToDo, Toolbar } = todo;
const { task, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.hideCompletedTasks(); 
~~~

**변경 로그**: v1.1에서 추가됨

**관련 문서**: [완료된 태스크 표시/숨기기](guides/hide_completed_tasks.md)
