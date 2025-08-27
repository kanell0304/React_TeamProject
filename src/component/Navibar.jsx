import { Link } from "react-router-dom";


const Navibar = () => {
    return (
        <ul className="font-mono">
            <nav className="flex mt-14 mb-12 ml-32 text-md">
                <li className="pr-10 pl-10">
                    <Link className="hover:text-main_color
                    focus:text-main_color focus:border-b-4 pl-2 pr-2 pb-2 focus:border-sub_color2" 
                    to="/#">홈</Link>
                </li>
                <li className="pr-10 pl-10">
                    <Link className="hover:text-main_color
                    focus:text-main_color focus:border-b-4 pl-2 pr-2 pb-2 focus:border-sub_color2" 
                    to="/searchList">검색</Link>
                </li>
                <li className="pr-10 pl-10">
                    <Link className="hover:text-main_color
                    focus:text-main_color focus:border-b-4 pl-2 pr-2 pb-2 focus:border-sub_color2" 
                    to= "/categoryList">장르별</Link>
                </li>
                <li className="pr-10 pl-8">
                    <Link className="hover:text-main_color
                    focus:text-main_color focus:border-b-4 pl-2 pr-2 pb-2 focus:border-sub_color2" 
                    to="/addList">글 작성</Link>
                </li>
                <li className="pr-8 pl-8">
                    <Link className="hover:text-main_color
                    focus:text-main_color focus:border-b-4 pl-2 pr-2 pb-2 focus:border-sub_color2" 
                    to="/categoryCRD">카테고리 관리</Link>
                </li>
            </nav> 
            <hr className="border border-gray-200 mb-10 w-4/5 flex justify-self-center"></hr>
        </ul>
    );
};

export default Navibar;