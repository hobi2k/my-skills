---
name: junior-dev-bugfix-brief
description: Write a markdown bug-fix brief for a junior developer with reproduction steps, suspected files, debugging checkpoints, and acceptance criteria, while the AI does not implement the fix itself. Use when the junior should carry out the bug investigation and patch.
---

# Junior Dev Bugfix Brief

이 스킬은 버그 수정 작업을 주니어에게 넘길 때 쓰는 markdown 브리프를 작성합니다.

## 언제 사용하나

- 버그를 AI가 직접 고치지 않고 주니어가 조사하고 수정하게 할 때
- 재현 방법, 원인 후보, 확인 포인트를 정리해줘야 할 때
- 실무형 디버깅 훈련을 시키고 싶을 때

## 참고 문서

- 템플릿: [TEMPLATE.md](TEMPLATE.md)
- Python: [references/python.md](references/python.md)
- TypeScript/JavaScript/React/React Native/Next.js: [references/javascript-react-next.md](references/javascript-react-next.md)
- C#: [references/csharp.md](references/csharp.md)
- C++: [references/cpp.md](references/cpp.md)

## 핵심 원칙

1. 버그는 반드시 재현 단계부터 씁니다.
2. "의심되는 파일"과 "확인해야 할 값"을 적습니다.
3. 정답 원인을 미리 단정하지 않습니다.
4. 수정 완료 기준을 분명히 적습니다.

## 출력 형식

```markdown
# [버그명] 수정 브리프

## 증상
- 어떤 문제가 보이는지

## 재현 방법
1. ...
2. ...
3. ...

## 기대 결과
- 원래는 어떻게 동작해야 하는지

## 실제 결과
- 지금은 어떻게 잘못 동작하는지

## 먼저 볼 파일
- `path/to/file`

## 디버깅 포인트
- 로그 찍을 위치
- 확인할 변수/상태/API 응답

## 수정 범위 제약
- 건드리지 말아야 할 부분

## 완료 조건
- 재현이 사라지는지
- 관련 기능이 안 깨지는지

## 셀프 체크
- 테스트
- 화면/로그/API 확인
```

## 언어별 조정 규칙

- Python: stack trace, request/response, exception path를 강조합니다.
- TypeScript/JavaScript/React/Next.js: 브라우저 콘솔, network, state 흐름, 타입 오류, Next.js 경계를 강조합니다.
- React Native: device log, navigation 상태, 권한, 플랫폼별 차이를 강조합니다.
- C#: 로그, 예외, 서비스 호출 체인, `dotnet test` 회귀 확인을 강조합니다.
- C++: 재현 입력, 런타임 상태, 메모리/수명, 크래시 조건, 빌드 재확인을 강조합니다.
