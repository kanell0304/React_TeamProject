조원:  <br>
이경준 - PL, 개발환경세팅, 리스트 페이지, 리스트 상세보기, 카테고리 페이지, 카테고리 삭제, CSS <br>
함현준 - 리스트 수정 페이지, customHook, 코드AS, CSS <br>
한예원 - 리스트 검색 페이지, 카테고리별 검색 페이지, 카테고리 생성, CSS기본틀(Figma), CSS <br>
임다빈 - 리스트 추가 페이지, CSS

Node.js version: v20.19.4 <br>
Tailwind 설치 방법 notion: https://www.notion.so/TailwindCss-24f974c0f4ae809485aec53c77a72467 <br>
git url: https://github.com/kanell0304/React_TeamProject.git <br>

1. 프로젝트 파일 생성하기
2. 해당 파일로 경로이동
3. 아무파일 하나 생성해서 (text파일같은거)
- git init
- git add .
- git commit -m "msg"
- echo "test1" > test.txt
- rm test.txt
- git add .
- git commit -m "del test.txt"
4. git remote add origin https://github.com/kanell0304/React_TeamProject.git
5. git fetch
6. git pull origin main
* history관련 오류 발생 시 - git pull origin main --allow-unrelated-histories
7. Router 사용을 위한 패키지 설치
- npm install react-router-dom


- git 명령어 모음 - ('br' 태그 제외)
git init                      - 로컬 저장소 초기화 <br>
git add .                     - 스테이징 <br>
git commit -m 'msg'           - 커밋 <br>
git commit -am 'msg'          - 스테이징 + 커밋(최초 커밋 불가) <br>

git remote add origin https://github.com/kanell0304/React_TeamProject.git - 깃 허브 연결 <br>
git branch                    - 브랜치 연결 확인 <br>
브랜치가 main밖에없다면
git checkout -b develop origin/develop - 원격 저장소의 branch develop을 가져옴

git pull                      - 원격 저장소에서 최신 브랜치 가져오기 -> 이 작업 후 push 작업 <br>
git checkout -b develop origin/develop - 원격 저장소에서 develop 브랜치의 내용 가져오기
git switch 브랜치이름           - 브랜치 변경 <br>
git push -u origin develop    - develop 브랜치에 push <br>
git push                      - '-u'가 포함된 push 명령어(바로 위 명령어)를 한번이라도 사용했다면 간단하게 push가능 <br>
