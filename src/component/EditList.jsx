import { useContext, useEffect, useRef, useState } from "react";
import { ListProvider } from "./ListContext";
import { useNavigate, useParams } from "react-router-dom";
import "../tempCss/EditList.css"
import { getNow } from "../customHook/useHooks"; //수정시간 갱신용
// import Navibar from "./Navibar";

//상세보기 -> 수정
const EditList = () => {        
        
        // 파라미터에서 수정하고자 하는 게시글의 id를 추출하는 코드(바로 아래 코드)를 추가해뒀습니다. '//'를 풀고 사용하시면 됩니다. - 이경준 -감사합니다
        const selectedMovieId = useParams(); // 수정하고자 하는 게시글의 id 추출 ex) selectedMovieId = {id : 1}, selectedMovieId.id = 1
        const navigate = useNavigate();
        const focusRef = useRef();
        
        const {movieList, setMovieList, categoryList, setCategoryList} = useContext(ListProvider);
        const [review, setReview] = useState({title:'',content:'',category:''});
        //genre option 중복방지용(수정 선택된 장르(review.category) 제외한 배열)
        const restCategory = categoryList.filter((genre)=>genre.name !== review.category);

        const onsubmit2 = (e)=>{
            e.preventDefault();
            const now = getNow();            
            const editedReview = movieList.map((prev)=>(
                prev.id === review.id ? {
                    ...prev, 
                    ...review,
                    date:now
                    } : prev ));                    
                setMovieList(editedReview);
                navigate('/');                      
        }      
        //장르 수정
        const changeGenre = (e)=>{
            setReview({...review,category:e.target.value});            
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
            focusRef.current.focus();
            
        }, []);
        
    return (
        <div>
            {/* <Navibar /> */}
            <div className="container">
                <div className="inner-container">
                    <h2 className="page-edit">리뷰글 수정</h2>
                    <span>{review.date}</span>
                        {/* 장르 변경 옵션 */}
                    {review.id &&
                    <select value={review.category} onChange={changeGenre} className="select-genre">
                        <option value={review.category}>{review.category}</option>
                        {restCategory.map((genre)=>(
                            <option key={genre.id} value={genre.name}>
                                {genre.name}
                            </option>))}
                    </select>}
                    <form className="form-box" onSubmit={onsubmit2}>
                        <div>
                        <input className="form-title" ref={focusRef} value={review.title} onChange={e=>setReview({...review,title:e.target.value})} type="text" />
                        </div>
                        <textarea className="form-content" value={review.content} onChange={e=>setReview({...review,content:e.target.value})}/><br/>           
                        <button className="button-edit" type="submit">수정</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditList;