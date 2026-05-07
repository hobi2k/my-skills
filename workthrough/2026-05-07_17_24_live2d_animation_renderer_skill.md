# Live2D 애니메이션 렌더러 스킬 일반화

## 개요
프로젝트/모델 전용으로 묶여 있던 Live2D 렌더링 절차를 재사용 가능한 `live2d-animation-renderer` 스킬로 일반화했다. 특정 캐릭터명, PromptMaker 전용 경로, 마스코트 전용 전제를 제거하고, 임의의 Live2D Cubism 모델과 앱 정적 자산 경로에 맞게 사용할 수 있도록 정리했다.

## 주요 변경사항
- 개발한 것: `live2d-animation-renderer` 스킬 추가
- 배포한 것: `.claude/skills`, `.codex/skills`, `.local/skills`, `skills` 네 위치에 동일한 스킬 배치
- 개선한 것: 렌더러 템플릿의 입력/출력 경로를 `LIVE2D_PROJECT_ROOT`, `LIVE2D_MODEL_DIR`, `LIVE2D_OUTPUT_DIR` 환경변수 기반으로 일반화

## 결과
- ✅ 특정 모델명 / 기존 프로젝트명 grep 결과 없음
- ✅ 네 위치의 스킬 디렉터리 내용 동일성 확인

## 다음 단계
- 실제 새 Live2D 모델 하나로 템플릿 복사 후 env 기반 캡처 리허설
