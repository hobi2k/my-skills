# Skill Usage Guide

Claude Code와 Codex에서 이 저장소의 스킬을 실제로 어떻게 사용하면 되는지 정리한 문서입니다.

## 핵심 개념

두 환경 모두 기본 원리는 비슷합니다.

- 스킬 이름을 직접 말해서 유도할 수 있습니다
- 또는 스킬이 잘 걸리는 작업 유형으로 자연스럽게 요청할 수 있습니다
- 가장 확실한 방법은 `스킬 이름 + 작업 요청` 형태로 말하는 것입니다

가장 안전한 패턴:

```text
prompt-enhancer 써서 이 요청 먼저 정리해줘
landing-page-guide-v2 기준으로 이 페이지 만들어줘
workthrough로 이번 변경사항 문서화해줘
web-search 스킬 써서 최신 자료 찾아줘
```

## 1. Claude Code에서 사용하는 법

Claude Code에서는 보통 전역 또는 프로젝트 스킬로 설치한 뒤 사용합니다.

- 전역 설치: `~/.claude/skills/`
- 프로젝트 설치: `<project>/.claude/skills/`

확인:

```text
/skills
```

### Claude에서 잘 먹히는 요청 패턴

```text
prompt-enhancer로 이 요청 상세 요구사항으로 바꿔줘: 로그인 기능 추가
flutter-init 기준으로 습관 관리 앱 스타터 만들어줘
nextjs15-init로 블로그 프로젝트 초기화해줘
landing-page-guide-v2 스타일로 SaaS 랜딩페이지 만들어줘
web-to-markdown으로 이 URL 문서화해줘
workthrough로 이번 작업 정리 문서 만들어줘
```

### Claude에서 실전 예시

#### 예시 1. 짧은 요청을 먼저 정리

```text
prompt-enhancer 써서 이 repo 기준으로 요청을 정리해줘: 결제 내역 화면 추가
```

#### 예시 2. 랜딩페이지 제작

```text
landing-page-guide-v2 기준으로 AI 번역 SaaS 랜딩페이지 만들어줘.
톤은 프리미엄, 전환 CTA는 무료 체험 시작이야.
```

#### 예시 3. 문서화

```text
workthrough-v2로 이번 수정 내용 한국어로 짧게 문서화해줘
```

## 2. Codex에서 사용하는 법

Codex에서는 포팅된 스킬이 `~/.codex/skills/` 아래에 설치되어 있어야 합니다.

- 메인 엔트리: `~/.codex/skills/<skill-name>/SKILL.md`
- 이 저장소 기준 포팅본 원본: `.codex/skills/`

Codex에서는 스킬을 더 명시적으로 언급하는 편이 안정적입니다.

### Codex에서 잘 먹히는 요청 패턴

```text
prompt-enhancer 기준으로 이 repo 컨텍스트 반영해서 요청을 재작성해줘
frontend-design 스킬 기준으로 이 UI를 더 독특하게 개선해줘
web-search 스킬 써서 React 19 최근 자료 찾아줘
web-to-markdown으로 이 문서를 markdown 파일로 정리해줘
workthrough로 이번 작업을 문서로 남겨줘
```

### Codex에서 실전 예시

#### 예시 1. 구현 전에 요구사항 정리

```text
prompt-enhancer 기준으로 이 프로젝트 구조를 먼저 읽고,
"관리자 대시보드에 사용자 차단 기능 추가" 요청을 구현 가능한 요구사항으로 바꿔줘
```

#### 예시 2. 디자인 개선

```text
frontend-design 스킬 기준으로 현재 페이지를 더 강한 브랜드 톤으로 리디자인해줘.
generic한 SaaS 느낌은 피하고 editorial한 방향으로 가줘.
```

#### 예시 3. 검색

```text
web-search 스킬 써서 Next.js 15 App Router 관련 최근 글 5개 찾아서 요약해줘
```

#### 예시 4. 문서 변환

```text
web-to-markdown으로 https://example.com/docs 페이지를 AI 컨텍스트용 markdown으로 저장해줘
```

## 3. 스킬 이름을 직접 말하는 패턴

가장 추천하는 형식은 아래 4가지입니다.

### 패턴 A. `스킬명 써서`

```text
prompt-enhancer 써서 이 요청 정리해줘
web-search 써서 검색해줘
workthrough 써서 문서화해줘
```

### 패턴 B. `스킬명 기준으로`

```text
landing-page-guide-v2 기준으로 페이지 만들어줘
frontend-design 기준으로 UI 개선해줘
```

### 패턴 C. `스킬명 스타일로`

```text
landing-page-guide-v2 스타일로 SaaS 랜딩페이지 구성해줘
workthrough-v2 스타일로 짧은 작업 요약 만들어줘
```

