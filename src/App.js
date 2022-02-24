import React from 'react';
import { askServiceWorkerSkipWaiting } from './serviceWorkerRegistration.js';
// import './App.css';

function App() {
  let notificationCounter = 0;
  let interval;

  // setInterval(() => {
  //   console.log("geraakt hij hier?");
  //   notificationCounter++;
  //   new Notification(`yeah! (${++notificationCounter})`);
  // }, 5000);

  async function startPushNotification() {
    const permission = await Notification.requestPermission();

    if ('Notification' in window) {
      console.log("het werkt");
      interval = setInterval(() => {
        console.log("geraakt hij hier?");
        notificationCounter++;
        new Notification(`yeah! (${++notificationCounter})`);
      }, 5000);
    } else {
      console.log("geen notification mogelijk in browser");
    }
  }

  function stopPushNotifications() {
    clearInterval(interval);
    console.log("push berichten zijn gestopt")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>VOORBEELD PWA</h1>
        <h2>versie 4</h2>
        <button onClick={askServiceWorkerSkipWaiting}>skip waiting</button>
        <h2>NOTIFICATIONS API</h2>
        <button onClick={startPushNotification}>activate</button>
        <button onClick={stopPushNotifications}>stop</button>
      </header>
    </div>
  );
}

export default App;
