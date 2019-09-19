import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { checkLogged } from '../../actions';

function Header() {
	const responseGoogle = (response) => {
	  console.log(response);
	}
	const isLogged = useSelector(state => state.isLogged)
	const dispatch = useDispatch();

  return (
    <header>
    	<div className="logo">
    		<img style={{width: 150}} src={require('../../Assets/images/bytelion-logo.png')} alt="Blue Icon" />
    	</div>
    	<nav>
    		<ul>
    		{isLogged ? 
    			<GoogleLogout
			      clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
			      buttonText="Sign out"
			      onLogoutSuccess={() => dispatch(checkLogged())}>
			    </GoogleLogout> :
    			<GoogleLogin
				    clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
				    buttonText="Sign in with Google"
				    onSuccess={() => dispatch(checkLogged())}
				    onFailure={responseGoogle}
				    cookiePolicy={'single_host_origin'} />
    		}
    		</ul>
    	</nav>
    </header>
  );
}

export default Header;
