// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDwmjBrtN02bzytb_vkxyB2UkAJkgSroF4",
    authDomain: "scheduleme-252.firebaseapp.com",
    databaseURL: "https://scheduleme-252.firebaseio.com",
    projectId: "scheduleme-252",
    storageBucket: "scheduleme-252.appspot.com",
    messagingSenderId: "769413769838"
  }
};
