import React from 'react';
import Header from '../Header/Header';
import OutreachRow from './OutreachRow';
import './Outreaches.css';
import {data} from './OutreachData';

const Outreaches = () => {
   console.log(data)
    return(
        <>
            <Header></Header>
            <p className='outreachHeading'>Outreach/Extension Activities</p>
            <div class="container" style={{"marginTop" : "50px" , "marginBottom" : "50px"}}>
            <div class="row">
                <div class="col-md-12 d-flex align-items-center justify-content-center">
                <div className="text-center handleResponse" >
                      <OutreachRow></OutreachRow>

                </div>
                </div>
            </div>
            </div>
       
        </>
    )
}

export default Outreaches;