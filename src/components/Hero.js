import React from "react";

function Hero() {
  return (
    <div className="container-fluid hero">
      <div className="flex-container container-fluid">
        <div className="hero_section">
          <h1 className="display-4">
            Pivot into <span className="hero_txt">Tech</span> and Tap into the{" "}
            <span className="hero_txt">Future</span> of the World
          </h1>
          <p className="lead">
            At Dexter Academy, we’re not just embracing the future - we’re
            shaping it, from cutting-edge tech courses to transformative
            leadership programs. We equip you to thrive in today’s dynamic
            world. Join us and unlock your potential in a world of endless
            possibilities.
          </p>
          <button type="button" className="btn btn-success btn-lg">
            Start Learning →
          </button>
        </div>
        <div className="hero_section">
          <img src="../images/landing_img.png" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