### 패턴 D. `먼저 스킬 적용 후 작업`

```text
먼저 prompt-enhancer로 요구사항 정리하고, 그 다음 구현해줘
먼저 web-search로 자료 찾고, 그 다음 요약해줘
```

## 4. 자주 쓰는 스킬별 한 줄 예시

### `prompt-enhancer`

```text
prompt-enhancer로 이 요청을 repo-aware한 구현 요구사항으로 바꿔줘
```

### `flutter-init`

```text
flutter-init 기준으로 expense tracker 앱 스타터 만들어줘
```

### `nextjs15-init`

```text
nextjs15-init로 dashboard 프로젝트 초기화해줘
```

### `landing-page-guide`

```text
landing-page-guide 기준으로 전환율 중심 제품 소개 페이지 만들어줘
```

### `landing-page-guide-v2`

```text
landing-page-guide-v2 기준으로 기억에 남는 AI SaaS 랜딩페이지 만들어줘
```

### `frontend-design`

```text
frontend-design 기준으로 현재 페이지를 더 의도적인 디자인으로 개선해줘
```

### `design-prompt-generator-v2`

```text
design-prompt-generator-v2로 Lovable에 넣을 디자인 프롬프트 만들어줘
```

### `web-search`

```text
web-search 스킬 써서 Claude Code 관련 최근 자료 찾아줘
```

### `web-to-markdown`

```text
web-to-markdown으로 이 URL 문서를 markdown으로 저장해줘
```

### `code-prompt-coach`

```text
code-prompt-coach로 내 Claude Code 로그 분석해줘
```

### `workthrough`

```text
workthrough로 이번 기능 구현 내용 자세히 문서화해줘
```

### `workthrough-v2`

```text
workthrough-v2로 이번 작업 요약 한국어 문서 만들어줘
```

### `card-news-generator`

```text
card-news-generator로 Z세대 특징 카드뉴스 만들어줘
```

### `card-news-generator-v2`

```text
card-news-generator-v2로 배경 이미지 들어간 여행 팁 카드뉴스 만들어줘
```

### `midjourney-cardnews-bg`

```text
midjourney-cardnews-bg로 금융 카드뉴스 배경 프롬프트 만들어줘
```

### `codex`

```text
codex 스킬 기준으로 외부 codex exec 커맨드 예시 짜줘
```

### `codex-claude-loop`

```text
codex-claude-loop 기준으로 이 리팩토링을 이중 검토 워크플로우로 진행해줘
```

### `codex-claude-cursor-loop`

```text
codex-claude-cursor-loop 기준으로 Cursor까지 포함한 작업 루프 설계해줘
```

### `gemini-logo-remover`

```text
gemini-logo-remover 기준으로 이 이미지 우하단 마크 제거해줘
```

### `junior-dev-copy-along`

```text
junior-dev-copy-along으로 주니어가 손으로 따라 칠 수 있게 React 폼 구현 가이드 문서 써줘
```

### `junior-dev-spec-coach`

```text
junior-dev-spec-coach로 주니어가 직접 짜게 기능 명세만 정리해줘
```

### `junior-dev-review-mode`

```text
junior-dev-review-mode로 주니어가 짠 코드를 교육적으로 리뷰해줘
```

### `junior-dev-orchestrator`

```text
junior-dev-orchestrator로 이번 작업을 주니어 교육 모드로 진행해줘
```

## 5. 어떤 식으로 말하면 잘 안 먹히는가

아래처럼 너무 추상적이면 스킬이 안 걸리거나, 기대와 다르게 동작할 수 있습니다.

```text
좀 예쁘게 해줘
검색 좀 해줘
문서로 정리해줘
```

이럴 때는 최소한 스킬 이름이나 작업 형태를 같이 주는 편이 좋습니다.

```text
frontend-design 기준으로 더 예쁘게 해줘
web-search 써서 검색해줘
workthrough-v2로 문서화해줘
```

## 6. 추천 사용 흐름

실전에서는 아래 조합이 특히 잘 맞습니다.

### 요구사항 정리 → 구현

```text
1. prompt-enhancer로 요청 정리
2. 구현
3. workthrough-v2로 문서화
```

### 자료 조사 → 구현

```text
1. web-search로 최신 자료 수집
2. 구현
3. workthrough로 결과 정리
```

### 페이지 제작

```text
1. design-prompt-generator-v2로 방향 정리
2. landing-page-guide-v2 또는 frontend-design으로 구현
3. workthrough-v2로 마무리
```

## 7. 한 줄 요약

- 가장 잘 되는 방식은 `스킬 이름 + 작업 요청`
- Claude와 Codex 모두 이 패턴이 가장 안정적
- 애매하면 `먼저 <skill-name>로 정리하고 진행해줘`라고 말하면 됩니다
