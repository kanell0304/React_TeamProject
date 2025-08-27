import { useState } from "react";
// import Navibar from "./Navibar";
import { useNavigate } from "react-router-dom";

const SearchList = () => {
    const navigate = useNavigate();

    const movieList = JSON.parse(localStorage.getItem("lists"));
    const [input,setInput] = useState('');

    const moveToDetail = (movieId) => {
        navigate(`/listDetail/${movieId}`);
    }

    return (
        <>
        <div className="font-mono">
            {/* <Navibar /> */}
            <div className="text-center text-3xl mt-6">SEARCH</div>
        </div>
        <div className="font-mono">
            <input className = 'rounded-md pl-2 mt-6 w-6/12 flex justify-self-center h-10 outline-none border-2 border-hover_color' placeholder="영화 제목을 검색해주세요" value={input} onChange={e=>setInput(e.target.value)}/>
            {input&&(
            movieList.map(ml=>(   
            ml.title.includes(input.toUpperCase())?(
                <div className="mt-8">
                <div className="mt-2 w-5/12 justify-self-center p-2 border-b border-black border-solid pb-6" key={ml.id}
                onClick={()=>moveToDetail(ml.id)}>
                    <div className="text-2xl pb-3" >{ml.title}</div>
                    <div className="h-2 text-sm mt-2 justify-self-end"> {ml.category}</div>
                </div></div>
            ):''
        )
        )
            )}
        </div>
        </> 
    );
};

export default SearchList;