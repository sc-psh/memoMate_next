# MemoMate 
MemoMate는 개인용 메모장 NEXT버전 웹 애플리케이션입니다. 사용자는 간편하게 메모를 작성하고 저장할 수 있으며, 필요에 따라 메모를 수정하고 삭제할 수 있습니다.

## 설치

1. 저장소를 클론합니다.
git clone https://github.com/sc-psh/memomate_next.git

2. 클론한 디렉토리로 이동합니다.
cd memomate_next

3. root 폴더로 이동하여 프론트엔드 의존성을 설치합니다.
npm install

4. server 폴더로 이동하여 백엔드 의존성을 설치합니다.
cd ../server
npm install

## 사용 방법

1. 프로젝트 디렉토리로 이동합니다.
cd MEMOMATE_NEXT

2. 애플리케이션을 실행합니다.
1) node.js 서버 실행
cd server
npm start

2) next UI서버 실행
npm run dev

위에 처럼 터미널로 따로 실행하시면 됩니다.

3. 웹 브라우저에서 http://localhost:3000으로 접속하여 MemoMate를 사용할 수 있습니다.
- node 서버는 5000번 포트로 적용함.

## 주요 기능

- 메모 작성: 간편한 입력 폼을 통해 메모를 작성할 수 있습니다.
- 메모 수정 및 삭제: 작성한 메모를 수정하거나 삭제할 수 있습니다.
- 사용자 인증: 로그인 및 회원가입 기능을 통해 사용자를 인증합니다.