import React from 'react';
import Header from '../Header/Header';
import './MainPage.css';
import myImage from "./images/mew.png";



const MainPage = () => {
    const handleGenerateQR = () => {
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        "file:///C:/Users/maham/Downloads/sample_file.pdf"
      )}&size=200x200`;

      return qrCodeUrl;
    };
    handleGenerateQR()

    return(
        <>
          <Header page="main" ></Header>
          <div style={{"backgroundColor" : "lightgrey" , "width" : "100%" , "height" : "700px"}}>
          <div className='background-container'>
            <div className="row animationRow">
              <div className="col-sm-6  text-left" style={{"marginTop" : "150px"}}>
                 <p style={{"marginLeft" : "85px" , "fontSize" : "60px" , "color" : "#444444" }}>Manoj Karkee , PHD</p>
                 <p style={{"marginLeft" : "135px" , "fontSize" : "30px"}}><a style={{"textDecoration" : "none" , "color" : "#444444"}} href='https://agaid.org/'>Agricultural Automation Pioneer</a></p>
              </div>
              <div class="col-sm-6" >
                 <div className='karkeeImage'>
                      <img src={myImage} height="530px" width="450px"></img>
                 </div>


              </div>
            </div>
          </div>
          </div>
        </>
    )
}

export default MainPage;