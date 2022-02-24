import React from 'react';
import { useState } from 'react';
import { skipWaiting } from 'workbox-core';
import { askServiceWorkerSkipWaiting } from './serviceWorkerRegistration.js';
// import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);

  function stopNotification(interval){
    return clearInterval(interval);
  }


  async function pushNotification() {
    let notificationCounter = 0;

    if ('Notification' in window) {
      console.log("het werkt");
      const permission = await Notification.requestPermission();

      const interval = setInterval(() => {
        notificationCounter++;
        new Notification(`yeah! (${++notificationCounter})`);
      }, 5000);
      // () => stopNotification(interval);
    } else {
      console.log("geen notification mogelijk in browser");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>VOORBEELD PWA</h1>
        <h2>versie 4</h2>
        <button onClick={askServiceWorkerSkipWaiting}>skip waiting</button>
        <h2>NOTIFICATIONS API</h2>
        <button onClick={pushNotification}>activate</button>
        <button onClick={stopNotification}>stop</button>
      </header>
    </div>
  );
}

export default App;
