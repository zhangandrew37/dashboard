import React from "react";

const Form = (props) => (
  <form onSubmit={props.getEvent} style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="eventName" />
    <button className="form__button">Search</button>
  </form>
);

export default Form; 
