import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function SignUp(){

    const navigate = useNavigate();

    const[username, setUserName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmpassword, setConfirmPassword] = useState("");

    function handleSignUp(e){
        e.preventDefault();

        if(username.length < 3){
             alert('Username must be at least 3 characters long.')
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }  

        const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long, include at least one special character, and one uppercase letter.');
            return;
        }

        if(confirmpassword != password){
            alert('Passwords do not match. Please ensure both passwords are the same.')
            return;
        }

        //If all the validations pass, navigate to the login page
        navigate("/login")
    }

    return(
    <div className="signup-container">
        <h2> Sign Up </h2>

    <form onSubmit = {handleSignUp}>   
    <div className= "inputs">
        <input type="text" value={username} placeholder="First Name" onChange={(e) => setUserName(e.target.value)}/> <br/> <br/>
        <input type="text" value={email}placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br/> <br/>
        <input type="password" value={password}placeholder="Password" onChange={(e) => setPassword(e.target.value)}/> <br/> <br/>
        <input type="password" value={confirmpassword} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/> <br/> <br/>
        <button> SIGNUP</button>
    </div>    
    </form>
    </div>)

}
export default SignUp