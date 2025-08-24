import { Link } from "react-router-dom";
import "../tempCss/NaviBar.css"

const Navibar = () => {
    return (
        <ul>
            <nav className="flex items-center justify-center gap-28 pr-28 w-full h-16 bg-indigo-900">
                <li className="navItem">
                    <Link className="hover:text-yellow-600 text-white text-md" to="/#">홈</Link>
                </li>
                <li className="navItem">
                    <Link className="hover:text-yellow-600 text-white text-md" to="/searchList">검색</Link>
                </li>
                <li className="navItem">
                    <Link className="hover:text-yellow-600 text-white text-md" to= "/categoryList">장르별</Link>
                </li>
                <li className="navItem">
                    <Link className="hover:text-yellow-600 text-white text-md" to="/addList">글 작성</Link>
                </li>
            </nav>
        </ul>
    );
};

export default Navibar;