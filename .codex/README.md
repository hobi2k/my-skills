# Codex Skills in `hobi2k/skills`

이 디렉토리는 Codex에서 바로 사용할 수 있도록 포팅된 스킬셋을 담고 있습니다.

## 포함 내용

- `skills/`: Codex용 `SKILL.md` 엔트리와 참고자료
- `skills/README.md`: 스킬셋 안내
- `skills/PORTING_NOTES.md`: 포팅 원칙과 남아 있는 제한사항

## 설치

기본 설치:

```bash
bash scripts/install-codex-skills.sh
```

다른 Codex 홈 경로로 설치:

```bash
bash scripts/install-codex-skills.sh /custom/codex-home
```

수동 설치:

```bash
mkdir -p ~/.codex/skills
cp -R .codex/skills/* ~/.codex/skills/
```

설치 후에는 Codex를 다시 시작하는 편이 안전합니다.

## 배포용 패키지 생성

```bash
bash scripts/package-codex-skills.sh
```

생성된 tarball은 `dist/` 아래에 저장됩니다. 압축 파일은 `.codex/` 트리를 포함하므로 보통 다음처럼 설치합니다.

```bash
tar -xzf dist/hobi2k-codex-skills-*.tar.gz -C ~
```

## 사용 원칙

- 각 스킬 폴더의 `SKILL.md`가 Codex 기준 메인 엔트리입니다.
- 예전 Claude용 보조 문서는 일부 그대로 남아 있을 수 있지만, Codex에서는 `SKILL.md`를 우선 참고합니다.
- 스크립트와 참고자료는 원본에서 가져온 자산이므로, 실제 실행 전 현재 환경과 경로를 확인하세요.
