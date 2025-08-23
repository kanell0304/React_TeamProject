import { useContext, useState } from "react";
import { ListProvider } from "./ListContext";
import Navibar from "./Navibar";
import { useNavigate } from "react-router-dom";
import '../tempCss/SearchList.css' 

const SearchList = () => {
    const navigate = useNavigate();

    const {movieList} = useContext(ListProvider);
    const [input,setInput] = useState('');

    const moveDetail = (movieId) => {
        navigate(`/listDetail/${movieId}`);
    }

    return (
        <>
        <div>
            <Navibar />
            <h1 style={{textAlign : "center"}}>SEARCH</h1>
        </div>
        <div>
            <input className = 'searchBar' placeholder="영화 제목을 검색해주세요" value={input} onChange={e=>setInput(e.target.value)}/>
            {input&&(
            movieList.map(ml=>(   
            ml.title.includes(input)?(
                <div className="searchList" key={ml.id}
                onClick={()=>moveDetail(ml.id)}>
                    <h3>{ml.title}</h3>
                    <div className="searchDetail"> {ml.category}</div>
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