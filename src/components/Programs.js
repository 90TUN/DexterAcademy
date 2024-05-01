import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";

const ProgramCard = ({ title, buttonText, link }) => {
  return (
    <div className="program-card">
      <div className="pc-head">
        <h2>{title}</h2>
        <a href={link}>Link</a>
      </div>

      <p>
        This is just a filler text for now. We will add the actual messaging
        here once we get a bit further down the road in the project.
      </p>
      <button>{buttonText}</button>
    </div>
  );
};

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState("Technology");

  return (
    <div>
      <Header />
      <div className="programs-section">
        <div className="program-type flex-container">
          <div
            className={`type1${
              selectedProgram === "Technology" ? " active" : ""
            }`}
          >
            <button className="program_section_head" onClick={() => setSelectedProgram("Technology")}>
              Technology Programs
            </button>
          </div>
          <div
            className={`type2${
              selectedProgram === "Leadership" ? " active" : ""
            }`}
          >
            <button className="program_section_head" onClick={() => setSelectedProgram("Leadership")}>
              Leadership Programs
            </button>
          </div>
        </div>

        <div className="program-cards">
          {selectedProgram === "Technology" && (
            <>
              <ProgramCard
                title="Technology Program 1"
                buttonText="Learn More"
                link="View Course Outline"
              />
              <ProgramCard
                title="Technology Program 2"
                buttonText="Learn More"
                link="View Course Outline"
              />
              <ProgramCard
                title="Technology Program 3"
                buttonText="Learn More"
                link="View Course Outline"
              />
              <ProgramCard
                title="Technology Program 4"
                buttonText="Learn More"
                link="View Course Outline"
              />
              <ProgramCard
                title="Technology Program 5"
                buttonText="Learn More"
                link="View Course Outline"
              />
              <ProgramCard
                title="Technology Program 6"
                buttonText="Learn More"
                link="View Course Outline"
              />
            </>
          )}
          {selectedProgram === "Leadership" && (
            <>
              <ProgramCard
                title="Leadership Program 1"
                buttonText="Learn More"
                link="View Course Outline"
              />
              <ProgramCard
                title="Leadership Program 2"
                buttonText="Learn More"
                link="View Course Outline"
              />
              <ProgramCard
                title="Leadership Program 3"
                buttonText="Learn More"
                link="View Course Outline"
              />
              <ProgramCard
                title="Leadership Program 4"
                buttonText="Learn More"
                link="View Course Outline"
              />
              <ProgramCard
                title="Leadership Program 5"
                buttonText="Learn More"
                link="View Course Outline"
              />
              <ProgramCard
                title="Leadership Program 6"
                buttonText="Learn More"
                link="View Course Outline"
              />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Programs;
