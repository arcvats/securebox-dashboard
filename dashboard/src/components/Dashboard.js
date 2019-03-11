import React from "react";
import Card from "./Card";
import axios from "axios";
import io from "socket.io-client";

const socket = io.connect("http://localhost:9000");

class Dashboard extends React.Component {
  state = { socketConnected: false };
  componentDidMount() {
    socket.on("connect", () => {
      this.setState({ socketConnected: true });
    });
    socket.on("disconnect", () => {
      this.setState({ socketConnected: false });
    });
    // socket.on("cpu", data => {
    //   console.log(data);
    // });
  }
  render() {
    return (
      <div className="section cards-container">
        <div className="columns">
          <div className="column">
            <Card
              type={this.state.socketConnected ? "cpu" : "nothing"}
              anomalyType={
                this.state.socketConnected ? "cpuAnomaly" : "nothing"
              }
              socketConnection={socket}
            />
          </div>
          <div className="column">
            <Card />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
