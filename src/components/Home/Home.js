import React from "react";
import HomeJumbo from "./HomeJumbo";
import HomeCards from "./HomeCards";
import "./Home.css";

function Home() {
  return (
    <div>
      <HomeJumbo />
      <div className="container mt-5 pb-2">
        <div className="row mt-5">
          <h2>Let me Introduce myself</h2>
          <div className="col-12">
            <p>Hi There! My name is Alexander Ainslie and i'm currently learning how to become a frontend engineer.</p>
            <p>I'm a recent graduate from the University of Exeter, where I graduated with a Masters in Financial Technologies. During my time there I was able to take part in a Hackathon where I learnt more about UI/UX and web development, which really piqued my interest within this field.</p>
            <p>Therefore, I decided to learn frontend engineering by taking part in multiple courses. These include the Skills For Life Bootcamp ran by EdX and also Meta's Frontend Developer Professional Certificate on Coursera.</p>
            <p>Hopefully these help me start my career within frontend engineering !</p>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="homeCardContainer">
        <div className="container">
          <div className="row mt-5 pb-4">
            <h2>Current Skill Set</h2>
            <HomeCards />
          </div>
        </div>
      </div>
    </div>
  );
}



export default Home;
