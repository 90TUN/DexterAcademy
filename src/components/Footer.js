import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="flex-container foot">
        <div className="footer1">
            <img src="../images/footer_logo2.png" alt="" />
        </div>
        <div className="footer2 flex-container">
          <div className="footer_col">
            <h1>Programs</h1>
            <ul>
              <li><a href="/programs?program=Technology">Technology Programs</a></li>
              <li><a href="/programs?program=Leadership">Leadership Programs</a></li>
            </ul>
          </div>
          <div className="footer_col">
            <h1>About us</h1>
            <ul>
              <li>The Dexter Story</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer_col">
            <h1>Resources</h1>
            <ul>
              <li>Blog</li>
              <li>Stack</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_base">
        <div className="socials">
          <img src="../images/Facebook.png" alt="" />
          <img src="../images/Instagram.png" alt="" />
          <img src="../images/X.png" alt="" />
          <img src="../images/LinkedIn.png" alt="" />
        </div>
        <p>Privacy Policy | Terms of Use</p>
        <p>© DexterAcademy 2024.</p>
      </div>
    </footer>
  );
}

export default Footer;
