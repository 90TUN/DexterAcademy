import React from "react";
import MyForm from "./MyForm";

function Body() {
  return (
    <div>
      <div className="container-fluid second_section reverse">
        <div className="eei">
          <div className="value-box">
            <div className="value-box-child">
              <img
                src="../images/excellence.png"
                alt="Excellence Icon"
                className="value-icon"
              />
            </div>
            <div className="value-box-child">
              <h2 className="value-title">Excellence</h2>
              <p className="value-description">
                We strive for excellence in everything we do, from our courses
                to our student support services.
              </p>
            </div>
          </div>
          <div className="value-box">
            <div className="value-box-child">
              <img
                src="../images/empowerment.png"
                alt="Excellence Icon"
                className="value-icon"
              />
            </div>
            <div className="value-box-child">
              <h2 className="value-title">Empowerment</h2>
              <p className="value-description">
              We empower individuals to unleash their full potential, equipping them with the skills and confidence to lead
              </p>
            </div>
          </div>
          <div className="value-box">
            <div className="value-box-child">
              <img
                src="../images/innovation.png"
                alt="Excellence Icon"
                className="value-icon"
              />
            </div>
            <div className="value-box-child">
              <h2 className="value-title">Innovation</h2>
              <p className="value-description">
              We embrace innovation in our curriculum and teaching methods to prepare students for the future
              </p>
            </div>
          </div>
        </div>
        <div className="story">
          <h1>Our Dexter Academy Story</h1>
          <p>
            Our story is one of passion, dedication, and innovation. Since our
            founding, we have been committed to providing exceptional education
            in leadership and technology.
            <br />
            <br />
            Our journey began with a vision to empower individuals to lead and
            excel in the ever evolving world of technology.
            <br />
            <br />
            Dexter Academy emerged with a mission to empower individuals through
            tech and leadership training. Our focus is on equipping you with the
            skills and knowledge needed to excel in the ever evolving tech
            landscape and to lead with confidence in any industry. Join us on a
            transformative journey where your potential knows no bounds.
          </p>
        </div>
      </div>

      <div className="container-fluid third_section">
        <h1 className="third_section_head">Our Programs</h1>
        <div className="program_row flex-container">
          <div className="program">
            <img className="img-fluid" src="../images/program_img.png" alt="" />
          </div>
          <div className="program">
            <h1>Technology Programs</h1>
            <p>
              Our technology courses are tailored to empower individuals with
              the latest tech skills and knowledge to thrive in the digital age.
              From coding and software development to data analytics and cloud
              computing, our courses are designed to equip you with the
              expertise needed to excel in the tech industry. Whether you're a
              beginner looking to start a career in tech or a professional
              aiming to upskill, our courses are structured to meet your
              learning goals and advance your tech career
            </p>
            <button type="button" className="btn btn-lg">
            <a href="/programs?program=Technology">Learn More →</a> 
            </button>
          </div>
        </div>
        <div className="program_row flex-container reverse">
          <div className="program">
            <h1>Leadership Programs</h1>
            <p>
              Our leadership courses are designed to equip individuals with the
              skills and knowledge needed to excel in leadership roles across
              industries. From foundational principles to advanced strategies,
              our courses cover a wide range of topics to help you become a more
              effective and influential leader. Whether you're looking to
              enhance your leadership skills or prepare for a leadership role,
              our courses are tailored to meet your needs and help you achieve
              your goals.
            </p>
            <button type="button" className="btn btn-lg">
             <a href="/programs?program=Leadership">Learn More →</a> 
            </button>
          </div>
          <div className="program">
            <img className="img-fluid" src="../images/program_img.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid fourth_section">
        <div className="flex-container">
          <div className="colC">
            <img className="img-fluid" src="../images/circle-img.png" alt="" />
          </div>
          <div className="colc">
            <h1>Learn a Tech Skill.</h1>
            <h1>Learn a Life Skill.</h1>
            <h1>Build a Portfolio.</h1>
            <h1>Get Hired.</h1>
            <span className="quote">❛❛</span>
            <p>
              Embrace the journey of skill acquisition, for in each lesson
              learned and every challenge faced, you forge the path to personal
              and professional development. Skills are the building blocks of
              success, and the more you acquire, the higher you elevate the
              edifice of your potential.
            </p>
            <span className="quote quote2">❜❜</span>
          </div>
        </div>
      </div>

      <div className="container-fluid fifth_section">
        <div className="flex-container">
          <div className="colD">
            <div>
              <h1>
                Explore Endless <br /> possibilities
              </h1>
              <p>
                Join a cohort today and explore all possibilities within your
                reach
              </p>
              <button type="button" className="btn btn-success btn-lg">
                Learn More →
              </button>
            </div>
          </div>
          <div className="cold">
            <img src="../images/possible.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid sixth_section">
        <div className="flex-container a">
          <div className="colE">
            <h1>
              Sign Up and become a tech guru and get life skills with Dexter
              Academy Today
            </h1>
            <p>
              This is just a filler text for now. We will add the actual
              messaging here once we get a bit further down the road in the
              project.
            </p>
          </div>

          <div className="cole">
            <MyForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
