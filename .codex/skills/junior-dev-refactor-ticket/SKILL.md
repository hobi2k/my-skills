---
name: junior-dev-refactor-ticket
description: Write a markdown refactor ticket for a junior developer that explains what code smells to improve, what behavior must remain unchanged, and how to verify the refactor, while the AI avoids making the changes itself. Use when the junior should carry out a scoped refactor task.
---

# Junior Dev Refactor Ticket

이 스킬은 기능 변경보다 구조 개선 중심의 작업을 주니어에게 넘길 때 사용합니다.

## 언제 사용하나

- 코드가 돌아가기는 하지만 구조가 나쁠 때
- 함수 분리, 이름 개선, 중복 제거, 책임 정리가 필요할 때
- AI는 리팩터링 방향만 주고 실제 수정은 주니어가 하게 할 때

## 참고 문서

- 템플릿: [TEMPLATE.md](TEMPLATE.md)
- Python: [references/python.md](references/python.md)
- TypeScript/JavaScript/React/React Native/Next.js: [references/javascript-react-next.md](references/javascript-react-next.md)
- C#: [references/csharp.md](references/csharp.md)
- C++: [references/cpp.md](references/cpp.md)

## 핵심 원칙

1. 동작 보존이 최우선입니다.
2. 리팩터링 목표를 구체적 냄새(code smell)로 설명합니다.
3. 범위를 작게 자릅니다.
4. before/after 기대 상태를 분리합니다.

## 출력 형식

```markdown
# [작업명] 리팩터링 티켓

## 현재 문제
- 어떤 점이 읽기 어렵거나 위험한지

## 이번 리팩터링 목표
- 줄이고 싶은 복잡도
- 제거하고 싶은 중복

## 유지해야 할 동작
- 절대 바뀌면 안 되는 사용자 동작

## 수정 예상 파일
- `path/to/file`

## 권장 접근 순서
1. 안전망 확인
2. 작은 함수 분리
3. 이름 개선
4. 중복 제거
5. 검증

## 하지 말아야 할 것
- 이번 티켓에서 범위를 넘는 변경

## 완료 조건
- 동작은 동일
- 구조는 더 읽기 쉬움
```

## 언어별 조정 규칙

- Python: 함수 길이, 조건 분기, 중복 로직, 데이터 구조 정리를 봅니다.
- React: render 로직 분리, custom hook 후보, prop drilling, state ownership을 봅니다.
- React Native: screen 로직 분리, navigation 책임, platform 분기 정리를 봅니다.
- Next.js: route 책임, server/client 분리, data fetching 위치를 봅니다.
- C#: 서비스 책임, 메서드 길이, DTO/도메인 경계, nullable/async 정리와 테스트 유지 여부를 봅니다.
- C++: 함수 책임, 헤더 의존성, 자료구조 선택, ownership 가시성과 빌드 영향 범위를 봅니다.
