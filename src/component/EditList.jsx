import { useContext, useEffect, useState } from "react";
import { ListProvider } from "./ListContext";
import { useNavigate, useParams } from "react-router-dom";


//상세보기 -> 수정
const EditList = () => {

        // 파라미터에서 수정하고자 하는 게시글의 id를 추출하는 코드(바로 아래 코드)를 추가해뒀습니다. '//'를 풀고 사용하시면 됩니다. - 이경준
        // const selectedMovieId = useParams(); // 수정하고자 하는 게시글의 id 추출 ex) selectedMovieId = {id : 1}, selectedMovieId.id = 1

        //////////////////////////test/////////////////////////////////////
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const hours = today.getHours().toString().padStart(2, "0");
        const minutes = today.getMinutes().toString().padStart(2, "0");
        const seconds = today.getSeconds().toString().padStart(2, "0");

        const now = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        //test용 초기값 더미데이터
        const movieList1= [
        {
            id : 1,
            title : "표본 게시글 제목1",
            content : "표본 게시글 제목1",
            date : now,
            category : "SF"
        },
        {
            id : 2,
            title : "표본 게시글 제목2",
            content : "표본 게시글 제목2",
            date : now,
            category : "Horror"
        },
        {
            id : 3,
            title : "표본 게시글 제목3",
            content : "표본 게시글 제목3",
            date : now,
            category : "Romance"
        }
    ];
        ////////////////////////////본코드////////////////////////////////////
        // const {id} = useParams();
        const navigate = useNavigate();

        //임시사용, provider 전역관리용
        const [movieList, setMovieList] = useState([]);

        //useEffect storage 전역관리 시 재연결 ∵localstorage초기화 문제로 비활성화
        // const {movieList, setMovieList} = useContext(ListProvider);
                
        const [review, setReview] = useState({title:'',content:''});
        const [currentRv, setCurrentRv]=useState(null);

        const onsubmit2 = (e)=>{
            e.preventDefault();
            const editedReview = movieList.map((prev)=>(
                parseInt(prev.id) === parseInt(currentRv.id) ? {...prev,...review,date:now} : prev ));
                setMovieList(editedReview);
                navigate('/'); // 차후 상세페이지로 연결
                
                console.log("수정리뷰리스트",editedReview);
            
        }



        ///provider 전역관리?
        useEffect(()=>{
            if(movieList.length>0) // //임시사용, provider 전역관리용
            localStorage.setItem("reviews",JSON.stringify(movieList));
        },[movieList]);
        
        useEffect(()=>{
            const savedList = JSON.parse(localStorage.getItem("reviews")) || [];
            setMovieList(savedList);
            //상세페이지 작성 후 연결 : useParam()  :id
            // const currentRv = savedList.find((getRv)=>parseInt(getRv.id)===parseInt(id))            
            // if(currentRv) setReview(currentRv);
            console.log("렌더링리스트:",savedList);
        }, []);


        
        //test///////////////////////////////////
        if(currentRv)
        console.log("선택된리뷰:",currentRv.id);
        else console.log("선택된리뷰없음");        
        const testselect = () => { //수정버튼 누르면 넘어와서
            setCurrentRv(movieList[0]);
            setReview({title:movieList[0].title, content:movieList[0].content})
        }
        ///////////////////////////////////
        

    return (
        <div>
            <h2>리뷰글 수정</h2>
            <form onSubmit={onsubmit2}>
                <input value={review.title} onChange={e=>setReview({...review,title:e.target.value})} type="text" /><br/>
                <textarea value={review.content} onChange={e=>setReview({...review,content:e.target.value})}/><br/>           
                <button type="submit">수정</button>
            </form>
            {/* test */}
            <hr />
            <h3>테스트용 리스트</h3>
            <ul>
                {movieList.map(rv=> (                   
                        
                        <li key={rv.id}>
                        {rv.date}
                        {rv.title}
                        {rv.content}
                        </li>                                           
                    )
                )}
                
            </ul>
            {/* selected ID */}
            <button onClick={testselect}>첫번째 임시선택</button>   

            <br/>
              <hr></hr>
            {/* end test */}
            <button onClick={() => {
            localStorage.setItem("reviews", JSON.stringify(movieList1));
            alert("movieList1");
            }}>
            강제 초기화
            </button>

        </div>
    );
};

export default EditList;