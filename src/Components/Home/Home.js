import React,{useState,useEffect} from 'react';
import './Home.css';
import Biography from './Biography';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';

const Home = () =>{
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 900)
      }, [])
    return(
        <>
        {loading === false ? (
          <div>
                <Header></Header>
            
            <div className="container-fluid mt-3">
                <div className="row ">
                <div className="col-sm-3 p-3 text-secondary">
                    <img src="https://labs.wsu.edu/karkee-ag-robotics/wp-content/uploads/sites/1513/2016/10/kimfetrow2017_DSC_0812-Edit_8x10_cropped-396x498.jpg" className="img-thumbnail homeImg" alt="Cinque Terre" width="200px" height="100px"/> 
                    <h2 className='text-dark text-center'>Manoj Karkee , PhD</h2>
                    <p className='text-secondary text-center text-justify fs-4'>Professor</p>
                    <div className='text-center font-weight-normal mainDivLeft'> 
                        <p ><a href="https://bsyse.wsu.edu/">Biological Systems Engineering Department</a>
                        <br></br> <a href="https://cpaas.wsu.edu/">Center for Precision and Automated System</a>
                        <br></br><a href="https://iarec.wsu.edu/">IAREC - <span style={{"fontWeight" : "bold" , "color" : "grey"}}>Washington State University</span></a></p>
                    </div> 
                    <div className='text-center font-weight-normal mainDivLeft'> 
                        <p ><a href="https://agaid.org/">Member of <span style={{"fontWeight" : "bold" , "color" : "grey"}}>Ag-AI Institute</span> (Adopt , Adapt and Amplify)</a></p>
                    </div> 
                    <br></br>
                    <div className="row">
                        <div className="col"><a href="https://www.facebook.com/WSUPullman"><i className="fa fa-facebook" style={{"font-size":"48px" , "color":"#A60F2D"}}></i></a></div>
                        <div className="col"><a href="https://twitter.com/wsupullman"><i className="fa fa-twitter" style={{"font-size":"48px" , "color":"#A60F2D"}}></i></a></div>
                        <div className="col"><a href="https://www.youtube.com/washingtonstateuniv"><i className="fa fa-play" style={{"font-size":"48px" , "color":"#A60F2D"}}></i></a></div>
                        <div className="col"><a href="https://socialmedia.wsu.edu/"><i className="fa fa-plus" style={{"font-size":"48px" , "color":"#A60F2D"}}></i></a></div>
                    </div>
                </div>
                <div className="col-sm-8 p-3 text-secondary">
                <div className="container mt-3 ">
                    <Biography></Biography>
                </div>
                </div>
            </div>
            </div>
          </div>
            
      ) : (
        <Loading />
      )}
           
            
            
        </>
    )
}

export default Home;