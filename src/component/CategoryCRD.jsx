import { useContext, useState } from "react";
import { ListProvider } from "./ListContext";
import { useNavigate } from "react-router-dom";

const CategoryCRD = () => {

    const {categoryList, setCategoryList} = useContext(ListProvider);
    const [visibleDelBtn, setVisibleDelBtn] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [inputCategory, setInputCategory] = useState('');
    const navigate = useNavigate();

    // 카테고리에 마우스를 올려놨을때
    const onMouse = (category) => {
        setVisibleDelBtn(true);
        setSelectedCategory(category);
    }

    // 카테고리에서 마우스가 떠났을때
    const leaveMouse = () => {
        setVisibleDelBtn(false);
        setSelectedCategory(null);
    }

    // 게시글에 카테고리 사용 유무를 확인 후 사용하지 않는 카테고리라면 삭제
    const deleteCategory = (targetCategory) => {
        const movieList = JSON.parse(localStorage.getItem("lists"));
        if (movieList.find(category => category.category === targetCategory.name)) {
            alert("해당 카테고리를 사용중인 게시글이 있으므로 카테고리를 삭제할 수 없습니다.");
        } else {
            setCategoryList(categoryList.filter(category => category.id !== targetCategory.id));
        }
    }

    //category 추가
    const addCategory = ()=>{
        if(inputCategory !== ''){
        categoryList.push({id:Date.now(),name : inputCategory});
        setCategoryList(categoryList);
        navigate('/');
        }
    }

    return (
        <div className="font-mono">
            <div className="text-center text-3xl mt-6">CATEGORY MANAGE</div>
        <div className="flex justify-center">
            <div className="flex justify-items-center p-10 mr-20">
                <div>
                    <div className="text-center text-2xl mb-6">LIST</div>
        {categoryList && categoryList.map(category => {
            return (
                <div className='rounded-md w-52 h-16 p-2 ml-5 mr-5 hover:bg-hover_color hover:bg-opacity-50 hover:border hover:border-gray-400' onMouseEnter={() => onMouse(category)}  onMouseLeave={leaveMouse}>                
                    <span className="text-sm" key={category.id}>{category.name}</span>
                    {visibleDelBtn && // 마우스가 올려졌는지
                        selectedCategory.id === category.id ? // 마우스가 올라간 카테고리가 현재 카테고리 목록의 카테고리와 id가 일치하는지
                        <div className="justify-self-end text-xs">
                        <button className="bg-white pl-2 pr-2 pb-1 pt-1 rounded-md border border-gray-400 hover:border-gray-500 hover:bg-gray-200" onClick={() => deleteCategory(category)}>삭제</button>
                        </div>
                         : // 일치한다면 삭제버튼이 보임
                        <div></div> // 아니라면 아무것도 안보임
                    }
                </div>
            )
        })}</div>
         </div>
         <div>
            <div className="text-center text-2xl mt-10 mb-6">ADD</div>
            <input className='text-sm h-8 ml-7 border border-main_color focus:ring focus:ring-hover_color
            p-3 rounded-md outline-none' value={inputCategory} onChange={(e) => setInputCategory(e.target.value)} placeholder="카테고리 이름 입력" />
            <button className='ml-5 pr-3 pl-3 p-2 rounded-md
            border-2 border-gray-100 hover:bg-hover_color 
            text-gray-700 font-semibold bg-gray-200 text-xs' 
            onClick={addCategory} >추가</button>
         </div>
        </div>
        </div>
    )
}

export default CategoryCRD;