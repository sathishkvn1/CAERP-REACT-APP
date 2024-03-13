import React, { useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';


const gatewayMainHeading = [
  { "id": 1, "name": "Company"},
  { "id": 2, "name": "Data"},
  { "id": 3, "name": "Exchange"},

]

const gatewayMenu = [
    { "id": 1,"mainHeadingId":"1", "name": "Create", "ControlKey": "K" ,"disabled":"no","Link":"" },
    { "id": 2,"mainHeadingId":"1", "name": "Add", "ControlKey": "Y","disabled":"no","Link":""},
    { "id": 3,"mainHeadingId":"2", "name": "Exchange", "ControlKey": "Z","disabled":"no","Link":"" },
    { "id": 4,"mainHeadingId":"1", "name": "Data", "ControlKey": "Y","disabled":"no","Link":""},
    { "id": 5,"mainHeadingId":"3", "name": "Exchange", "ControlKey": "Z","disabled":"no","Link":"" },
    { "id": 6,"mainHeadingId":"1", "name": "Data", "ControlKey": "Y","disabled":"no","Link":""},
    { "id": 7,"mainHeadingId":"4", "name": "Voucher", "ControlKey": "Z","disabled":"no","Link":"/home/voucher" },

  ]
  


function Index() 

{
   const firstButtonRef = useRef(null);

  useEffect(() => {
    // Focus on the first button when the component mounts
    if (firstButtonRef.current) {
      firstButtonRef.current.focus();
    }
  }, []);
  
  return (
    <div className='h-full flex  '>
      
        <div className='flex-1 '>
              
        </div>
             <div className='flex-1 flex items-center justify-center border border-l-neutral-300 '>
              <div className='main_gateway_wrapper w-2/5 '>
                <div className='main_gateway_heading bg-title-blue text-center '>Gateway for Caerp</div>
                  <div className='bg-#def1fc border-blue-3  00 border  min-h-80 py-6'>
                      {gatewayMenu.map((button)=>(
                        <ul className='flex flex-col text-right'>
                          <li className='text-left'>
                            <Link to={button.Link} id={`${button.id}`}  key={button.id} disabled={button.disabled === 'yes'} className='text-md focus:bg-#fec530 focus:outline-none w-full items-center justify-center flex '><p className='text-justify'>{button.name}</p></Link>
                          </li>
                        </ul>
                      ))}
                  </div>
               </div>
              </div>
        </div>
  );
}

export default Index;
