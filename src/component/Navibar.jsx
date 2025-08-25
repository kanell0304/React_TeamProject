import { Link } from "react-router-dom";
import "../tempCss/NaviBar.css"

const Navibar = () => {
    return (
        <ul>
            <nav className="navBar">
                <li className="navItem">
                    <Link className="navLink" to="/#">홈</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" to="/searchList">검색</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" to= "/categoryList">장르별</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" to="/addList">글 작성</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" to="/categoryCRD">카테고리 관리</Link>
                </li>
            </nav>
        </ul>
    );
};

export default Navibar;