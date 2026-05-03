# TypeScript / JavaScript / React / React Native / Next.js Guide

## 기본 가정

- TypeScript 사용 여부를 먼저 확인합니다.
- 패키지 매니저는 `npm`, `pnpm`, `yarn` 중 프로젝트 기준으로 씁니다.
- React, React Native, Next.js는 분리해서 설명합니다.
- Next.js는 server/client 경계를 항상 확인합니다.

## TypeScript / JavaScript 문서 포인트

- 실행 명령
- 빌드 명령
- 테스트 명령
- ESM/CJS 여부
- 비동기 흐름
- 타입 정의 위치
- interface/type alias 사용 여부
- strict mode 또는 타입 검사 포인트

## React 문서 포인트

- 컴포넌트 책임
- props
- local state
- effect 또는 async 데이터 흐름
- 이벤트 핸들러 위치

## React Native 문서 포인트

- 화면(screen) 또는 컴포넌트 책임
- navigation 흐름
- platform 차이(iOS/Android)
- native module 또는 권한 필요 여부
- 스타일링 방식
- API 호출 후 상태 반영과 로딩/에러 상태

## Next.js 문서 포인트

- route 파일 위치
- server component / client component 구분
- data fetching 위치
- API route 또는 server action 여부
- 환경 변수 사용 방식

## 테스트 지시 포인트

- Jest / Vitest / RTL 여부
- 화면 기준 검증
- mock 여부
- loading / error / empty 상태
