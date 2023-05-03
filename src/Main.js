import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MainPage from './Components/MainPage/MainPage';
import Research from './Components/Research/Research';
import Publication from './Components/Publications/Publication';
import Teachings from './Components/Teachings/Teachings';
import Outreaches from './Components/Outreaches/Outreaches';
import Animation from './Components/Animation/Animation';
import OutreachRow from './Components/Outreaches/OutreachRow';
import {Route,Routes} from 'react-router-dom';

const Main = () => {
    return(
        <>
           <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/aboutMe" element={<Home />}></Route>
                <Route path="/research" element={<Research />}></Route>
                <Route path="/publications" element={<Publication />}></Route>
                <Route path="/teachings" element={<Teachings />}></Route>
                <Route path="/outreaches&extension" element={<Outreaches />}></Route>
           </Routes>
        </>
    )
}

export default Main ;