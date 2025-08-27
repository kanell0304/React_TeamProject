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
        <div>
            {/* <Navibar /> */}
            <div className="text-center text-3xl mt-6">SEARCH</div>
        </div>
        <div>
            <input className = 'mt-6 w-2/3 flex justify-self-center h-10' placeholder="영화 제목을 검색해주세요" value={input} onChange={e=>setInput(e.target.value)}/>
            {input&&(
            movieList.map(ml=>(   
            ml.title.includes(input)?(
                <div className="mt-2 w-1/2 justify-self-center p-2 border-b border-black border-solid pb-6" key={ml.id}
                onClick={()=>moveToDetail(ml.id)}>
                    <div className="text-2xl pb-3" >{ml.title}</div>
                    <div className="h-2 text-sm mt-2 justify-self-end"> {ml.category}</div>
                </div>
            ):''
        )
        )
            )}
        </div>
        </> 
    );
};

export default SearchList;