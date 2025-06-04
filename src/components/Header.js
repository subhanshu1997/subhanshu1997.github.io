import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 5000, display: 'block', color: "white" }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <a href="https://github.com/subhanshu1997"  target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration: "none"}}>
              <i class="devicon-github-original" style={{fontSize: "40px"}}></i>
              </a>
              <a href="https://www.linkedin.com/in/subhanshu-bigasia-a2a640156/" target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration: "none"}}>
              <i class="devicon-linkedin-plain" style={{fontSize: "40px", marginLeft: "100px"}}></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
