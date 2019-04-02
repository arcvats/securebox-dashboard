import React from "react";
import "./Modal.css";

class TimerModal extends React.Component {
  render() {
    if (!this.props.data) {
      return (
        <div
          className={`modal ${this.props.isModalActive ? "is-active" : null}`}
        >
          <div className="modal-background" />
          <div className="modal-content">
            <div className="box">Nothing to display</div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={this.props.handleModal}
          />
        </div>
      );
    }
    const time = this.props.data.time;
    const trace = this.props.data.trace.map((item, index) => (
      <p key={index}>{item}</p>
    ));
    return (
      <div className={`modal ${this.props.isModalActive ? "is-active" : null}`}>
        <div className="modal-background" />
        <div className="modal-content">
          <div className="box">
            {time}
            {trace}
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={this.props.handleModal}
        />
      </div>
    );
  }
}

export default TimerModal;
