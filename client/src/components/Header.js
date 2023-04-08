import { Cookies } from "react-cookie";
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router";
export const Header = () => {
  const navigate = useNavigate();
  const [cookies,setCookies] = useCookies("");
  const handleLogout = () =>{
    window.localStorage.removeItem("accessToken");
    navigate('/login');
  }
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Wine Explorer</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Create New Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Favourites</a>
        </li>
        <li class="nav-item">
        {console.log(!window.localStorage.getItem("accessToken"))}
          {!window.localStorage.getItem("accessToken") ? (<button type="button" class="btn btn-light">Login</button>):(<button type="button" class="btn btn-light" onClick = {handleLogout}>Logout</button>)}
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
