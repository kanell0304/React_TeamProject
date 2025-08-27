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
  }, [categoryList]);

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
    <div className="max-w-2x1 mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-8">영화 리뷰 작성</h2>

      <form onSubmit={onSubmitReview} className="space-y-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-40 ml-auto p-0.5 border border-gray-500 rounded-md text-sm focus:outline-none focus:ring focus:ring-gray-400">

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
            className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-gray-400 "/>

            <textarea
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-96 p-3 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-gray-400"/>

            <button type="submit"
            className="float-right px-5 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-700">등록</button>
            </form>
        </div>
  );
}

export default MovieReview