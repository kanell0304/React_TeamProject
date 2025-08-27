import { useContext, useState} from "react";
import { ListProvider } from "./ListContext";
import { useNavigate } from "react-router-dom";
// import Navibar from "./Navibar";

const CategoryList = () => {

    const navigate = useNavigate();
    const {categoryList} = useContext(ListProvider);
    const movieList = JSON.parse(localStorage.getItem("lists"));
    const [category, setCategory] = useState('');

    const moveToDetail = (movieId) => {
        navigate(`/listDetail/${movieId}`);
    }

    return (
        <>
         <div>
            {/* <Navibar /> */}
            <div className="text-center text-3xl mt-6">CATEGORY</div>
        </div>
        <div className="flex justify-self-center">
        {categoryList.map(cl=>(
            <button className="w-28 text-sm mt-10 border border-black m-4 pt-1 pb-1 hover:bg-pink-300 focus:bg-orange-400"key ={cl.id} onClick={()=>setCategory(cl.name)}>{cl.name}</button>
        ))}
        </div>
        {category==='' ?(
            <div className="flex justify-self-center mt-10">
                원하는 장르를 선택해주세요
            </div>
        ):
        (
            <>
             {movieList.find(ml=>ml.category === category)?'':(
            <div className="flex justify-self-center mt-10">등록된 게시물이 없습니다.</div>)}
                {movieList.map(ml=>(
                    ml.category === category ?(
                        <div key={ml.id}
                         onClick={()=>moveToDetail(ml.id)} className="flex justify-self-center p-2 border-b w-1/2 border-black border-solid pb-6 mt-10">
                         <h3>{ml.title}</h3> 
                        </div>
                    ):''
        ))}
            </>
        )
        }
        </>
    );
};

export default CategoryList;