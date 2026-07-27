---
sidebar_label: serialize()
title: serialize 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 serialize 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# serialize()

### 설명 {#description}

@short: To Do List의 데이터를 JSON 객체로 직렬화합니다

### 사용법 {#usage}

~~~js
serialize(): object;
~~~

### 반환값 {#returns}

메서드는 To Do List의 직렬화된 데이터를 반환합니다

~~~js
{
    tasks: [],
    users: [],
    projects: [],
    tags: [],
    priorities: [],
    activeProject: string,
}
~~~

### 예제 {#example}

~~~js {12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});

// To Do List의 데이터가 담긴 객체를 가져옵니다
list.serialize();
~~~

**관련 문서:** [데이터 로드 및 저장](guides/loading_data.md)
