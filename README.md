# Co-Labor: 외국인 노동자를 위한 웹사이트

## 프로젝트 설명
Co-Labor는 외국인 노동자들이 한국에서 안정적이고 효율적으로 일자리를 찾을 수 있도록 돕기 위해 만들어진 웹사이트입니다. 이 프로젝트는 외국인 노동자들이 겪는 언어 장벽과 정보 부족 문제를 해결하고, 다양한 지원 서비스를 제공하여 한국 사회에 긍정적인 영향을 미치고자 합니다.

## 특장점
### 1. 종합적인 정보 제공
고용 정보, 법률 정보, 일자리 리뷰 등 외국인 노동자에게 필요한 다양한 정보를 한 웹사이트에서 제공합니다. 이를 통해 노동자는 여러 사이트를 방문할 필요 없이 편리하게 필요한 정보를 얻을 수 있습니다.

### 2. 사용자 맞춤형 일자리 제공
사용자 맞춤형 일자리 추천을 통해 노동자는 자신이 설정한 조건에 맞는 일자리를 효율적으로 찾을 수 있습니다. 개인화된 검색 기능으로 더 빠르고 정확하게 일자리를 검색할 수 있습니다.

### 3. 직장 위치 기반 지원센터 위치 제공
사용자의 직장 위치를 기반으로 가까운 외국인 노동자 지원센터 위치를 제공합니다. 이는 노동자들이 필요한 지원을 빠르게 받을 수 있도록 도와줍니다.

## 제안서
![1](https://github.com/user-attachments/assets/e7b906cb-d92e-4bb0-8fa6-8ba5641083d1)
![2](https://github.com/user-attachments/assets/6a663a9c-14bd-484d-b217-2e8021bb66b0)
![3](https://github.com/user-attachments/assets/11892247-7fb9-4288-a969-fab23145f1b3)
![4](https://github.com/user-attachments/assets/d51b3da8-79a2-416c-bfb1-fb7f9b1c5d35)
![5](https://github.com/user-attachments/assets/8c0c2542-1181-43d5-bd25-583091d29378)
![6](https://github.com/user-attachments/assets/d586b6de-865c-45d1-977f-774580d770d9)

## 개발현황
### 백엔드
[백엔드 리포지토리 링크](https://github.com/Co-Labor-Project/Co-Labor-BE)

### 프론트엔드
[프론트엔드 리포지토리 링크](https://github.com/Co-Labor-Project/Co-Labor-FE)

## 시스템 아키텍처
![colabor drawio](https://github.com/user-attachments/assets/127e0d5d-714e-4416-9334-575a5e4a0209)

## ERD 다이어그램
![Co Labor (4) (1)](https://github.com/user-attachments/assets/1d6fb457-601a-44de-89e5-44dad404c0ef)

## 팀원 구성

<div align="center">

| **김도현** | **김문기** | **정한울** | **조준화** |
| :------: |  :------: | :------: | :------: |
| ![ehgus](https://github.com/user-attachments/assets/87c460aa-4999-4bc6-9243-3e32b6bfca35) <br/> [@kdhqwe1030](https://github.com/kdhqwe1030) | ![ansrl](https://github.com/user-attachments/assets/8c32ebd4-b849-438c-ad4d-c154328060e7) <br/> [@mk-isos](https://github.com/mk-isos) | ![화면 캡처 2024-07-01 164944](https://github.com/user-attachments/assets/403beca7-52fe-4917-899d-1ecf454e3ae9) <br/> [@jho7535](https://github.com/jho7535) | ![KakaoTalk_20240721_032045960_01](https://github.com/user-attachments/assets/5b8e7e6f-ca40-4be6-b9c5-14a56a42bea7) <br/> [@jjj5306](https://github.com/jjj5306) |

</div>


## 기능별 페이지 설명
### 기업 정보
국세청 사업자등록정보 진위확인 및 상태조회 API를 활용하여 다양한 기업 정보를 제공합니다. 사용자는 기업 상세페이지에서 리뷰를 통해 기업의 신뢰도를 평가할 수 있습니다.

### 채용 공고
다양한 직무, 경력, 고용 형태, 근무지역 등의 정보를 제공하여 적합한 채용 공고를 찾을 수 있습니다. 주요 업무, 자격 요건, 우대 사항, 채용 절차, 복지 및 혜택 등의 상세 정보를 통해 지원자들이 원하는 기업과 직무에 대해 정확히 이해할 수 있습니다.

### 법률 상담 챗봇
외국인 근로자들이 직장에서 겪을 수 있는 법률적인 문제에 대해 도움을 받을 수 있는 법률 상담 챗봇 서비스를 제공합니다. 챗봇은 한국의 노동법과 관련된 다양한 질문에 신속하고 정확하게 답변해줍니다.

### 근처 노동자 지원 센터 및 병원
긴급 상황이나 의료 도움이 필요할 때 근처에서 이용할 수 있는 노동자 지원 센터와 병원을 찾을 수 있는 기능을 제공합니다. 공공데이터와 네이버 지도 API를 이용하여 한눈에 확인할 수 있습니다.

### AI 검색 기능
MySQL 데이터베이스에서 추출한 데이터를 기반으로 Word2Vec 모델을 학습하여 유사 키워드를 생성합니다. 사용자가 입력한 키워드와 유사한 키워드를 통해 관련된 데이터를 검색하여 더 빠르고 정확하게 원하는 정보를 찾을 수 있습니다.


