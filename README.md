# **Ribbit**

![리빗로고](/ribbit-front/src/assets/Ribbit-icon.png)

## 목차

- RIBBIT 개요
- 성취하고자 하는 목표
- 역할 분담
- 기술 스택
- 협업 관리
- 기능 구현 정의
  - 서버측 api 명세 등
- 개발 규칙 정의(코드 스타일 등)
- 일정

## RIBBIT 개요

- 일종의 미니 SNS로, 트위터, 페이스북 등 여러 SNS의 주요 기능을 구현하는 프로젝트로, 프로젝트 이름인 'ribbit'은 개구리가 우는 의성어인 '개굴'을 뜻합니다. 이번 RIBBIT 프로젝트에서는 게시글 올리기, 삭제 등 게시글과 관련된 기능, 그리고 친구 추가/삭제/차단 기능을 구현할 예정입니다.

## 성취하고자 하는 목표

- 사용하기 쉬운 간결한 UI
- 꼭 필요한 기능만 구현
- 여러 프레임워크 및 라이브러리 사용법을 익힘
- 깃허브를 통한 협업 능력 향상 및 엔트리를 대비해서 협업 가능성 확인.

## 역할 분담

역할 분담에 대한 자세한 내용은 다음과 같습니다.

|              역할               |  팀원  |
| :-----------------------------: | :----: |
|      PM / 프론트엔드 개발자      | 김준우 |
|        프론트엔드 개발자         | 이채은 |
|          백엔드 개발자           | 신은주 |
|          백엔드 개발자           | 김재훈 |

## 기술 스택

- 프론트엔드

|      항목       |          내용           |
| :-------------: | :---------------------: |
|    Extention    |          React          |
|    Language     | HTML5, CSS3, Javascript |
|      HTTP       |          Axios          |
| Package Manager |          Yarn           |

- 백엔드

|      항목      |          내용           |
| :------------: | :---------------------: |
|    DataBase    |          MySQL          |
|  Environment   | Amazon Web Services EC2 |
| Authentication |  Json Web Token based   |
|     Server     |      Python, Flask      |
|   Test Code    |     Python UnitTest     |
|   Web Server   |          Ngnix          |

## 협업 관리

|         항목          |                   내용                   |
| :-------------------: | :--------------------------------------: |
| Project Managing Tool |                                          |
|     Issue Control     | Github built-in issue tool(Kanban Board) |
|  Messenger for work   |                  Slack                   |

## 사용 툴

|   항목    |        내용        |
| :-------: | :----------------: |
|    VCS    |       Github       |
| MESSENGER |       Slack        |
| FE EDITOR | Visual Studio Code |
|  FE LINK  |      ES Lint       |
| BE EDITOR |      PyCharm       |

## 기능 구현 정의

### 메인페이지 - 김준우

- 내정보
  - 닉네임, 이름, 사진
  - 트윗, 팔로잉, 팔로우 표시
- 게시글 작성 (Ribbit하기)
  - 게시글 작성 후 작성완료 알람 표시
- 게시글 열람
  - follow한 사람의 게시글만 타임라인에 표시
  - 무한 스크롤 구현
- 검색 기능
  - 22자 이상 넘으면 ... 표기
  - 쿼리스트링을 사용해서 검색시 리프레쉬

### 마이페이지 - 이채은

- 프로필 수정
  - 프로필 이미지 변경
    - 변경 시 alert 띄움 - 프로필 이미지가 변경되었습니다.
  - 배경 이미지 변경
    - 변경 시 alert 띄움 - 헤더가 변경되었습니다.
  - 닉네임 변경
    - 변경 시 alert 띄움 - 닉네임이 변경되었습니다.
  - 리빗 테마 색상 변경 가능
    - 기호에 따라서 11가지의 색상을 제공함.
    - 원하는 색을 16진수로 넣을 수 있음.
- 내가 Ribbit 한 글 조회
  - 글을 클릭 시 포스팅으로 이동
  - 드롭다운메뉴 바 구현
    - 삭제
- Follower/Following 유저 목록 조회
  - Follow 취소 기능

### 타인 프로필 열람 - 김준우

- 메인페이지와 동일

### 메뉴바 - 김준우

- 홈 & 마이페이지 이동
- 로고 클릭시 맨 위로 가는 기능
- Ribbit하기 기능
  - 게시글 작성 후 작성완료 알람 표시
  - 배경이 검게 변하면서 창을 띄움
  - 트윗 취소시 트윗 취소창 띄움.

