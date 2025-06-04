import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const taskList = work.tasks;

        var tasks = taskList.map((item, i) => {
          return (
              <li>
              {item}
              <br/>
              </li>
          );
        });
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{
                    background: "#93a1f5",
                    color: "#fff",
                    textAlign: "center"
                }}
                icon={<i className={`fab fa-${work.tech} experience-icon`}></i>}
                key={i}
            >

                <h1
                    className="vertical-timeline-element-title"
                    style={{textAlign: "left", fontSize: "30px",color: "white", backgroundColor: "#7982b9"}}
                >
                    {work.title}
                </h1>
                <h2
                    className="vertical-timeline-element-subtitle"
                    style={{textAlign: "left", fontSize: "20px", color: "white", backgroundColor: "#7982b9" }}
                >
                    {work.company}
                </h2>
                <h5
                    className="vertical-timeline-element-title"
                    style={{textAlign: "left", fontSize: "20px", color: "white", backgroundColor: "#7982b9"}}
                >
                    {work.years}
                </h5>
                <ul style={{fontSize: "20px", margin: "15px"}}>
                  {tasks}
                </ul>
            </VerticalTimelineElement>
        );
      });
    }

      return (
          <section id="resume" className="pb-5">
              <div className="col-md-12 mx-auto">
                  <div className="col-md-12">
                      <h1 className="section-title" style={{ color: "white" }}>
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
                background: "#93a1f5",
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
