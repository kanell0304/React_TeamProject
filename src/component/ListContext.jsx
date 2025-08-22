import { useState, createContext } from "react";

export const ListProvider = createContext();

const ListContext = ({children}) => {

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hours = today.getHours().toString().padStart(2, "0");
    const minutes = today.getMinutes().toString().padStart(2, "0");
    const seconds = today.getSeconds().toString().padStart(2, "0");

    const now = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`

    const [movieList, setMovieList] = useState([
        {
            id : 1,
            title : "표본 게시글 제목1",
            content : "표본 게시글 내용1",
            date : now,
            category : "SF"
        },
        {
            id : 2,
            title : "표본 게시글 제목2",
            content : "표본 게시글 내용2",
            date : now,
            category : "Horror"
        },
        {
            id : 3,
            title : "표본 게시글 제목3",
            content : "표본 게시글 내용3",
            date : now,
            category : "Romance"
        }
    ]);

    const [categoryList, setCategoryList] = useState([
        {
            id : 1,
            name : "SF"
        },
        {
            id : 2,
            name : "Romance"
        },
        {
            id : 3,
            name : "Comedy"
        },
        {
            id : 4,
            name : "Drama"
        },
        {
            id : 5,
            name : "Horror"
        },
        {
            id : 6,
            name : "Action"
        },
    ]);

    return (
        <ListProvider.Provider value={{movieList, setMovieList, categoryList, setCategoryList}}>
            {children}
        </ListProvider.Provider>
    );
};

export default ListContext;