### 로그인/회원가입 - 김준우

- 로그인 / 회원가입
  - 아이디
    - 이메일 형식
    - 6자이상, 영문 + 숫자
    - 예시 텍스트
      - 이메일을 입력해주세요.
  - 비밀번호
    - 8자 이상, 영문 + 숫자 + 특수문자( !, @, #, \$, %, ^, &, \*, ~ )
    - 예시 텍스트
      - 비밀번호를 입력해주세요.
  - 비밀번호 확인
    - 비밀번호와 동일할 경우 통과.
    - 비밀번호 확인 텍스트
      - [비밀번호가 틀릴 때] 비밀번호가 옳바르지 않습니다. X표기
      - [비밀번호가 맞을 때] 텍스트 없어짐. O표기
    - 예시 텍스트
      - 비밀번호를 확인해주세요.
- 비밀번호 수정
  - 비밀번호 생성 규칙과 동일
  - 기존 비밀번호랑 겹치지 않게 수정해야함.

### Ribbit 하는 기능 상세 - 김준우

- 리빗
  - 2000자 제한
  - 사진을 넣을 수 있음 (png, jpeg)
- 예시 텍스트
  - 무슨 일이 일어나고 있나요?

### 검색 페이지 - 김준우

- 검색
  - 검색어 표기
  - 타인포스팅에 검색한 결과와 같은 텍스트가 있을 경우 표기
- 예시 텍스트
  - 리빗 검색하기

## 개발 규칙 정의

### 프론트엔드

- [JS] 카멜케이스 사용.
- [JS] 메인 컴포넌트를 3항연산자를 사용해서 변환 금지.
- [Folder] 디렉토리 구조 철저.
- [REACT] airbnb 스타일 가이드 따름

### 백엔드

- [PYTHON] 파이참 스타일가이드 통함.
- [Folder] 디렉토리 구조 철저.

## 진행 계획

### 회의 일정

- [전체회의] 수요일 - 5층 자습실 (10시)

- BackEnd 일정

  1. 스웨거 작성 - 12월 2일 ~ 12월 4일
  2. 데이터 베이스 설계 - 12월 5일 ~ 12월 6일

  - 요구조건 분석
  - 개념적 설계(E-R 다이어그램)
  - 논리적 설계(논리적 스키마 설계)
  - 물리적 설계
  - 구현

  3. api 개발 - 12월 7일 ~ 12월 28일

  - user 정보(로그인, 회원가입)
  - 팔로우 관련(팔로우, 팔로잉)
  - 마이페이지(닉네임, 프로필 사진 등)
  - 게시글(게시글 작성/삭제/검색/조회)

  4. 테스트 및 코드 리뷰 / 수정 - 12월 29일 ~ 1월 4일

  - unit test 적용
  - code review 및 수정

- FrontEnd 일정
  1. Create React App - 11월 26일
     - 디렉토리 구조 잡기 (redux)
     - 기초 라우터 설정
     - 라이브러리 추가
  2. 개발 파트 지정 - 11월 30일
     - 페이지 항목
       1. 메인 페이지
       2. 로그인 & 회원가입 페이지
       3. 마이 페이지
       4. 타인 프로필 페이지
       5. 검색 페이지
  3. 1차 개발에 대한 회고 - 12월 9일
     - 빠른 개발 후 빠른 회고로 부족한점 보충
  4. 2차 개발에 대한 테스트 및 회고 - 12월 27일
  5. 최종 점검 및 서버와 결합 - 12월 28일

## 개발 일정

|          기간           |           내용            |
| :---------------------: | :-----------------------: |
|       2018/11/26        |   UI 및 기능 구현 논의    |
|       2018/11/30        |         역할 분담         |
|       2018/12/03        |     서비스 흐름 정의      |
| 2018/12/03 ~ 2018/12/09 |     1차 개발 및 회고      |
| 2018/12/19 ~ 2018/12/27 | 2차 개발 및 테스트 & 회고 |
|       2018/12/28        |  서버 및 클라이언트 병합  |
|       2018/12/29        |           회고            |

    1. 메인 페이지 : 김준우
    3. 마이 페이지 : 이채은
    4. 타인 프로필 페이지 : 김준우
    5. 검색 페이지 : 김준우
