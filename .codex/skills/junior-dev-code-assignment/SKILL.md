---
name: junior-dev-code-assignment
description: Write a markdown coding assignment for a junior developer that includes concrete commands, file targets, and code snippets they should type or adapt, while the AI does not apply the patch itself. Use when the junior should perform the implementation hands-on from a prepared guide.
---

# Junior Dev Code Assignment

이 스킬은 주니어가 직접 코드와 명령어를 따라가며 구현하도록 만드는 markdown 과제 문서를 작성할 때 사용합니다.

## 언제 사용하나

- 주니어가 실제로 손으로 코드를 작성하게 하고 싶을 때
- AI는 구현하지 않고, 주니어가 따라 할 수 있는 문서를 만들어야 할 때
- "어느 파일에 어떤 코드를 넣어야 하는지"까지 명확히 안내해야 할 때
- 교육과 실무를 동시에 잡고 싶을 때

## 참고 문서

- 템플릿: [TEMPLATE.md](TEMPLATE.md)
- Python: [references/python.md](references/python.md)
- TypeScript/JavaScript/React/React Native/Next.js: [references/javascript-react-next.md](references/javascript-react-next.md)
- C#: [references/csharp.md](references/csharp.md)
- C++: [references/cpp.md](references/cpp.md)

## 핵심 원칙

1. AI는 리포지토리를 직접 수정하지 않습니다.
2. 주니어가 실제로 타이핑할 코드만 제공합니다.
3. 코드 블록은 너무 길지 않게 쪼갭니다.
4. 각 코드 블록마다 "왜 넣는지"를 설명합니다.
5. 복붙만 하면 되게 만들지 말고, 위치와 맥락을 분명히 적습니다.

## 출력 형식

```markdown
# [작업명] 코드 과제

## 목표
- 이번 과제로 완성할 기능

## 먼저 실행할 명령어
```bash
# 설치 / 실행 / 테스트 명령
```

## 수정할 파일
- `path/to/file`

## 단계별 구현

### 1. [파일명]
왜 이 파일을 수정하는지:

추가하거나 수정할 코드:
```language
...
```

코드 설명:
- 이 줄은 무엇을 위해 필요한지

### 2. [다음 파일]
...

## 실행 후 확인
- 기대 동작
- 확인할 화면/로그

## 제출 전 체크리스트
- 빌드/테스트
- 린트
- 수동 확인
```

## 코드 제공 규칙

- 파일 단위보다 "작은 구현 조각" 단위로 나눕니다.
- 코드 블록마다 삽입 위치를 설명합니다.
- 기존 패턴을 따라야 하면 그 패턴을 먼저 요약합니다.
- 언어별 스타일을 지킵니다.

## 언어별 조정 규칙

- Python: 함수, 클래스, import 순서, 타입힌트 여부를 분명히 씁니다.
- TypeScript/JavaScript: ESM/CJS, async 흐름, 상태 변경 위치, 타입 정의 위치를 분명히 씁니다.
- React: 컴포넌트, hooks, props, state ownership을 설명합니다.
- React Native: screen, hooks, navigation, platform 차이와 권한 체크를 설명합니다.
- Next.js: server/client 경계, route 파일, data fetching 위치를 설명합니다.
- C#: using, namespace, async/await, DTO/Service 구분과 테스트 확인을 설명합니다.
- C++: header/source 배치, ownership, const, include 위치와 빌드 확인을 설명합니다.

## 하지 말아야 할 것

- 200줄짜리 완성본을 한 번에 던지지 않습니다.
- 위치 설명 없이 코드만 주지 않습니다.
- 테스트나 검증 없이 코드만 던지지 않습니다.
- AI가 이미 작업을 끝낸 것처럼 쓰지 않습니다.
