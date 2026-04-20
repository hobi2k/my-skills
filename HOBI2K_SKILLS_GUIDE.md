# hobi2k/skills Guide

`hobi2k/skills` 저장소를 기준으로 Claude Code에서 사용하는 방법과, 현재 포함된 Codex용 포팅 스킬을 설치하고 운영하는 방법을 정리한 문서입니다.

## 전제

- Claude Code 원본 스킬은 `skills/` 아래에 있습니다.
- Codex용 포팅 스킬은 `.codex/skills/` 아래에 있습니다.
- 현재 저장소에는 Claude 원본과 Codex 포팅본이 함께 들어 있습니다.

## 1. Claude Code에서 사용하는 방법

### 방법 A. GitHub 저장소 기준 수동 설치

`hobi2k/skills`를 GitHub 저장소로 운영한다면, 가장 단순하고 확실한 방법은 수동 복사입니다.

```bash
git clone https://github.com/hobi2k/skills.git
cd skills

# 전역 설치
mkdir -p ~/.claude/skills
cp -R skills/* ~/.claude/skills/
```

특정 프로젝트에서만 쓰고 싶다면 프로젝트 루트에서:

```bash
mkdir -p .claude/skills
cp -R /path/to/hobi2k-skills/skills/* .claude/skills/
```

설치 후 Claude Code에서 확인:

```text
/skills
```

실행 예시:

```text
prompt-enhancer
flutter-init
web-to-markdown
codex-claude-loop
```

### 방법 B. 패키지/마켓플레이스로 배포해서 설치

현재 저장소 문서에는 예전 예시로 `suji-father-marketplace@...` 또는 `@your-org/...` 형식이 섞여 있습니다. `hobi2k/skills`로 정리하려면 배포 전략을 먼저 하나로 고정하는 것이 좋습니다.

권장 선택지는 2가지입니다.

1. GitHub 저장소 이름: `hobi2k/skills`
2. NPM 패키지 이름: `@hobi2k/skills`

NPM 패키지로 배포했다면 설치 예시는 다음처럼 문서화하는 편이 명확합니다.

```bash
npx claude-plugins skills install @hobi2k/skills/flutter-init
npx claude-plugins skills install @hobi2k/skills/prompt-enhancer
```

주의:

- `hobi2k/skills`는 GitHub 저장소 표기이고,
- `@hobi2k/skills`는 NPM scoped package 표기입니다.

문서에는 이 둘을 섞지 않는 것이 좋습니다.

### Claude Code 기준 권장 설치 문구

사용자 문서에는 아래 순서로 안내하는 것을 추천합니다.

1. 빠르게 써보려면 GitHub 저장소 clone + `~/.claude/skills` 복사
2. 팀 배포용이면 `@hobi2k/skills`로 publish 후 `claude-plugins` 설치
3. 프로젝트 전용이면 `.claude/skills/`에 로컬 설치

## 2. 현재 저장소의 Claude/Codex 호환성 상태

현재 저장소는 두 층으로 운영됩니다.

- `skills/`: Claude Code 원본
- `.codex/skills/`: Codex 포팅본

Claude 원본에는 아래와 같은 Claude 전용 요소가 들어 있습니다.

- `~/.claude/skills`
- `.claude/commands`
- `AskUserQuestion`
- `WebFetch`
- `Read`, `Write`, `Edit`
- `/plugin marketplace install ...`

즉, 현재 상태는 다음처럼 보는 것이 정확합니다.

- Claude Code: 바로 사용 가능
- Codex: `.codex/skills/` 기준으로 바로 설치 가능

또한 아래 스킬들은 "Codex용 스킬"이라기보다 "Claude가 Codex CLI를 호출하는 워크플로우"에 가깝습니다.

- `codex`
- `codex-claude-loop`
- `codex-claude-cursor-loop`

## 3. Codex 포팅 방식

### 핵심 원칙

Codex에서는 Claude 스킬을 그대로 복사하기보다, "Claude 전용 도구/경로/대화 흐름"을 제거하고 Codex가 이해할 수 있는 일반화된 스킬로 다시 정리해야 합니다. 현재 `.codex/skills/`는 이 원칙에 따라 포팅된 결과물입니다.

