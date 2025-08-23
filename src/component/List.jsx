import { useContext, useEffect, useState } from "react";
import { ListProvider } from "./ListContext";
import "../tempCss/List.css"
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
            <div className="movieList" style={{backgroundColor : "#dee2e6"}}><div style={{width : "20%"}}>번호</div><div style={{width : "50%"}}>내용</div><div style={{width : "30%"}}>작성일자</div></div>
            {movieList1 && movieList1.map(movie => {
                return (
                    <div key={movie.id} className="movieList" onClick={() => moveToDetail(movie.id)}>
                        <div style={{width : "20%"}}>{movie.id}</div><div style={{width : "50%"}}>{movie.content}</div><div style={{width : "30%"}}>{movie.date}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default List;