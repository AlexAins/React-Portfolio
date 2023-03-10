import React from "react";
import avatar from "../../assets/peeps-avatar-alpha.png"
import HomeCards from "./HomeCards";

function Home() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6">
          <img src={avatar} alt="Avatar of a male" className="w-100"/>
        </div>
        <div className="col-6">
          <h1>Hi, I'm Alex</h1>
          <p>Junior Frontend Developer </p>
          <p>A recent Masters graduate looking to pursue a career in Frontend Development</p>
        </div>
      </div>
      <div className="row mt-5">
        <h2>Let me Introduce myself</h2>
        <div className="col-12">
          <p>Hi There! My name is Alexander Ainslie and i'm currently learning how to become a frontend engineer.</p>
          <p>I'm a recent graduate from the University of Exeter, where I graduated with a Masters in Financial Technologies. During my time there I was able to take part in a Hackathon where I learnt more about UI/UX and web development, which really piqued my interest within this field.</p>
          <p>Therefore, I decided to learn frontend engineering by taking part in multiple courses. These include the Skills For Life Bootcamp ran by EdX and also Meta's Frontend Developer Professional Certificate on Coursera.</p>
          <p>Hopefully these help me start my career within frontend engineering !</p>
        </div>
      </div>
      <div className="row mt-5">
        <h2>Current Skill Set</h2>
        <HomeCards />
      </div>
    </div>
  );
}



export default Home;
