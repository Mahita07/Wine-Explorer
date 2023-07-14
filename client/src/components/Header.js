import { Cookies } from "react-cookie";
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router";
export const Header = () => {
  const navigate = useNavigate();
  const [cookies,setCookies] = useCookies("");
  const handleSignup = () =>{
    navigate('auth/signup');
  }
  const handleLogin = () =>{
    navigate('auth/login');
  }
  const handleLogout = () =>{
    window.localStorage.removeItem("accessToken");
    navigate('auth/home');
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Wine Explorer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Create New Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Favourites</a>
        </li>
        <li className="nav-item px-3">
        {console.log(!window.localStorage.getItem("accessToken"))}
          <button type="button" className="btn btn-light" onClick = {handleSignup}>Sign up</button>
        </li>
        <li className="nav-item px-3">
        {console.log(!window.localStorage.getItem("accessToken"))}
          {!window.localStorage.getItem("accessToken") ? (<button type="button" className="btn btn-light" onClick = {handleLogin}>Login</button>):(<button type="button" className="btn btn-light" onClick = {handleLogout}>Logout</button>)}
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
