import { Alert, Button, Container, Snackbar, TextField,Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
 
const LoginPage = ({u,p}) => {
    const [username, setUsername] = useState(u);
    const [password, setPassword] = useState(p);
    const [error, setError] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [noInput, setNoInput] = useState("");
    const [helperText, setHelpertext] = useState("");
    
    console.log(u,p)
 
    const handleSubmit = (e) => {
        e.preventDefault();
        setAttempts((prevAttempts)=>prevAttempts+1);
        if(attempts>=3){
            setError('Too many login attempts. please try again later.');
            setOpenSnackbar(true);
        }
        else if(username===u && password===p){
            setAttempts(0);
            setOpenSnackbar(true);
            setError(null);
        }
        else if(username!="" || password!=""){
            setError("Invalid username or password");
            setOpenSnackbar(true);
        }
        else{
            setError('');
            setOpenSnackbar(true);
        }
    }
    const handleCloseSnackbar=()=>{
        setOpenSnackbar(false);
    }
   
        return (
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={{padding:20}}>
                    <Typography variant='h5' align="center">
                        Sign in
                    </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                <TextField
                label="Username"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                helperText={helperText}
                required
                fullwidth
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                helperText={helperText}
                required
                fullwidth
                />
                </Grid>
                <Grid item xs={12} align="center">
                <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
                </Button>
                </Grid>
                </Grid>
                </form>
                </Paper>
                <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
                    <Alert severity={error?'error':'success'}>{error || 'Login successful!'}</Alert>
                </Snackbar>
                </Container>
        )
}
 
export default LoginPage;