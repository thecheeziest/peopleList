# 자바스크립트 모듈 유형
## sample1
- HTML 파일 속에 css, html, script 코드가 전부 들어간 기본 유형
### 기본 코드 설명
    1. **'명단 보기'** 버튼을 누르면 프로필 리스트가 노출됨
    2. 객체 형식으로 저장된 데이터가 li의 프로필 형식에 맞게 innerHTML 됨
    3. **'명단 삭제'** 버튼을 누르면 프로필 리스트가 삭제됨
    4. ul 속의 li를 innerHTML = ''으로 완전히 삭제

***

## sample2
1. 자바스크립트 코드를 app.js 코드로 분리
2. 모듈 폴더 생성
3. app.js에 사용되는 데이터를 data.js 파일로 분리
4. app.js 파일을 모듈 폴더 속 data.js 파일과 연결
5. data 파일이 객체 타입이므로 app.js 파일에서 불러올 때 {} 속에 작성
6. HTML 내에서 script type="module"로 연결

***

## sample3
1. app.js 파일의 코드 중 li에 innerHTML 되는 함수 showList를 showObj.js 파일로 분리
2. showObj.js 파일 내에서 showList 함수의 매개변수 지정
3. app.js 파일에서 showObj.js 파일 불러오기
4. app.js 파일 내에서 불러왔던 data.js 파일의 obj를 showObj.js파일의 매개변수로 사용

***

## sample4
1. app.js 파일 내의 선택자(document.querySelector)를 getEle.js 파일로 분리
2. 분리한 뒤 app.js로 내보내 연결
3. app.js 파일 내의 document.querySelector 부분을 getEle.js 이용해 수정

***