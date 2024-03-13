import React from 'react';

const footerMenu = [
    { "id": 1, "name": "Quit", "ControlKey": "F2" ,"disabled":"no" },
    { "id": 2, "name": "Company", "ControlKey": "F3","disabled":"yes"},
    { "id": 3, "name": "Date", "ControlKey": "F2" ,"disabled":"yes" },
    { "id": 4, "name": "Company", "ControlKey": "F3","disabled":"no"},
    { "id": 5, "name": "Date", "ControlKey": "F2" ,"disabled":"yes" },
    { "id": 6, "name": "Company", "ControlKey": "F3","disabled":"no"},
    { "id": 7, "name": "Company", "ControlKey": "F3","disabled":"yes"},
    { "id": 8, "name": "Date", "ControlKey": "F2" ,"disabled":"yes" },
    { "id": 9, "name": "Company", "ControlKey": "F3","disabled":"yes"},
  ]


function Footer() {
  return (
      <div className='flex gap-2 p-1'>
        {footerMenu.map((button) => (
          <button   tabIndex={button.disabled === 'yes' ? -1 : 0}   disabled={button.disabled === 'yes'}   className={`flex text-sm font-medium ${button.disabled === 'yes' ? 'disabled' : ''}`} key={button.id} id={`${button.id}`}>
             {button.ControlKey && <p className='pl-1 text-blue'>{button.ControlKey}:</p>}{button.name}
          </button> 
        ))}
     
      </div>
  );
}

export default Footer;
