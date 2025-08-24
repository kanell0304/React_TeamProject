
const useHooks = () => {

    return console.log("customHook 사용");
};

export default useHooks;

//EditList 날짜,시간 갱신용 헬퍼함수 
export const getNow = ()=>{
    const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const hours = today.getHours().toString().padStart(2, "0");
        const minutes = today.getMinutes().toString().padStart(2, "0");
        const seconds = today.getSeconds().toString().padStart(2, "0");
        
        const now = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        return now;
}
