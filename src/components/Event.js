import React from "react";
import Link from "react-router-dom/Link";

class Event extends React.Component {
  state = {
    activeEvent: [],
  };
  componentDidMount = async () => {
    const id = this.props.location.state.event;
    const req = await fetch(`https://api.hackthenorth.com/v3/events/`);

    const ev = await req.json();
    console.log(ev);
    this.setState({ activeEvent: ev[id - 1] });
    console.log(this.state.activeEvent);
  };
  render() {
    const event = this.state.activeEvent;
    return (
      <div className="container">
        {this.state.activeEvent.length !== 0 && (
          <div className="active-event">
            <img
              className="active-event__img"
              src={event.speakers[0].name} // fix later (profile pic)
              alt={event.name}
            />
            <h3 className="active-event__title">{event.name}</h3>
            <h4 className="active-event__publisher">
              Publisher: <span>{event.publisher}</span>
            </h4>
            <p className="active-event__website">
              Website:
              <span>
                <a href={event.public_url}>{event.public_url}</a>
              </span>
            </p>
            <button className="active-event__button">
              <Link to="/">Return to Events</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Event;
