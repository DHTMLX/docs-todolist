---
sidebar_label: parse()
title: parse 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 parse 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# parse()

### 설명 {#description}

@short: To Do List에 데이터를 로드합니다

### 사용법 {#usage}

~~~js
parse({
    tasks?: [],
    users?: [],
    projects?: [],
    tags?: [],
    priorities?: [],
    activeProject?: string
}): void;
~~~

### 매개변수 {#parameters}

- [`tasks`](api/configs/tasks_config.md) - (선택) 태스크 데이터 객체 배열
- [`users`](api/configs/users_config.md) - (선택) 사용자 데이터 객체 배열
- [`projects`](api/configs/projects_config.md) - (선택) 프로젝트 데이터 객체 배열
- [`tags`](api/configs/tags_config.md) - (선택) 태그 목록을 담은 배열
- [`priorities`](api/configs/priorities_config.md) - (선택) 우선순위 데이터 객체 배열
- [`activeProject`](api/configs/activeproject_config.md) - (선택) 활성 프로젝트의 ID

### 예제 {#example}

~~~js {3,10-14}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 준비된 데이터를 컴포넌트에 파싱합니다
list.parse({
    tasks,
    users,
    projects,
});
~~~

**관련 문서:** [데이터 로드 및 저장](guides/loading_data.md)
