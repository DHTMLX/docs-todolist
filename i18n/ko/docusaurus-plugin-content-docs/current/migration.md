---
sidebar_label: 최신 버전으로 마이그레이션
title: 최신 버전으로 마이그레이션
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 최신 버전으로 마이그레이션하는 방법을 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 확인하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# 최신 버전으로 마이그레이션 {#migration-to-newer-versions}

## 1.1 -> 1.2 {#11---12}

To Do List의 [`taskShape`](api/configs/taskshape_config.md) 속성이 다음과 같이 업데이트되었습니다:

~~~js {} title="v1.2 이전"
taskShape: {
    counter: { ... },
    date: { ... },
    completed: { ... },
}
~~~

~~~js {5-8} title="v1.2부터"
taskShape: {
    counter: { ... },
    date: { ... },
    completed: { ... },
    priority: {
        cover: true,
        label: true
    }
}
~~~

To Do List의 [`tasks`](api/configs/tasks_config.md) 속성이 다음과 같이 업데이트되었습니다:

~~~js {} title="v1.2 이전"
tasks: [
    {
        id: ...,
        parent: ...,
        project: ...,
        ...,
    }, { ... }
]
~~~

~~~js {6} title="v1.2부터"
tasks: [
    {
        id: ...,
        parent: ...,
        project: ...,
        priority: 1,
        ...,
    }, { ... }
]
~~~

## 1.0 -> 1.1 {#10---11}

버전 1.1에서 [`taskShape`](api/configs/taskshape_config.md) 속성의 `selectable` 파라미터가 `completed`로 이름이 변경되었습니다. 또한 파라미터에 새로운 `taskHide` 옵션이 추가되었습니다.

~~~js {2} title="v1.1 이전"
taskShape: {
    selectable: {
        behavior: "manual"
    }
}
~~~

~~~js {2-5} title="v1.1부터"
taskShape: {
    completed: {
        behavior: "manual",
        taskHide: true
    }
}
~~~
