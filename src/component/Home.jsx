// import Navibar from "./Navibar";
import List from "./List"

const Home = () => {
    return (
        <div className="font-mono">
            <div className="text-center text-3xl mt-6">MOVIE LIST</div>
            {/* <h1 style={{textAlign : "center"}}>HOME</h1> */}
            <List />
        </div>
    );
};

export default Home;