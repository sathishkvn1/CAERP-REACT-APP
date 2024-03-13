import { styled, keyframes } from 'styled-components';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/joy/Button';
import * as Mui from '@mui/material';
import { createTheme } from '@mui/system';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OTP from '../components/OTPInput.jsx';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import logo from '../common/assets/brq_logo.png';
import sideimage from '../common/assets/681fbb047a6537e26339656827abce21.jpg';
import bg from '../common/assets/unnamed.jpg';
import { Link } from 'react-router-dom';
import { TbReload } from 'react-icons/tb';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/joy/Alert';
import CircularProgress from '@mui/joy/CircularProgress';
// import CircularProgress from '@mui/material-next/CircularProgress';

import Typography from '@mui/joy/Typography';
import Warning from '@mui/icons-material/Warning';
import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import bannerImage from '../common/assets/undraw_authentication_re_svpt.svg';
import Marquee from "react-fast-marquee";

import authAPI from '../common/api/services/Auth.jsx';           

const jumpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const LoginWrapper=styled.div`
    width: 100%;
    max-width: 90%;
    margin:auto;
    height:auto;
    margin-top:70px;
    min-height:90%;
`

const ButtonSubmit = styled.button`
  background-color: #10a37f;
  color: #fff;
  margin: 24px 0 0;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #056a51;
    cursor: pointer;
    animation: ${jumpAnimation} 1s ease;
  }
`;

const Heading = styled.h1`
  font-weight: bold;
  text-align: center;
  font-family: 'Söhne,-apple-system,BlinkMacSystemFont,Helvetica,sans-serif';
`;

const LeftSideBarCard = styled.div`
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    background-color: rgba(292, 280, 279, 0.64);
    border: 1px solid rgba(209, 213, 219, 0.3);
`;