### Codex 스킬 기본 구조

Codex용 스킬은 보통 아래 구조가 가장 안전합니다.

```text
~/.codex/skills/
└── skill-name/
    ├── SKILL.md
    ├── references/
    │   └── extra-guide.md
    ├── scripts/
    │   └── helper.py
    └── assets/
        └── template.txt
```

필수 파일은 `SKILL.md` 하나입니다.

`SKILL.md` 최소 형태:

```md
---
name: prompt-enhancer
description: Enhance brief development requests by inspecting the local project and rewriting them into actionable requirements. Use when the user gives a short coding request that lacks implementation detail.
---

# Prompt Enhancer

## When to use

- Brief coding requests
- Tasks that need project-context analysis

## Workflow

1. Inspect the repo structure.
2. Identify conventions and existing patterns.
3. Rewrite the request into concrete implementation requirements.
4. Ask only the minimum necessary follow-up questions.
```

### 변환 체크리스트

Claude 스킬 하나를 Codex용으로 옮길 때는 아래 순서로 작업하면 됩니다.

1. `skill.md`, `Skill.md` 같이 제각각인 파일명을 `SKILL.md`로 통일합니다.
2. frontmatter의 `name`, `description`를 Codex 트리거 기준으로 다시 씁니다.
3. Claude 전용 도구명을 일반 동작 설명으로 바꿉니다.
4. 긴 예제와 세부 설명은 `references/`로 분리합니다.
5. 스크립트가 있으면 `scripts/`로 유지하고, SKILL.md에서는 "언제 읽고 언제 실행할지"만 짧게 적습니다.
6. 설치 경로를 `~/.claude/skills`가 아니라 `~/.codex/skills` 기준으로 바꿉니다.
7. Claude 전용 slash command 문구는 제거합니다.

### Claude 전용 표현을 Codex용으로 바꾸는 방법

| 현재 문서 표현 | Codex용 변환 방향 |
| --- | --- |
| `AskUserQuestion` | 필요 시 사용자에게 짧고 직접적인 질문 |
| `Read`, `Write`, `Edit` | 파일을 읽고 수정한다는 행동 중심 설명으로 변경 |
| `WebFetch` | 웹 도구 또는 별도 스크립트를 사용한다고 일반화 |
| `.claude/skills` | `~/.codex/skills` |
| `.claude/commands` | Codex 스킬에는 보통 불필요, 필요 시 별도 템플릿 파일로 분리 |
| `/plugin marketplace install ...` | 로컬 설치 또는 Codex skill installer 안내로 변경 |

중요:

- Codex 스킬 문서는 "특정 제품의 도구 이름"보다 "무슨 판단을 하고 어떤 순서로 작업할지"에 집중하는 편이 더 잘 맞습니다.
- 큰 문서를 그대로 옮기기보다, SKILL.md는 짧게 두고 자세한 내용은 `references/`로 보내는 편이 좋습니다.

## 4. Codex 설치 방법

이 저장소에는 이미 포팅된 `.codex/skills/` 트리가 포함되어 있습니다.

가장 쉬운 설치 방법:

```bash
bash scripts/install-codex-skills.sh
```

수동 설치:

```bash
mkdir -p ~/.codex/skills
cp -R .codex/skills/* ~/.codex/skills/
```

배포용 압축 파일 생성:

```text
dist/hobi2k-codex-skills-YYYYMMDD_HHMMSS.tar.gz
```

압축 생성 명령:

```bash
bash scripts/package-codex-skills.sh
```

현재 저장소 구조:

```text
hobi2k/skills/
├── skills/         # Claude Code 원본
├── .codex/skills/  # Codex 포팅 버전
└── HOBI2K_SKILLS_GUIDE.md
```

설치 후에는 Codex를 재시작하는 편이 안전합니다.

## 5. 어떤 스킬부터 Codex에서 먼저 써보면 좋은가

### 먼저 옮기기 쉬운 스킬

- `prompt-enhancer`
- `landing-page-guide-v2`
- `design-prompt-generator-v2`
- `frontend-design`
- `workthrough`
- `workthrough-v2`

이유:

