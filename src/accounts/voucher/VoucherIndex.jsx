import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaymentVoucher from './PaymentVoucher';
import ContraVoucher from './ContraVoucher';

function VoucherIndex() {
  return (
    <div className='h-full flex-1'>
        <Routes>
          <Route path="/*" element={<PaymentVoucher/>}/>
          <Route path="/ContraVoucher" element={<ContraVoucher/>}/>
        </Routes>
    </div>
  );
}

export default VoucherIndex;
