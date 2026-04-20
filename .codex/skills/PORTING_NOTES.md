# Codex Porting Notes

이 문서는 `skills/` 아래 Claude 원본을 `.codex/skills/`로 포팅할 때 적용한 기준을 정리합니다.

## 적용한 원칙

- 메인 엔트리 파일명을 `SKILL.md`로 통일
- Claude 전용 도구명보다 Codex에서 이해하기 쉬운 행동 중심 지침으로 재작성
- `.claude/skills`, `.claude/commands` 같은 경로 가정 제거 또는 축소
- 기존 스크립트, 폰트, 참고자료는 가능한 한 그대로 보존
- 긴 보조 문서는 유지하되, Codex 기준의 우선 문서는 `SKILL.md`로 고정

## 현재 상태

- `.codex/skills/*/SKILL.md`는 Codex 기준으로 포팅 완료
- 일부 원본 보조 문서에는 Claude 중심 설명이 남아 있음
- 이 경우에도 Codex의 실제 동작 기준은 `SKILL.md`

## 남아 있는 제한

- `code-prompt-coach`는 기본 분석 대상이 여전히 `~/.claude/projects/` 로그
- `web-search`는 네트워크 접근이 필요
- 일부 생성형 스킬은 외부 런타임이나 추가 패키지가 필요할 수 있음
- 이미지/카드 생성 계열은 스크립트 실행 전 경로와 폰트 의존성을 확인해야 함

## 권장 운영 방식

- Claude 원본은 `skills/`에 유지
- Codex 포팅본은 `.codex/skills/`에서 별도 관리
- 기능 수정 시 원본과 포팅본을 함께 갱신
- 사용자 문서에는 설치 경로를 명확히 구분
  - Claude: `~/.claude/skills/`
  - Codex: `~/.codex/skills/`
