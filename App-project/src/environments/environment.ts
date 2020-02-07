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
    apiKey: "AIzaSyBVXdXipGjEd-NINucUo00Ghn8kPcuhPpo",
    authDomain: "app-project-82053.firebaseapp.com",
    databaseURL: "https://app-project-82053.firebaseio.com",
    projectId: "app-project-82053",
    storageBucket: "app-project-82053.appspot.com",
    messagingSenderId: "1025702612942",
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
