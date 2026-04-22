---
name: junior-dev-orchestrator
description: Choose the right junior mentoring mode for a task and route work into copy-along, spec-coach, or review-mode. Use when the user wants one entry point for training a junior developer while work continues.
---

# Junior Dev Orchestrator

이 스킬은 주니어 교육용 상위 라우터입니다. 사용자의 상황을 보고 아래 3가지 모드 중 가장 맞는 것을 고르거나, 필요하면 2단계 흐름으로 이어줍니다.

- `junior-dev-copy-along`
- `junior-dev-spec-coach`
- `junior-dev-review-mode`

## 언제 사용하나

- 사용자가 "주니어 교육 모드로 진행해줘"처럼 넓게 요청할 때
- 어떤 교육 모드가 맞는지 아직 정하지 않았을 때
- AI는 계속 일을 하되, 주니어 교육 방식은 상황에 맞게 자동 선택하고 싶을 때

## 모드 선택 규칙

### 1. Copy Along 선택

아래 상황이면 `junior-dev-copy-along`을 선택합니다.

- 주니어가 아직 패턴을 잘 모름
- 손으로 따라 치며 익히는 게 목표
- 사용자가 "코드 포함 문서", "따라 칠 수 있게", "핸드타이핑"을 원함

### 2. Spec Coach 선택

아래 상황이면 `junior-dev-spec-coach`를 선택합니다.

- 주니어가 직접 생각해서 구현하길 원함
- 설계 감각과 문제 해결력을 키우는 게 목표
- 사용자가 "명세만", "정답 코드는 말고", "방향만"을 원함

### 3. Review Mode 선택

아래 상황이면 `junior-dev-review-mode`를 선택합니다.

- 주니어가 이미 코드를 짰음
- 교육적인 코드 리뷰가 필요함
- 사용자가 "리뷰", "피드백", "정답 없이 다시 생각하게"를 원함

## 2단계 추천 흐름

필요하면 아래 조합으로 이어줍니다.

### 흐름 A. Spec Coach → Review Mode

주니어가 먼저 직접 짜고, 그 뒤 교육적으로 리뷰하는 흐름입니다.

좋은 상황:
- 과제형 개발
- 온보딩 후 самостоятель 구현 훈련
- 기능 단위 성장 루프

### 흐름 B. Copy Along → Review Mode

먼저 따라 치며 패턴을 익히고, 그다음 주니어가 변형해서 짠 코드까지 리뷰하는 흐름입니다.

좋은 상황:
- 완전 초보 주니어
- 새 프레임워크 적응기
- 기존 코드베이스 패턴 학습

## 출력 형식

항상 먼저 아래처럼 판단을 명시합니다.

```markdown
# 주니어 교육 모드 선택

## 추천 모드
- `junior-dev-copy-along`

## 선택 이유
- 현재 요청은 기존 패턴 학습이 더 중요함
- 주니어가 손으로 따라 치며 익히는 편이 적합함

## 이번 라운드 진행 방식
- AI가 맡을 일
- 주니어가 맡을 일
- 왜 이 모드가 지금 맞는지

## 다음 단계
- 이번 라운드가 끝나면 `junior-dev-review-mode`로 넘어가 리뷰
```

그 다음 실제 선택된 모드의 형식으로 이어갑니다.

## 진행 방식

1. 현재 요청과 주니어의 숙련도를 파악합니다.
2. "지금 가장 교육 효과가 높은 모드"를 고릅니다.
3. 왜 그 모드인지 짧게 설명합니다.
4. 필요하면 다음 라운드에 어떤 모드로 넘어갈지도 제안합니다.
5. 선택된 하위 스킬의 형식으로 실제 결과를 생성합니다.

## 금지 사항

- 무조건 한 모드만 고집하지 않습니다.
- 사용자가 명시적으로 원한 모드를 무시하지 않습니다.
- 교육보다 속도가 더 중요한 상황인데 과하게 훈련 모드로 끌고 가지 않습니다.

## 좋은 사용 예시

- "junior-dev-orchestrator로 이번 작업을 주니어 교육 모드로 진행해줘"
- "어떤 모드가 맞을지 네가 판단해서 주니어한테 일 시켜줘"
- "이번 기능은 교육 중심으로 굴리고 싶은데 copy-along이 맞는지 spec-coach가 맞는지 골라줘"

## 템플릿

- `TEMPLATE.md`: 모드 선택과 다음 단계 제안 템플릿
