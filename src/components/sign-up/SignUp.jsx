import React, { useState } from 'react';
import { registerWithEmailAndPassword } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './SignUp.scss';

function SignUp() {
  const [inputs, setInputs] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    const { password, confirmPassword, displayName, email } = inputs;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      await registerWithEmailAndPassword(displayName, email, password);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={inputs.displayName}
          required={true}
          label="Name"
          handleChange={handleChange}
        />

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

        <FormInput
          type="password"
          name="confirmPassword"
          value={inputs.confirmPassword}
          required={true}
          label="Confirm Password"
          handleChange={handleChange}
        />

        <div className="button-row">
          <CustomButton type="submit">Sign Up</CustomButton>
          {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton> */}
        </div>
      </form>
    </div>
  );
}

export default SignUp;
