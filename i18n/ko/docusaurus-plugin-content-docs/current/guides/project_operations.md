---
sidebar_label: 프로젝트 작업
title: 프로젝트 작업
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 프로젝트 작업에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# 프로젝트 작업 {#operations-with-projects}

## 활성 프로젝트 변경 {#changing-the-active-project}

현재 활성 프로젝트를 변경하려면 [`setProject()`](api/methods/setproject_method.md) 메서드를 사용하세요. 이 메서드는 프로젝트 id를 파라미터로 받습니다. 아래 예제는 초기화 이후 활성 프로젝트를 전환합니다:

~~~js {9,16}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", {
    projects,
    activeProject: "second"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.setProject({ id: "first" });
~~~

## 새 프로젝트 추가 {#adding-a-new-project}

새 프로젝트를 생성하려면 [`addProject()`](api/methods/addproject_method.md) 메서드를 사용하세요. 아래 코드 조각은 네 번째 프로젝트를 추가합니다:

~~~js {13-18}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.addProject({
    id: "fourth",
    project: {
        label: "Fourth project"
    }
});
~~~

## 프로젝트 업데이트 {#updating-a-project}

프로젝트의 파라미터를 동적으로 업데이트하려면 [`updateProject()`](api/methods/updateproject_method.md) 메서드를 사용하세요. 아래 예제는 프로젝트 레이블의 이름을 변경합니다:

~~~js {13-18}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.updateProject({
    id: "second",
    project: {
        label: "Project 2"
    }
});
~~~

## 프로젝트 삭제 {#deleting-a-project}

프로젝트를 제거하려면 [`deleteProject()`](api/methods/deleteproject_method.md) 메서드를 사용하세요. 아래 코드 조각은 프로젝트를 삭제합니다:

~~~js {17}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const tasks = [
    { id: "1", text: "Task 1", project: "first" },
];

const list = new ToDo("#root", { projects, tasks });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.deleteProject({ id: "first" });
~~~

:::note
프로젝트에 연결된 태스크는 삭제되지 않습니다. 해당 태스크는 *"No project"* 섹션으로 이동됩니다.

~~~js
console.log(list.getTask({id: "1"})); // -> {id: '1', text: 'Task 1', project: null}
~~~
:::
