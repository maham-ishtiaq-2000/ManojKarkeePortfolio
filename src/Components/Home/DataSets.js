import React from 'react';

const DataSets = () =>{
    return(
        <>  
            <button type="button" style={{"backgroundColor" : "#A60F2D"}} className="btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
             View DataSets , Conference and Special Issues
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div className="modal-header" style={{"backgroundColor" : "#A60F2D"}}>
                    <h4 class="modal-title text-light" id="exampleModalLabel">DataSets</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                        <p className='text-justify'>All the labeled datasets produced can be accessed at <a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="https://rex.libraries.wsu.edu/esploro/search/outputs?unit=01ALLIANCE_WSU___AU00003_01&page=1&institution=01ALLIANCE_WSU&sort=date_d">#AgRobotics Repository provided by WSU Library</a></p>
                        <br></br>
                        <p  className='text-justify'>Links to sample datasets are below..</p>
                        <p><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="http://hdl.handle.net/2376/17720">RGB-D Dataset of Apple Canopies Just Before Harvest (1600 images)</a></p>
                        <br></br>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="http://hdl.handle.net/2376/17721">APPLE (IMAGE) DATASET (A set of ~2,300 standardized images collected in orchards with different apple varieties and tree architectures using different sensors)</a></p>
                        <br></br>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="http://hdl.handle.net/2376/17720">Scifresh Apple Canopies During Harvest Season (with and without depth filtering)</a></p>
                        <br></br>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="http://hdl.handle.net/2376/17530">Full-foliage Apple Canopies in Modern Fruiting Wall Architecture (3D Point Cloud)</a></p>
                        <br></br>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="http://hdl.handle.net/2376/17529">Full-foliage Apple Canopies in Modern Fruiting Wall Architecture (Color Images)</a></p>
                        <br></br>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="http://hdl.handle.net/2376/16939">Vineyard Canopy Images during Early Growth Stage</a></p>
                        <br></br>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="http://hdl.handle.net/2376/17628">Cell-phone-based winegrape canopy images collected over the entire growing season</a></p> 
                        <br></br>
                        <h4 style={{"color" : "#A60F2D"}}>Conference / Special Issue</h4>
                        <br></br>
                        <p><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="https://www.mdpi.com/journal/sensors/special_issues/Sensors_Agricultural_Automation_Robotics">2020-2021 Special Issue on “Sensing Technologies for Agricultural Robotics”</a></p>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="https://labs.wsu.edu/karkee-ag-robotics/agrobotics-workshop2019/">2019 Workshop on #AgRobotics, Sydney, Australia</a></p>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="http://www.robotics.unsw.edu.au/agricontrol2019/program.html">AgriControl 2019: IFAC International Conference, Sydney, Australia</a></p>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="http://123.57.55.167:8080/caumeeting/caumeetingweb2018/index.html">Bio-robotics 2018: IFAC International Conference, Beijing, China</a></p>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="https://bsyse.wsu.edu/">AgriControl 2016: IFAC International Conference, Seattle, USA</a></p>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="https://www.mdpi.com/journal/robotics/special_issues/agriculture_robotics">Special Issue “Agriculture Robotics”, 2018</a></p>
                        <p  className='text-justify'><a style={{"textDecoration" : "none" , color : "#A60F2D"}} href="https://www.mdpi.com/journal/robotics/special_issues/AFR">Special Issue on “Agricultural and Field Robotics”, 2019</a></p> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn text-light" style={{"backgroundColor" : "#A60F2D"}} data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default DataSets;