// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  
  firebase: {
    apiKey: 'AIzaSyDIOpRLc3SW70VKJkgjSo9lG9Un3cBA1xY',
    authDomain: 'tourismapi.firebaseapp.com',
    databaseURL: 'https://tourismapi.firebaseio.com',
    projectId: 'tourismapi',
    storageBucket: 'tourismapi.appspot.com',
    messagingSenderId: '901312406479'
  }
  
};
