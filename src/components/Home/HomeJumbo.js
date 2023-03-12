import React from "react";
import avatar from "../../assets/peeps-avatar-alpha.png"

function HomeJumbo(){
    return(
        <div className="container-fluid" id="titleScreen">
            <div className="row align-items-center">
                <div className="col-6 justify-content-center">
                    <img src={avatar} alt="Avatar of a male" className="w-80"/>
                </div>
                <div className="col-6">
                    <h1 id="titleHeading">Hi, I'm <span id="titleName">Alex.</span></h1>
                    <p>Junior Frontend Developer </p>
                    <p>A recent Masters graduate looking to pursue a career in Frontend Development.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeJumbo;