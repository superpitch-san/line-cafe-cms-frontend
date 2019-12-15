importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js');

firebase.initializeApp({ 'messagingSenderId': '983931922005' }); // hardcode because JS in public folder path is outside server/service .

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  const promiseChain = clients
    .matchAll({
      'type': 'window',
      'includeUncontrolled': true,
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => registration.showNotification('New order incomming'));
  return promiseChain;
});

self.addEventListener('notificationclick', (e) => {
  
});
