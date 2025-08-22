import { Link } from "react-router-dom";


const Navibar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/#">홈</Link>
                </li>
                <li>
                    <Link to="/searchList">검색</Link>
                </li>
                <li>
                    <Link to="/addList">글 작성</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navibar;