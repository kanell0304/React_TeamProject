import { useContext, useEffect, useState } from "react";
import { ListProvider } from "./ListContext";
import { useNavigate } from "react-router-dom";

const List = () => {

    const navigate = useNavigate();
    const {movieList} = useContext(ListProvider);
    const [movieList1, setMovieList1] = useState();

    const moveToDetail = (movieId) => {
        navigate(`/listDetail/${movieId}`);
    }

    // 임시 리스트 생성
    const createTempList = () => {
        localStorage.setItem("lists", JSON.stringify(movieList));
        setMovieList1(JSON.parse(localStorage.getItem("lists")));
    }

    useEffect(() => {
        setMovieList1(JSON.parse(localStorage.getItem("lists")));
    }, []);

    return (
        <div style={{width : "50%", margin : "0px auto"}}>
            <button onClick={createTempList}>임시 리스트 생성 및 초기화</button>
            <div style={{width : "100%", minWidth : "800px", padding : "10px", display : "flex", border : "1px solid black", backgroundColor : "#dee2e6"}}><div style={{width : "20%", textAlign : "center"}}>번호</div><div style={{width : "50%", textAlign : "center"}}>내용</div><div style={{width : "30%", textAlign : "center"}}>작성일자</div></div>
            {movieList1 && movieList1.map(movie => {
                return (
                    <div key={movie.id} onClick={() => moveToDetail(movie.id)} style={{minWidth : "800px", width : "100%", padding : "10px", display : "flex", border : "1px solid black"}}>
                        <div style={{width : "20%", textAlign : "center"}}>{movie.id}</div><div style={{width : "50%", textAlign : "center"}}>{movie.content}</div><div style={{width : "30%", textAlign : "center"}}>{movie.date}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default List;