- 도구 의존성이 상대적으로 약하고
- 설명형 워크플로우 비중이 높고
- Claude 전용 기능을 걷어내기 쉽습니다.

### 중간 난이도

- `flutter-init`
- `nextjs15-init`
- `card-news-generator`
- `card-news-generator-v2`
- `web-search`

이유:

- 스크립트/폴더 구조/생성 규칙이 섞여 있고
- 설치 경로, 실행 명령, 외부 의존성을 함께 정리해야 합니다.

### 나중에 옮기는 것이 좋은 스킬

- `web-to-markdown`
- `code-prompt-coach`
- `codex`
- `codex-claude-loop`
- `codex-claude-cursor-loop`

이유:

- Claude 전용 도구 가정이 많고
- 현재 문서가 "Claude가 Codex를 호출한다"는 구조에 묶여 있어
- Codex 네이티브 스킬로 바꾸려면 재설계가 필요합니다.

## 6. 예시: `prompt-enhancer` 포팅 구조

### 현재 상태

- 프로젝트 컨텍스트 분석 중심
- Claude Code에서 잘 맞는 구조
- Codex에서도 비교적 자연스럽게 이식 가능

### 권장 변환 방식

1. 기존 `skills/prompt-enhancer/SKILL.md`를 기준 문서로 사용
2. Claude 전용 표현 제거
3. 프로젝트 분석 절차만 남김
4. 프레임워크별 예시는 `references/`로 분리

현재 저장소 기준 예시 구조:

```text
.codex/skills/prompt-enhancer/
├── SKILL.md
└── references/
    └── framework-guides.md
```

예시 설명 문구:

```md
---
name: prompt-enhancer
description: Rewrite short coding requests into detailed, repo-aware implementation requirements. Use when the user asks for a feature or fix without enough detail.
---

# Prompt Enhancer

## Workflow

1. Inspect key project files such as package manifests, router structure, and existing feature folders.
2. Detect conventions, libraries, and similar implementations.
3. Produce a concise requirement spec tailored to the repo.
4. Only ask follow-up questions if a wrong assumption would be risky.
```

이 정도로 줄이면 Codex에서도 훨씬 자연스럽게 작동합니다.

## 7. 추천 저장소 정리 방향

`hobi2k/skills`를 Claude Code와 Codex 양쪽에서 관리하려면 아래 구조를 추천합니다.

```text
hobi2k/skills/
├── skills/                 # Claude Code 기준 원본
├── .codex/skills/          # Codex 포팅 버전
├── README.md               # 사용자용 메인 문서
├── HOBI2K_SKILLS_GUIDE.md  # Claude/Codex 통합 가이드
└── SKILL_DISTRIBUTION_GUIDE.md
```

운영 원칙:

- `skills/`는 Claude 원본 유지
- `codex-skills/`는 Codex용 최소 포팅본만 유지
- 같은 내용을 양쪽에 장문으로 중복하지 않기
- 설치 문구는 GitHub 저장소 표기와 NPM 패키지 표기를 구분하기

## 8. 문서에 바로 써도 되는 권장 문구

### Claude Code용

```md
## Claude Code에서 사용하기

가장 쉬운 방법은 `hobi2k/skills` 저장소를 clone한 뒤 `skills/` 아래 스킬을 `~/.claude/skills/` 또는 프로젝트의 `.claude/skills/`로 복사하는 것입니다.

NPM으로 배포한 경우에는 `@hobi2k/skills/<skill-name>` 형식으로 설치 문구를 제공합니다.
```

### Codex용

```md
## Codex에서 사용하기

현재 이 저장소의 스킬은 대부분 Claude Code 기준으로 작성되어 있습니다. Codex에서 사용하려면 Claude 전용 도구명과 경로를 제거하고, 각 스킬을 `~/.codex/skills/<skill-name>/SKILL.md` 구조로 포팅해야 합니다.
```

## 9. 한 줄 결론

- `hobi2k/skills`는 Claude Code에서는 바로 쓸 수 있게 문서화할 수 있습니다.
- Codex는 별도 포팅 레이어가 필요합니다.
- 따라서 저장소 문서는 "Claude 사용법"과 "Codex 변환 가이드"를 분리해서 적는 것이 가장 깔끔합니다.
