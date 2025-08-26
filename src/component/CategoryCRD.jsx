import { useContext, useState } from "react";
import { ListProvider } from "./ListContext";
import { useNavigate } from "react-router-dom";
import '../tempCss/CategoryCRD.css';

const CategoryCRD = () => {

    const {categoryList, setCategoryList} = useContext(ListProvider);
    const [visibleDelBtn, setVisibleDelBtn] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [inputCategory, setInputCategory] = useState();
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
        categoryList.push({id:Date.now(),name : inputCategory});
        setCategoryList(categoryList);
        navigate('/');  
    }

    return (
        <div className="categoryManage">
            <div>
                <h1>카테고리 목록</h1>
        {categoryList && categoryList.map(category => {
            return (
                <div className='cateList' onMouseEnter={() => onMouse(category)}  onMouseLeave={leaveMouse}>                
                    <span key={category.id}>{category.name}</span>
                    {visibleDelBtn && // 마우스가 올려졌는지
                        selectedCategory.id === category.id ? // 마우스가 올라간 카테고리가 현재 카테고리 목록의 카테고리와 id가 일치하는지
                        <div className="cateListBtn">
                        <button  onClick={() => deleteCategory(category)}>삭제</button>
                        </div>
                         : // 일치한다면 삭제버튼이 보임
                        <div></div> // 아니라면 아무것도 안보임
                    }
                </div>
            )
        })}
        <hr/>
        <h2>카테고리 생성</h2>
        <input value={inputCategory} onChange={(e) => setInputCategory(e.target.value)} placeholder="카테고리 이름 입력" />
        <button onClick={addCategory} >추가</button>
            </div>
        </div>
    )
}

export default CategoryCRD;