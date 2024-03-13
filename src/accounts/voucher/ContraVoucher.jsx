import React from 'react';
import BreadCrumbs from '../BreadCrumbs';

function ContraVoucher() {
  return (
    <section className='contra_voucher h-full '>
    <BreadCrumbs pageTitle='Contra Voucher'/>
      <div className='contra_voucher_content flex mt-2 items-center gap-2'>
          <div className='voucher_title w-2/12  flex justify-center font-semibold text-white' >
              <i>Contra</i>
          </div>    
          <div>No.<span className='font-bold ml-4'>1</span></div>
      </div>
    </section>
  );
}

export default ContraVoucher;
