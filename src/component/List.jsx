import { useContext, useEffect, useState } from "react";
import { ListProvider } from "./ListContext";
import "../tempCss/List.css"
import { useNavigate } from "react-router-dom";

const List = () => {

    const navigate = useNavigate();

    const {movieList} = useContext(ListProvider);

    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(movieList));
    }, [])

    const [movieList1] = useState(JSON.parse(localStorage.getItem("lists")));

    const moveDetail = (movieId) => {
        navigate(`/listDetail/${movieId}`);
    }

    return (
        <div>
            <div className="movieList" style={{backgroundColor : "#dee2e6"}}><div>번호</div><div>내용</div><div>작성일자</div></div>
            {movieList1 && movieList1.map(movie => {
                return (
                    <div key={movie.id} className="movieList" onClick={() => moveDetail(movie.id)}>
                        <div>{movie.id}</div><div>{movie.content}</div><div>{movie.date}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default List;