import { useState, createContext } from "react";

export const ListProvider = createContext();

const ListContext = ({children}) => {

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hours = today.getHours().toString().padStart(2, "0");
    const minutes = today.minutes().toString().padStart(2, "0");
    const seconds = today.seconds().toString().padStart(2, "0");

    const now = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`

    const [movieList, setMovieList] = useState([
        {
            id : 1,
            title : "표본 게시글 제목1",
            content : "표본 게시글 제목1",
            date : now
        },
        {
            id : 2,
            title : "표본 게시글 제목2",
            content : "표본 게시글 제목2",
            date : now
        },
        {
            id : 3,
            title : "표본 게시글 제목3",
            content : "표본 게시글 제목3",
            date : now
        }
    ]);

    return (
        <ListProvider.Provider value={{movieList, setMovieList}}>
            {children}
        </ListProvider.Provider>
    );
};

export default ListContext;