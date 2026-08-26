---
sidebar_label: 키보드 탐색
title: 키보드 탐색
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 키보드 탐색에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX To Do List 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 키보드 탐색 {#keyboard-navigation}

DHTMLX To Do List는 완전한 키보드 탐색을 지원합니다. 마우스 없이 작업을 생성, 관리, 구성할 수 있습니다.

키보드 단축키는 작업이 포커스된 경우에만 작동합니다. 작업에 포커스를 맞추려면 클릭하거나 <kbd>ArrowUp</kbd> / <kbd>ArrowDown</kbd>을 사용하여 목록을 탐색하세요.

:::tip
Toolbar의 검색 창에 포커스가 있을 때는 키보드 단축키가 작동하지 **않습니다**.
:::

:::info
[`readonly`](api/configs/readonly_config.md) 모드에서는 키보드 탐색이 작동하지 않습니다.
:::

## 기본 모드 {#default-mode}

다음 단축키는 인라인 편집기가 **닫혀 있을 때** 작동합니다.

### 탐색 및 선택 {#navigation-and-selection}

| 키보드 단축키 | 설명 |
| :---------------- | :---------- |
| <kbd>ArrowUp</kbd> | 이전 작업으로 선택을 이동합니다 |
| <kbd>ArrowDown</kbd> | 다음 작업으로 선택을 이동합니다 |
| <kbd>ArrowRight</kbd> | 접힌 상위 작업을 펼칩니다 |
| <kbd>ArrowLeft</kbd> | 펼쳐진 상위 작업을 접습니다. 이미 접혀 있거나 하위 항목이 없으면 상위 작업으로 선택을 이동합니다 |
| <kbd>Shift</kbd>+<kbd>ArrowUp</kbd> | 위쪽 작업으로 선택을 확장합니다. 해당 작업이 이미 선택되어 있으면 선택을 해제합니다 |
| <kbd>Shift</kbd>+<kbd>ArrowDown</kbd> | 아래쪽 작업(하위 항목 포함)으로 선택을 확장합니다. 해당 작업이 이미 선택되어 있으면 선택을 해제합니다 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Click</kbd> / <kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Click</kbd> | 여러 작업을 하위 항목과 함께 선택하거나 선택 해제합니다:<br/>• 작업에 선택된 상위 항목이 있으면 해당 작업과 상위 항목의 선택을 해제합니다<br/>• 작업에 선택된 하위 항목이 있으면 해당 작업만 선택 해제합니다 |
| <kbd>Shift</kbd>+<kbd>Click</kbd> | 현재 선택된 작업과 클릭한 작업 사이의 작업 범위를 선택합니다 |

:::info
여러 작업을 선택하여 작업하는 방법은 [다중 선택](guides/multiselection.md) 가이드를 참조하세요.
:::

### 작업 관리 {#task-management}

| 키보드 단축키 | 설명 |
| :---------------- | :---------- |
| <kbd>Enter</kbd> | 선택된 작업과 동일한 레벨에 새 작업을 생성하고, 해당 작업으로 선택을 이동하며, 편집기를 엽니다 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Enter</kbd> | 선택된 작업의 인라인 편집기를 엽니다 |
| <kbd>Space</kbd> | 선택된 작업을 완료로 표시합니다. 이미 완료된 경우 미완료로 표시합니다 |
| <kbd>Delete</kbd> / <kbd>Backspace</kbd> | 선택된 작업을 삭제합니다. 삭제 후 선택이 다음 작업으로 이동하거나, 다음 작업이 없으면 상위 작업으로 이동합니다 |
| <kbd>Tab</kbd> | 작업을 한 단계 더 깊은 중첩 레벨로 이동합니다 |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | 작업을 한 단계 상위 중첩 레벨로 이동합니다 |
| <kbd>Ctrl</kbd>+<kbd>ArrowUp</kbd> | 선택된 작업을 동일 레벨에서 위로 이동합니다 |
| <kbd>Ctrl</kbd>+<kbd>ArrowDown</kbd> | 선택된 작업을 동일 레벨에서 아래로 이동합니다 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>D</kbd> | 선택된 작업을 동일 레벨에서 복제합니다 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>C</kbd> | 선택된 작업(모든 하위 작업 포함)을 클립보드에 복사합니다 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>V</kbd> | 복사한 작업을 현재 선택된 작업과 동일한 레벨에 붙여넣으며, 원래 구조를 유지합니다 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Z</kbd> | 마지막 작업을 되돌립니다 (실행 취소) |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Y</kbd> / <kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | 되돌린 작업을 복원합니다 (다시 실행) |
| <kbd>Alt</kbd>+<kbd>1</kbd> / <kbd>Alt</kbd>+<kbd>2</kbd> / <kbd>Alt</kbd>+<kbd>3</kbd> | 선택된 작업의 우선순위를 설정합니다 (해당 [`priorities`](api/configs/priorities_config.md) 항목의 단축키와 일치) |
| <kbd>Alt</kbd>+<kbd>0</kbd> | 선택된 작업의 우선순위를 초기화합니다 |
| <kbd>Escape</kbd> | 컨텍스트 메뉴가 열려 있으면 닫습니다. 다시 누르면 편집기를 닫고, 활성 필터링을 초기화하며, Toolbar의 검색 결과를 접습니다 |

## 편집 모드 {#editing-mode}

다음 단축키는 인라인 편집기가 **열려 있을 때** 작동합니다.

| 키보드 단축키 | 설명 |
| :---------------- | :---------- |
| <kbd>Enter</kbd> | 변경 사항을 저장하고 편집기를 닫습니다 |
| <kbd>Shift</kbd>+<kbd>Enter</kbd> | 편집기 내에 새 단락을 삽입합니다 |
| <kbd>Escape</kbd> | 변경 사항을 저장하지 않고 편집기를 닫습니다 |

## 관련 문서 {#related-articles}

- [`keypress-on-todo`](api/events/keypressontodo_event.md) 이벤트 - 키 입력을 가로채고 사용자 정의 동작을 구현합니다
- [인라인 편집](guides/inline_editing.md) - 편집기를 프로그래밍 방식으로 관리하는 방법을 알아봅니다
- [다중 선택](guides/multiselection.md) - 여러 선택된 작업으로 작업하기
