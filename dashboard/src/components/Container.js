import React from "react";
import Dashboard from "./Dashboard";

class Container extends React.Component {
  state = { isMobile: false };
  render() {
    return (
      <main className="wrapper">
        <header className="navbar is-fixed-top is-link">
          <div className="container">
            <div
              className={`navbar-brand ${
                this.state.isMobile ? "is-acive" : null
              }`}
            >
              <a href="/" className="navbar-item">
                Securebox
              </a>
              <span className="navbar-burger burger">
                <span />
                <span />
                <span />
              </span>
            </div>
          </div>
          <div
            className={`navbar-menu ${this.state.isMobile ? null : "is-acive"}`}
          >
            <div className="navbar-end">
              <a href="/" className="navbar-item">
                Dashboard
              </a>
              <a href="/settings" className="navbar-item">
                Settings
              </a>
              <a href="/about" className="navbar-item">
                About
              </a>
            </div>
          </div>
        </header>
        <section className="section dashboard">
          <Dashboard />
        </section>
      </main>
    );
  }
}

export default Container;
