import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {
    const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
    const isLoggedIn = false
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{"padding":"0"}}>
            <div class="container-fluid" style={{"backgroundColor":"black"}}>
             
                <img src={require("../assets/Logo.png")} alt="Food store Logo" width="126" height="74"></img>
               
                <h1 class="navbar-brand text-white">Food Store</h1>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item " style={{"padding-right": "40px","padding-bottom": "16px"}}>
                    <Link class="nav-link  text-white" to="/" >Home</Link>
                    </li>
                    <li class="nav-item " style={{"padding-right": "40px"}}>
                    <Link class="nav-link text-white" to="/about">About</Link>
                    </li>
                    <li class="nav-item " style={{"padding-right": "40px"}}>
                    <Link class="nav-link text-white" to="/recipe">Recipe</Link>
                    </li>
                    <li class="nav-item " style={{"padding-right": "40px"}}>
                    <Link class="nav-link text-white" to="/blog">Blog</Link>
                    </li>
                    <li class="nav-item " style={{"padding-right": "40px"}}>
                    <Link class="nav-link text-white" to="/contact">Contact Us</Link>
                    </li>
                   
                   
                </ul>
              
                    <ul class="navbar-nav">
                        {
                            isAuthenticated && <h6 style ={{color: "#ffff38",
                                padding: "9px", marginRight: "20px"}}>Welcome {user.nickname}</h6>
                        }
                        {
                            isAuthenticated ? (
                                <li><button class="btn border" onClick={() => logout()} style={{"backgroundColor":"#e3d105","color":"black","border":"none","marginRight":"5px","margin-bottom": "24px","width": "auto", "padding" : "3px 12px 3px 12px" ,"borderColor":"yellow"}}>logout</button></li>
                            ):(
                                <li><button class="btn border" onClick={() => loginWithRedirect()} style={{"backgroundColor":"#e3d105","color":"black","border":"none","marginRight":"5px","margin-bottom": "24px","width": "auto","padding":"4px","borderColor":"yellow"}}>Login/Register</button></li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
        </>
    )

}

export default Navbar;