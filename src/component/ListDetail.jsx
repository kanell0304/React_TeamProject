import { useState } from "react";
import Navibar from "./Navibar";
import { useNavigate, useParams } from "react-router-dom";

const ListDetail = () => {

    const navigate = useNavigate();
    const [movieList, setMovieList] = useState(JSON.parse(localStorage.getItem("lists"))); // 로컬 스토리지에서 list 정보를 불러옴
    const selectedMovieId = useParams(); // 주소에서 id 파라미터 값 추출 - List에서 클릭한 게시글의 id를 객체형태로 추출
    const selectedMovie = movieList.find(movie => movie.id === parseInt(selectedMovieId.id));

    const moveToEditList = () => {
        navigate(`/editList/${selectedMovieId.id}`);
    }

    return (
        <div>
            <Navibar />
            <h1 style={{textAlign : "center"}}>상세보기</h1>
            <div style={{padding : "50px 200px"}}>
                <div style={{display : "flex", justifyContent: "space-between"}}>
                    <div>장르: {selectedMovie.category}</div>
                    <div>등록일: {selectedMovie.date}</div>
                </div>
                <h2 style={{marginTop : "50px"}}>{selectedMovie.title}</h2>
                <div style={{marginTop : "50px", border : "1px solid #dee2e6", padding : "30px", height : "200px"}}>{selectedMovie.content}</div>
            </div>
            <div style={{textAlign : "center"}}>
                <button onClick={moveToEditList} style={{margin : "0px 50px", padding : "10px 30px"}}>수정</button>
                <button style={{margin : "0px 50px", padding : "10px 30px"}}>삭제</button>
            </div>
        </div>
    );
};

export default ListDetail;