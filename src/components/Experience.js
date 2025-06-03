import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2 main">
              <h3>
              {technology}
              </h3>
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-lg-4 mb-lg-3" key={i}>
                <h3>
              {technology}
                </h3>
            </Badge>
          );
        });
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{
                    background: "#AE944F",
                    color: "#fff",
                    textAlign: "center"
                }}
                icon={<i className={`fab fa-${work.tech} experience-icon`}></i>}
                key={i}
            >

                <h1
                    className="vertical-timeline-element-title"
                    style={{textAlign: "left", fontSize: "30px"}}
                >
                    {work.title}
                </h1>
                <h2
                    className="vertical-timeline-element-subtitle"
                    style={{textAlign: "left", fontSize: "20px"}}
                >
                    {work.company}
                </h2>
                <h5
                    className="vertical-timeline-element-title"
                    style={{textAlign: "left", fontSize: "20px", color: "gray"}}
                >
                    {work.years}
                </h5>
                <div style={{textAlign: "left", marginTop: "15px"}}>{tech}</div>
            </VerticalTimelineElement>
        );
      });
    }

      return (
          <section id="resume" className="pb-5">
              <div className="col-md-12 mx-auto">
                  <div className="col-md-12">
                      <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center", fontSize: "35px" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
