import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i} style={{margin: "10px"}}>
              {skills.class &&
                  <span>
              <div className="text-center skills-tile" style={{width: "100%", height: "100%"}}>
                <i className={skills.class} style={{fontSize: "450%"}}>
                  <p
                      className="text-center"
                      style={{fontSize: "40%", marginTop: "4px"}}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
                  </span>
              }
              {skills.imgSrc &&
                  <span>
                  <div className="text-center skills-tile" style={{width: "100%", height: "100%"}}>
                      <img src={skills.imgSrc} style={{height: "90px", width: "90px"}}/>
                      <p
                          className="text-center"
                          style={{fontSize: "130%", marginTop: "4px", color: skills.color}}
                      >
                        {skills.name}
                      </p>
                  </div>
                      </span>
              }
          </li>
        );
      });
    }

    return (
        <section id="skills">
          <div className="col-md-12">
            <div className="col-md-12">
              <h1 className="section-title" style={{fontSize: "35px"}}>
                <span className="text-white">{sectionName}</span>
              </h1>
            </div>
            <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
