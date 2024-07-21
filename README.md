# 이미지 하나 박기

# 👷 Co-Labor: 외국인 노동자과 함께 살아가는 웹 서비스
- 외국인 노동자들이 한국에서 안정적으로 정착하고 적응할 수 있도록 돕는 웹사이트
- 외국인 노동자들이 겪는 일자리, 정보 부족, 법률 문제 등을 해결하고, 다양한 지원 서비스를 제공
- 궁극적으로 한국 사회의 경제 활성화와 사회 통합에 기여

## ✨ 주요 기능
### 1️⃣ 채용 공고 및 기업 리뷰
&nbsp;다양한 직무, 경력, 고용 형태, 근무 지역 등을 포함한 상세한 채용 공고를 제공합니다. 사용자는 기업의 상세 페이지에서 기업 정보와 함께 다른 근로자들의 리뷰를 통해 기업의 신뢰도를 평가할 수 있습니다. 이를 통해 본인에게 적합한 직무와 신뢰할 수 있는 기업을 효율적으로 찾아 지원할 수 있습니다.

### 2️⃣ AI 검색 기능
&nbsp;DB에서 추출한 데이터를 기반으로 Word2Vec 모델을 학습시켜 유사 키워드를 생성합니다. 사용자가 입력한 키워드와 유사한 키워드를 통해 관련된 데이터를 보다 빠르고 정확하게 검색할 수 있습니다. 이를 통해 사용자는 필요한 정보를 신속하고 효율적으로 찾을 수 있습니다.

### 3️⃣ 법률 챗봇
&nbsp;OpenAI API 모델을 활용하여 외국인 노동자들이 직장에서 겪을 수 있는 법률적인 문제에 대해 도움을 받을 수 있는 법률 상담 챗봇을 제공합니다. 챗봇은 한국의 노동법과 관련된 다양한 질문에 신속하고 정확하게 답변하여 법적 문제를 해결하는 데 도움을 줍니다.

