import { useContext, useState } from "react";
import { ListProvider } from "./ListContext";
import Navibar from "./Navibar";
import { useNavigate } from "react-router-dom";
// import '../tempCss/SearchList.css' 

const SearchList = () => {
    const navigate = useNavigate();

    const {movieList} = useContext(ListProvider);
    const [input,setInput] = useState('');

    const moveToDetail = (movieId) => {
        navigate(`/listDetail/${movieId}`);
    }

    return (
        <>
        <div>
            <Navibar />
            <h1 className="flex justify-center m-6 text-3xl font-black text-indigo-800">SEARCH</h1>
        </div>
        <div className="h-15 flex w-full justify-center mt-10 dark:bg-gray-800">
        <div className="flex flex-col items-center relative rounded-md w-full px-4 max-w-xl">
            <input  className = 'w-full p-3 border-2  border-gray-300 placeholder-gray-500 rounded-md mb-10' 
                    placeholder="영화 제목을 검색해주세요" value={input} onChange={e=>setInput(e.target.value)}/>
            {input&&(
            movieList.map(ml=>(   
            ml.title.includes(input)?(
                <div className="flex flex-col gap-5 border-b-2 w-full text-center font-extrabold p-5 py-10 text-lg text-gray-600"                 
                     key={ml.id}
                     onClick={()=>moveToDetail(ml.id)}>
                    <h3 className="font-black text-2xl mb-5">{ml.title}</h3>
                    <div className="searchDetail"> {ml.category}</div>
                </div>
            ):''
        )
        )
            )}
        </div>
        </div>
        </> 
    );
};

export default SearchList;