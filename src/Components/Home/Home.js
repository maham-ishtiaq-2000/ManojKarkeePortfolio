import React,{useState,useEffect} from 'react';
import './Home.css';
import Biography from './Biography';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import myImage from '../MainPage/images/wsu.jpg';
import myNewImg from '../MainPage/images/googleScholat.png';

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
                    <img src={myImage} className="img-thumbnail homeImg" alt="Cinque Terre" width="220px" height="70px"/> 
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
                        <div className="col"><a href="https://twitter.com/KarkeeManoj?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa fa-twitter" style={{"font-size":"48px" , "color":"#1DA1F2"}}></i></a></div>
                        <div className="col"><a href="https://www.linkedin.com/in/manoj-karkee-68b5ab1a/"><i className="fa fa-linkedin" style={{"font-size":"48px" , "color":"#0e76a8 "}}></i></a></div>
                        <div className="col"><a href="https://scholar.google.com/citations?user=ajjssGAAAAAJ&hl=en"> <img src={myNewImg} alt="WSU Logo" width="60px" height="45px" style={{"marginBottom" : "10px"}}/></a></div>
                        <div className="col"><a href="https://bsyse.wsu.edu/people/faculty/karkee/"> <img src="https://1000logos.net/wp-content/uploads/2020/01/Washington_State_Cougars_logo_PNG3.png" alt="WSU Logo" width="60px" height="45px" style={{"marginBottom" : "10px"}}/></a></div>
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