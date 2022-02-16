import react from "react";
import React from "react";

const Events = (props) => (
  <div className="container">
    <div className="row">
      {props.events.map((event) => {
        return (
          <div
            key={event.id}
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="events__box">
              <img
                className="event__box-img"
                src={event.speakers.profile_pic}
                alt={event.speakers.name}
              />
              <div className="event_text">
                <h5 className="events__title">{event.name}</h5>
                <p className="events__subtitle">
                  Placeholder:
                  <span>{event.description}</span>
                </p>
              </div>
              <button className="event__button">Public Link: </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Events;
