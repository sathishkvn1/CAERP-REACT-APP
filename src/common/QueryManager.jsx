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

const MainContainer =styled.div`
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
height:auto;
width:100%;
max-width:43rem;
margin:auto;
margin-top:40px;
padding:0px 30px 40px 30px;
`

function QueryManager() {

  const top100Films = [
    { label: 'Forgot password', year: 1994 },
    { label: 'Account Blocked', year: 1972 },
    { label: 'Other Issues', year: 1974 },


  ];

  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1); // Generate random numbers
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCaptchaCorrect, setIsCaptchaCorrect] = useState(false);

    
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
    <MainContainer className='items-center justify-center gap-y-12 flex flex-col'>
            <div className='flex flex-col  items-center justify-center'>
                <img src={logo} alt="" width="100" className='m-auto'/>
                <h4 className='text-lg font-semibold' style={{textShadow: '2px 2px 5px #DFE8E4'}}>Submit Query</h4>
                <small className='text-sm'>The Field indicated with <span className='text-red-600'>*</span>are must be filled fields(mandatory)</small>
            </div>
            <div className='flex flex-col gap-3'>
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
                         <Autocomplete fullWidth disablePortal id="combo-box-demo" options={top100Films}  renderInput={(params) => <TextField {...params} label="Subject" />}/>

                        <TextField fullWidth label="User Name" id="fullWidth"/>
                        <TextField fullWidth label="Application Key" id="access_key" />
                        <Textarea placeholder="Query" minRows={3} />

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


                        <button className='bg-neutral-800 text-white p-3'>Submit</button>
                        <Link className="m-auto" to="/">Back to  <span  className='font-bold text-red-700'> Login ?</span></Link>
                      </Box>
                    {/* </form> */}
                </div>
            </div>
                
        </MainContainer>
    </div>
  );
}

export default QueryManager;
