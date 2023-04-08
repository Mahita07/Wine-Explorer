import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Signup} from "./pages/Signup";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";
import {Favourites} from "./pages/Favourites";
import {CreateWineReview} from "./pages/CreateWineReview";
import {Header} from "./components/Header";
function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path = "signup" element={<Signup />}/>
        <Route exact path = "login" element={<Login />}/>
        <Route exact path="home" element = {<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
