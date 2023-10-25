import NewLogin from "./pages/new_login";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewUser from "./pages/new_user";
import NewLend from "./pages/new_lend";
import NoPage from "./pages/NoPage";
import MainPage from "./pages/home";
import UserProfile from "./pages/profile";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainPage/>} />
          <Route index element={<NewLogin />} />
          <Route path="/newlogin" element={<NewLogin />} />
          <Route path="/newlend" element={<NewLend />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/profile" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
