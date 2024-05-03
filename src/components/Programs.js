import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

const ProgramCard = ({ title, buttonText, link, text, prerequisite }) => {
  return (
    <div className="program-card">
      <div className="pc-head">
        <h2>{title}</h2>
        <a href={link}>{link}</a>
      </div>

      <p>
       {text}
      </p>
      <p className="prerequisites">{prerequisite}</p>
      <button>{buttonText}</button>
    </div>
  );
};

const Programs = () => {
  const location = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const initialProgram = queryParams.get("program") || "Technology";
  const [selectedProgram, setSelectedProgram] = useState(initialProgram);

  useEffect(() => {
    const program = queryParams.get("program") || "Technology";
    setSelectedProgram(program);
  }, [queryParams]);
  

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
                title="Data Analytics Foundation 1"
                buttonText="Learn More"
                text="Our comprehensive training in the Data Analytics Foundation focuses on practical
                 application and real-world scenarios, and will equip participants
                  with the skills and knowledge necessary to excel in the field of
                   data analytics. Participants will gain proficiency 
                   in a variety of tools such as Excel, SQL, Power BI, Tableau,
                    and more.
                "
                prerequisite="*Prerequisite: Interest in data analytics."
                link="View Course Outline"
              />
              <ProgramCard
                title="Advance Data Analytics"
                buttonText="Learn More"
                text="Participants will gain further proficiency in a variety of tools and technologies commonly used in data analytics, including Python, Microsoft Fabric and more. You will learn to extract, transform and load (ETL)  data, and communicate findings effectively to stakeholders.
                "
                prerequisite="*Prerequisite: Basic knowledge of data analytics."
                link="View Course Outline"
              />
              <ProgramCard
                title="Data Science Foundation"
                buttonText="Learn More"
                text="The course offers a comprehensive introduction to the dynamic field of data science. Through hands-on training, you'll master fundamental tools such as Python, and SQL, as well as concepts like data cleaning, manipulation, and visualization. Whether you're new to data science or seeking to expand your skill set, this course provides the perfect foundation for success.
                "
                prerequisite="*Prerequisite: Interest in data science."
                link="View Course Outline"
              />
              <ProgramCard
                title="Advance Data Science"
                buttonText="Learn More"
                text="Take your data science expertise to the next level with our Advance Data Science course. Building upon foundational knowledge, participants will dive deeper into advanced techniques and technologies used in the field. From machine learning algorithms to data mining and predictive modeling, you'll gain hands-on experience with cutting-edge tools to tackle the most challenging data science projects and drive innovation in your organization.
                "
                prerequisite="*Prerequisite: Proficiency in Python and familiarity with intermediate data science concepts."
                link="View Course Outline"
              />
              <ProgramCard
                title="Product Design (UI/UX) (Coming soon)
                "
                text="From wireframing and prototyping to usability testing and design thinking, you'll learn to create compelling user experiences across web and mobile platforms. Whether you're a novice designer or seasoned professional, this course will empower you to design products that captivate and delight users.
                "
                prerequisite="*Prerequisite: Interest in design and creativity."
                buttonText="Learn More"
              />
              <ProgramCard
                title="Cybersecurity (Coming soon)"
                buttonText="Learn More"
                text="Our Cybersecurity course equips participants with essential knowledge and skills to protect digital assets and safeguard against cyber threats. You'll explore practical techniques and best practices for threat detection, risk management, and incident response in IT environments. Whether you're new to cybersecurity or looking to enhance your expertise, this course provides the critical foundation for securing systems and data in today's digital age.
                "
                prerequisite="*Prerequisite: Basic understanding of computer networks and IT concepts."
              />
            </>
          )}
          {selectedProgram === "Leadership" && (
            <>
              <ProgramCard
                title="Leadership Essentials (Coming soon)"
                text="This course covers foundational leadership principles, including communication, decision-making, conflict resolution, and motivation techniques.
                "
                buttonText="Learn More"
                
              />
              <ProgramCard
                title="Problem Solving Course (Coming soon)"
                text="This Course offers a structured approach to tackling challenges and finding effective solutions in various contexts. From identifying root causes and generating innovative ideas to implementing and evaluating solutions, you'll learn proven methodologies and techniques to overcome obstacles and achieve desired outcomes. "
                buttonText="Learn More"
               
              />
              <ProgramCard
                title="Strategic Leadership (Coming soon)"
                text="Focuses on developing strategic thinking skills, vision setting, and aligning organizational goals with actions to drive long-term success.
                "
                buttonText="Learn More"
               
              />
              <ProgramCard
                title="Leading High-Performing Teams (Coming soon)"
                text="Explores strategies for building and leading teams that are collaborative, innovative, and results-oriented. Topics may include team dynamics, delegation, and fostering a positive team culture.
                "
                buttonText="Learn More"
               
              />
              <ProgramCard
                title="Emotional Intelligence in Leadership (Coming soon)"
                text="This course delves into the role of emotional intelligence (EQ) in effective leadership, covering self-awareness, empathy, relationship management, and handling difficult situations with grace.
                "
                buttonText="Learn More"
                
              />
              <ProgramCard
                title="Change Management Leadership (Coming soon)"
                text="Equips leaders with the skills to navigate and lead through organizational change effectively. Topics include change communication, stakeholder engagement, and overcoming resistance to change.
                "
                buttonText="Learn More"
               
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
