---
sidebar_label: 프로젝트 객체
title: 프로젝트 객체
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 프로젝트 객체에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# 프로젝트 객체 {#project-object}

## 프로젝트 객체 가져오기 {#get-a-project-object}

프로젝트 객체를 가져오려면 [`getProject()`](api/methods/getproject_method.md) 메서드를 사용하세요. 아래 예제는 id로 프로젝트를 가져옵니다:

~~~js {13}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.getProject({ id: "first" }); // -> {id: 'first', label: 'First project'}
~~~

## 프로젝트 존재 여부 확인 {#check-if-a-project-exists}

프로젝트가 존재하는지 확인하려면 [`existsProject()`](api/methods/existsproject_method.md) 메서드를 사용하세요. 아래 코드 조각은 두 개의 id를 확인합니다:

~~~js {13-14}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.existsProject({ id: 1 }); // -> false
list.existsProject({ id: "first" }); // -> true
~~~
