import { useContext, useEffect, useRef, useState } from "react";
import { ListProvider } from "./ListContext";
import { useNavigate, useParams } from "react-router-dom";
// import "../tempCss/EditList.css"
import { getNow } from "../customHook/useHooks"; //수정시간 갱신용
import Navibar from "./Navibar";

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
            <Navibar />
            <div className="flex flex-col justify-center items-center min-h-screen ">
                <div className="flex flex-col w-[800px] mx-auto p-5 items-stretch">
                    <h2 className="text-center text-4xl text-indigo-600 border-b-2 border-b-gray-500 p-4 font-black font-sans pt-4 ">
                        리뷰글 수정
                    </h2>
                    <div className="flex items-end gap-4">
                        <span className="mb-1 font-semibold text-gray-400">{review.date}</span>
                            {/* 장르 변경 옵션 */}
                        {review.id &&
                        <select 
                            value={review.category} 
                            onChange={changeGenre} 
                            className="border w-48 ml-auto p-1 mb-1 mr-0 mt-6">

                            <option value={review.category}>{review.category}</option>
                            {restCategory.map((genre)=>(
                                <option key={genre.id} value={genre.name}>
                                    {genre.name}
                                </option>))}
                        </select>}
                    </div>
                    <form   className="flex flex-col gap-1 m-0 " 
                            onSubmit={onsubmit2}>
                        <div className="border border-gray-200 p-2 mb-2 rounded-sm shadow-sm">
                            <input 
                                className="w-full p-2 text-xl border bg-gray-50 border-gray-50 rounded-md" 
                                ref={focusRef} value={review.title} 
                                onChange={e=>setReview({...review,title:e.target.value})} 
                                type="text" 
                            />
                        </div>
                        <textarea 
                            className="w-full border h-80 resize-none p-3 border-gray-200 rounded-sm shadow-md" 
                            value={review.content} 
                            onChange={e=>setReview({...review,content:e.target.value})}
                        />
                        <button 
                            className="ml-auto text-1 font-bold text-white bg-indigo-600 px-8 py-2 
                                        border-1 rounded-md mt-2 text-lg hover:bg-indigo-400 shadow-lg" 
                            type="submit">수 정</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditList;