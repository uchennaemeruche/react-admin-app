import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home'
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

function App() {


  return (
    <Router>
      <div className="App">
        <div className="content">

          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/blogs/:id" element={<BlogDetails />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}

            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="users">
                <Route index element={<List />}></Route>
                <Route path=":userId" element={<Single />}></Route>
                <Route path="new" element={<New />}></Route>
              </Route>
              <Route path="products">
                <Route index element={<List />}></Route>
                <Route path=":productId" element={<Single />}></Route>
                <Route path="new" element={<New />}></Route>
              </Route>
            </Route>
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
