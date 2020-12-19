import React from "react";


import './App.css';

// components

// Navbar
import MyNavbar from "./components/my-navbar/mynavbar.component";

//Carousal
import MyCarousal from "./components/my-carousal/mycarousal.component";

//Title Message
import MyTitleMessage from "./components/title-message/title-message.component";


const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousal />
      <MyTitleMessage />
    </div>
  );
}

export default App;
