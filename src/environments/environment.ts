// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  REG_URL: 'http://localhost:8000/accounts/login/',
  SIGN_URL: 'http://localhost:8000/accounts/registration/',
  API_TOKEN: 'http://localhost:8000/api/token/',
  PROF_URL: 'http://localhost:8000/accounts/profile',
  DEV_URL: 'http://localhost:8000/accounts/profile/1',
  API_URL: 'http://localhost:8000/api',
  TASKS_URL:' http://127.0.0.1:8000/api/tasks/',
  ACCOUNTS_URL : 'http://localhost:8000/accounts',
  MEDICALHUB: 'http://127.0.0.1:8000/api/explorer/',
  COMMENT_URL: 'http://127.0.0.1:8000/api/comment/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
