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
            <Card
              type={this.state.socketConnected ? "memory" : "nothing"}
              anomalyType={
                this.state.socketConnected ? "memoryAnomaly" : "nothing"
              }
              socketConnection={socket}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Card
              type={this.state.socketConnected ? "eventloop" : "nothing"}
              anomalyType={
                this.state.socketConnected ? "eventloopAnomaly" : "nothing"
              }
              socketConnection={socket}
            />
          </div>
          <div className="column">
            <Card
              type={this.state.socketConnected ? "gc" : "nothing"}
              anomalyType={this.state.socketConnected ? "gcAnomaly" : "nothing"}
              socketConnection={socket}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
