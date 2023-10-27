import { useState } from 'react';
import { RegisterForm } from '../../types/intefaces/RegisterForm.interface';
import { Button, TextField } from '@mui/material';
import classes from './Register.module.css';
import { useNavigate } from 'react-router';
import { useAuthActions } from '../../contexts/AuthContext';

const Register = () => {
  const { register } = useAuthActions();
  const [registerForm, setRegister] = useState<RegisterForm>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const updateRegisterForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;

    setRegister((prev: RegisterForm) => {
      prev[key] = value;
      return {
        ...prev,
      };
    });
  };

  const submitForm = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    console.log(event);
    
    event.preventDefault();
    register(registerForm);
    // navigate('/movies');
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitForm}>
        <TextField
          sx={{ marginBottom: '0.5rem' }}
          focused
          label="Email"
          variant="outlined"
          name="email"
          value={registerForm.email}
          onChange={updateRegisterForm}
        />
        <TextField
          sx={{ marginBottom: '0.5rem' }}
          focused
          label="Password"
          variant="outlined"
          name="password"
          value={registerForm.password}
          onChange={updateRegisterForm}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Register;
