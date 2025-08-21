
Node.js version: v20.19.4 <br>
Tailwind 설치 방법 notion: https://www.notion.so/TailwindCss-24f974c0f4ae809485aec53c77a72467 <br>

git url: https://github.com/kanell0304/React_TeamProject.git <br>

git init                      - 로컬 저장소 초기화 <br>
git add .                     - 스테이징 <br>
git commit -m 'msg'           - 커밋 <br>
git commit -am 'msg'          - 스테이징 + 커밋(최초 커밋 불가) <br>

git remote add origin https://github.com/kanell0304/React_TeamProject.git - 깃 허브 연결 <br>
git branch                    - 브랜치 연결 확인 <br>
브랜치가 main밖에없다면
git checkout -b develop origin/develop - 원격 저장소의 branch develop을 가져옴

git pull                      - 원격 저장소에서 초신 브랜치 가져오기 -> 이 작업 후 push 작업 <br>
git switch 브랜치이름           - 브랜치 변경 <br>
git push -u origin develop    - develop 브랜치에 push <br>
git push                      - '-u'가 포함된 push 명령어(바로 위 명령어)를 한번이라도 사용했다면 간단하게 push가능 <br>
