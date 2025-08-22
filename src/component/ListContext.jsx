import { useState, createContext } from "react";

export const ListProvider = createContext();

const ListContext = ({children}) => {

    const [empty, setEmpty] = useState(null);

    return (
        <ListProvider.Provider value={{empty, setEmpty}}>
            {children}
        </ListProvider.Provider>
    );
};

export default ListContext;