import { useContext, useEffect, useState } from "react";
import { ListProvider } from "./ListContext";
import { useNavigate, useParams } from "react-router-dom";


//상세보기 -> 수정
const EditList = () => {
        
        //use
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const hours = today.getHours().toString().padStart(2, "0");
        const minutes = today.getMinutes().toString().padStart(2, "0");
        const seconds = today.getSeconds().toString().padStart(2, "0");

        const now = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        //
        
        // 파라미터에서 수정하고자 하는 게시글의 id를 추출하는 코드(바로 아래 코드)를 추가해뒀습니다. '//'를 풀고 사용하시면 됩니다. - 이경준 -감사합니다
        const selectedMovieId = useParams(); // 수정하고자 하는 게시글의 id 추출 ex) selectedMovieId = {id : 1}, selectedMovieId.id = 1
        const navigate = useNavigate();
        
        const {movieList, setMovieList} = useContext(ListProvider);
        const [review, setReview] = useState({title:'',content:''});
        
        const onsubmit2 = (e)=>{
            e.preventDefault();
            const editedReview = movieList.map((prev)=>(
                prev.id === review.id ? {...prev, ...review, date:now} : prev ));
                setMovieList(editedReview);
                navigate('/');                      
        }

        //localStorage Context 전역관리용 
        useEffect(()=>{
            if(movieList.length>0) 
            localStorage.setItem("lists",JSON.stringify(movieList));
        },[movieList]);
        
        useEffect(()=>{
            const savedList = JSON.parse(localStorage.getItem("lists")) || [];
            setMovieList(savedList);     
            //수정폼에 기존내용 입력
            const currentRv = savedList.find((getRv)=>parseInt(getRv.id) === parseInt(selectedMovieId.id));
            if(currentRv) setReview(currentRv);
        }, []);       
        
    return (
        <div>
            <h2>리뷰글 수정</h2>
            <form onSubmit={onsubmit2}>
                <input value={review.title} onChange={e=>setReview({...review,title:e.target.value})} type="text" /><br/>
                <textarea value={review.content} onChange={e=>setReview({...review,content:e.target.value})}/><br/>           
                <button type="submit">수정</button>
            </form>            
        </div>
    );
};

export default EditList;