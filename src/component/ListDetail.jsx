import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ListDetail = () => {

    const navigate = useNavigate();
    const [movieList, setMovieList] = useState(JSON.parse(localStorage.getItem("lists"))); // 로컬 스토리지에서 list 정보를 불러옴
    const selectedMovieId = useParams(); // 주소에서 id 파라미터 값 추출 - List에서 클릭한 게시글의 id를 객체형태로 추출
    const selectedMovie = movieList.find(movie => movie.id === parseInt(selectedMovieId.id));
    const [isDeleteModal, setIsDeleteModal] = useState(false);

    // 수정 페이지로 listId를 가지고 이동
    const moveToEditList = () => {
        navigate(`/editList/${selectedMovieId.id}`);
    }

    // 삭제 modal 표시 여부
    const isDelete = () => {
        setIsDeleteModal(true);
    }

    // 삭제처리 후 localStorage 업데이트 -> Home으로 주소 변경
    const deleteList = () => {
        const updateMovieList = movieList.filter(movie => movie.id !== selectedMovie.id);
        localStorage.setItem("lists", JSON.stringify(updateMovieList));
        setIsDeleteModal(false);
        navigate("/");
    }

    return (
        <div>
            {/* <h1 style={{textAlign : "center"}}>상세보기</h1>
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
                <button onClick={isDelete} style={{margin : "0px 50px", padding : "10px 30px"}}>삭제</button>
            </div>
            {isDeleteModal && 
                <div style={{textAlign : "center", border : "1px solid black", padding : "30px", width : "500px", backgroundColor : "rgba(172, 187, 207, 0.4)", position : "fixed", top : "50%", left : "50%", transform : "translate(-50%, -50%)"}}>
                    <h2>해당 게시글을 삭제하시겠습니까?</h2>
                    <button style={{margin : "10px 20px", padding : "5px 10px"}} onClick={deleteList}>확인</button>
                    <button style={{margin : "10px 20px", padding : "5px 10px"}} onClick={() => setIsDeleteModal(false)}>취소</button>
                </div>
            } */}
            <h1 className="text-center text-3xl font-bold my-4">상세보기</h1>
            <div className="px-48 py-12">
                <div className="flex justify-between">
                    <div>장르: {selectedMovie.category}</div>
                    <div>등록일: {selectedMovie.date}</div>
                </div> 
                <h2 className="mt-12 text-2xl font-semibold">{selectedMovie.title}</h2>
                <div className="mt-12 border border-gray-300 p-8 h-48">{selectedMovie.content}</div>
            </div>
            <div className="text-center">
                <button onClick={moveToEditList} className="mx-12 px-8 py-2.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">수정</button>
                <button onClick={isDelete} className="mx-12 px-8 py-2.5 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">삭제</button>
            </div>
            {isDeleteModal && 
                <div className="text-center border border-black p-8 w-[500px] bg-gray-300 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-6">해당 게시글을 삭제하시겠습니까?</h2>
                    <button className="mx-5 my-2.5 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors" onClick={deleteList}>확인</button>
                    <button className="mx-5 my-2.5 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors" onClick={() => setIsDeleteModal(false)}>취소</button>
                </div>
            }
        </div>
    );
};

export default ListDetail;