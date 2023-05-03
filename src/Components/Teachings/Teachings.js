import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import './Teachings.css';

const Teachings = () =>{
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => setLoading(false), 900)
    }, [])
    return(
        <> 
        {loading === false ? (
           <div>
               
            <Header></Header>
            <br></br>
            <div style={{"marginLeft" : "30px"}}>
               <p className='researchHeading'>Classes offered by Dr.Karkee</p>
               <div>
                <br></br>
               <ul style={{"marginLeft" : "2px"}}>
                    <li><a className="researchLink" href="https://labs.wsu.edu/karkee-ag-robotics/machinevision/">BSysE530 – Machine Vision for Biological Systems</a></li>
                    <li><a className="researchLink" href="https://labs.wsu.edu/karkee-ag-robotics/PrecisionAg/">BSysE 552 – Precision Agriculture Technologies</a></li>
                    <li><a className="researchLink" href="https://labs.wsu.edu/karkee-ag-robotics/GIS/">BSysE 552: Data Structures and Algorithms for Geographic Information Systems </a></li>
                </ul>
               </div>
           </div>
           </div>
            
      ) : (
        <Loading />
      )}
           
           
        </>
    )
}

export default Teachings;