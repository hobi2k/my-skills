# Local Skills Pack

`claw-code` 같은 로컬 LLM 코딩 에이전트에서 바로 사용할 수 있도록 분리한 스킬 트리입니다.

## 목적

- `.local/skills/`만 따로 복사해도 전체 스킬 셋을 사용할 수 있게 합니다.
- `skills/`의 전체 내용을 미러링합니다.
- 주니어 위임형 스킬은 각 스킬 폴더 안 `references/`를 포함해서, 스킬 하나만 떼어도 독립적으로 동작하게 맞춥니다.

## 구조

- `.local/skills/`
  - 전체 스킬 트리
- `.local/skills/<skill-name>/SKILL.md`
  - 스킬 본문
- `.local/skills/<skill-name>/references/`
  - 해당 스킬이 직접 참조하는 언어별 참고 문서

## 사용 원칙

- 로컬 LLM 쪽에서는 `.local/skills/`만 기준으로 읽습니다.
- 공용 루트 `skills/`를 직접 참조하지 않게 유지합니다.
- 새 스킬을 추가하거나 수정할 때는 `.local/skills/`도 함께 동기화합니다.

## 현재 대상 스택

- Python
- TypeScript
- JavaScript
- React
- React Native
- Next.js
- C#
- C++

## 참고

- 원본 스킬 루트: [../skills](../skills)
- 메인 안내 문서: [../README.md](../README.md)
