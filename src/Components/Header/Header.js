import React from 'react';
import './Header.css'

const Header = (props) =>{
    console.log(props.page)
    return(
        <>
            <nav className="navbar navbar-expand-sm navbar-muted bottom-bottom-1 p-3 mainHeaderContainer">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a className="nav-link fs-5" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link fs-5" href="/aboutMe">AboutMe</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link fs-5" href="/research">Research</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link fs-5" href="/teachings">Teaching</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link fs-5" href="/publications">Publication</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link fs-5" href="/outreaches&extension">Outreach/Extension</a>
                    </li>
                </ul>
                {!props.page && <h1 style={{"marginRight" : "30px" , "color" : "#A60F2D"}}>MANOJ KARKEE</h1>}
    
                </div>
            </div>
            </nav>

           

        </>
    )
}

export default Header;