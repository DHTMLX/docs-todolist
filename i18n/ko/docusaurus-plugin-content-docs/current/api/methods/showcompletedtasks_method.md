---
sidebar_label: showCompletedTasks()
title: showCompletedTasks 메서드
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 showCompletedTasks 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# showCompletedTasks()

### 설명 {#description}

@short: To Do List를 완료된 작업이 페이지에 표시되는 모드로 전환합니다

### 사용법 {#usage}

~~~js
showCompletedTasks(): void;
~~~


### 예시 {#example}

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

list.showCompletedTasks(); 
~~~

**변경 로그**: v1.1에서 추가됨

**관련 문서**: [완료된 작업 표시/숨기기](guides/hide_completed_tasks.md)
