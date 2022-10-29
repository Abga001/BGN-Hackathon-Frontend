import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
//import {auth, provider } from '../firebase'

const Login = () => { 
    const signIn = () => {
        //auth.signInWithPopup(provider)
        (result => console.log(result))
        .catch(error => alert(error.message))
    }
    return (
        <LoginWrapper>
            <div className= "Login_logo">
                <img src ="logo512.png" alt="login" /> 
                <h1> Popular Social</h1>
            </div>
            <Button type = 'submit' className="login__btn"
            onClick= {signIn}>Sign In</Button>
        </LoginWrapper>  
    
    );
    
    
}  


    
    
    
    




const LoginWrapper = styled.div`

display: grid;
place-items: centre; 
height: 100vh;  
.login__logo {
    display: flex;
    flex-direction: column;
    img{
        object-fit: Contain; 
        height: 150px;
        max-width: 200px; 
    } 
}
.login__btn {
    width: 300px;
    background-color: #2e81f4;
    color: #eff2f5; 
    font-weight: 800; 
    &:hover {
        background-color: white; 
        color: #2e81f4;
    }
}
`
const RegisterWrapper = styled.div`
display: grid; 
place-items: right 
height: 100vh 
.Register_logo {
    display: flex; 
    flex-direction: column; 
    img{
        object-fit: Contain; 
        height: 150px; 
        max-width: 200px; 
    }
}
.login__btn{
    width: 300px; 
    background-color: #2e81f4;
    color: #eff2f5 
    font-weight: 800; 
    &:hover { 
        background-color: white; 
        color: #2e81f4;
    }
}
`
export default Login 