function Login() {

  const [otp, setOtp] = useState('');

    const navigate = useNavigate();


    const [timer, setTimer] = useState(5 * 60); // Initial time in seconds (2 minutes)
    useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
  
      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    }, [timer]);
  
    const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };


    const [open, setOpen] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
      if (!hasMounted) {
        const timer = setTimeout(() => {
          setHasMounted(true);
          setOpen(true);
        }, 1000); // 3000 milliseconds = 3 seconds
        return () => clearTimeout(timer); // Clean up the timer
      }
    }, [hasMounted]);

    const SnackbarComponent = () => {
      return(
    <>
      <Snackbar
      sx={{width:'98%',top:'0px!important',marginTop:'0px',marginRight:'10px'}}
      variant="soft"
      color="light"
      open={open}
      onMouseLeave='false'
    
       // autoHideDuration="5000"
      onClose={() => setOpen(true)}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
      endDecorator={
        <Button onClick={() => setOpen(false)} size="sm" variant="soft" color="light">Dismiss</Button>
      }
      >
      <Marquee pauseOnHover="true" >
          <b>Software Update done on 22-02-2024 , You may find something new ,Please check user manual before logging in.</b>
      </Marquee>
    </Snackbar>
    </>
      );
    }
    

    const [dialogOpen, setDialogOpen] = useState(false);
    const handleOpenDialog = () => {
        setDialogOpen(true);
    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

 
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1); // Generate random numbers
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [userAnswer, setUserAnswer] = useState('');

    
  const generateNewCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setUserAnswer('');
    setIsCaptchaCorrect(false);
  };

  const handleSubmitCaptcha = (e) => {
      e.preventDefault();
      if (parseInt(userAnswer) === num1 + num2) {
        setIsCaptchaCorrect(true);
        setDialogOpen(true);
      } else {
        setIsCaptchaCorrect(false);
      }
    };

 

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    applicationKey: '',
  });

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);
  const [validation, setValidation] =useState('');

  const [error, setError] = useState({
    userName: false,
    password: false,
    applicationKey: false,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickPrimaryVerify = async (e) => {

    if (step === 1) {
        setLoading(true);
        if (validateStepOne()) {

          try {
            const response = await authAPI.login(formData.userName, formData.password, formData.applicationKey);
            const token = response.data.access_token;
            localStorage.setItem('accessToken', token);
            if(response)
            {
              setValidation('')
              setStep(2);
            }
        
          } catch (error) {
            
            console.error('Error during login:', error.response?.data);
            setValidation('Failed to login. Please check your credentials.');
      
          } finally 
          {
            setLoading(false);
          }

      }
    } else {
      setLoading(true);

      const accessToken = localStorage.getItem('accessToken'); 

          fetch(`http://202.21.38.180:8010/resend_otp/otp_verification/${otp}`, {
              method: 'POST',
              headers: {
                  'Authorization': `Bearer ${accessToken}`,
                  'Content-Type': 'application/json',
              },
          })
          .then(response => response.json())
          .then(data => {
              console.log('OTP verification response:', data);
              if (data.is_verified === true) {
                navigate('home');
              }
              else
              {
                setValidation(data.message);
              }
          })
          .catch(error => console.error('Error verifying OTP:', error));
        }
        setLoading(false);
      };



const validateStepOne = () => {
  const { userName, password, applicationKey } = formData;
  const updatedError = {
    userName: !userName.trim(),
    password: !password.trim(),
    applicationKey: !applicationKey.trim(),
  };
  setError(updatedError);
  
  // Check if any field has an error
  const hasError = Object.values(updatedError).some((err) => err);
  
  // Change label color to error if password field is empty
  if (!password.trim()) {
    document.getElementById("password").style.color = "red";
  } else {
    document.getElementById("password").style.color = "#000";
  }
  
  return !hasError;
};

  const handleClickBackToStep1 = () => {
    if (step === 2) {
      // Move back to step one
      setStep(1);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    // Clear error when user starts typing again
    setError((prevError) => ({
      ...prevError,
      [field]: false,
    }));
  };

  const renderInputFields = () => {
    switch (step) {
      case 1:
        return (
          <>
      
            {SnackbarComponent()}

            <Heading className='text-4xl'>Login</Heading>
            <TextField
                autoFocus
              color="success"
              label="User Name"
              id="user_name"
              value={formData.userName}
              onChange={(e) => handleInputChange('userName', e.target.value)}
              error={error.userName}
              helperText={error.userName && 'Username is required'}
            />
            <FormControl  color="success">
              <InputLabel  id="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                error={error.password}
                helperText={error.password && 'Password is required'}
              />
            </FormControl>
            <TextField
              fullWidth
              label="Application Key"
              id="application_key"
              value={formData.applicationKey}
              color="success"
              onChange={(e) => handleInputChange('applicationKey', e.target.value)}
              error={error.applicationKey}
              helperText={error.applicationKey && 'Application key is required'}
            />
            {renderCaptcha()}
            <div style={{color:'red',fontSize:'18px',marginBottom:'10px'}}>{validation}</div>

          </>
        );
      case 2:
        return (
          
          <div className='flex flex-col gap-12'>
            {SnackbarComponent()}

         
            <div className="flex flex-col justify-center items-center gap-4">
              <Heading className='text-4xl'>Enter OTP</Heading>
                <div className="m-auto mt-2">
                      <p className='py-1 px-4 text-xl rounded-md flex items-center bg-green-100'><small> {timer > 0 && (
                <div className="timer">
                  <p>{formatTime(timer)}</p>
                </div>
              )}</small>
                      </p>
                </div>
            </div>
            <OTP
            separator={<span>-</span>}
            value={otp}
            onChange={setOtp}
            length={6}
            />

           {validation && <div className="flex items-center gap-2 font-semibold justify-center" style={{color:'red',fontSize:'18px',marginBottom:'0px',textAlign:'center'}}><CircularProgress size="lg" color="danger"> <Warning /> </CircularProgress>{validation}</div>}
             <div className="flex  justify-center items-center">
                    <button className="py-2 px-3 flex gap-2 items-center border bold w-50 hover:bg-light-100 rounded-md">Resend OTP </button>
              </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderCaptcha = () => {
    if (Object.values(formData).some((value) => value !== '')) {
      return (
        <div className="captcha_main_wrapper p-2 flex flex-col bg-gray-200 rounded-md">
          <form onSubmit={handleSubmitCaptcha}>
            <div className="flex gap-2">
              <div className="relative ">
                <img src={bg} className="w-full rounded-md h-4/5" />
                <div className="flex justify-center items-center absolute inset-0">
                  <p className="text-red-900 text-2xl font-bold">
                    {num1} + <sup className="text-2xl">{num2}</sup> = ?
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="bg-white p-1 rounded-md" onClick={generateNewCaptcha}>
                  <TbReload />
                </button>
                <button className="bg-white p-1 rounded-md" type="submit"> <TbReload /></button>
              </div>
            </div>
            <div>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                required
                className="rounded-md p-1 w-full outline-none "
                placeholder="Enter captcha"
              />
            </div>
            
          </form>
          
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
    
    <div className="bg-gray-100 h-screen flex ">
  
      <LoginWrapper className="flex h-auto" style={{boxShadow:' 0 0.2rem 3rem rgba(0, 0, 0, 0.175)'}}>
        <LeftSideBarCard className="bg-blue-100 rounded-b-xl  rounded-l-xl  bg-contain w-3/5   flex" style={{ backgroundImage: `url(${sideimage})`  }}>
          <div className="flex flex-1 justify-center flex-col px-5 items-center">
              <img src={bannerImage} alt="" width='35%' className=''  />
          </div>
        </LeftSideBarCard>
        <div className="flex items-center  justify-center w-3/5 pb-5   rounded-r-xl   grow bg-white  ">
          <div className="flex flex-col gap-4  w-90">
            <img src={logo} className="flex justify-center  m-auto" width={100}  alt="" />
            {renderInputFields()}
            <ButtonSubmit onClick={handleClickPrimaryVerify} loading={loading} step={step}>
              {loading ? (
                <div className='flex justify-center gap-2 items-center'>
                  <p className='text-white'>Loading...</p>
                  <CircularProgress size="sm" color="neutral"></CircularProgress>
                </div>
              ) : (
                step === 1 ? 'Continue' : 'Submit'
              )}
            </ButtonSubmit>
            {step === 1 && (
              <div className="flex  flex-col gap-2 justify-center items-center mt-1">
                <p className="text-sm">
                  <Link to="/forgotpassword"  >
                    <span className="hover:text-green-900   p-0 text-green-600">Forgot Password</span>
                  </Link>
                </p>
                <p className="text-sm">
                  Difficult while logging in  ? {' '}
                  <Link to="/querymanager" className="">
                    <span className="   hover:text-green-900  p-0 text-green-600">Login Query Manager</span>
                  </Link>
                </p>
              </div>
            )}
            {step ==2 && <button onClick={handleClickBackToStep1} className="m-auto" to="/">Back to  <span  className='font-bold text-green-700'> Login ?</span></button>}
            
          </div>
          <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                <Alert
                variant="soft"
                color="danger"
                invertedColors
                startDecorator={
                <CircularProgress size="lg" color="danger">
                    <Warning />
                </CircularProgress>
                }
                sx={{ alignItems: 'flex-start', gap: '1rem' }}
                >
                <Box sx={{ flex: 1 }}>
                    <Typography level="title-md">Account Blocked</Typography>
                    <Typography level="body-md">
                        Please contact with adminstrator for more details.
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                        <Button variant="danger" size="sm" onClick={handleCloseDialog}>
                         Cancel
                        </Button>
                        <Button variant="solid" size="sm">
                         Send Request
                        </Button>
                    </Box>
                </Box>
            </Alert>
            </Dialog>
        </div>
      </LoginWrapper>
    </div>
 
        </>
  );
}




export default Login;
