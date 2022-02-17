import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import Events from "./components/Events";

class App extends Component {
  state = {
    events: [],
  };
  getEvent = async (e) => {
    const eventName = e.target.elements.eventName.id;
    e.preventDefault();
    const call_api = await fetch(`https://api.hackthenorth.com/v3/events/`);

    const data = await call_api.json();
    data.sort((a, b) => a.start_time - b.start_time);
    console.log(data);
    this.setState({ events: data });
    console.log(this.state.events);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Event Dashboard</h1>
        </header>
        <Form getEvent={this.getEvent} />
        <Events events={this.state.events} />
      </div>
    );
  }
}

export default App;
