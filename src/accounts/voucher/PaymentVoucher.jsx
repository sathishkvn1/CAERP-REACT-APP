import React from 'react';
import BreadCrumbs from '../BreadCrumbs';

function PaymentVoucher() {
  return (
    <section className='payment_voucher h-full '>
        <BreadCrumbs pageTitle='Payment Voucher'/>
        <div className='payment_voucher_content flex mt-1 items-center gap-2'>
          <div className='voucher_title w-2/12  flex justify-center font-semibold text-white' >
              <i>Payment</i>
          </div>    
          <div>No.<span className='font-bold ml-4'>1</span></div>
          <div className=' ml-auto'>
            <div className='ml-auto font-semibold'>01-APR-24</div>
            <div className=''><p>Tuesday</p></div>
          </div>
        </div>
    </section>
  );
}

export default PaymentVoucher;
