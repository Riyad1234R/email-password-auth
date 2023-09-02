import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth =getAuth(app);

const Register = () => {
    const [error,setError] =useState('');
    const[success,setSuccess] =useState('');
    const handleSubmit =(event)=>{
        event.preventDefault()
        setSuccess('');
        setError('');
        const email =event.target.email.value;
        const password =event.target.password.value;
        console.log(email,password)
      if(!/(?=.*[A-Z])/.test(password)){
        setError('Please add at least uppercae');
        return
      }
        // creat user in fb
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggUser =result.user;
            console.log(loggUser)
            setError('');
            event.target.reset('')
            setSuccess('User has been created succussfully')
        })
        .catch((error) => {
           console.error(error.message);
           setError(error.message)
           
    })
    }

    const handleEmailChange =(event)=>{
        // console.log(event.target.value)
        // setEmail(event.target.value)
    }
    const handlePasswordBuler =(event)=>{
        // console.log(event.target.value)
    }

    return (
        <div className='w-50 mx-auto'>
            <h4> Please Register</h4>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded ps-2' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='w-50 mb-4 rounded ps-2' onBlur={handlePasswordBuler} type="password" name="password" id="password"placeholder='Your Password'required />
                <br />
                <input className=' btn btn-primary' type="submit" value="Regester" />
            </form>
            <p className='text-denger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;