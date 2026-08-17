# Backend Portfolio

백엔드 개발자 포트폴리오용 정적 프론트엔드입니다. Vercel에서 별도 빌드 없이 바로 배포할 수 있습니다.

## 수정 방법

`script.js`의 `profile`, `projects`, `skills`, `cases` 데이터를 본인 정보에 맞게 수정하세요.

## 로컬 실행

정적 파일이라 `index.html`을 브라우저에서 바로 열어 확인할 수 있습니다.

간단한 로컬 서버로 확인하려면:

```bash
npx serve .
```

## Vercel 배포

1. GitHub에 이 저장소를 push합니다.
2. Vercel에서 `New Project`를 선택합니다.
3. 이 저장소를 import합니다.
4. Framework Preset은 `Other` 또는 기본값으로 둡니다.
5. Build Command는 비워둡니다.
6. Output Directory는 `.`으로 둡니다.
7. Deploy를 누릅니다.
