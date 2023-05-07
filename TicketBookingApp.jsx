import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import './style.css';

// Redux Actions
const SET_SOURCE = 'SET_SOURCE';
const SET_DESTINATION = 'SET_DESTINATION';

// Redux Reducer
const initialState = {
  source: '',
  destination: '',
};
function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SOURCE:
      return { ...state, source: action.payload };
    case SET_DESTINATION:
      return { ...state, destination: action.payload };
    default:
      return state;
  }
}

// Redux Action Creators
function setSource(source) {
  return { type: SET_SOURCE, payload: source };
}

function setDestination(destination) {
  return { type: SET_DESTINATION, payload: destination };
}

// React Components
function TicketForm() {
  const dispatch = useDispatch();

  const handleSourceChange = (e) => {
    dispatch(setSource(e.target.value));
  };

  const handleDestinationChange = (e) => {
    dispatch(setDestination(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search or API call with source and destination values
    // Display results or update state accordingly
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="source">Source:</label>
      <input
        type="text"
        id="source"
        name="source"
        onChange={handleSourceChange}
      />

      <label htmlFor="destination">Destination:</label>
      <input
        type="text"
        id="destination"
        name="destination"
        onChange={handleDestinationChange}
      />
      <br />
      <button type="submit">Search</button>
    </form>
  );
}

function App() {
  const source = useSelector((state) => state.source);
  const destination = useSelector((state) => state.destination);

  return (
    <div>
      <header>
        <h1 className="center">WELCOME TO BMTC</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Book Ticket</a>
            </li>
            <li>
              <a href="#">My Bookings</a>
            </li>
            <li>
              <a href="#">Login for Admin</a>
            </li>
            <li>
              <a href="#">Login for Collector</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Ticket</h2>
        <TicketForm />
        <br />

        <div id="results">
          <p>Source: {source}</p>
          <p>Destination: {destination}</p>
          {/* Display search results here */}
        </div>
      </main>
    </div>
  );
}

// Redux Store
const store = createStore(ticketReducer);

// Wrap the App component with Redux Provider
function TicketBookingApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default TicketBookingApp;
