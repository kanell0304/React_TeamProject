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
        <div className="w-1/2 mx-auto font-mono">
            <button className=" border border-gray-400 px-2 py-1  hover:bg-gray-100 active:border-gray-600 text-sm rounded-md mb-4" onClick={createTempList}>임시 리스트 생성 및 초기화</button>
            <div className="w-full text-sm font-semibold min-w-[800px] pt-3 pb-1.5 flex justify-self-center border border-gray-700 rounded-t-md bg-sub_color2 bg-opacity-50">
                <div className="w-1/5 text-center">번호</div>
                <div className="w-1/2 text-center">제목</div>
                <div className="w-3/10 pl-5 text-center">작성일자</div>
            </div>
            {movieList1 && movieList1.map(movie => {
                return (
                    <div key={movie.id} onClick={() => moveToDetail(movie.id)} className="max-h-14 min-w-[800px] w-full p-3 flex justify-self-center border border-b-gray-700 cursor-pointer hover:bg-gray-50">
                        <div className="w-1/5 text-center text-sm ">{movie.id}</div>
                        <div className="w-1/2 text-center text-xs pr-5 overflow-y-scroll">{movie.title}</div>
                        <div className="w-3/10 text-center text-xs pt-5 font-semibold">{movie.date}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default List;