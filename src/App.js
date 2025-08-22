import Home from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchList from './component/SearchList';
import AddList from './component/AddList';
import EditList from './component/EditList';
import Navibar from './component/Navibar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          {/* <Navibar /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/searchList" element={<SearchList />} />
              <Route path="/addList" element={<AddList />} />
              <Route path="/editList" element={<EditList />} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
