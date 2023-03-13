import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AnalyticVideoPlayer from "./components/analytic-video-player/analytic-video-player";

function App() {

  return (
    <div className="App">
      <AnalyticVideoPlayer />
    </div>
  );
}

export default App;
