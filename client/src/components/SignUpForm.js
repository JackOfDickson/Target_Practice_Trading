import React, {useState} from "react";

const SignUpForm = ({allUsers, handleSignUpClick, registerUser})=>
{
    const [emailInput, setEmailInput] = useState('')
    const [nameInput, setNameInput] = useState('')

    const handleNameInput = (event)=>
    {
        setNameInput(event.target.value)
    }

    const handleEmailInput = (event)=>
    {
        setEmailInput(event.target.value)
    }

    const handleUserFormSubmit = (event)=>
    {   
        event.preventDefault();
        registerUser(nameInput, emailInput);
        handleSignUpClick();
        setEmailInput('')
        setNameInput('')
    }


    
    return(
        <>
        <br></br>
        <form class="form" onSubmit={handleUserFormSubmit}>
            <label class="login-header" htmlFor="name-input">Enter you name</label>
            <div class="login-select-bar2-container"><div class="login-select-bar2"><input type='text' name='name' id='id' value={nameInput} onChange={handleNameInput}/></div></div>
            <label class="login-header" htmlFor="email-input">Enter your email</label>
            <div class="login-select-bar2-container"><div class="login-select-bar2"><input  type='email' name='email-input' id='email-input' value={emailInput} onChange={handleEmailInput}/></div></div>
            <div class="login-button-container "><button class="login-button" type='submit'>Register</button></div>
        </form>
        <div class="login-button-container"><button class="login-button" onClick={handleSignUpClick}>Cancel</button></div>
        </>
    )
}

export default SignUpForm;