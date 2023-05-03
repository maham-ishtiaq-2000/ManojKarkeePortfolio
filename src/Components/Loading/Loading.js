import React from 'react';
import ReactLoading from "react-loading";

const Loading = () => {
    return(
        <>
           <div style={{ "marginLeft" : "50%" , "marginTop" : "22%" , color : "#A60F2D"}}>
            <ReactLoading  type="spin" color="#A60F2D"
                height={100} width={80} />
            </div>
        </>
    )
}

export default Loading;