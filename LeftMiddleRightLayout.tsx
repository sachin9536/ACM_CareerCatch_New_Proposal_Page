import React from "react";
import { Link } from "react-router-dom";

import { useSpring, animated } from "react-spring";

const LeftMiddleRightLayout = () => {
  const containerProps = useSpring({
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  return (
    <>
      {" "}
      <div className="contain-grid">
        <animated.div style={containerProps} className="layout-container">
          <h2 className="left-content">Description</h2>
          <div />
          <div className="right-content">
            <p>
              Aim/Problem statement: The aim of this project is to create a
              responsive website that displays available job postings for users
              based on their choice of company, job role,location,industry, etc.
              The search for available jobs will be done using Web Scraping. The
              user can also upload their own resume which will be parsed using
              the in-website Resume Parser that we have provided which will be
              further fed into a ML model (MindsDB or In-House) which will
              recommend the most suitable Job Role. Inspiration: Online Job
              Portals are gaining popularity in recent years. For example,
              LinkedIn, Indeed, etc. Our motive is to provide consolidated
              results for available job postings on these portals for users to
              make the process of finding jobs easier for them. There isn't a
              personalized one-stop solution for all the problems that an
              applicant faces. Hence our motivation to develop this Website.
              Present situation/Background info such as work done on this
              problem statement previously/already existing solution/already
              existing applications/Existing reports: There are certain popular
              job hunting portals such as Indeed, LinkedIn, etc. However there
              aren't any prevalent aggregator sites that accumulate relevant
              information from all the mentioned sites. Also none of them check
              the applicants compatibility with the job role or auto-suggest
              personalized relevant job roles based on their own resume. Hence
              we aim to build a dedicated search portal to meet this need.
            </p>
          </div>
        </animated.div>
        <animated.div style={containerProps} className="layout-container">
          <h2 className="left-content">Method</h2>
          <div />
          <div className="right-content">
            <p>
              1. Make a resume parser that parses the skills of the applicant.
              <br></br>
              2.Using parsed data from the resume we will use MindsDB
              recommender systems or build our own model using available Kaggle
              dataset to recommend suitable job roles for the user.
              <br></br>
              3. Make a web-scraper that scrapes job portals to gather data on
              relevant available job postings which are suitable for the
              candidate according to the job recommender system with the help of
              parsed data from resume.
              <br></br>4. Use the user’s entered fields to fetch all available
              and suitable job postings(from the scraped data).
              <br></br>5. Make a front-end for the user to enter what kind of
              job roles they are looking for as well as other scraped parameters
              such as location, industry, etc.
              <br></br> 6. Display the results dynamically on the website.
            </p>
          </div>
        </animated.div>
        <animated.div style={containerProps} className="layout-container">
          <h2 className="left-content">Learning Outcomes</h2>
          <div />
          <div className="right-content">
            <p>
              1. Web Scraping
              <br />
              2. Recommender Systems
              <br /> 3. Front-end basics- HTML, CSS, JavaScript, TailwindCSS
              <br />
              4.ReactJS
              <br />
              5. Back-end using NodeJS and Express
              <br /> 6. MongoDB + MindsDB
              <br />
              7. JWT and other important functionalities in a website
            </p>
          </div>
        </animated.div>
        <animated.div style={containerProps} className="layout-container">
          <h2 className="left-content">References</h2>
          <div />
          <div className="right-content">
            <p>
              1.{" "}
              <a href="https://www.w3schools.com/html/">w3schools.com/html</a>
              <br></br>2.
              <a href="https://www.w3schools.com/w3css/defaulT.asp">
                w3schools.com/w3css
              </a>
              <br></br> 3.
              <a href="https://www.w3schools.com/js/">w3schools.com/js</a>
              <br></br>4.<a href="https://react.dev/">react.dev</a>
              <br></br>5.
              <a href="https://www.scraperapi.com/blog/how-to-build-a-linkedin-scraper/">
                scraperapi.com/blog/how-to-build-a-linkedin-scraper
              </a>
              <br></br>6.
              <a href="https://www.analyticsvidhya.com/blog/2022/05/scraping-jobs-on-linkedin-using-scrapy/">
                analyticsvidhya.com/blog/2022/05/scraping-jobs-on-linkedin-using-scrapy
              </a>
              <br></br>
              7.
              <a href="https://mozilla.github.io/pdf.js/">
                mozilla.github.io/pdf.js
              </a>
              <br></br>8.<a href="https://mindsdb.com/">mindsdb.com</a>
              <br></br>
              9.
              <a href="https://www.npmjs.com/package/cheerio">
                npmjs.com/package/cheerio
              </a>
              <br></br>
              10.
              <a href="https://www.freecodecamp.org/learn/front-end-libraries/react/">
                freecodecamp.org/learn/front-end-libraries/react/
              </a>
              <br></br>
            </p>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default LeftMiddleRightLayout;
