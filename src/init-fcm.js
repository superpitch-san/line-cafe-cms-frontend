import * as firebase from 'firebase/app';
import 'firebase/messaging';

const {
  REACT_APP_FCM_SENDER_ID,
  REACT_APP_FCM_PROJECT_ID,
  REACT_APP_FCM_API_KEY,
  REACT_APP_FCM_API_ID,
  REACT_APP_FCM_WEB_PUSH_CERT,
} = process.env;

const initializedFirebaseApp = firebase.initializeApp({
  'messagingSenderId': REACT_APP_FCM_SENDER_ID,
  'projectId': REACT_APP_FCM_PROJECT_ID,
  'apiKey': REACT_APP_FCM_API_KEY,
  'appId': REACT_APP_FCM_API_ID,
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(REACT_APP_FCM_WEB_PUSH_CERT);

export { messaging };
