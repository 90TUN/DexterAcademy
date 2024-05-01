import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="flex-container foot">
        <div className="footer1">
          <h1>Dexter Academy</h1>
          <div className="footer_text">
            <img src="../images/footer_logo.png" alt="" />
            <p>
              This is just a filler text for now. We will add the actual
              messaging here once we get a bit further down the road in the
              project.
            </p>
          </div>
        </div>
        <div className="footer2 flex-container">
          <div className="footer_col">
            <h1>Programs</h1>
            <ul>
              <li>Technology Programs</li>
              <li>Leadership Programs</li>
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
