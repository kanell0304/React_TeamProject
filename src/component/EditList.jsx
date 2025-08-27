import { useContext, useEffect, useRef, useState } from "react";
import { ListProvider } from "./ListContext";
import { useNavigate, useParams } from "react-router-dom";
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
        <div className="font-mono">            
            <div className="flex flex-col justify-start items-center">
                <div className="flex flex-col w-[650px] mx-auto gap-1 items-stretch">
                    <div className="text-center text-3xl ">MODIFY</div>
                    {/* <h2 className="text-center text-4xl text-gray-600 border-b-2 border-b-gray-500 p-4 font-black font-sans pt-4">
                        리뷰글 수정
                    </h2> */}
                    <div className="flex items-end gap-5">
                        <span className="mb-1 font-semibold text-sm">{review.date}</span>                            
                        {review.id &&
                        <select 
                            value={review.category} 
                            onChange={(e)=>setReview({...review,category:e.target.value})} 
                            className="outline-none rounded-md
                            border w-48 ml-auto p-1 mb-1 mt-6 border-gray-200 bg-hover_color bg-opacity-75 focus:border-gray-300">

                            <option className="font-semibold text-gray-600" 
                                value={review.category}>{review.category}</option>

                            {restCategory.map((genre)=>(
                                <option className="font-semibold text-gray-600 " key={genre.id} value={genre.name}>
                                    {genre.name}
                                </option>))}
                        </select>}
                    </div>
                    <form   className="flex flex-col gap-1 m-0" 
                            onSubmit={updateReview}>
                        {/* <div className="border border-gray-200 p-2 mb-2 rounded-sm "> */}
                            <input 
                                className="m-2 w-full p-2 text-xl border rounded-md outline-none border-main_color focus:ring focus:ring-hover_color " 
                                ref={focusRef} value={review.title} 
                                onChange={e=>setReview({...review,title:e.target.value})} 
                                type="text" 
                            />
                            {/* </div> */}
                        <textarea 
                            className="m-2 w-full border h-64 overflow-y-scroll resize-none p-3 rounded-md outline-none border-main_color focus:ring focus:ring-hover_color " 
                            value={review.content} 
                            onChange={e=>setReview({...review,content:e.target.value})}
                        />                        
                        <button 
                            className="ml-auto text-1 px-4 py-2 mt-2 text-md transition-colors 
                            hover:text-gray-700 border-2 border-gray-200 hover:bg-hover_color text-gray-700 font-semibold rounded-md bg-gray-200 text-sm" 
                            type="submit">수정</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditList;