import { useContext, useEffect, useRef, useState } from "react";
import { ListProvider } from "./ListContext";
import { useNavigate, useParams } from "react-router-dom";
import "../tempCss/EditList.css"
import { useDate } from "../customHook/useHooks"; //수정시간 갱신용


const EditList = () => {        
                
        const selectedMovieId = useParams(); 
        const navigate = useNavigate();
        const focusRef = useRef();
        const now = useDate();
        
        const {categoryList} = useContext(ListProvider);
        const [review, setReview] = useState({title:'',content:'',category:''});
        
        const restCategory = categoryList.filter((genre)=>genre.name !== review.category);

        useEffect(()=>{
            const savedList = JSON.parse(localStorage.getItem("lists")) || []; 

            const currentRv = savedList.find((getRv)=>parseInt(getRv.id) === parseInt(selectedMovieId.id));
            if(currentRv) setReview(currentRv);
            focusRef.current.focus();
            
        }, [selectedMovieId]);  

        const updateReview = (e)=>{
            e.preventDefault();
            if(!review.title || !review.content){
                return alert('내용 입력');                
            }
            else{
            const savedList = JSON.parse(localStorage.getItem("lists")) || [];
            const newTime = `${now} (수정됨)`;
            const editedReview = savedList.map((prev)=>(
                prev.id === review.id ? {
                    ...prev, 
                    ...review,
                    date:newTime
                    } : prev ));            

            localStorage.setItem("lists",JSON.stringify(editedReview));
            
            navigate('/');                      
            }
        }   
  
     return (
        <div>            
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="flex flex-col w-[800px] mx-auto p-5 gap-1 items-stretch">
                    <h2 className="text-center text-4xl text-gray-600 border-b-2 border-b-gray-500 p-4 font-black font-sans pt-4 ">
                        리뷰글 수정
                    </h2>
                    <div className="flex items-end gap-5">
                        <span className="mb-1 font-semibold text-gray-400">{review.date}</span>
                            {/* 장르 변경 옵션 */}
                        {review.id &&
                        <select 
                            value={review.category} 
                            onChange={(e)=>setReview({...review,category:e.target.value})} 
                            className="font-semibold text-gray-600 border w-48 ml-auto p-1 mb-1 mr-0 mt-6">

                            <option className="font-semibold text-gray-600" 
                                value={review.category}>{review.category}</option>

                            {restCategory.map((genre)=>(
                                <option className="font-semibold text-gray-600" key={genre.id} value={genre.name}>
                                    {genre.name}
                                </option>))}
                        </select>}
                    </div>
                    <form   className="flex flex-col gap-1 m-0 " 
                            onSubmit={updateReview}>
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
                            className="ml-auto text-1 font-bold text-gray-700 px-4 py-2 
                                        border-2 border-gray-700 bg-main_gray rounded-md
                                        mt-2 text-lg hover:bg-gray-300 transition-colors shadow-lg" 
                            type="submit">수정</button>
                        
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditList;