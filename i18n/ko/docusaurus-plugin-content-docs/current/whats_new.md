---
sidebar_label: 새로운 기능
title: 새로운 기능
description: DHTMLX JavaScript To Do List 라이브러리의 새로운 정보를 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 확인하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# 새로운 기능 {#whats-new}

이전 버전에서 To Do List를 업데이트하는 경우 자세한 내용은 [최신 버전으로 마이그레이션](migration.md)을 확인하세요.

## 버전 1.3.2 {#version-132}

2026년 6월 10일 출시

### 수정 사항 {#fixes}

- 사용자 정의 메뉴 아이콘이 올바르게 표시되지 않는 문제
- 작업 ID가 동기화되지 않는 문제: 작업 생성 및 복제 시 UI에서 임시 ID가 서버 측 ID로 교체되지 않는 문제
- 프로젝트 삭제 시 작업 편집기와 활성 메뉴가 닫히지 않는 문제

## 버전 1.3.1 {#version-131}

2025년 4월 3일 출시

### 수정 사항 {#fixes-131}

- 빌드에 가져온 라이브러리의 *todo.es.d.ts* 및 *todo.d.ts* 파일이 포함되지 않는 문제

## 버전 1.3 {#version-13}

2025년 2월 27일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-3/)

### 새로운 기능 {#new-functionality}

