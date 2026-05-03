---
name: junior-dev-env-task-sheet
description: Write a markdown environment setup and runbook sheet for a junior developer, covering install, startup, validation, and failure checkpoints without the AI doing the setup itself. Use when the junior should handle local setup, build, run, or tooling steps.
---

# Junior Dev Env Task Sheet

이 스킬은 주니어가 직접 개발 환경을 구성하고 실행할 수 있도록 환경 세팅 문서를 만드는 용도입니다.

## 언제 사용하나

- 프로젝트 실행, 의존성 설치, 서버 기동, 테스트 실행을 주니어에게 맡길 때
- "환경부터 직접 올려보게" 하고 싶을 때
- 로컬 LLM 에이전트나 다른 코딩 에이전트가 참고할 실행 문서가 필요할 때

## 참고 문서

- 템플릿: [TEMPLATE.md](TEMPLATE.md)
- Python: [references/python.md](references/python.md)
- TypeScript/JavaScript/React/React Native/Next.js: [references/javascript-react-next.md](references/javascript-react-next.md)
- C#: [references/csharp.md](references/csharp.md)
- C++: [references/cpp.md](references/cpp.md)

## 핵심 원칙

1. 명령어는 순서대로 적습니다.
2. 각 단계마다 기대 결과를 적습니다.
3. 실패했을 때 먼저 볼 포인트를 적습니다.
4. OS/런타임/패키지 매니저 차이가 있으면 분리해서 적습니다.

## 출력 형식

```markdown
# [프로젝트명] 환경 세팅 작업지

## 목표
- 오늘 해야 하는 환경 세팅 범위

## 사전 준비물
- 런타임
- 패키지 매니저
- 시스템 의존성

## 순서대로 실행

### 1. 버전 확인
```bash
...
```
기대 결과:

### 2. 의존성 설치
```bash
...
```
기대 결과:

### 3. 환경 변수 준비
...

### 4. 개발 서버 실행
```bash
...
```
기대 결과:

### 5. 테스트 / 빌드 확인
```bash
...
```

## 자주 막히는 지점
- 오류 메시지
- 먼저 확인할 것

## 완료 체크
- 실제로 확인해야 하는 항목
```

## 언어별 조정 규칙

- Python: venv/poetry/uv 여부, `pip install`, `pytest`, `.env`를 분명히 씁니다.
- TypeScript/JavaScript: `npm/pnpm/yarn`, `dev/build/test`, 타입 검사 명령을 적습니다.
- React: 실행 URL, 브라우저 확인 포인트를 적습니다.
- React Native: Metro, simulator/device 실행, 권한/플랫폼 확인 포인트를 적습니다.
- Next.js: 실행 URL, 브라우저 확인 포인트, env 사용 방식을 적습니다.
- C#: `dotnet restore/build/run/test` 흐름을 적습니다.
- C++: 컴파일러, CMake/Make/Ninja, 실행 바이너리 위치를 적습니다.

## 하지 말아야 할 것

- 명령어만 나열하고 기대 결과를 안 적지 않습니다.
- 환경 변수 파일 위치를 빼먹지 않습니다.
- 실패 시 체크포인트 없이 끝내지 않습니다.
