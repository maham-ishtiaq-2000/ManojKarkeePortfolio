import React from 'react';
import DataSets from './DataSets';
import './Home.css';

const Biography = () => {
    return(
        <>
        <h1 className='biographyHeader'>Agricultural Automation and Robotics Lab</h1>
        <div className='mt-3 mb-2'>
            <DataSets></DataSets>
        </div>
        <br></br>
        <p ><img src="https://s3.wp.wsu.edu/uploads/sites/1513/2016/10/Pic1-Copy-768x770.jpg" alt="Pineapple" className='biographyImg'/>
        Dr. Karkee was born and raised in Bhojpur, a mid-hill district of the Himalayan country of Nepal, some 400 km
        east of the capital city Kathmandu. After completing, high school in his village, he moved to Kathmandu for his Associate and Undergraduate degrees. He received his bachelor’s degree in Computer Engineering in 2002 from Tribhuvan University, then moved to Bangkok, Thailand to attend the Asian Institute of Technology where he earned his Master’s Degree in Remote Sensing and GIS. Dr. Karkee then spent the next five years in Ames, Iowa working on his doctoral research and education, 
        earning his PhD in Agricultural Engineering and Human-Computer Interaction from Iowa State University in 2009.
        <br></br>
        Dr. Karkee joined Washington State University (WSU) in 2010 where he leads a strong research program in <a href="#" className='biographyHighLightWord'>agricultural automation and mechanization </a>area with a particular emphasis on machine vision and sensing technologies for agricultural automation and robotics. He has been working on numerous sponsored projects in this area, including apple crop load estimation, apple and cherry harvesting, fruit tree and berry bush pruning, blossom thinning, water and nutrient stress monitoring, weed control in vegetable crops, and Big-data based SMART irrigation system for winegrapes. Dr. Karkee has been actively publishing in such journals as ‘Journal of Field Robotics’, ‘Computers and Electronics in Agriculture’, ‘Biosystems Engineering’ and ‘The Transactions of ASABE’ and has frequently presented in national and international conferences. Dr. Karkee currently serves as an Associate Editor of ‘Transactions of the ASABE’ and ‘Applied Engineering in Agriculture’, and as a Guest Editor for ‘Robotics’. He is the elected chair of Technical Committee 8.1, Control in Agriculture,
        International Federation of Automatic Control (IFAC) serving the term from, 2017 to 2020.</p>
       <br></br>
       <img src="https://s3.wp.wsu.edu/uploads/sites/1513/2018/02/IMG_0128c-1-1188x627.jpg" class="mx-auto d-block" alt="..." width="650px"></img>
       <br></br>
       <p>In his personal life, Dr. Karkee enjoys spending time with his family, singing Nepali songs, reading and writing literature, and playing sports including Volleyball and Badminton.</p>
       <p style={{"textDecoration" : "underline"}}>Some more about his life and profession, and some suggestions to the newer generation interested in #AgRobotics can be found below…</p>
       <a className="HomeLinkColour" style={{"border" : "none" , "textDecoration" : "none" , "fontWeight" : "bold"}} href="#">Western Innovator: From Nepal to Robotic Pioneer</a>
       <br></br>
       <a className="HomeLinkColour" style={{"border" : "none" , "textDecoration" : "none" , "fontWeight" : "bold" , "marginTop" : "20px"}} href="#">Leading Agricultural Automation and Robotics Research: Interview with Prof. Manoj Karkee</a>
        </>
    )
}

export default Biography;