import React, { useState } from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './SignIn.scss';
import {
  loginWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase/firebase.utils.js';

function SignIn() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    //[key]: value
    setInputs({ ...inputs, [name]: value });
  };

  const resetForm = () => {
    let resetInputs = {};
    for (const key in inputs) {
      resetInputs = { ...resetInputs, [key]: '' };
    }
    setInputs(resetInputs);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = inputs;
    try {
      await loginWithEmailAndPassword(email, password);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={inputs.email}
          required={true}
          label="Email"
          handleChange={handleChange}
        />

        <FormInput
          type="password"
          name="password"
          value={inputs.password}
          required={true}
          label="Password"
          handleChange={handleChange}
        />

        <div className="button-row">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
