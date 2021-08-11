import React from "react";


const About = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
            <h2 className="display-4">About Me</h2>
            <img className="rounded" src="/img/headshot.jpeg" alt="my face" height="150px"/>
            <hr className="my-4"></hr>
            <p className="lead">Hello and welcome to my portfolio page! My name is Joseph Kouneski and I am currently enrolled in a 24-week coding bootcamp at Johns Hopkins University.</p>
            <p className="lead">I have been working in the commercial finance space over five years, four of which have been spent in corporate syndicated lending operations at Morgan Stanley. Having worked in a wide range of roles within the financial space, I used many different tools and found myself with a growing interest in how the software was developed.</p>
            <p className="lead">My hobbies include skydiving, snowbarding, video games, and houseplants.</p>
            </div>
        </div>
        
    );
};

export default About;