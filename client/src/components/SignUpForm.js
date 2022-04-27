import React, {useState, useEffect, useRef} from "react";

const SignUpForm = ({allUsers, handleSignUpClick, registerUser})=>
{
    const [emailInput, setEmailInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [existingName, setExistingName] = useState(false)
    const [existingEmail, setExistingEmail] = useState(false)
    const activateTimer = useRef(false)

    useEffect(()=>
    {
        if(activateTimer.current === true)
        {
            const interval = setInterval(() => {
                setExistingName(false)
                setExistingEmail(false)
                activateTimer.current = false
            }, 4000);
            return () => clearInterval(interval);
        }


    }, [existingName, existingEmail])

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
        const isNameInUse = allUsers.some(user=>
            {
                return user.name === nameInput 
            })
         const isEmailInUse = allUsers.some(user=>
            {
                return user.email === emailInput
            })
        if (isNameInUse === true)
        {
            setExistingName(true)
            activateTimer.current = true;
        }
        else if (isEmailInUse === true)
        {
            setExistingEmail(true)
            activateTimer.current = true;
        }
        else
        {
            registerUser(nameInput, emailInput);
            handleSignUpClick();
            setEmailInput('')
            setNameInput('')
        }
        
    }

    
    return(
        <>
        <br></br>
        <form class="form" onSubmit={handleUserFormSubmit}>
            <label class="login-header" htmlFor="name-input">Enter you name</label>
            <div class="login-select-bar2-container"><div class="login-select-bar2"><input type='text' name='name' id='id' value={nameInput} onChange={handleNameInput}/></div></div>
            <div>{existingName? <p id="warning">name already in use</p>: <p></p>}</div>
            <label class="login-header" htmlFor="email-input">Enter your email</label>
            <div class="login-select-bar2-container"><div class="login-select-bar2"><input type='email' name='email-input' id='email-input' value={emailInput} onChange={handleEmailInput}/></div></div>
            <div class="message-container">{existingEmail? <p id='warning'>email already in use</p>: <p class="empty"></p>}</div>
            <div class="login-button-container "><button class="login-button" type='submit'>Register</button></div>
        </form>
        <div class="login-button-container"><button class="login-button" onClick={handleSignUpClick}>Cancel</button></div>
        </>
    )
}

export default SignUpForm;