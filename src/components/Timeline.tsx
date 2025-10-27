import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Timeline</h1>
        <VerticalTimeline>

          {/* 🎓 Education - Master's */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2024 – Dec 2025"
            iconStyle={{ background: '#e50914', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              The University of Texas at Dallas
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              M.S. in Computer Science (Data Science Track)
            </h4>
            <p>
              GPA: 3.5 &nbsp;
            </p>
            <p>
              Coursework: Artificial Intelligence, Database Design, Machine Learning, NLP, Big Data
            </p>
          </VerticalTimelineElement>

          {/* 🎓 Education - Bachelor's */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2020 – May 2024"
            iconStyle={{ background: '#e50914', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              The University of Texas at Dallas
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              B.S. in Computer Science (Data Science Certificate)
            </h4>
            <p>
              GPA: 3.7 &nbsp; • &nbsp; Recipient of Jonsson School Academic Success Scholarship (2020)
            </p>
            <p>
              Coursework: Artificial Intelligence, Operating Systems, Machine Learning, Intro to Data Analysis, Computer Architecture, 
              Data Structures & Algorithms, Advanced Algorithm Design, Systems Programming (UNIX), Programming Language Paradigms.
            </p>
          </VerticalTimelineElement>

          {/* 💼 Experience - Sabre */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="May 2024 – Aug 2024"
            iconStyle={{ background: '#e50914', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Sabre · Southlake, TX</h4>
            <p>
              Managed and maintained airline database collections in MS Server — updated and deleted 700+ forms based on client needs.
              Contributed to migration from AWS to Google Cloud using K2 workflows.  
              Conducted unit and security testing, improving overall software reliability.  
              Supported workflow management through Sabre ServiceNow (SNOW).
            </p>
          </VerticalTimelineElement>

          {/* 💼 Experience - Spicyfy */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="May 2023 – Aug 2023"
            iconStyle={{ background: '#e50914', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Artificial Intelligence Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Spicyfy · Dallas, TX</h4>
            <p>
              Developed a <strong>Google-approved Gmail plugin</strong> integrating Akshara API to rephrase text in 15 tones, 
              built with JavaScript, Node.js, and Firebase.  
              Designed and trained stock prediction models using Python with Linear Regression, SVM, Neural Networks, and Random Forests.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
