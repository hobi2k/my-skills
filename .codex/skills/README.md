# Codex Skill Set

이 폴더는 `hobi2k/skills`의 Claude 원본 스킬을 Codex용으로 포팅한 결과물입니다.

## 읽는 순서

1. 각 스킬 폴더의 `SKILL.md`
2. 필요한 경우 같은 폴더의 `references/`, `scripts/`, `assets/`
3. 원본에서 유지된 `README`, `QUICKSTART`, `EXAMPLES` 문서

## 현재 구조

- `SKILL.md`: Codex 메인 엔트리
- `references/`: 상세 참고 자료
- `scripts/`: 실행 가능한 보조 스크립트
- 원본 보조 문서: 참고용으로 유지

## 중요한 점

- Codex는 이 폴더의 `SKILL.md`를 기준으로 트리거되고 동작합니다.
- 원본 보조 문서는 아직 Claude 중심 표현이 섞여 있을 수 있습니다.
- 따라서 보조 문서보다 `SKILL.md`를 우선 신뢰하는 것이 안전합니다.

## 설치

```bash
bash scripts/install-codex-skills.sh
```

또는:

```bash
mkdir -p ~/.codex/skills
cp -R .codex/skills/* ~/.codex/skills/
```
