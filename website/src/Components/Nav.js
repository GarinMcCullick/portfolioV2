import React, { Component } from "react";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "../Styles/TabStyles.css";

const Container = styled.div`
  width: 100%;
  height: calc(0.1 * 100vh); //10% of viewheight
  background-color: RGB(87, 81, 81);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: end;
  text-align: center;
`;

const BodyContainer = styled.div`
  width: auto;
  height: auto;
`;

class NavBar extends Component {
  state = {
    showHome: true,
    showContact: false,
    showPortfolio: false,
    showAbout: false,
  };

  handleHomeClick = () => {
    this.setState({
      showHome: true,
      showPortfolio: false,
      showContact: false,
      showAbout: false,
    });
  };

  handleContactClick = () => {
    this.setState({
      showContact: true,
      showHome: false,
      showPortfolio: false,
      showAbout: false,
    });
  };

  handlePortfolioClick = () => {
    this.setState({
      showPortfolio: true,
      showHome: false,
      showContact: false,
      showAbout: false,
    });
  };

  handleAboutClick = () => {
    this.setState({
      showPortfolio: false,
      showHome: false,
      showContact: false,
      showAbout: true,
    });
  };

  render() {
    let display;
    if (this.state.showContact === true) {
      display = <Contact />;
    } else if (this.state.showHome === true) {
      display = <Home />;
    } else if (this.state.showPortfolio === true) {
      display = <Portfolio />;
    } else if (this.state.showAbout === true) {
      display = <About />;
    }

    return (
      <>
        <Container>
          <div
            onClick={this.handleHomeClick}
            className={
              this.state.showHome ? "ActiveTabStyle" : "DefaultTabStyle"
            }
          >
            <h2>Home</h2>
          </div>
          <div
            onClick={this.handleAboutClick}
            className={
              this.state.showAbout ? "ActiveTabStyle" : "DefaultTabStyle"
            }
          >
            <h2>About</h2>
          </div>
          <div
            onClick={this.handlePortfolioClick}
            className={
              this.state.showPortfolio ? "ActiveTabStyle" : "DefaultTabStyle"
            }
          >
            <h2>Portfolio</h2>
          </div>
          <div
            onClick={this.handleContactClick}
            className={
              this.state.showContact ? "ActiveTabStyle" : "DefaultTabStyle"
            }
          >
            <h2>Contact</h2>
          </div>
        </Container>
        <BodyContainer>{display}</BodyContainer>
      </>
    );
  }
}

export default NavBar;
