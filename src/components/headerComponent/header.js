import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import { checkLogged, userDetails } from "../../actions";

function Header() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const responseGoogle = response => {
    if (response) {
      dispatch(userDetails("ADD_USER", response.profileObj));
    } else {
      dispatch(userDetails("REMOVE_USER"));
    }
    dispatch(checkLogged());
  };

  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          {isLogged ? (
            <GoogleLogout
              clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
              buttonText="Sign out"
              onLogoutSuccess={responseGoogle}
            ></GoogleLogout>
          ) : (
            <GoogleLogin
              clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
