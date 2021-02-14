// //TODO: Keeping TypeScript out of it for now, the task is to simply reference the npm package 'query-selector-shadow-dom' 'https://www.npmjs.com/package/query-selector-shadow-dom'
// // and use 'querySelectorDeep' to locate nested shadow dom element on chorme://downloads
// // run "npm test" to see a running test and this one failing
// // >>>>>>>>>>>>>>>>>Get this :(
// // Error: D:\github\wdio-shadow\node_modules\query-selector-shadow-dom\src\querySelectorDeep.js:6
// // import { normalizeSelector } from './normalize';
// // ^^^^^^

// const querySelectorDeep = require('query-selector-shadow-dom');

// describe("Chrome downloads", () => {
//   it("shadow dom element can be located", () => {

//     browser.url("chrome://downloads/");
//     browser.maximizeWindow();
//     browser.pause(3000);  

//     const moreActions = querySelectorDeep('#moreActions');
//     console.log(moreActions);
//     moreActions.click();

//     browser.pause(3000);

//     const span =  querySelectorDeep('.dropdown-item:not([hidden])');
//     const text = span.getText();
//     // prints `Open downloads folder`
//     console.log(text);

//     browser.deleteSession();
//   });
// });
