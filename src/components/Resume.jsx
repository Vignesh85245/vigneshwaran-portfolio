import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Resume = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Resume</p>
        <h2 className={styles.sectionHeadText}>Download CV.</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Here is my updated resume with my experience as a SOC Analyst, hands-on
        work with Splunk / QRadar, log analysis, incident response, and threat
        detection. You can download it using the button below.
      </p>

      <div className="mt-10">
        <a
             href="https://raw.githubusercontent.com/Vignesh85245/vigneshwaran-portfolio/main/Vigneshwaran%20M%20resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center px-8 py-3 rounded-xl text-white font-medium
             bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition-all duration-200 shadow-lg"
             download
>
          Download Resume
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
