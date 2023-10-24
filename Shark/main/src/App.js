import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewUser from "./pages/new_user";
import NewLend from "./pages/new_lend";
import NoPage from "./pages/NoPage";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<NewUser />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/newlend" element={<NewLend />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
