# 임기웅
[5월 25일]
트윗의 수정 기능을 추가했다. 이후 본격적으로 6장을 시작한다.
6장의 내용은 사진 미리보기기능과 저장기능이다.


[5월 18일]
트윗한 게시물 목록들을 출력해보고 트윗한 각각의 사람을 식별하는 기능을 추가한다.
트윗의 수정과 삭제 기능도 추가했다.
본인이 쓴 트윗은 본인만 삭제할수있는 기능을 추가했다.

[5월 11일]
저번시간에 이어서 파이어베이스 데이터베이스 연동을 진행한다.
파이어베이스 홈페이지가 아닌 VSC내부 fbase파일에서 데이터를 생성한다(Create)
마찬가지로 읽기(Read)기능도 VSC에서 구현한다.
생성한 데이터로 게시물 목록을 만들어보고 트윗 아이디도 저장하는기능을 추가한다.


[5월 4일]
원래 작성했던 코드에서 원인모를 오류가 발생해서 싹다 교수님꺼 코드로 대체했다. 버전문제인듯하다.
nwitter에 소셜 로그인 기능 추가하는기능 이어서 구현
Navigation을 추가하고 로그아웃 기능구현
트윗 등록 기능 만들기

[4월 27일]
이메일, 비밀번호 인증 기능 사용하기
로그인, 로그아웃 하기
useEffect함수를 이용해서 로그인 이후 화면 렌더링하기
nwitter에 소셜 로그인 기능 추가하기

[4월 13일]
firebase 로그인 연동으로 구글,git 설정
로그인 기본화면 제작
이번주는 한거 별로 없음

[4월 6일]
npm i react-router-dom@5.2.0 (책 55쪽 중간부분이후에 오류나면 입력)
오류천국날 오류를 고치면 또다른 오류가나옴 무한반복
아직까지 해결못함 -> 5월4일 코드싹다 변경으로 해결

[3월 30일]
firebase 연동
index.js에 아래 코드 북봍(9버전이상) 책에 없는내용
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';
라우터를 이용해서 화면이동

[3월 23일]
git 연동할때 꼭 입력해줘야할것
    $ git config --global user.name "LimKiWoong"
    $ git config --global user.email "lkw4670@naver.com"
    git config user.name   (이름확인)
    git config user.email  (이메일확인)
VSC extenstions에서 git graph 설치
VSC에서 Git 연동완료

[npm start] -> 홈페이지실행