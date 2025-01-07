import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import "./Navbar.css";
import { logoutUser } from '../../store/auth/authActions.js'
import CustomButton from "../ui/CustomButton";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  const storedUser = localStorage.getItem("User");
  const user = storedUser ? JSON.parse(storedUser) : null;


 

  const handleLogout = () => {
    localStorage.removeItem("User");
    localStorage.setItem('isAuthenticated', false);
    dispatch(logoutUser())
    navigate("/login");
    toast.success('User logged out successful')
  };

  return (
    <div className="navbar-container d-flex align-items-center justify-content-center position-sticky">
      <div className="navbar-width gap-5">
        {user ? (
          <h1 className="navbar-text font-weight-bold">
            Welcome, <span className="text-dark">{user.email}</span>
          </h1>
        ) : (
          <h1 className="navbar-text font-weight-bold">Welcome, Guest!</h1>
        )}

        <Link to={ isLoginPage ? "/register" : "/login"}>
          <CustomButton onClick={user && handleLogout} type="button" color={user ? "error" : "success"}>
            {user
              ? "Logout"
              : isLoginPage
              ? "Register"
              : isRegisterPage
              ? "Login"
              : "Login"}
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;
