
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewUser from "./pages/new_user";
import NewLend from "./pages/new_lend";
import NoPage from "./pages/NoPage";
import HomePage from "./pages/home";
import UserProfile from "./pages/profile";
import MyHistory from "./pages/myhistory";
import MyLends from "./pages/mylends";
import Login from "./pages/login";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainPage/>} />
          <Route index element={<MainPage />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/newlend" element={<NewLend />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/mylends" element={<MyLends/>} />
          <Route path="/myhistory" element={<MyHistory/>} />
          <Route Path= "/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
