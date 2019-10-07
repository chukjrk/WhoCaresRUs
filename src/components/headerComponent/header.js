import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { checkLogged, userDetails } from '../../actions';

function Header() {
	const isLogged = useSelector(state => state.isLogged)
	const dispatch = useDispatch();
	const responseGoogle = (response) => {
	  console.log('here is the google response =======> ',response);
	  dispatch(userDetails(response));
	};

  return (
    <header>
    	<div className="logo">
    		LOGO
    		{/*<img style={{width: 150}} src={require('../../Assets/images/bytelion-logo.png')} alt="Blue Icon" />*/}
    	</div>
    	<nav>
    		<ul>
    		{isLogged ? 
    			<GoogleLogout
			      clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
			      buttonText="Sign out"
			      onLogoutSuccess={() => dispatch(checkLogged()) && responseGoogle}>
			    </GoogleLogout> :
    			<GoogleLogin
				    clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
				    buttonText="Sign in with Google"
				    onSuccess={() => dispatch(checkLogged()) && responseGoogle}
				    onFailure={responseGoogle}
				    cookiePolicy={'single_host_origin'} />
    		}
    		</ul>
    	</nav>
    </header>
  );
}

export default Header;