## 🔗 개발 진행 상황
- **Front-end** [FE Repository](https://github.com/Co-Labor-Project/Co-Labor-FE)
- **Back-end** [BE Repository](https://github.com/Co-Labor-Project/Co-Labor-BE)

## 🗂️ 시스템 아키텍처
![colabor drawio](https://github.com/user-attachments/assets/127e0d5d-714e-4416-9334-575a5e4a0209)

## 🗃️ ERD
![erd](https://github.com/user-attachments/assets/d8bdf38d-52bf-47f8-9e3d-bda802015754)

### `labor_user` - 사용자
- **설명**: 외국인 노동자(사용자) 정보를 나타냅니다.

### `enterprise` - 기업
- **설명**: 기업 정보를 나타냅니다.

### `job` - 채용 공고
- **설명**: 기업에서 게시하는 채용 공고를 나타냅니다.

### `review` - 리뷰
- **설명**: 사용자가 기업에 대한 리뷰를 나타냅니다.

### `support_center` - 지원 센터
- **설명**: 채용을 지원하는 센터 정보를 나타냅니다.

### `enterprise_user` - 기업 사용자
- **설명**: 채용 공고를 게시할 수 있는 기업 내 사용자 정보를 나타냅니다.

### `chatting` - 채팅
- **설명**: 사용자와 법률 챗봇간의 채팅 메시지를 나타냅니다.

### `enterprise_queue` - 기업 대기열
- **설명**: 승인을 기다리는 기업 정보를 나타냅니다.

### `hospital` - 병원
- **설명**: 병원 정보를 나타내며, 위치를 제공할 수 있습니다.

### 관계 및 제약 조건 !!!!!!!!!!테이블??
- **외래 키 제약 조건**:
  - `job` 테이블: `enterprise_user_id` 및 `enterprise_id`는 `enterprise_user` 테이블 참조
  - `review` 테이블: `labor_user_id`는 `labor_user` 테이블 참조, `enterprise_id`는 `enterprise` 테이블 참조
  - `enterprise_user` 테이블: `enterprise_id`는 `enterprise` 테이블 참조
  - `chatting` 테이블: `labor_user_id`는 `labor_user` 테이블 참조

## 📚 기술 스택
||Skills|
|:-|:-:|
|**Front-end**| ![Static Badge](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![Static Badge](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Static Badge](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Static Badge](https://img.shields.io/badge/react.js-61DAFB?style=for-the-badge&logo=react&logoColor=black)|
|**Back-end**| ![Static Badge](https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white) ![Static Badge](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white) ![Static Badge](https://img.shields.io/badge/openai-412991?style=for-the-badge&logo=openai&logoColor=white)|
|**Version Control System**|[![Static Badge](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Co-Labor-Project/demo-repository/)![Static Badge](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)|
|**Collaboration**|![Static Badge](https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) [![Static Badge](https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white)](https://mixolydian-idea-627.notion.site/7d14829c5a3e4b84930b2c5a8b0c9838?pvs=4)|
|**Design**|[![Static Badge](https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/YddHONkDl0nqcbQVkUEVTa/%EA%B3%B5%EB%AA%A8%EC%A0%84?node-id=33-251&t=ocRWZPY412U61gb0-0)|


## 💻 상세 페이지 !!!!!!!!!!!!!!설명 수정 필요
### 📍 메인 페이지
<img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/gif/Main%20Page.gif" width="100%" height="100%" />

- Co-Labor 메인 페이지

### 📍 로그인 / 회원가입 페이지
<img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/gif/Login.gif" width="100%" height="100%" />

- Co-Labor 로그인 및 일반 회원, 기업 회원 가입 페이지

### 📍 기업 등록 페이지
<img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/gif/Company%20Registration.gif" width="100%" height="100%" />

- 채용 공고를 게시하고자 하는 기업 회원이 본인의 소속 기업을 등록하는 페이지
- 등록한 기업은 추후 관리자에 의해 승인

### 📍 기업 상세 페이지
<img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/gif/Company%20Details.gif" width="100%" height="100%" />

- Co-Labor에 등록된 기업들의 상세 정보, 채용 공고, 기업 리뷰 등을 확인 할 수 있는 페이지
- 해당 기업의 전체 리뷰 통계와 각 리뷰별 세부 내용 확인 가능

### 📍 채용 공고 페이지
<img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/gif/Recruitment%20Notice.gif" width="100%" height="100%" />

- 기업 회원들이 게시한 기업 채용 공고를 확인 할 수 있는 페이지
- 직군, 경력, 근무형태, 우대사항 등 세부 내용과 연관된 채용 공고 확인 가능

### 📍 일반 검색 페이지
<img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/gif/Search.gif" width="100%" height="100%" />

- 기업 정보, 채용 공고, 기업 리뷰 등을 키워드로 검색

### 📍 AI 검색 페이지
<img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/gif/AI%20Search.gif" width="100%" height="100%" />

- ?

### 📍 법률 챗봇 페이지
<img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/gif/Legal%20Chatbot.gif" width="100%" height="100%" />

- 근로계약, 비자 규정, 법적 권리와 의무 등에 관한 정보를 제공하며, 법적 문제 해결을 도움
- ?30일 이내의 대화 내용을 저장하여 지속적인 확인 가능?

### 📍 외국인 노동자 지원 센터 페이지
<img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/gif/Foreign%20Worker%20Support%20Center.gif" width="100%" height="100%" />

- 사용자의 현재 위치를 기반으로 인근 외국인 노동자 지원 센터 및 병원 위치 및 정보 확인 가능
- 각 센터 클릭시, 지도에서 해당 위치로 이동


## 🧑‍💻 팀원 구성

<div align="center">

| **김도현** | **김문기** | **정한울** | **조준화** |
| :------: |  :------: | :------: | :------: |
| <img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/img/kdhqwe1030_img.jpg" height=240 width=180> <br/> _[@kdhqwe1030](https://github.com/kdhqwe1030)_ | <img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/img/mk-isos_img.jpg" height=240 width=180> <br/> _[@mk-isos](https://github.com/mk-isos)_ | <img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/img/jho7535_img.jpg" height=240 width=180> <br/> _[@jho7535](https://github.com/jho7535)_ | <img src="https://github.com/Co-Labor-Project/demo-repository/blob/main/img/jjj5306_img.jpg" height=240 width=180> <br/> _[@jjj5306](https://github.com/jjj5306)_ |

</div>

## 지원서?
