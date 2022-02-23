import React from 'react';
import { skipWaiting } from 'workbox-core';
import { askServiceWorkerSkipWaiting } from './serviceWorkerRegistration.js';
// import './App.css';

async function pushNotification() {
  if ('Notification' in window) {
    console.log("het werkt");
    const permission = await Notification.requestPermission();
    console.log(permission.toString());
  } else {
    console.log("geen notification mogelijk in browser");
  }
}

function App() {
  let notificationCounter = 0;
  new Notification(`yeah! (${++notificationCounter})`);

  return (
    <div className="App">
      <header className="App-header">
        <h1>VOORBEELD PWA</h1>
        <h2>versie 4</h2>
        <button onClick={askServiceWorkerSkipWaiting}>skip waiting</button>
        <h2>NOTIFICATIONS API</h2>
        <button onClick={pushNotification}>activate</button>
        <button>stop</button>
      </header>
    </div>
  );
}

export default App;
