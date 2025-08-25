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
                       
            const editedReview = savedList.map((prev)=>(
                prev.id === review.id ? {
                    ...prev, 
                    ...review,
                    date:now
                    } : prev ));            

            localStorage.setItem("lists",JSON.stringify(editedReview));
            
            navigate('/');                      }
        }      
       
    return (
        <div>
            {/* <Navibar /> */}
            <div className="container">
                <div className="inner-container">
                    <h2 className="page-edit">리뷰글 수정</h2>
                    <span>{review.date}</span>
                        
                    {review.id &&
                    <select value={review.category} onChange={(e)=>setReview({...review,category:e.target.value})} className="select-genre">
                        <option value={review.category}>{review.category}</option>
                        {restCategory.map((genre)=>(
                            <option key={genre.id} value={genre.name}>
                                {genre.name}
                            </option>))}
                    </select>}
                    <form className="form-box" onSubmit={updateReview}>
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