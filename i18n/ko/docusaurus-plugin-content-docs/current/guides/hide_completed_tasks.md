---
sidebar_label: 완료된 작업 숨기기
title: 완료된 작업 표시/숨기기
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 완료된 작업을 숨기거나 표시하는 방법을 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 확인하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# 완료된 작업 표시/숨기기 {#showhide-completed-tasks}

## 초기 모드 {#initial-mode}

To Do List에는 두 가지 작업 표시 모드가 있습니다:

- 모든 작업 표시(*기본값*)
- 완료된 작업 숨기기

시작 시 완료된 작업을 숨겨 사용자가 미완료 작업에 집중할 수 있도록 하세요. `taskShape.completed.taskHide`를 `true`로 설정합니다. 자세한 내용은 [`taskShape`](api/configs/taskshape_config.md) 레퍼런스를 참고하세요. 아래 예제는 초기화 시 완료된 작업을 숨깁니다:

~~~js {6}
const list = new ToDo("#root", {
    tasks,
    taskShape: {
        completed: {
            behavior: "manual",
            taskHide: true
        }
    }
});
~~~

## 모드 전환 {#switching-between-modes}

초기화 이후 두 가지 방법으로 모드를 전환할 수 있습니다:

- [도구 모음 메뉴](/#toolbar)의 **완료된 작업 → 표시/숨기기** 옵션을 통해
- [`hideCompletedTasks()`](api/methods/hidecompletedtasks_method.md) 및 [`showCompletedTasks()`](api/methods/showcompletedtasks_method.md) 메서드를 통해

아래 코드는 런타임에서 완료된 작업을 숨기거나 표시하는 방법을 보여줍니다:

~~~js
list.hideCompletedTasks();
// 또는
list.showCompletedTasks();
~~~
