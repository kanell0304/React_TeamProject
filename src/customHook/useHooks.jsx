import { useMemo } from "react";

const useHooks = () => {

    return console.log("customHook 사용");
};

export default useHooks;

//날짜 커스텀훅
export const useDate = ()=>useMemo(()=>{
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const hours = today.getHours().toString().padStart(2, "0");
        const minutes = today.getMinutes().toString().padStart(2, "0");
        const seconds = today.getSeconds().toString().padStart(2, "0");
        
        const now = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        return now;
},[]);
