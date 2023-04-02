import React from 'react';

const Landing = () => {
    return (
        <div className="containerC">
        <img id='back' src={background} alt="background image"/>
        <div className="container2">
       <div className="topContainer">
           <h2>Digital currency exchange</h2>
       <input type="search" value={search} placeholder="search what you want !"/>
       </div>
       <div className="bottomContainer">
        
       </div>  </div>
   </div>
    );
};

export default Landing;