---
name: junior-dev-work-order
description: Write a markdown work order that tells a junior developer exactly what task to perform, what files to touch, what commands to run, and how to verify completion, while the AI avoids doing the implementation itself. Use when the real coding work should be carried out by the junior developer.
---

# Junior Dev Work Order

이 스킬은 AI가 직접 코드를 짜지 않고, 주니어 개발자가 실무를 수행할 수 있게 작업지시서를 markdown으로 만드는 용도입니다.

## 언제 사용하나

- 사용자가 "주니어에게 이 작업을 넘길 문서를 써줘"라고 요청할 때
- AI는 구현 대신 작업 범위, 명령어, 확인 포인트를 정리해야 할 때
- Python, TypeScript, JavaScript, React, React Native, Next.js, C#, C++ 어느 스택이든 주니어가 직접 움직이게 만들고 싶을 때
- 작업이 너무 크지 않게 쪼개서 실제 업무 티켓처럼 전달하고 싶을 때

## 참고 문서

- 템플릿: [TEMPLATE.md](TEMPLATE.md)
- Python: [references/python.md](references/python.md)
- TypeScript/JavaScript/React/React Native/Next.js: [references/javascript-react-next.md](references/javascript-react-next.md)
- C#: [references/csharp.md](references/csharp.md)
- C++: [references/cpp.md](references/cpp.md)

## 핵심 원칙

1. AI는 구현 코드를 대신 작성하지 않습니다.
2. 문서는 주니어가 바로 실행할 수 있을 만큼 구체적이어야 합니다.
3. 범위, 금지사항, 완료 조건을 반드시 분리합니다.
4. 언어/프레임워크 관습에 맞는 용어를 사용합니다.
5. 한 번에 너무 큰 작업을 던지지 않습니다.

## 반드시 포함할 항목

- 작업 배경
- 이번 라운드 목표
- 수정 대상 파일 또는 예상 파일
- 실행 명령어
- 구현 순서
- 주의사항
- 완료 조건
- 셀프 체크
- 막히면 먼저 확인할 것

## 출력 형식

항상 아래 구조의 markdown 작업지시서를 출력합니다.

```markdown
# [작업명] 작업지시서

## 왜 이 작업을 하나
- 배경
- 사용자/제품 관점의 목적

## 이번 작업 목표
- 이번 라운드에서 끝내야 하는 범위

## 주니어가 직접 할 일
- 해야 할 구현
- 수정해야 할 파일
- 실행해야 할 명령어

## 작업 순서
1. 환경 확인
2. 파일 확인
3. 구현
4. 실행
5. 검증

## 금지사항
- 이번 작업에서 건드리면 안 되는 것

## 완료 조건
- 무엇이 되면 끝인지

## 셀프 체크
- 테스트
- 화면 확인
- 로그 확인

## 막히면 먼저 볼 것
- 의심 포인트
- 관련 파일
```

## 언어별 조정 규칙

- Python: 가상환경, 패키지 설치, 실행 엔트리포인트, pytest 기준을 명확히 씁니다.
- TypeScript/JavaScript: package manager, build/dev/test 명령, entry file, 타입 검사 포인트를 분명히 씁니다.
- React: 컴포넌트 책임, props, state, 이벤트 흐름을 분리해서 씁니다.
- React Native: screen 책임, navigation, 권한, 플랫폼 차이를 분리해서 씁니다.
- Next.js: route 위치, server/client 경계, data fetching 위치를 분리해서 씁니다.
- C#: 프로젝트 파일, 빌드 명령, 런타임 진입점, nullable/async, 테스트 흐름을 씁니다.
- C++: 타깃 바이너리, 빌드 시스템, 헤더/소스 경계, 메모리/수명, 테스트 흐름을 씁니다.

## 하지 말아야 할 것

- "알아서 구현해라" 수준으로 모호하게 쓰지 않습니다.
- AI가 대신 완성 코드를 길게 써주지 않습니다.
- 범위를 너무 크게 잡지 않습니다.
- 검증 방법 없이 끝내지 않습니다.