- [`history`](api/configs/history_config.md) 속성과 [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) 메서드를 통해 개별 프로젝트 또는 전체 앱에서 변경 이력을 관리할 수 있습니다
- [`menu`](api/configs/menu_config.md) 속성을 통해 컨텍스트 메뉴를 커스터마이징할 수 있습니다 ([예제](https://snippet.dhtmlx.com/slpjstbb))

### 새로운 API {#new-api}

- [`history`](api/configs/history_config.md) 속성을 사용하면 개별 프로젝트 또는 전체 앱에서 변경 이력을 활성화/비활성화하고 저장되는 작업 수를 제한할 수 있습니다
- [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) 메서드를 사용하면 변경 이력을 관리할 수 있습니다
- [`menu`](api/configs/menu_config.md) 속성을 사용하면 컨텍스트 메뉴를 커스터마이징할 수 있습니다 ([예제](https://snippet.dhtmlx.com/cmfqmg00))

### 업데이트 {#updates}

- [`getState()`](api/internal/getstate_method.md)와 [`getReactiveState()`](api/internal/getreactivestate_method.md) 메서드가 `historyState` 객체를 반환합니다
- Toolbar의 [`items`](api/toolbar_api/configs/items_config.md) 속성에 변경 이력 관리 컨트롤을 표시할 수 있는 `"undo"` 및 `"redo"` 파라미터가 추가되었습니다
- `POST` [`/tasks`](api/rest_api/routes/post_routes/post_tasks.md)와 [`/projects`](api/rest_api/routes/post_routes/post_projects.md) 라우트에 백엔드에서 이력 변경을 관리할 수 있는 `id` 파라미터가 추가되었습니다
- `DELETE` [`/tasks`](api/rest_api/routes/delete_routes/delete_tasks.md) 라우트에 `batch` 페이로드가 추가되었습니다. 삭제할 작업과 관련된 `id` 파라미터는 이제 선택 사항입니다. 여러 작업을 한 번에 삭제할 수 있습니다

### 수정 사항 {#fixes-13}

- 부주의한 드래그로 인해 창 전체에 복제본이 남는 문제
- 다른 프로젝트로 전환한 후 새 프로젝트의 작업이 표시되지 않는 문제
- 마감일의 달력 팝업이 외부 클릭 시 닫히지 않는 문제

## 버전 1.2.12 {#version-1212}

2024년 11월 15일 출시

### 수정 사항 {#fixes-1212}

- 외부 클릭 시 메뉴가 숨겨지지 않는 문제

## 버전 1.2.10 {#version-1210}

2024년 9월 19일 출시

### 수정 사항 {#fixes-1210}

- RestDataProvider API. 서버로 전송 전에 배열에 저장된 임시 ID의 잘못된 처리 문제

## 버전 1.2.9 {#version-129}

2024년 8월 26일 출시

### 수정 사항 {#fixes-129}

- 빈 프로젝트 정렬 시 스크립트 오류
- 터치 디바이스에서 하위 메뉴가 작동하지 않는 문제
- `api` 객체의 잘못된 타입 문제

## 버전 1.2.8 {#version-128}

2024년 2월 29일 출시

### 수정 사항 {#fixes-128}

- npm 서버에서 빌드가 손상된 문제

## 버전 1.2.7 {#version-127}

2024년 2월 6일 출시

### 수정 사항 {#fixes-127}

- 프로젝트 이름 변경 시 Enter 키 입력 문제
- 프로젝트 검색 시 Enter 키 입력 문제
- 복합 위젯과 함께 사용 시 wx 스타일이 재정의되는 문제. 자세한 내용은 [스타일리제이션](guides/stylization.md) 가이드를 참조하세요

## 버전 1.2.5 {#version-125}

2023년 12월 7일 출시

### 수정 사항 {#fixes-125}

- 사용되지 않는 메뉴 항목을 호출할 때 스크립트 오류가 발생하는 문제

## 버전 1.2.4 {#version-124}

2023년 12월 7일 출시

### 수정 사항 {#fixes-124}

- 새 프로젝트 간에 항목을 이동할 수 없는 문제

## 버전 1.2.3 {#version-123}

2023년 9월 13일 출시

### 업데이트 {#updates-123}

- ES 모듈로 컴포넌트 가져오기 기능 추가

## 버전 1.2.1 {#version-121}

2023년 8월 28일 출시

### 수정 사항 {#fixes-121}

- 날짜 선택기를 최상위 레벨로 이동
- 작업에서 달력을 열 때 작업 텍스트가 달력 위에 표시되는 문제
- 컨텍스트 메뉴를 열 때 위치가 잘못되는 문제

## 버전 1.2 {#version-12}

2023년 5월 16일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-2/)

### 새로운 기능 {#new-functionality-12}

- 컨텍스트 메뉴 또는 해당 API를 통해 작업 우선순위를 설정할 수 있습니다 ([예제](https://snippet.dhtmlx.com/5cymicwt))
- 우선순위를 기준으로 작업 정렬 가능
- [멀티유저 백엔드](guides/working_with_server.md#multiuser-backend)를 통해 실시간으로 다른 사용자의 변경 사항을 추적할 수 있습니다 ([예제](https://snippet.dhtmlx.com/82ayq2lk))
- 테이블 뷰에서 To Do List 작업 표시. [JavaScript DataGrid](https://dhtmlx.com/docs/products/dhtmlxGrid/) 컴포넌트와의 통합 ([예제](https://snippet.dhtmlx.com/e97idjs8))

### 새로운 API {#new-api-12}

[`priorities`](api/configs/priorities_config.md) 속성을 사용하면 작업에 초기 우선순위를 적용할 수 있습니다

### 업데이트 {#updates-12}

- [`tasks`](api/configs/tasks_config.md) 속성에 초기 우선순위를 지정할 수 있는 `priority` 파라미터가 추가되었습니다
- [`taskShape`](api/configs/taskshape_config.md) 속성에 카드의 우선순위 표시를 관리할 수 있는 `priority` 파라미터가 추가되었습니다
- [로컬라이즈 옵션](guides/localization.md) 목록이 확장되었습니다
### 수정 사항 {#fixes-12}

- `users[n].avatar` 속성 없이 사용자를 설정하면 오류가 발생하는 문제

## 버전 1.1 {#version-11}

2022년 10월 10일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-1/)

### 주요 변경 사항 {#breaking-changes}

이번 릴리스에서 `taskShape` 속성에 일부 변경 사항이 도입되었습니다. 최신 버전에 맞춰 업데이트하려면 [마이그레이션 문서](migration.md#10---11)를 확인하세요.

### 새로운 기능 {#new-functionality-11}

- 드래그 앤 드롭:
    - [기능 구성 또는 비활성화](guides/configuration.md#drag-n-drop) 기능
    - 새로운 이벤트: [`start-drag`](api/events/startdrag_event.md), [`drag`](api/events/drag_event.md), [`end-drag`](api/events/enddrag_event.md)
- 다중 선택 및 일괄 작업:
    - 키보드 단축키를 사용하여 [여러 작업 선택](/#selecting-multiple-tasks) 및 [관리](/#managing-multiple-tasks) 기능
    - 메뉴를 통한 여러 작업 관리 기능
    - [API를 통한 여러 작업 선택 및 관리](guides/multiselection.md) 기능:
        - 새로운 [`selected`](api/configs/selected_config.md) 속성
        - 메서드의 새로운 `join` 파라미터: [`selectTask()`](api/methods/selecttask_method.md), [`copyTask()`](api/methods/copytask_method.md)
        - 이벤트의 새로운 `join` 파라미터: [`select-task`](api/events/selecttask_event.md), [`copy-task`](api/events/copytask_event.md)
        - 새로운 메서드: [`eachSelected()`](api/methods/eachselected_method.md)
        - 업데이트된 메서드: [`getSelection()`](api/methods/getselection_method.md)
    - [`unselectTask()`](api/methods/unselecttask_method.md) 메서드를 통해 모든 작업 선택 해제 기능
- [완료된 작업이 숨겨진 To Do List](guides/hide_completed_tasks.md#initial-mode)
- [완료된 작업 표시/숨기기](guides/hide_completed_tasks.md#switching-between-modes):
    - Toolbar 메뉴를 통해
    - API를 통해:
        - 새로운 메서드: [`hideCompletedTasks()`](api/methods/hidecompletedtasks_method.md), [`showCompletedTasks()`](api/methods/showcompletedtasks_method.md)
        - 새로운 이벤트: [`hide-completed-tasks`](api/events/hidecompletedtasks_event.md), [`show-completed-tasks`](api/events/showcompletedtasks_event.md)
        - 메서드의 새로운 `hideCompleted` 파라미터: [`hasChildren()`](api/methods/haschildren_method.md), [`getChildrenIds()`](api/methods/getchildrenids_method.md)
- [작업 정렬](guides/sorting_filtering_tasks.md#sorting-tasks):
    - Toolbar 메뉴를 통해
    - API를 통해:
        - 새로운 메서드: [`setSort()`](api/methods/setsort_method.md)
        - 새로운 이벤트: [`set-sort`](api/events/setsort_event.md)
        - [`tasks`](api/configs/tasks_config.md) 속성의 파라미터 목록이 확장되었습니다
- 메뉴 관리를 위한 새로운 이벤트: [`open-menu`](api/events/openmenu_event.md) 및 [`close-menu`](api/events/closemenu_event.md)

### 업데이트 {#updates-11}

- [로케일 옵션 목록 확장](guides/localization.md)

## 버전 1.0.1 {#version-101}

2022년 7월 5일 출시

### 수정 사항 {#fixes-101}

- API 작동이 크게 개선되었습니다

## 버전 1.0 {#version-10}

2022년 6월 20일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/dhtmlx-list-1-0-advanced-task-assignment-inline-editing-handy-keyboard-navigation/)

### 초기 기능 {#initial-functionality}

- [`tasks`, `projects`, `users`, `tags`, `activeProject` 데이터 로드](guides/loading_data.md) 기능
- 다음 방식으로 `projects` 작업 기능:
    - [API를 통해](guides/project_index.md):
        - [활성 프로젝트 변경](api/methods/setproject_method.md)
        - [새 프로젝트 추가](api/methods/addproject_method.md)
        - [프로젝트 업데이트](api/methods/updateproject_method.md)
        - [프로젝트 삭제](api/methods/deleteproject_method.md)
    - [UI를 통해](/#toolbar):
        - 프로젝트 간 전환
        - 프로젝트 추가, 이름 변경, 삭제
        - 필요한 프로젝트 검색
- 다음 방식으로 `tasks` 작업 기능:
    - [API를 통해](guides/task_index.md):
        - [새 작업 추가](api/methods/addtask_method.md)
        - [작업 업데이트](api/methods/updatetask_method.md)
        - [작업 삭제](api/methods/deletetask_method.md)
        - [작업 이동](api/methods/movetask_method.md)
        - 작업 [복사](api/methods/copytask_method.md) 및 [붙여넣기](api/methods/pastetask_method.md)
        - 작업 [완료 표시](api/methods/checktask_method.md) 및 [완료 해제](api/methods/unchecktask_method.md)
        - 작업 [접기](api/methods/collapsetask_method.md) 및 [펼치기](api/methods/expandtask_method.md)
        - 작업 [선택](api/methods/selecttask_method.md) 및 [선택 해제](api/methods/unselecttask_method.md)
        - 작업의 들여쓰기 수준 변경: [indentTask()](api/methods/indenttask_method.md) / [unindentTask()](api/methods/unindenttask_method.md)
        - 사용자 [지정](api/methods/assignuser_method.md) 및 [해제](api/methods/unassignuser_method.md)
        - [작업 필터링](api/methods/setfilter_method.md)
    - [UI를 통해](/#managing-a-task):
        - 작업 추가, 복사/붙여넣기, 선택, 이동, 들여쓰기/내어쓰기, 삭제
        - 작업 검색(기호 또는 해시태그로)
        - 작업 편집:
            - [작업을 더블 클릭하여 내용 편집](guides/inline_editing.md): 텍스트, 숫자, 해시태그, 날짜 입력
            - 사용자 지정/해제
            - 마감일 설정
- **작업 외관 및 동작** 구성 기능:
    - [완료된 하위 작업 카운터](guides/configuration.md#counter-of-completed-subtasks)
    - [날짜 형식](guides/configuration.md#date-format)
    - [마감일 유효성 검사](guides/configuration.md#due-date-validation)
    - [작업 완료 표시 모드](guides/configuration.md#mode-of-marking-tasks-complete)
- **Toolbar** [구성](guides/configuration.md#toolbar) 및 [커스터마이징](guides/customization.md#customize-the-toolbar) 기능
- [키보드 탐색](api/events/keypressontodo_event.md#keyboard-shortcuts)
- [읽기 전용 모드](guides/readonly_mode.md)
- [로컬라이제이션](guides/localization.md)
- [백엔드 통합](guides/working_with_server.md) (Go 및 Node)
- [다른 DHTMLX 위젯과의 통합](guides/integration.md)
- 크로스 브라우저 호환성
- 터치 지원

### API {#api}

- **To Do List API**:
    - [메서드](api/overview/methods_overview.md)
    - 내부 API:
        - [Event Bus 메서드](category/event-bus-methods.md)
        - [State 메서드](category/state-methods.md)
    - [이벤트](api/overview/events_overview.md)
    - [속성](api/overview/configs_overview.md)
- **Toolbar API**:
    - [메서드](category/toolbar-methods.md)
    - [속성](category/toolbar-properties.md)
- **RestDataProvider API**:
    - [REST 메서드](category/rest-methods.md)
