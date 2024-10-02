import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import SignUp from './SignUp.jsx';
import {useNavigate} from 'react-router-dom';

function Login(){

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); //prevents default form submission

        if(username.length < 3){
            alert('Username must be at least 3 characters long.')
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long, include at least one special character, and one uppercase letter.');
            return;
        }

        //Assuming the login is successful
        console.log('Logging in with:', username,password);

        //Navigate to the products page upon successful login
        navigate('/home')
    };

    return(
        <div className="form-container">
            <h2> Log In</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <input type="text" name="username" value={username} placeholder="Username" onChange={(e) => setUserName(e.target.value)}/> <br/> <br/>
                </div>

                <div className="form-group">     
                    <input type="password" name="password" value= {password} placeholder="password" onChange={(e) => {setPassword(e.target.value)}}/> <br/> <br/>
                </div>    
                <button className="button" type="submit"> LOGIN</button>
                <p>
                    Don't have an Account? <Link to="/signup">SignUp</Link>
                </p>
            </form>
        </div> 
    )
}

export default Login