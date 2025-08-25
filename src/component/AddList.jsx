import { useState } from "react";


function MovieReview() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("공포");
    const [content, setContent] = useState("");

    const onSubmitReview = (e) => {
       e.preventDefault();
       const newReview = {title, category, content}
       console.log("리뷰 등록", newReview);
       alert("리뷰가 등록 되었습니다.");
    }
 
    return (
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>영화 리뷰 작성</h2>
            <form onSubmit={onSubmitReview}>
            <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)}
              style={{ width: '130px', height: "25px", padding: '3px', marginBottom: "10px", float: 'right' }}>
                <option value="공포">공포</option>
                <option value="로맨스">로맨스</option>
                <option value="액션">액션</option>
                <option value="코미디">코미디</option>
                <option value="SF">SF</option>
                <option value="드라마">드라마</option>
              </select>
            <input 
            type="text"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "25px" }}/>
            <textarea
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) =>
                setContent(e.target.value)}
                style={{ width: "100%", height: "120px", padding: "10px", marginBottom: "10px"}}/>
            <button type="submit"
                style={{ width: '70px', height: "40px", padding: "10px 15px", float: 'right' }}>등록</button>
            </form>
        </div>


    );
};


export default MovieReview