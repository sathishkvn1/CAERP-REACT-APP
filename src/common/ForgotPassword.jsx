import {React,useState} from 'react';
import logo from '../common/assets/brq_logo.png';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import bg from '../common/assets/unnamed.jpg';
import { TbReload } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import Textarea from '@mui/joy/Textarea';
import OTP from '../components/OTPInput.jsx';
import { SiNike } from "react-icons/si";


const MainContainer =styled.div`
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
height:auto;
width:100%;
max-width:40rem;
margin:auto;
// margin-top:40px;
padding:30px 30px 40px 30px; 

`



function ForgotPassword() {

    const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1); // Generate random numbers
    const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCaptchaCorrect, setIsCaptchaCorrect] = useState(false);

    const [step, setStep] = useState(1);

    

    const handleClickPrimaryVerify = () => {


        if (step === 1) {
            
          // Validate the first step, then proceed to the next step
          if (parseInt(userAnswer) === num1 + num2) {
            setIsCaptchaCorrect(true);
          } else {
            setIsCaptchaCorrect(false);
          }
          if (isCaptchaCorrect) {
            setStep(2);
          }
        } 
        else {
            setStep(3);
  
        }
      };
    

    
  const generateNewCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setUserAnswer('');
    setIsCaptchaCorrect(false);
  };


  const handleSubmitCaptcha = (e) => {
    e.preventDefault();
    // Check if the user's answer is correct
    if (parseInt(userAnswer) === num1 + num2) {
      setIsCaptchaCorrect(true);
    } else {
      setIsCaptchaCorrect(false);
    }
  };

  
 

  return (
    <div className='h-screen flex'>
    <MainContainer className='    gap-y-10 flex flex-col'>
            <div className='flex flex-col  items-center justify-center'>
                <img src={logo} alt="" width="100" className='m-auto'/>
                <h4 className='text-2xl font-semibold' style={{textShadow: '2px 2px 5px #DFE8E4'}}>{step == 1 ?'Forgot Password' : ''}{step == 2 ?'Enter OTP' : ''}{step == 3 ?'Reset Password' : ''}</h4>
                {/* <small className='text-sm'>The Field indicated with <span className='text-red-600'>*</span>are must be filled fields(mandatory)</small> */}
            </div>
            <div className='flex flex-col gap-3'>
            {step === 1 &&
                <div className='form_wrapper '>
                    {/* <form> */}
                      <Box
                        sx={{
                          width: 600,

                          maxWidth: '100%',
                          gap:2,
                          display:'flex', 
                          flexDirection:'column'
                        }}
                      >

                        <TextField autoFocus fullWidth label="User Name" id="fullWidth" />
                        <TextField fullWidth label="Application Key" id="access_key" />

                        <div className="captcha_main_wrapper m-auto p-2 flex flex-col bg-gray-200 w-3/6 rounded-md">
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


                        {/* <button className='bg-neutral-800 text-white p-3'>Reset Password</button> */}
                        {/* <button className='bg-neutral-800 text-white p-3' onClick={handleClickPrimaryVerify}>
                            {step === 1 ? 'Continue' : 'Submit Otp'}
                        </button>
                        <Link className="m-auto" to="/">Back to  <span  className='font-bold text-red-700'> Login ?</span></Link> */}
                      </Box>
                    {/* </form> */}
                </div>
             }

                {step === 2 &&
                <div className='flex flex-col m-auto gap-10   '>
                    {/* <button className="bg-neutral-300 w-8 py-2 px-2 hover:bg-slate-950  text-black rounded-md " onClick={handleClickBackToStep1}>
                    <FaArrowLeft style={{ color: 'white' }} />
                    </button> */}
                    <div className="m-auto ">
                      <p className='py-1 px-4 text-xl rounded-md flex items-center bg-green-100'><small>00:56</small>
                      </p>
                    </div>
                    <OTPInput />    
                    <div className="flex  justify-center items-center">
                        <button className="py-2 px-3 flex gap-2 items-center border bold w-50 hover:bg-light-100 rounded-md">Resend OTP </button>
                    </div>
                </div>      
                }
                {step === 3 &&
                   <div className='form_wrapper '>
                   {/* <form> */}
                     <Box
                       sx={{
                         width: 600,

                         maxWidth: '100%',
                         gap:2,
                         display:'flex',
                         flexDirection:'column'
                       }}
                     >
                       <TextField autoFocus fullWidth label="New Password" id="fullWidth" />
                       <TextField fullWidth label="Confirm Password" id="access_key" />
                     </Box>
               </div>
                }
                <button className='bg-neutral-800 text-white p-3 mt-4' onClick={handleClickPrimaryVerify}>
                            {step === 1 ? 'Continue' : ''}
                            {step === 2 ? 'Submit OTP' : ''}
                            {step === 3 ? 'Reset Password' : ''}
                </button>
                <Link className="m-auto" to="/">Back to  <span  className='font-bold text-red-700'> Login ?</span></Link>
            </div>
        </MainContainer>
    </div>
  );
}

export default ForgotPassword;
