import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VscChromeMinimize } from "react-icons/vsc";
import { TbWindowMaximize } from "react-icons/tb";
import { MdClose } from "react-icons/md";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const headerMenu = [
  { "id": 1, "name": "Company", "ControlKey": "K" ,"disabled":"no" },
  { "id": 2, "name": "Data", "ControlKey": "Y","disabled":"no"},
  { "id": 3, "name": "Exchange", "ControlKey": "Z","disabled":"no" },
  { "id": 4, "name": "Data", "ControlKey": "Y","disabled":"no"},
  { "id": 5, "name": "Exchange", "ControlKey": "Z","disabled":"no" },
  { "id": 6, "name": "Data", "ControlKey": "Y","disabled":"no"},
  { "id": 7, "name": "Exchange", "ControlKey": "Z","disabled":"no" },
]

const headerSubDropDownMenu = [
  { "id": 1,"mainMenuId":"1", "name": "Company", "ControlKey": "Alt+F3" ,"disabled":"no" },
  { "id": 2,"mainMenuId":"1", "name": "Data", "ControlKey": "Alt+F1","disabled":"no"},
  { "id": 3,"mainMenuId":"1", "name": "Exchange", "ControlKey": "Alt+C","disabled":"no" },
  { "id": 4,"mainMenuId":"2", "name": "Data", "ControlKey": "","disabled":"no"},
  { "id": 5,"mainMenuId":"3", "name": "Exchange", "ControlKey": "","disabled":"no" },
  { "id": 6,"mainMenuId":"2", "name": "Data", "ControlKey": "","disabled":"no"},
  { "id": 7,"mainMenuId":"1", "name": "Exchange", "ControlKey": "","disabled":"no" },
]


const buttonStyle = {
  cursor: 'pointer',
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0 14px',
  position:'relative',
  zIndex:'999',
};

const modalStyle = {
  position: 'absolute',
  width: 'auto',
  height: 'fit-content',
  bgcolor: '#def1fc',
  border: '1px solid #92bad4',
  boxShadow: 24,
  minWidth: 200,
  zIndex: 0,
};




function Header() {



 
  const [open, setOpen] = React.useState(false);
  const [modalPosition, setModalPosition] = React.useState({ top: 0, left: 0 });

  const handleOpen = (e) => {
    const buttonRect = e.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: buttonRect.bottom + window.scrollY,
      left: buttonRect.left + window.scrollX,
    });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className='caerp_header' style={headerStyle}>
      <div className='company flex flex-col items-start leading-3'>
        <span className='text-zinc-400 text-md'>BharathTax</span>
        <span className='text-yellow-500 text-xl font-bold'>CAERP</span>
      </div>
      <div className='flex  self-end  ml-20' >
        {headerMenu.map((button) => (
          <button onClick={handleOpen}  tabIndex={button.disabled === 'yes' ? -1 : 0}   disabled={button.disabled === 'yes'}   className={`flex focus:outline-none  focus:bg-#164f95 hover:-translate-y-1 duration-300 transition ease-in-out pr-32 pt-2 pb-2 pl-1  text-zinc-100  ${button.disabled === 'yes' ? 'disabled' : ''}`} key={button.id} id={`${button.id}`}>
             {button.ControlKey && <p className=''><span className='pl-1  text-blue-300 underline'>{button.ControlKey}</span><span>:</span></p>} {button.name}
          </button>
        ))}
      </div>
      <div className='mb-1 flex justify-center self-end ms-auto'>
        <button className='bg-white color-neutral-400 py-1 px-6'>
          <span className='underline text-blue-400 font-semibold'>G: </span>Go To
        </button>
      </div>
   
      <div className='icon_holder flex gap-8 self-start py-1 text-stone-100 ml-auto leading-3'>
        <div style={buttonStyle}><VscChromeMinimize/></div>
        <div style={buttonStyle}><TbWindowMaximize/></div>
        <div style={buttonStyle}><MdClose /></div>
      </div>

      {/* modal for headers start here */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          style={{
            ...modalStyle,
            top: modalPosition.top,
            left: modalPosition.left,
          }}
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
              <Box sx={modalStyle}>
                {/* <Typography id="transition-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography> */}
                <Typography  id="transition-modal-description" sx={{ mt: 2,mb:2 }}>
                  {headerSubDropDownMenu.map((subHeaderMenu)=>(
                    <ul className='flex flex-col focus:bg-yellow-500 gap-2 w-100 '>
                      <li className='transition w-100 focus:bg-yellow-200 '>
                        <button id={`${subHeaderMenu.id}`} key={subHeaderMenu.id} disabled={subHeaderMenu.disabled === 'yes'} className='pl-6 mr-10   transition focus:bg-#fec530 focus:outline-none w-full flex'><small><span className='underline font-semibold   text-blue'></span>{subHeaderMenu.name}</small>{subHeaderMenu.ControlKey &&<small className='text-sm flex ml-auto text-blue pr-6'>{subHeaderMenu.ControlKey}</small>}</button>
                      </li>
                    </ul>
                  ))}
                </Typography>
              </Box>
          </Fade>
        </Modal>
      </div>
      {/* modal for headers ends here */}
    </div>
  );
}

export default Header;
