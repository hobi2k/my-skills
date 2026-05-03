# C# Guide

## 기본 가정

- `dotnet restore`, `dotnet build`, `dotnet run`, `dotnet test` 기준으로 씁니다.
- 솔루션 파일과 프로젝트 파일 위치를 명시합니다.

## 문서에 자주 넣을 항목

- 대상 프로젝트
- namespace
- DTO / Entity / Service 경계
- nullable 주의점
- async/await 흐름

## 구현 지시 포인트

- 수정 대상 `.csproj` 또는 `.sln`
- 클래스 책임
- 메서드 시그니처
- 의존성 주입 위치
- 예외 처리 / validation 위치

## 테스트 지시 포인트

- xUnit / NUnit / MSTest 여부
- mock 필요 여부
- 정상/실패 케이스
