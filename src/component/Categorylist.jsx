import { useContext, useState} from "react";
import { ListProvider } from "./ListContext";
import "../tempCss/CategoryList.css"
import { useNavigate } from "react-router-dom";
import Navibar from "./Navibar";

const CategoryList = () => {

    const navigate = useNavigate();
    const {movieList,categoryList} = useContext(ListProvider);
    const [category, setCategory] = useState('');

    const moveToDetail = (movieId) => {
        navigate(`/listDetail/${movieId}`);
    }

    return (
        <>
         <div>
            <Navibar />
            <h1 style={{textAlign : "center"}}>CATEGORY</h1>
        </div>
        <div className="cate">
        {categoryList.map(cl=>(
            <button className="cateBtn"key ={cl.id} onClick={()=>setCategory(cl.name)}>{cl.name}</button>
        ))}
        </div>
        {movieList.find(ml=>ml.category === category)?'':(
            <div className="cateResult">등록된 게시물이 없습니다.</div>)}
        {movieList.map(ml=>(
                    ml.category === category ?(
                        <div key={ml.id}
                         onClick={()=>moveToDetail(ml.id)} className="cateResult">
                         <h3>{ml.title}</h3> 
                        </div>
                    ):''
        ))}
        </>
    );
};

export default CategoryList;