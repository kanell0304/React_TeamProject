import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDate } from "../customHook/useHooks";
import { ListProvider } from "./ListContext";

function MovieReview({ onAddReview }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { categoryList } = useContext(ListProvider);
  const [category, setCategory] = useState("Horror");
  const navigate = useNavigate();
  const date = useDate();
  

  const [movieList, setMovieList] = useState(() => {
    const saved = localStorage.getItem("lists");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (!categoryList || categoryList.length === 0) return;
    const names = categoryList.map((c) => c.name);
    if (!names.includes(category)) {
      setCategory(names[0]); 
    }
  }, [category,categoryList]);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(movieList));
  }, [movieList]);

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

    setMovieList((prev) => [...prev, newReview]);
    alert("리뷰가 등록 되었습니다.");

    setTitle("");
    setContent("");

    if (typeof onAddReview === "function") onAddReview(newReview);
    navigate("/");
  };

  return (
    <div className="flex justify-self-center font-mono">
      <div>
        <div className="text-center text-3xl">WRITE MOVIE REVIEW</div>

      <form onSubmit={onSubmitReview} className="mt-12">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="float-right w-40 ml-auto p-0.5 border-2 border-gray-200 bg-hover_color bg-opacity-75
          focus:border-gray-300 focus:outline-none  rounded-md text-sm ">

          {(categoryList ?? []).map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
        ))}
        </select>
            <input 
            type="text"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border mt-3 h-12 text-sl rounded-md 
            focus:outline-none border-main_color focus:ring focus:ring-hover_color"/>

            <textarea
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-64 p-3 mt-3 rounded-md overflow-y-scroll
            focus:outline-none border  border-main_color focus:ring focus:ring-hover_color"/>

            <button type="submit"
            className="float-right mt-3 pr-4 pl-4 p-2 mb-11 hover:text-gray-700 border-2 border-gray-200 hover:bg-hover_color 
            text-gray-700 font-semibold rounded-md bg-gray-200 text-sm">등록</button>
            </form>
      </div>
      
        </div>
  );
}

export default MovieReview