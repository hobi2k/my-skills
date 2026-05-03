---
name: junior-dev-spec-assignment
description: Write a markdown implementation spec for a junior developer without giving the final code, so the junior carries out the real implementation. Use when the AI should define goals, constraints, and acceptance criteria but not hand over the finished solution.
---

# Junior Dev Spec Assignment

이 스킬은 구현 코드를 주지 않고, 주니어가 직접 설계하고 코딩할 수 있도록 스펙 문서를 작성할 때 사용합니다.

## 언제 사용하나

- 사용자가 "코드는 말고 방향만 줘"라고 할 때
- 주니어의 문제 해결력과 설계 감각을 키우고 싶을 때
- AI는 구현 대신 요구사항, 제약, 완료 기준만 정리해야 할 때
- TypeScript, React, React Native, Next.js, Python, C#, C++ 등 어떤 스택이든 사고력을 훈련시키고 싶을 때

## 참고 문서

- 템플릿: [TEMPLATE.md](TEMPLATE.md)
- Python: [references/python.md](references/python.md)
- TypeScript/JavaScript/React/React Native/Next.js: [references/javascript-react-next.md](references/javascript-react-next.md)
- C#: [references/csharp.md](references/csharp.md)
- C++: [references/cpp.md](references/cpp.md)

## 핵심 원칙

1. 최종 구현 코드는 직접 주지 않습니다.
2. 대신 구현 가능한 수준의 명확한 명세를 제공합니다.
3. 모호한 표현 대신 관찰 가능한 완료 조건을 씁니다.
4. 주니어가 스스로 판단해야 할 지점은 남겨둡니다.

## 출력 형식

```markdown
# [작업명] 구현 스펙

## 문제 정의
- 무엇이 문제인지

## 목표
- 이번 작업이 끝나면 무엇이 달라져야 하는지

## 범위
- 포함
- 제외

## 구현 요구사항
- 기능 요구사항
- 상태 흐름
- 데이터 흐름
- 예외 처리

## 수정 예상 파일
- `path/to/file`

## 구현 힌트
- 참고할 패턴
- 기존 코드에서 비슷한 위치

## 완료 조건
- 테스트 가능 기준
- 사용자 관점 기준

## 리뷰 포인트
- 내가 리뷰할 때 볼 항목
```

## 스펙 작성 규칙

- 요구사항은 동작 중심으로 씁니다.
- "예쁘게", "잘", "적당히" 같은 표현은 피합니다.
- 실패 케이스와 예외 흐름도 최소 1개 이상 포함합니다.
- 기존 프로젝트 패턴이 있으면 "참고 패턴"으로 적습니다.

## 언어별 조정 규칙

- Python: 함수 시그니처, 예외 처리, 데이터 구조를 힌트로 줍니다.
- TypeScript/JavaScript: 비동기 흐름, 상태 변경, 모듈 경계, 타입 경계를 명확히 씁니다.
- React: 렌더링 책임, state ownership, 이벤트 흐름을 분리합니다.
- React Native: screen 책임, navigation, platform 차이, 권한 흐름을 분리합니다.
- Next.js: server/client 구분, route 구조, API 호출 위치를 분리합니다.
- C#: 계층 구조, DTO/Entity/Service 경계, async 흐름과 테스트 기준을 적습니다.
- C++: 자료구조, 소유권, 성능 제약, 헤더/구현 분리와 빌드 기준을 적습니다.
