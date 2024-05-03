import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function FAQ() {
  return (
    <div>
      <Header />
      <div className="faq-body">
        <h1 className="item1">Frequently Asked Questions</h1>
        <p className="item2">
          Here are some common questions and their answers.
        </p>

        <div class="accordion" id="accordionExample">
          <div class="accordion-item item3 mb-3">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                What course is right for me? 
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              Determining the right course for you depends on several factors,
               including your current role, career goals, areas of interest,
                and developmental needs. Ultimately, the right course for you 
                will provide the knowledge, skills, and tools you need to excel
                 in your current role and move closer to your long-term career 
                 objectives. It may also be helpful to discuss your options with
                  us or a mentor who can provide guidance based on their own 
                  experiences and insights.

              </div>
            </div>
          </div>
          <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Must I be a Nigerian to apply and What is the duration of the program?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              Anyone around the World can take any of our programs. Our programs run from 1 - 4 Months.

              </div>
            </div>
          </div>
          <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What payment options are available? 
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              Full and Installments payments are welcome. You can pay via Bank transfer, or Card though Paystack and Stelar. We are also working on other payment options which will be integrated into our site as they become available.
              </div>
            </div>
          </div>
          <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Are the classes physical or virtual? Will there be Certificates?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              We have instructor-led virtual and physical classes available for most of our courses.
              We have weekday and weekend classes. The programs are live instructor-led courses. However, all sessions are recorded and will be shared with participants at the end of each class day. 
              Successful participants will receive a certificate of completion.

              </div>
            </div>
          </div>
          <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Does Dexter Academy get internship opportunities to help their learners gain real life experience? 
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              All our Tech courses come with an internship, where participants get to work on several projects to arm them with industrial experiences. Our facilitators and team members are reachable to guide you as you navigate necessary challenges even after your program with us.
              </div>
            </div>
          </div>
          <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
               How much does it cost to take a course? 
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              This varies with the course. Please review our offerings, make choices and contact us for the fees.
               In addition, we constantly scholarships and promotions you can take advantage of. 
               Please follow us on our social media pages to be the first to hear about them.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
