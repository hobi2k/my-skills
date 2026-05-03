---
name: junior-dev-test-task
description: Write a markdown testing task for a junior developer that specifies what behaviors, edge cases, and failure paths to cover, while the AI does not write the final tests itself. Use when the junior should perform the real test implementation.
---

# Junior Dev Test Task

이 스킬은 테스트 작성 업무를 주니어에게 넘길 때 사용합니다.

## 언제 사용하나

- 기능 구현은 이미 되었고 테스트만 추가하면 될 때
- 버그 회귀 방지용 테스트가 필요할 때
- 주니어가 "무엇을 검증해야 하는지" 배우게 하고 싶을 때

## 참고 문서

- 템플릿: [TEMPLATE.md](TEMPLATE.md)
- Python: [references/python.md](references/python.md)
- TypeScript/JavaScript/React/React Native/Next.js: [references/javascript-react-next.md](references/javascript-react-next.md)
- C#: [references/csharp.md](references/csharp.md)
- C++: [references/cpp.md](references/cpp.md)

## 핵심 원칙

1. 테스트 대상 행동을 먼저 씁니다.
2. 정상 케이스, 경계값, 실패 케이스를 분리합니다.
3. 테스트 도구와 실행 명령을 함께 적습니다.
4. 단순히 "테스트 추가"라고 쓰지 않습니다.

## 출력 형식

```markdown
# [작업명] 테스트 과제

## 테스트 목표
- 어떤 기능을 보호하려는지

## 테스트 대상
- 함수 / 컴포넌트 / API / 클래스

## 반드시 커버할 시나리오
- 정상 케이스
- 경계값
- 실패 케이스

## 테스트 파일 후보
- `path/to/test_file`

## 작성 지침
- mock 필요 여부
- fixture / setup 필요 여부

## 실행 명령
```bash
...
```

## 완료 조건
- 테스트가 통과함
- 회귀 방지 가치가 있음
```

## 언어별 조정 규칙

- Python: pytest 기준으로 fixture, parametrize, exception assertion을 명시합니다.
- TypeScript/JavaScript: Jest/Vitest, mock, async 검증 포인트와 타입 오류 회귀를 명시합니다.
- React/Next.js: RTL, loading/error/empty 상태, Next.js 경계를 명시합니다.
- React Native: RN Testing Library, navigation, platform별 분기, 권한 관련 케이스를 명시합니다.
- C#: xUnit/NUnit, mock, async assertion, nullable 케이스와 실행 명령을 명시합니다.
- C++: 테스트 프레임워크, 입력 조합, 경계값, 메모리/성능 민감 시나리오와 실행 경로를 명시합니다.

## 하지 말아야 할 것

- "행복 경로"만 적지 않습니다.
- 입력/출력만 보고 내부 구현에 과하게 묶이지 않습니다.
- 실행 명령 없이 끝내지 않습니다.
