import React from 'react';
import { useLocation } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 

 const sideBarMenuHome = [
    { "id": 1, "name": "Date", "ControlKey": "F2" ,"disabled":"yes" },
    { "id": 2, "name": "Company", "ControlKey": "F3","disabled":"no"},
    { "id": 3, "name": "Quit", "ControlKey": "Q","disabled":"yes" },
    { "id": 4, "name": "Date", "ControlKey": "F2" ,"disabled":"yes" },
    { "id": 5, "name": "Select Company", "ControlKey": "F3","disabled":"no"},
    { "id": 6, "name": "Quit", "ControlKey": "Q","disabled":"yes" },
  ]
 const sideBarMenuVoucher = [
    { "id": 1, "name": "Payment", "ControlKey": "F2" ,"disabled":"no","Link":"voucher/PaymentVoucher" },
    { "id": 2, "name": "Contra", "ControlKey": "F3","disabled":"no","Link":"voucher/ContraVoucher"},
    { "id": 3, "name": "Quit", "ControlKey": "Q","disabled":"no","Link":"voucher/RecieptVoucher" },
    { "id": 4, "name": "Date", "ControlKey": "F2" ,"disabled":"yes","Link":"voucher/JournalVoucher" },
    { "id": 5, "name": "Select Company", "ControlKey": "F3","disabled":"no","Link":"Voucher/Sales"},
    { "id": 6, "name": "Quit", "ControlKey": "Q","disabled":"yes","Link":"Voucher/Purchase" },
    { "id": 6, "name": "Quit", "ControlKey": "Q","disabled":"yes","Link":"Other Vouchers" },
  ]

function Sidebar() {
 
  const location = useLocation();
  const isVoucherPage = location.pathname.includes('voucher');

  const sidebarMenu = isVoucherPage ? sideBarMenuVoucher : sideBarMenuHome;

  return (
  <div className='caerp_sidebar'>
    <div className='sidebar_button_holder flex flex-col gap-2 px-1'>
      {sidebarMenu.map((button) => (
        <button >
        <Link
          to={button.Link}
          key={button.id}
          tabIndex={button.disabled === 'yes' ? -1 : 0}
          disabled={button.disabled === 'yes'}
          className={`flex text-sm font-medium ${button.disabled === 'yes' ? 'disabled' : ''}`}
        >
          {button.ControlKey && <p className='pl-1 text-blue'>{button.ControlKey}:</p>}
          {button.name}
        </Link>
        </button>
      ))}
    </div>
  </div>
  );
}

export default Sidebar;
