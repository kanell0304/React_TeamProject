import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNow } from "../customHook/useHooks";


function MovieReview({onAddReview}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Horror");
    const navigate = useNavigate();
    const [isRegist, setIsRegist] = useState(false);
    const date = getNow();
    
    const [movieList, setMovieList] = useState(() => {
    const saved = localStorage.getItem("lists");
    return saved ? JSON.parse(saved) : [];
    });

    const onSubmitReview = (e) => {
        e.preventDefault();

        if (!title || !content) {
            return alert("제목과 내용을 입력하세요!");
        }

        const maxId = movieList.length > 0 ? Math.max(...movieList.map((m) => m.id)) : 0;

        const newReview = {
        id: maxId + 1,
        title,
        category,
        date,
        content,
    };

        setMovieList([...movieList, newReview]);
        alert("리뷰가 등록 되었습니다.");

        setTitle("");
        setCategory("Horror");
        setContent("");

        navigate("/");
        setIsRegist(true);
    };

    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(movieList));
        console.log("로컬 등록");
        setIsRegist(false);
    }, [isRegist])



    return (
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>영화 리뷰 작성</h2>
            <form onSubmit={onSubmitReview}>
            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
              style={{ width: '130px', height: "25px", padding: '3px', marginBottom: "10px", float: 'right' }}>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="SF">SF</option>
                <option value="Drama">Drama</option>
              </select>
            <input s
            type="text"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "25px" }}/>
            <textarea
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
                style={{ width: "100%", height: "120px", padding: "10px", marginBottom: "10px"}}/>
            <button type="submit"
                style={{ width: '70px', height: "40px", padding: "10px 15px", float: 'right' }}>등록</button>
            </form>
        </div>


    );
};


export default MovieReview