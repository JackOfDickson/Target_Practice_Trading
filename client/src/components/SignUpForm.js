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
        <form onSubmit={handleUserFormSubmit}>
            <label htmlFor="name-input">Enter you name</label>
            <input type='text' name='name' id='id' value={nameInput} onChange={handleNameInput}/>
            <label htmlFor="email-input">Enter your email</label>
            <input type='email' name='email-input' id='email-input' value={emailInput} onChange={handleEmailInput}/>
            <button type='submit'>Register</button>
        </form>
    )
}

export default SignUpForm;