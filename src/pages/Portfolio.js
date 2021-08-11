import React from "react";
import Project from "../components/projects/Project";

const Portfolio = () => {
    return (
      <div className="portfolioContainer">
      <main className="container">
        <div className="row">
          <section className="col-md-9">
            <div>
              <h1 className="display-4">Portfolio</h1>
            </div>
            <div className="content">
              <div className="row">
                <Project
                  screenshot={"/img/reddit.png"}
                  altText={"Reddit Effect App"}
                  link={"https://jkouneski.github.io/Reddit-Effect/"}
                  github={"https://github.com/jkouneski/Reddit-Effect/"}
                />
                <Project
                  screenshot={"/img/dayScheduler.png"}
                  altText={"Workday Scheduler App"}
                  link={"https://jkouneski.github.io/workday-scheduler/"}
                  github={"https://github.com/jkouneski/workday-scheduler/"}
                />
              </div>
              <div className="row">
                <Project
                  screenshot={"/img/noteTaker.png"}
                  altText={"Note Taker App"}
                  link={"https://fathomless-sea-57876.herokuapp.com/"}
                  github={"https://github.com/jkouneski/NoteTaker/"}
                />
                <Project
                  screenshot={"/img/pwGen.png"}
                  altText={"Password Generator App"}
                  link={"https://jkouneski.github.io/PasswordGenerator/"}
                  github={"https://github.com/jkouneski/PasswordGenerator"}
                />
              </div>
              <div className="row">
                <Project
                  screenshot={"/img/quiz.png"}
                  altText={"Quiz App"}
                  link={"https://jkouneski.github.io/Code-Quiz/"}
                  github={"https://github.com/jkouneski/Code-Quiz"}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <br></br>
    </div>
  );
};

export default Portfolio;

