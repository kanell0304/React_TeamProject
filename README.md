# 🎬 Movie Review Journal

> React 기반의 영화 리뷰 관리 웹 애플리케이션 (프론트엔드 팀 프로젝트)

---

## 팀원 소개

| 이름 | 역할 |
|------|------|
| 이경준 | PL · 개발환경 세팅 · 리스트 페이지 · 리스트 상세보기 · 카테고리 페이지 · 카테고리 삭제 · CSS |
| 함현준 | 리스트 수정 페이지 · Custom Hook · 코드 리뷰 · CSS |
| 한예원 | 리스트 검색 페이지 · 카테고리별 검색 페이지 · 카테고리 생성 · CSS 기본틀(Figma) · CSS |
| 임다빈 | 리스트 추가 페이지 · CSS |

---

## 프로젝트 소개

영화 리뷰를 작성하고, 카테고리별로 관리할 수 있는 **Frontend-only** 프로젝트입니다.  
백엔드 없이 `localStorage`를 활용해 데이터를 저장하며, React의 Context API로 전역 상태를 관리합니다.

- **기간:** 약 1주일
- **저장소:** [GitHub](https://github.com/kanell0304/React_TeamProject.git)

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| UI 라이브러리 | React 18 |
| 라우팅 | React Router DOM v7 |
| 스타일링 | Tailwind CSS v3 |
| 상태 관리 | React Context API |
| 데이터 저장 | localStorage |
| 런타임 | Node.js v20 |

---

## 주요 기능

| 기능 | 설명 |
|------|------|
| 리뷰 목록 조회 | 등록된 영화 리뷰 전체 목록을 번호 · 제목 · 날짜 형태로 표시 |
| 리뷰 상세보기 | 특정 리뷰의 제목 · 카테고리 · 내용 · 날짜 상세 조회 |
| 리뷰 작성 | 제목 · 내용 · 카테고리 선택 후 리뷰 등록 |
| 리뷰 수정 | 기존 리뷰 내용 수정 |
| 리뷰 검색 | 키워드로 리뷰 검색 |
| 카테고리별 조회 | 선택한 카테고리의 리뷰만 필터링 |
| 카테고리 관리 | 카테고리 추가 · 삭제 (사용 중인 카테고리는 삭제 불가) |

---

## 프로젝트 구조

```
src/
├── App.js                  # 라우터 설정
├── component/
│   ├── Navibar.jsx         # 네비게이션 바
│   ├── Home.jsx            # 홈 (리뷰 목록)
│   ├── List.jsx            # 리뷰 목록 컴포넌트
│   ├── ListDetail.jsx      # 리뷰 상세보기
│   ├── AddList.jsx         # 리뷰 작성
│   ├── EditList.jsx        # 리뷰 수정
│   ├── SearchList.jsx      # 리뷰 검색
│   ├── Categorylist.jsx    # 카테고리별 조회
│   ├── CategoryCRD.jsx     # 카테고리 추가·삭제 관리
│   └── ListContext.jsx     # 전역 상태 (Context API)
└── customHook/
    └── useHooks.jsx        # useDate 커스텀 훅
```

---

## 라우팅

| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/` | `Home` | 리뷰 목록 |
| `/addList` | `AddList` | 리뷰 작성 |
| `/editList/:id` | `EditList` | 리뷰 수정 |
| `/listDetail/:id` | `ListDetail` | 리뷰 상세보기 |
| `/searchList` | `SearchList` | 리뷰 검색 |
| `/categoryList` | `CategoryList` | 카테고리별 조회 |
| `/categoryCRD` | `CategoryCRD` | 카테고리 관리 |

---

## 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/kanell0304/React_TeamProject.git
cd React_TeamProject

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm start
```

> Node.js v20 이상 권장

---

## Git 브랜치 전략

```
main      - 배포용 (최종 완성본)
develop   - 개발 통합 브랜치
```

```bash
# 원격 develop 브랜치 가져오기
git checkout -b develop origin/develop

# 작업 후 push
git pull
git push -u origin develop
```
