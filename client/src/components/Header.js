import { Cookies } from "react-cookie";
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router";
import {NavLink} from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [cookies,setCookies] = useCookies("");
  const handleSignup = () =>{
    navigate('user/signup');
  }
  const handleLogin = () =>{
    navigate('user/login')
  }
  const handlecreatewine = () =>{
    navigate('wines/createwine');
  }
  const handleFavourites = () =>{
    navigate('/user/favourites');
  }
  const handleLogout = () =>{
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("userID");
    navigate('/');
    window.location.reload();
  }
  const goBackHome = () =>{
    navigate('/');
    window.location.reload();
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" onClick={goBackHome}style={{color:"white",fontWeight:"700"}}>Wine Savvy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item px-3">
          {!window.localStorage.getItem("accessToken") ? (<button type="button" className="btn btn-light" onClick = {handleLogin}>Create New Wine</button>):(<button type="button" className="btn btn-light" onClick = {handlecreatewine}>Create New Wine</button>)}
        </li>
        <li className="nav-item">
        {!window.localStorage.getItem("accessToken") ? (<button type="button" className="btn btn-light" onClick = {handleLogin}>Favourites</button>):(<button type="button" className="btn btn-light" onClick = {handleFavourites}>Favourites</button>)}
        </li>
        <li className="nav-item px-3">
          {!window.localStorage.getItem("accessToken") ? (<button type="button" className="btn btn-light" onClick = {handleLogin}>Login</button>):(<button type="button" className="btn btn-light" onClick = {handleLogout}>Logout</button>)}
        </li>
        <li className="nav-item px-3">
        {!window.localStorage.getItem("accessToken") ? (<button type="button" className="btn btn-light" onClick={handleSignup}>Signup</button>) : null}
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
