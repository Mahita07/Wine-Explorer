import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Signup} from "./pages/Signup";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";
import {Favourites} from "./pages/Favourites";
import {CreateWineReview} from "./pages/CreateWineReview";
import {Header} from "./components/Header";
import {First} from "./pages/First";
function App() {
  return (
    <div className="attributes">
    <Router>
      <Header />
      <Routes>
        <Route exact path = "/user/signup" element={<Signup />}/>
        <Route exact path = "/user/login" element={<Login />}/>
        <Route exact path = "/wines/createwine" element={<CreateWineReview/>}/>
        <Route
          exact path="/"
          element={!window.localStorage.getItem("accessToken") ? <Login /> : <Home />}
        />
        <Route exact path="/user/favourites" element = {<Favourites/>}/>
        <Route exact path='/user/home' element = {<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
