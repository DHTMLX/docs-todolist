---
sidebar_label: getParentIds()
title: getParentIds 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 getParentIds 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수 있습니다.
---

# getParentIds()

### 설명 {#description}

@short: 지정한 하위 작업의 부모 작업 ID를 반환합니다


### 사용법 {#usage}

~~~js
getParentIds({
    id: string | number
}): (string|number)[];
~~~

### 매개변수 {#parameters}

- `id` - (필수) 작업의 ID

### 반환값 {#returns}

이 메서드는 부모 항목 ID 배열을 반환합니다

### 예제 {#example}

~~~js {20}
const { ToDo, Toolbar } = todo;
const { users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 작업의 부모 항목 가져오기
console.log(list.getParentIds({ id: "1.1.1" })); //  ['1.1', '1']
~~~

**관련 문서:** [작업 객체/Id](guides/task_object.md)
