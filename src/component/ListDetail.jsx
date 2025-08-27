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
        <div className="font-mono">
            <div className="text-center text-3xl mt-6">{selectedMovie.title}</div>
            <div className="px-60 py-12">
                <div className="flex justify-between text-sm font-semibold">
                    <div>장르: {selectedMovie.category}</div>
                    <div>등록일: {selectedMovie.date}</div>
                </div> 
                <div className="mt-6 border-2 rounded-md border-hover_color pr-8 pl-8 pt-5 h-52 overflow-y-scroll">{selectedMovie.content}</div>
            </div>
            <div className="text-center">
                <button onClick={moveToEditList} className="mx-5 my-2.5 px-4 py-2 bg-main_gray border-2 border-gray-300 text-black rounded-md hover:border-gray-200 hover:bg-hover_color transition-colors">수정</button>
                <button onClick={isDelete} className="mx-5 my-2.5 px-4 py-2 bg-main_gray border-2 border-gray-300 text-black rounded-md hover:border-gray-200 hover:bg-hover_color transition-colors">삭제</button>
            </div>
            {isDeleteModal && 
                <div className="text-center bg-sub_color2 bg-opacity-50 border border-gray-200 p-8 w-[500px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg shadow-lg" >
                    <h2 className="text-xl text-gray-700 font-semibold mb-16">해당 게시글을 삭제하시겠습니까?</h2>
                    <button className="mx-5 my-2.5 px-4 py-2 bg-main_color border border-gray-200 text-white rounded-lg  hover:bg-gray-100 hover:text-gray-700 hover:border-main_color transition-colors" onClick={deleteList}>확인</button>
                    <button className="mx-5 my-2.5 px-4 py-2 bg-main_color border border-gray-200 text-white rounded-lg  hover:bg-gray-100 hover:text-gray-700 hover:border-main_color transition-colors" onClick={() => setIsDeleteModal(false)}>취소</button>
                </div>
            }
        </div>
    );
};

export default ListDetail;