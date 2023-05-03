import React from 'react';
import './OutreachRow.css';
import {data,imgData} from './OutreachData';

const OutreachRow = () => {
    return(
        <>
          <div class="container">
                {data.map((item) => {
                  return(
                    <>
                      <div class="row animationRow">
                        <div class="col-md-4">
                        <div class="image">
                            <img src={item.image} alt="Image" width="400px" height="300px"/>
                        </div>
                        </div>
                        <div class="col-md-8" >
                        <div class="text text-center">
                            <h5 style={{"marginLeft" : "50px" , "marginTop" : "1px"}}>{item.heading}</h5>
                            <p className='text-justify' style={{"marginLeft" : "50px" , "marginTop" : "10px"}}>{item.description}</p>
                            
                        </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                      <br></br>
                    <br></br>
                    </>
                  )
                })}
                </div>
                {imgData.map((item) => {
                    return(
                        <>
                             <div className='container'>
                        <div className="text text-center">
                                    <h5 style={{"marginLeft" : "50px" , "marginTop" : "1px"}}>{item.heading}</h5>
                                    <p  className="text-justify" style={{"marginLeft" : "50px" , "marginTop" : "10px"}}>{item.description}</p>
                                    <div className="container">
                                    <div className="row animationRow">
                                        <div className="col-md-6">
                                        <img src={item.image1} width="540px" height="350px"/>
                                        </div>
                                        <div className="col-md-6">
                                        <img src={item.image2} width="540px" height="350px"/>
                                        </div>
                                    </div>
                                    </div>

                                </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        </>
                    )
                })}

                
               

        </>
    )
}

export default OutreachRow;