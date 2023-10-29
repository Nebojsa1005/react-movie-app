import { Button, TextField } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/auth-context';
import classes from './Register.module.css';

const Register = () => {
  const { updateUserData, userData } = useContext(AuthContext)
  
  const navigate = useNavigate();


  const submitForm = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/movies');
  };

  const updateInput = (event: any) => {    
    updateUserData(event)
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitForm}>
        <TextField
          sx={{ marginBottom: '0.5rem' }}
          focused
          label="Email"
          variant="outlined"
          name="email"
          value={userData.email}
          onChange={updateInput}
        />
        <TextField
          sx={{ marginBottom: '0.5rem' }}
          focused
          label="Password"
          variant="outlined"
          name="password"
          value={userData.password}
          onChange={updateInput}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Register;
