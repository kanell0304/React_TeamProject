import Home from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchList from './component/SearchList';
import AddList from './component/AddList';
import EditList from './component/EditList';
import ListDetail from './component/ListDetail';
import CategoryList from './component/Categorylist';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>        
          {/* <Navibar /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/searchList" element={<SearchList />} />
              <Route path="/categoryList" element={<CategoryList />} />
              <Route path="/addList" element={<AddList />} />
              <Route path="/editList/:id" element={<EditList />} />
              <Route path="/listDetail/:id" element={<ListDetail />} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
