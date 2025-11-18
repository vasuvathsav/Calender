import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Calendar from "./Calender";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
     <div
      style={{
        display: "flex",
        marginTop: "10rem",
        gap: "20px"             
      }}
    >
      <Calendar date={new Date(2020, 2, 23)} />
      <Calendar date={new Date(2022, 9, 3)} />
    </div>
  </React.StrictMode>
);


