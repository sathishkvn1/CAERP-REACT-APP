import React from 'react';
import '../accounts/css/style.css';
import Header from '../accounts/Header';
import Sidebar from '../accounts/Sidebar';
import Footer from '../accounts/Footer';
import Content from '../accounts/Content';

// import styled from 'styled-components';




function Home() {
  return (
    <div className='caerp_main_wrapper'>

        <section  id="header">
            <Header/>
        </section>
        
        <section className='caerp_content '  id="content">
            <Content/>
        </section>

        <section  id="">
            {/* <Content/> */}
            <Sidebar/>
        </section>

        <section  className='caerp_footer' id="footer">
              <Footer/>
        </section>
      
        
    </div>
  );
}

export default Home;
