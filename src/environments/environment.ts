// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//import firebase from 'firebase/app'
//import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
 
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBZiRWrT5BRZpkkOta1263f0hnw04jL_us",
    authDomain: "travellers-fdc03.firebaseapp.com",
    databaseURL: "https://travellers-fdc03.firebaseio.com",
    projectId: "travellers-fdc03",
    storageBucket: "travellers-fdc03.appspot.com",
    messagingSenderId: "1008498601204",
    appId: "1:1008498601204:web:f829cf998b523acad302a1",
    apiURL: 'http://localhost:4200'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
