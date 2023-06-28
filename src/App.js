import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Button, Grid, Link } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // 별도 추가 설치
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

function App() {
  return (
    <Container className="App" component="main" maxWidth="xs">
      <Box
        // mui 고유 기능 아니라 css 고유 기능 사용
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column', // 열의 방향으로 컨텐츠를 흘러가게 한다
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <TextField
          // style={{ width: '100%' }}
          margin="normal"
          xs={12}
          required
          fullWidth
          name="email"
          label="Email Address"
          autoComplete="email"
          autoFocus
        />
        <TextField
          // style={{ width: '100%' }}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        {/* <Checkbox value="remember" color="primary" /> */}

        <Button
          sx={{ mt: 3, mb: 2 }}
          variant="contained"
          type="submit"
          fullWidth
        >
          Sign in
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href="#">Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link href="#">Sign Up</Link>
          </Grid>
        </Grid>
        {/* <Link href="#">Don&apos;t have an account? Sign Up</Link> */}
      </Box>
    </Container>
  );
}

export default App;
