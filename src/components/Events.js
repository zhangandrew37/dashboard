import react from "react";
import React from "react";

import { Link } from "react-router-dom";

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
              <div className="event__text">
                <h5 className="events__title">{event.name}</h5>
                <p className="events__subtitle">
                  Description:
                  <span>
                    {event.description.length < 130
                      ? `${event.description}`
                      : `${event.description.substring(0, 130)}...`}
                  </span>
                </p>
              </div>
              <button className="event__buttons">
                <Link
                  to={{
                    pathname: `/event/${event.id}`,
                    state: { event: event.id },
                  }}
                >
                  View Event
                </Link>
              </button>
              {/* implement functionality to display all events with same type upon clicking button if time allows */}
              <button className="tag__buttons">{event.event_type}</button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Events;
